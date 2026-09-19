import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { CORS_HEADERS } from "../../../../../lib/cors";
import { Notifications } from "../../../../../generated/prisma/enums";

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

        const [channel, profile] = await Promise.all([
            prisma.channel.findUnique({
                where: { channelId },
                select: { channelId: true, ownerId: true }
            }),
            prisma.profile.findUnique({
                where: { profileId },
                select: { profileId: true }
            })
        ])

        if (!channel) return NextResponse.json(
            { error: `channel не найден. channelId: ${channelId}` },
            { status: 404, headers: CORS_HEADERS }
        )

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
            },
            select: {
                subscriptionId: true,
            }
        })

        let subscriptionId: string | null = null
        let notification: Notifications | null = null

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
            const [created] = await prisma.$transaction([
                prisma.subscription.create({
                    data: { profileId, channelId, notification: Notifications.ALL },
                    select: { subscriptionId: true, notification: true }
                }),
                prisma.channel.update({
                    where: { channelId },
                    data: { subscribers: { increment: 1 } }
                })
            ])

            subscriptionId = created.subscriptionId
            notification = created.notification
        }

        return NextResponse.json({
            isSubscribed: !subscription,
            subscribers: await prisma.subscription.count({ where: { channelId } }),

            subscriptionId: subscriptionId,
            notification: notification
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