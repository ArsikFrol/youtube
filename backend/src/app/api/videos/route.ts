import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

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

export async function GET(req: NextRequest) {
    try {

        const listVideos = await prisma.video.findMany({
            orderBy: {
                released: 'desc'
            },
            include: {
                creator: {
                    select: {
                        avatar: true,
                        subscribers: true,
                        profileName: true,
                        profileId: true,
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