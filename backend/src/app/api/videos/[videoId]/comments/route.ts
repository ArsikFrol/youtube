import { NextRequest, NextResponse } from "next/server"
import { CORS_HEADERS } from "../../../../../lib/cors"
import { prisma } from "../../../../../lib/prisma"

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ videoId: string }> }
) {
    try {

        const { videoId } = await params
        const profileId = req.nextUrl.searchParams.get('profileId')

        if (!videoId || videoId.trim() === '') {
            return NextResponse.json(
                { error: 'videoId не передан' },
                { status: 400, headers: CORS_HEADERS }
            )
        }

        if (!profileId || profileId.trim() === '') return NextResponse.json(
            { error: `profileId: ${profileId} не передан` },
            { status: 400, headers: CORS_HEADERS }
        )

        const [body, video, profile] = await Promise.all([
            req.json().catch(() => null),
            prisma.video.findUnique({
                where: { videoId }
            }),
            prisma.profile.findUnique({
                where: { profileId }
            })
        ])

        const text = typeof body?.text === 'string' ? body.text.trim() : ''

        if (!text) return NextResponse.json(
            { error: 'Текст комментария не передан или пуст' },
            { status: 400, headers: CORS_HEADERS }
        )


        if (!video) return NextResponse.json(
            { error: `video with videoId: ${videoId} not found` },
            { status: 404, headers: CORS_HEADERS }
        )

        if (!profile) return NextResponse.json(
            { error: `profile with profileId: ${profileId} not found` },
            { status: 404, headers: CORS_HEADERS }
        )

        const comment = await prisma.comment.create({
            data: {
                text: text,
                videoId,
                writerId: profileId
            }
        })

        return NextResponse.json({ comment }, { status: 201, headers: CORS_HEADERS })

    } catch (error) {
        console.error('Ошибка:', error)
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        )
    }
}