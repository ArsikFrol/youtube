import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { CORS_HEADERS } from "../../../lib/cors";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

export async function GET(req: NextRequest) {
    try {

        const listVideos = await prisma.video.findMany({
            orderBy: {
                released: 'desc'
            },
            include: {
                creator: {
                    select: {
                        channelId: true,
                        subscribers: true,
                        channelName: true,
                        description: true,
                        logo: true,
                        userName: true,
                        createdAt: true
                    }
                }
            }
        })

        return NextResponse.json(listVideos, {
            headers: CORS_HEADERS,
        })

    } catch (error) {
        console.error("❌ Error:", error)

        return NextResponse.json(
            { error: String(error) },
            { status: 500, headers: CORS_HEADERS }
        )
    }
}