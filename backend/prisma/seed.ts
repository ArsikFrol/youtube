import { prisma } from "../src/lib/prisma"
import { comments, profiles, videos } from "./constants"

async function up() {
    console.log('Начинаем заполнение базы данных...')

    await prisma.profile.createMany({
        data: profiles
    })

    await prisma.video.createMany({
        data: videos
    })

    await prisma.comment.createMany({
        data: comments
    })

    console.log('Seeding завершён успешно!')
}

async function down() {

    await prisma.comment.deleteMany()
    await prisma.video.deleteMany()
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