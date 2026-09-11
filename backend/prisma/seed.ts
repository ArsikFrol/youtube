import { prisma } from "../src/lib/prisma"
import { channels, comments, profiles, reactions, subscriptions, videos } from "./constants"

async function up() {
    console.log('Начинаем заполнение базы данных...')

    await prisma.profile.createMany({
        data: profiles
    })

    await prisma.channel.createMany({
        data: channels
    })

    await prisma.subscription.createMany({
        data: subscriptions
    })

    await prisma.video.createMany({
        data: videos
    })

    await prisma.comment.createMany({
        data: comments
    })

    await prisma.reaction.createMany({
        data: reactions
    })

    console.log('Seeding завершён успешно!')
}

async function down() {

    await prisma.reaction.deleteMany()
    await prisma.comment.deleteMany()
    await prisma.video.deleteMany()
    await prisma.subscription.deleteMany()
    await prisma.channel.deleteMany()
    await prisma.profile.deleteMany()

    console.log('База данных очищена')
}

async function main() {
    try {
        await down()
        await up()
    } catch (error) {
        console.error('❌ Ошибка при заполнении базы:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });