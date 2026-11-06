import { NextRequest, NextResponse } from "next/server";
import { CORS_HEADERS } from "../../../lib/cors";
import { prisma } from "../../../lib/prisma";

export async function GET(
    req: NextRequest
) {
    try {

        const search = req.nextUrl.searchParams.get('value')

        const data = await prisma.search.findMany({
            where: { name: { contains: search, mode: 'insensitive' } },
            select: {
                image: true,
                name: true,
                rating: true,
            },
            take: 10
        })

        return NextResponse.json(data, {
            headers: CORS_HEADERS,
        })

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}