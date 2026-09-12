import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"
import { CORS_HEADERS } from "../../../../../lib/cors"

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

type TPatchVideo = {
    profileId: string
    reactionType: 'LIKE' | 'DISLIKE'
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ videoId: string }> }
) {
    try {

        const { videoId } = await params
        const { profileId, reactionType } = await req.json() as TPatchVideo

        if (!videoId) return NextResponse.json(
            { error: 'videoId не передано' },
            { status: 404, headers: CORS_HEADERS }
        )

        if (!profileId) {
            return NextResponse.json(
                { error: 'profileId обязателен' },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        if (!reactionType) {
            return NextResponse.json(
                { error: 'reactionType обязателен' },
                { status: 400, headers: CORS_HEADERS }
            );
        }

        const video = await prisma.video.findFirst({
            where: {
                videoId
            }
        })

        if (!video) return NextResponse.json(
            { error: `video с таким videoId: ${videoId} нет` },
            { status: 404, headers: CORS_HEADERS }
        )

        const profile = await prisma.profile.findFirst({
            where: {
                profileId
            }
        })

        if (!profile) return NextResponse.json(
            { error: `Профиля с таким profileId: ${profileId} не нашлось` },
            { status: 404, headers: CORS_HEADERS }
        )

        const reaction = await prisma.reaction.findUnique({
            where: {
                profileId_videoId: {
                    profileId,
                    videoId
                }
            }
        })

        let action: 'created' | 'updated' | 'removed'

        if (reaction) {
            if (reaction.reactionType === reactionType) {
                await prisma.reaction.delete({
                    where: {
                        profileId_videoId: {
                            profileId,
                            videoId
                        }
                    }
                })

                action = 'removed'
            } else {
                await prisma.reaction.update({
                    where: {
                        profileId_videoId: {
                            profileId,
                            videoId
                        }
                    },
                    data: { reactionType }
                })

                action = 'updated'
            }
        } else {
            await prisma.reaction.create({
                data: {
                    reactionType,
                    profileId,
                    videoId
                }
            })

            action = 'created'
        }

        const [likes, disLikes] = await Promise.all([
            prisma.reaction.count({
                where: {
                    videoId,
                    reactionType: 'LIKE'
                }
            }),
            prisma.reaction.count({
                where: {
                    videoId,
                    reactionType: 'DISLIKE'
                }
            })
        ])

        return NextResponse.json({
            action,
            likes,
            disLikes,
            userReaction: action === 'removed' ? null : reactionType
        }, {
            headers: CORS_HEADERS,
        })

    } catch (error) {
        console.error('Ошибка PATCH /reaction::', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}