import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
}

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

        if (!videoId || videoId.trim() === '') return NextResponse.json(
            { error: 'VideoId not found' },
            { status: 404, headers: CORS_HEADERS }
        )

        const video = await prisma.video.findUnique({
            where: { videoId },
            include: {
                creator: {
                    select: {
                        avatar: true,
                        profileName: true,
                        profileId: true,
                        subscribers: true,
                        createdAt: true
                    }
                },
                comments: {
                    select: {
                        dislikes: true,
                        commentId: true,
                        likes: true,
                        text: true,
                        createdAt: true,
                        writer: {
                            select: {
                                avatar: true,
                                profileName: true,
                                profileId: true
                            }
                        }
                    }
                }
            }
        })

        if (!video) {
            return NextResponse.json(
                { error: "Video not found" },
                { status: 404, headers: CORS_HEADERS }
            )
        }

        return NextResponse.json(video, {
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