import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"
import { CORS_HEADERS } from "../../../../lib/cors"

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ videoId: string }> }
) {
    try {
        const { videoId } = await params
        const profileId = req.nextUrl.searchParams.get('profileId')

        if (!videoId || videoId.trim() === '') return NextResponse.json(
            { error: 'VideoId not found' },
            { status: 404, headers: CORS_HEADERS }
        )

        if (!profileId || profileId.trim() === '') return NextResponse.json(
            { error: 'profileId not found' },
            { status: 404, headers: CORS_HEADERS }
        )

        const [video, likes, disLikes, reaction] = await Promise.all([
            prisma.video.findUnique({
                where: { videoId },
                include: {
                    creator: {
                        select: {
                            channelId: true,
                            subscribers: true,
                            channelName: true,
                            description: true,
                            logo: true,
                            userName: true,
                            createdAt: true,
                            subscriptions: {
                                where: { profileId },
                                select: {
                                    notifications: true,
                                    profile: {
                                        select: {
                                            profileName: true,
                                        }
                                    }
                                }
                            }
                        },
                    },
                    comments: {
                        select: {
                            commentId: true,
                            text: true,
                            createdAt: true,
                            writer: {
                                select: {
                                    avatar: true,
                                    profileName: true,
                                    profileId: true,
                                }
                            }
                        }
                    },
                }
            }),
            prisma.reaction.count({
                where: { videoId, reactionType: 'LIKE' }
            }),
            prisma.reaction.count({
                where: { videoId, reactionType: 'DISLIKE' }
            }),
            prisma.reaction.findUnique({
                where: {
                    profileId_videoId: { profileId, videoId }
                },
                select: { reactionType: true }
            })
        ])

        if (!video) {
            return NextResponse.json(
                { error: "Video not found" },
                { status: 404, headers: CORS_HEADERS }
            )
        }

        const { subscriptions, ...createrData } = video.creator

        const baseRespons = {
            ...video,

            likes,
            disLikes,
            reaction: reaction?.reactionType ?? null
        }

        if (subscriptions.length > 0) return NextResponse.json({
            ...baseRespons,

            isSubscription: !!subscriptions[0],
            notifications: subscriptions[0].notifications
        }, {
            headers: CORS_HEADERS,
        })

        return NextResponse.json({
            ...baseRespons,

            isSubscription: false,
            notifications: null,
        }, {
            headers: CORS_HEADERS,
        })
    } catch (error) {
        console.error("❌ Error:", error)

        return NextResponse.json(
            { error: String(error) },
            { status: 500, headers: CORS_HEADERS, }
        )
    }
}