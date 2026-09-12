import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { CORS_HEADERS } from "../../../../../lib/cors";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ channelId: string }> }
) {
    try {

        const profileId = req.nextUrl.searchParams.get('profileId')
        const { channelId } = await params

        if (!profileId || profileId.trim() === '') return NextResponse.json(
            { error: `profileId: ${profileId} не передан` },
            { status: 400, headers: CORS_HEADERS }
        )

        if (!channelId || channelId.trim() === '') return NextResponse.json(
            { error: `channelId: ${channelId} не передан` },
            { status: 400, headers: CORS_HEADERS }
        )

        const channel = await prisma.channel.findUnique({
            where: {
                channelId
            }
        })

        if (!channel) return NextResponse.json(
            { error: `channel не найден. channelId: ${channelId}` },
            { status: 404, headers: CORS_HEADERS }
        )

        const profile = await prisma.profile.findUnique({
            where: {
                profileId
            }
        })

        if (!profile) return NextResponse.json(
            { error: `profile не найден. profileId: ${profileId}` },
            { status: 404, headers: CORS_HEADERS }
        )

        if (channel.ownerId === profileId) return NextResponse.json(
            { error: `Нельзя подписаться на свой канал. profileId: ${profileId}` },
            { status: 400, headers: CORS_HEADERS }
        )

        const subscription = await prisma.subscription.findUnique({
            where: {
                profileId_channelId: {
                    profileId,
                    channelId
                }
            }
        })

        if (subscription) {
            await prisma.$transaction([
                prisma.subscription.delete({
                    where: {
                        profileId_channelId: { profileId, channelId }
                    }
                }),
                prisma.channel.update({
                    where: { channelId },
                    data: { subscribers: { decrement: 1 } }
                })
            ])
        } else {
            await prisma.$transaction([
                prisma.subscription.create({
                    data: { profileId, channelId }
                }),
                prisma.channel.update({
                    where: { channelId },
                    data: { subscribers: { increment: 1 } }
                })
            ])
        }

        const subscribers = await prisma.subscription.count({
            where: { channelId }
        })

        const isSubscribed = !subscription

        return NextResponse.json({
            isSubscribed,
            subscribers,
            notifications: isSubscribed ? 'ALL' : null
        }, {
            headers: CORS_HEADERS
        })

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}