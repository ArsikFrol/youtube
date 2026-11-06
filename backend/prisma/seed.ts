import { prisma } from "../src/lib/prisma"
import { channels, comments, profiles, reactions, search, videos } from "./constants"

async function up() {
    console.log('Начинаем заполнение базы данных...')

    const createdProfiles = await prisma.profile.createManyAndReturn({
        data: profiles,
    })

    const profileIdByUserName = new Map(
        createdProfiles.map((p) => [p.userName, p.profileId]),
    )

    const channelsWithOwner = channels.map((ch) => {
        const ownerId = profileIdByUserName.get(ch.userName)

        if (!ownerId) {
            throw new Error(
                `Профиль с userName="${ch.userName}" не найден. ` +
                `Канал "${ch.channelName}" не может быть создан.`,
            )
        }

        return {
            channelName: ch.channelName,
            userName: ch.userName,
            subscribers: ch.subscribers,
            description: ch.description,
            logo: ch.logo,
            ownerId,
        }
    })

    const createdChannels = await prisma.channel.createManyAndReturn({
        data: channelsWithOwner,
    })

    const channelIdByUserName = new Map(
        createdChannels.map((c) => [c.userName, c.channelId]),
    )

    const videosWithCreator = videos.map((v) => {
        const creatorId = channelIdByUserName.get(v.userNameCreator)

        if (!creatorId) {
            throw new Error(
                `Канал "${v.userNameCreator}" не найден. ` +
                `Видео "${v.title}" не может быть создано.`,
            )
        }

        return {
            preview: v.preview,
            title: v.title,
            description: v.description,
            views: v.views,
            creatorId,
        }
    })

    await prisma.video.createMany({
        data: videosWithCreator,
    })

    await prisma.search.createMany({
        data: search
    })
    /* 
        await prisma.subscription.createMany({
            data: subscriptions
        }) */
    /* 
        
    
        await prisma.comment.createMany({
            data: comments
        })
    
        await prisma.reaction.createMany({
            data: reactions
        })
    
        await prisma.search.createMany({
            data: search
        }) */

    console.log('Seeding завершён успешно!')
}

async function down() {

    await prisma.search.deleteMany()
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