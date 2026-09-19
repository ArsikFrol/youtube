import { NextRequest, NextResponse } from "next/server";
import { Notifications } from "../../../../generated/prisma/enums";
import { CORS_HEADERS } from "../../../../lib/cors";
import { prisma } from "../../../../lib/prisma";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: CORS_HEADERS,
    })
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ subscriptionId: string }> }
) {
    try {

        const { subscriptionId } = await params
        const { notification } = await req.json() as { notification: Notifications }

        if (!subscriptionId || subscriptionId.trim() === '') return NextResponse.json(
            { error: `subscriptionId: ${subscriptionId} не передан` },
            { status: 400, headers: CORS_HEADERS }
        )

        const validValues: Notifications[] = ['ALL', 'PERSONALIZED', 'NONE']
        if (!validValues.includes(notification)) {
            return NextResponse.json(
                { error: `Невалидное значение: ${notification}` },
                { status: 400, headers: CORS_HEADERS }
            )
        }

        const subscription = await prisma.subscription.findUnique({
            where: { subscriptionId },
            select: { channelId: true }
        })

        if (!subscription) return NextResponse.json(
            { error: `Подписка с subscriptionId: ${subscriptionId} не найдена` },
            { status: 404, headers: CORS_HEADERS }
        )

        const updated = await prisma.subscription.update({
            where: { subscriptionId },
            data: { notification },
            select: {
                notification: true
            }
        })

        return NextResponse.json({
            notification: updated.notification
        }, { headers: CORS_HEADERS })

    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500, headers: CORS_HEADERS }
        );
    }
}