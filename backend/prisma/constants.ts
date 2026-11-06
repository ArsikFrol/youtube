import { SubscriptionModel, ChannelModel, CommentModel, ProfileModel, ReactionModel, VideoModel } from "../src/generated/prisma/models"

type ProfileSeed = {
    avatar: string
    profileName: string
    userName: string
}

export const profiles: ProfileSeed[] = [
    { userName: 'alice_vlogs', avatar: 'https://i.pravatar.cc/150?img=1', profileName: 'Alice Johnson' },
    { userName: 'bob_tech', avatar: 'https://i.pravatar.cc/150?img=2', profileName: 'Bob Smith' },
    { userName: 'charlie_gaming', avatar: 'https://i.pravatar.cc/150?img=3', profileName: 'Charlie Brown' },
    { userName: 'diana_diy', avatar: 'https://i.pravatar.cc/150?img=4', profileName: 'Diana Williams' },
    { userName: 'eve_science', avatar: 'https://i.pravatar.cc/150?img=5', profileName: 'Eve Davis' }
]

type ChannelSeed = {
    channelName: string
    userName: string
    subscribers: number
    description: string
    logo: string
}

export const channels: ChannelSeed[] = [
    { channelName: 'Alice Vlogs', userName: 'alice_vlogs', subscribers: 0, description: 'Travel and lifestyle vlogs', logo: 'https://i.pravatar.cc/150?img=1' },
    { channelName: 'Bob Tech', userName: 'bob_tech', subscribers: 0, description: 'Tech reviews and tutorials', logo: 'https://i.pravatar.cc/150?img=2' },
    { channelName: 'Charlie Gaming', userName: 'charlie_gaming', subscribers: 0, description: 'Gaming montages and streams', logo: 'https://i.pravatar.cc/150?img=3' },
    { channelName: 'Diana DIY', userName: 'diana_diy', subscribers: 0, description: 'DIY projects and crafts', logo: 'https://i.pravatar.cc/150?img=4' },
    { channelName: 'Eve Science', userName: 'eve_science', subscribers: 0, description: 'Science experiments and facts', logo: 'https://i.pravatar.cc/150?img=5' }
]
/* 
export const subscriptions: SubscriptionModel[] = [
    { subscriptionId: 'sub_1', profileId: 'profile_2', channelId: 'channel_1', notifications: 'ALL', createdAt: new Date('2024-01-16'), updatedAt: new Date('2024-01-16') },
    { subscriptionId: 'sub_2', profileId: 'profile_3', channelId: 'channel_1', notifications: 'ALL', createdAt: new Date('2024-01-17'), updatedAt: new Date('2024-01-17') },
    { subscriptionId: 'sub_3', profileId: 'profile_4', channelId: 'channel_1', notifications: 'PERSONALIZED', createdAt: new Date('2024-01-18'), updatedAt: new Date('2024-01-18') },
    { subscriptionId: 'sub_4', profileId: 'profile_5', channelId: 'channel_1', notifications: 'NONE', createdAt: new Date('2024-01-19'), updatedAt: new Date('2024-01-19') },
    { subscriptionId: 'sub_5', profileId: 'profile_1', channelId: 'channel_2', notifications: 'ALL', createdAt: new Date('2024-02-21'), updatedAt: new Date('2024-02-21') },
    { subscriptionId: 'sub_6', profileId: 'profile_4', channelId: 'channel_2', notifications: 'PERSONALIZED', createdAt: new Date('2024-02-22'), updatedAt: new Date('2024-02-22') },
    { subscriptionId: 'sub_7', profileId: 'profile_1', channelId: 'channel_3', notifications: 'ALL', createdAt: new Date('2024-03-11'), updatedAt: new Date('2024-03-11') },
    { subscriptionId: 'sub_8', profileId: 'profile_2', channelId: 'channel_3', notifications: 'ALL', createdAt: new Date('2024-03-12'), updatedAt: new Date('2024-03-12') },
    { subscriptionId: 'sub_9', profileId: 'profile_4', channelId: 'channel_3', notifications: 'NONE', createdAt: new Date('2024-03-13'), updatedAt: new Date('2024-03-13') },
    { subscriptionId: 'sub_10', profileId: 'profile_5', channelId: 'channel_3', notifications: 'PERSONALIZED', createdAt: new Date('2024-03-14'), updatedAt: new Date('2024-03-14') },
    { subscriptionId: 'sub_11', profileId: 'profile_3', channelId: 'channel_3', notifications: 'ALL', createdAt: new Date('2024-03-15'), updatedAt: new Date('2024-03-15') },
    { subscriptionId: 'sub_12', profileId: 'profile_5', channelId: 'channel_4', notifications: 'ALL', createdAt: new Date('2024-04-06'), updatedAt: new Date('2024-04-06') },
    { subscriptionId: 'sub_13', profileId: 'profile_1', channelId: 'channel_5', notifications: 'PERSONALIZED', createdAt: new Date('2024-05-13'), updatedAt: new Date('2024-05-13') },
    { subscriptionId: 'sub_14', profileId: 'profile_2', channelId: 'channel_5', notifications: 'ALL', createdAt: new Date('2024-05-14'), updatedAt: new Date('2024-05-14') },
    { subscriptionId: 'sub_15', profileId: 'profile_4', channelId: 'channel_5', notifications: 'NONE', createdAt: new Date('2024-05-15'), updatedAt: new Date('2024-05-15') },
] */

type VideoSeed = {
    preview: string;
    title: string;
    description: string;
    views: number;
    userNameCreator: string;
}

export const videos: VideoSeed[] = [
    { preview: 'https://picsum.photos/seed/1/640/360', title: 'Amazing Sunset', description: 'Beautiful sunset over the ocean', views: 1200, userNameCreator: 'alice_vlogs' },
    { preview: 'https://picsum.photos/seed/2/640/360', title: 'City Night Lights', description: 'Night view of the city skyline', views: 2500, userNameCreator: 'alice_vlogs' },
    { preview: 'https://picsum.photos/seed/3/640/360', title: 'Mountain Hiking', description: 'Hiking in the Rocky Mountains', views: 4500, userNameCreator: 'alice_vlogs' },
    { preview: 'https://picsum.photos/seed/4/640/360', title: 'Cooking Pasta', description: 'How to make perfect pasta', views: 3100, userNameCreator: 'alice_vlogs' },
    { preview: 'https://picsum.photos/seed/5/640/360', title: 'Gaming Montage', description: 'Best moments from my gaming sessions', views: 8900, userNameCreator: 'bob_tech' },
    { preview: 'https://picsum.photos/seed/6/640/360', title: 'Travel Vlog: Paris', description: 'Exploring the streets of Paris', views: 5600, userNameCreator: 'bob_tech' },
    { preview: 'https://picsum.photos/seed/7/640/360', title: 'DIY Furniture', description: 'Building a wooden table from scratch', views: 980, userNameCreator: 'bob_tech' },
    { preview: 'https://picsum.photos/seed/8/640/360', title: 'Meditation Guide', description: '10-minute meditation for beginners', views: 750, userNameCreator: 'bob_tech' },
    { preview: 'https://picsum.photos/seed/9/640/360', title: 'Science Experiments', description: 'Fun experiments you can do at home', views: 7200, userNameCreator: 'bob_tech' },
    { preview: 'https://picsum.photos/seed/10/640/360', title: 'Fitness Workout', description: 'Full body workout at home', views: 4300, userNameCreator: 'bob_tech' }
];

export const comments: CommentModel[] = [
    { commentId: 'comment_1', text: 'Amazing shot! 😍', writerId: 'profile_2', videoId: 'video_1', createdAt: new Date('2024-01-21'), updatedAt: new Date('2024-01-21') },
    { commentId: 'comment_2', text: 'Where was this taken?', writerId: 'profile_3', videoId: 'video_1', createdAt: new Date('2024-01-22'), updatedAt: new Date('2024-01-22') },
    { commentId: 'comment_3', text: 'Beautiful colors!', writerId: 'profile_4', videoId: 'video_1', createdAt: new Date('2024-01-23'), updatedAt: new Date('2024-01-23') },
    { commentId: 'comment_4', text: 'This city looks stunning at night', writerId: 'profile_1', videoId: 'video_2', createdAt: new Date('2024-02-02'), updatedAt: new Date('2024-02-02') },
    { commentId: 'comment_5', text: 'Which city is this?', writerId: 'profile_5', videoId: 'video_2', createdAt: new Date('2024-02-03'), updatedAt: new Date('2024-02-03') },
    { commentId: 'comment_6', text: 'Great hike! I was there last year', writerId: 'profile_1', videoId: 'video_3', createdAt: new Date('2024-02-26'), updatedAt: new Date('2024-02-26') },
    { commentId: 'comment_7', text: 'The view is breathtaking', writerId: 'profile_4', videoId: 'video_3', createdAt: new Date('2024-02-27'), updatedAt: new Date('2024-02-27') },
    { commentId: 'comment_8', text: 'Tried this recipe, turned out great!', writerId: 'profile_3', videoId: 'video_4', createdAt: new Date('2024-03-06'), updatedAt: new Date('2024-03-06') },
    { commentId: 'comment_9', text: 'What pasta did you use?', writerId: 'profile_5', videoId: 'video_4', createdAt: new Date('2024-03-07'), updatedAt: new Date('2024-03-07') },
    { commentId: 'comment_10', text: 'Insane skills! 🔥', writerId: 'profile_1', videoId: 'video_5', createdAt: new Date('2024-03-16'), updatedAt: new Date('2024-03-16') },
    { commentId: 'comment_11', text: 'What game is this?', writerId: 'profile_2', videoId: 'video_5', createdAt: new Date('2024-03-17'), updatedAt: new Date('2024-03-17') },
    { commentId: 'comment_12', text: 'Teach me your ways!', writerId: 'profile_4', videoId: 'video_5', createdAt: new Date('2024-03-18'), updatedAt: new Date('2024-03-18') },
    { commentId: 'comment_13', text: 'Paris is always a good idea ❤️', writerId: 'profile_2', videoId: 'video_6', createdAt: new Date('2024-04-02'), updatedAt: new Date('2024-04-02') },
    { commentId: 'comment_14', text: 'Adding this to my bucket list', writerId: 'profile_5', videoId: 'video_6', createdAt: new Date('2024-04-03'), updatedAt: new Date('2024-04-03') },
    { commentId: 'comment_15', text: 'Nice work! What wood did you use?', writerId: 'profile_1', videoId: 'video_7', createdAt: new Date('2024-04-11'), updatedAt: new Date('2024-04-11') },
    { commentId: 'comment_16', text: 'Looks professional!', writerId: 'profile_3', videoId: 'video_7', createdAt: new Date('2024-04-12'), updatedAt: new Date('2024-04-12') },
    { commentId: 'comment_17', text: 'This helped me so much, thank you!', writerId: 'profile_2', videoId: 'video_8', createdAt: new Date('2024-04-21'), updatedAt: new Date('2024-04-21') },
    { commentId: 'comment_18', text: 'Mind blown! 🤯', writerId: 'profile_1', videoId: 'video_9', createdAt: new Date('2024-05-16'), updatedAt: new Date('2024-05-16') },
    { commentId: 'comment_19', text: 'Doing this with my kids this weekend', writerId: 'profile_3', videoId: 'video_9', createdAt: new Date('2024-05-17'), updatedAt: new Date('2024-05-17') },
    { commentId: 'comment_20', text: 'Great workout! Feeling the burn', writerId: 'profile_2', videoId: 'video_10', createdAt: new Date('2024-06-02'), updatedAt: new Date('2024-06-02') },
    { commentId: 'comment_21', text: 'How many reps do you recommend?', writerId: 'profile_4', videoId: 'video_10', createdAt: new Date('2024-06-03'), updatedAt: new Date('2024-06-03') }
]

export const reactions: ReactionModel[] = [
    { reactionId: 'reaction_1', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_1', createdAt: new Date('2024-01-21'), updatedAt: new Date('2024-01-21') },
    { reactionId: 'reaction_2', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_1', createdAt: new Date('2024-01-22'), updatedAt: new Date('2024-01-22') },
    { reactionId: 'reaction_3', reactionType: 'LIKE', profileId: 'profile_4', videoId: 'video_1', createdAt: new Date('2024-01-23'), updatedAt: new Date('2024-01-23') },
    { reactionId: 'reaction_4', reactionType: 'DISLIKE', profileId: 'profile_5', videoId: 'video_1', createdAt: new Date('2024-01-24'), updatedAt: new Date('2024-01-24') },
    { reactionId: 'reaction_5', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_2', createdAt: new Date('2024-02-02'), updatedAt: new Date('2024-02-02') },
    { reactionId: 'reaction_6', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_2', createdAt: new Date('2024-02-03'), updatedAt: new Date('2024-02-03') },
    { reactionId: 'reaction_7', reactionType: 'LIKE', profileId: 'profile_5', videoId: 'video_2', createdAt: new Date('2024-02-04'), updatedAt: new Date('2024-02-04') },
    { reactionId: 'reaction_8', reactionType: 'DISLIKE', profileId: 'profile_4', videoId: 'video_2', createdAt: new Date('2024-02-05'), updatedAt: new Date('2024-02-05') },
    { reactionId: 'reaction_9', reactionType: 'LIKE', profileId: 'profile_1', videoId: 'video_3', createdAt: new Date('2024-02-26'), updatedAt: new Date('2024-02-26') },
    { reactionId: 'reaction_10', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_3', createdAt: new Date('2024-02-27'), updatedAt: new Date('2024-02-27') },
    { reactionId: 'reaction_11', reactionType: 'LIKE', profileId: 'profile_4', videoId: 'video_3', createdAt: new Date('2024-02-28'), updatedAt: new Date('2024-02-28') },
    { reactionId: 'reaction_12', reactionType: 'LIKE', profileId: 'profile_5', videoId: 'video_3', createdAt: new Date('2024-03-01'), updatedAt: new Date('2024-03-01') },
    { reactionId: 'reaction_13', reactionType: 'DISLIKE', profileId: 'profile_2', videoId: 'video_3', createdAt: new Date('2024-03-02'), updatedAt: new Date('2024-03-02') },
    { reactionId: 'reaction_14', reactionType: 'LIKE', profileId: 'profile_1', videoId: 'video_4', createdAt: new Date('2024-03-06'), updatedAt: new Date('2024-03-06') },
    { reactionId: 'reaction_15', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_4', createdAt: new Date('2024-03-07'), updatedAt: new Date('2024-03-07') },
    { reactionId: 'reaction_16', reactionType: 'LIKE', profileId: 'profile_5', videoId: 'video_4', createdAt: new Date('2024-03-08'), updatedAt: new Date('2024-03-08') },
    { reactionId: 'reaction_17', reactionType: 'DISLIKE', profileId: 'profile_4', videoId: 'video_4', createdAt: new Date('2024-03-09'), updatedAt: new Date('2024-03-09') },
    { reactionId: 'reaction_18', reactionType: 'LIKE', profileId: 'profile_1', videoId: 'video_5', createdAt: new Date('2024-03-16'), updatedAt: new Date('2024-03-16') },
    { reactionId: 'reaction_19', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_5', createdAt: new Date('2024-03-17'), updatedAt: new Date('2024-03-17') },
    { reactionId: 'reaction_20', reactionType: 'LIKE', profileId: 'profile_4', videoId: 'video_5', createdAt: new Date('2024-03-18'), updatedAt: new Date('2024-03-18') },
    { reactionId: 'reaction_21', reactionType: 'LIKE', profileId: 'profile_5', videoId: 'video_5', createdAt: new Date('2024-03-19'), updatedAt: new Date('2024-03-19') },
    { reactionId: 'reaction_22', reactionType: 'DISLIKE', profileId: 'profile_3', videoId: 'video_5', createdAt: new Date('2024-03-20'), updatedAt: new Date('2024-03-20') },
    { reactionId: 'reaction_23', reactionType: 'LIKE', profileId: 'profile_1', videoId: 'video_6', createdAt: new Date('2024-04-02'), updatedAt: new Date('2024-04-02') },
    { reactionId: 'reaction_24', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_6', createdAt: new Date('2024-04-03'), updatedAt: new Date('2024-04-03') },
    { reactionId: 'reaction_25', reactionType: 'LIKE', profileId: 'profile_4', videoId: 'video_6', createdAt: new Date('2024-04-04'), updatedAt: new Date('2024-04-04') },
    { reactionId: 'reaction_26', reactionType: 'DISLIKE', profileId: 'profile_5', videoId: 'video_6', createdAt: new Date('2024-04-05'), updatedAt: new Date('2024-04-05') },
    { reactionId: 'reaction_27', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_7', createdAt: new Date('2024-04-11'), updatedAt: new Date('2024-04-11') },
    { reactionId: 'reaction_28', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_7', createdAt: new Date('2024-04-12'), updatedAt: new Date('2024-04-12') },
    { reactionId: 'reaction_29', reactionType: 'LIKE', profileId: 'profile_5', videoId: 'video_7', createdAt: new Date('2024-04-13'), updatedAt: new Date('2024-04-13') },
    { reactionId: 'reaction_30', reactionType: 'DISLIKE', profileId: 'profile_4', videoId: 'video_7', createdAt: new Date('2024-04-14'), updatedAt: new Date('2024-04-14') },
    { reactionId: 'reaction_31', reactionType: 'LIKE', profileId: 'profile_1', videoId: 'video_8', createdAt: new Date('2024-04-21'), updatedAt: new Date('2024-04-21') },
    { reactionId: 'reaction_32', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_8', createdAt: new Date('2024-04-22'), updatedAt: new Date('2024-04-22') },
    { reactionId: 'reaction_33', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_8', createdAt: new Date('2024-04-23'), updatedAt: new Date('2024-04-23') },
    { reactionId: 'reaction_34', reactionType: 'LIKE', profileId: 'profile_1', videoId: 'video_9', createdAt: new Date('2024-05-16'), updatedAt: new Date('2024-05-16') },
    { reactionId: 'reaction_35', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_9', createdAt: new Date('2024-05-17'), updatedAt: new Date('2024-05-17') },
    { reactionId: 'reaction_36', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_9', createdAt: new Date('2024-05-18'), updatedAt: new Date('2024-05-18') },
    { reactionId: 'reaction_37', reactionType: 'LIKE', profileId: 'profile_4', videoId: 'video_9', createdAt: new Date('2024-05-19'), updatedAt: new Date('2024-05-19') },
    { reactionId: 'reaction_38', reactionType: 'DISLIKE', profileId: 'profile_5', videoId: 'video_9', createdAt: new Date('2024-05-20'), updatedAt: new Date('2024-05-20') },
    { reactionId: 'reaction_39', reactionType: 'LIKE', profileId: 'profile_2', videoId: 'video_10', createdAt: new Date('2024-06-02'), updatedAt: new Date('2024-06-02') },
    { reactionId: 'reaction_40', reactionType: 'LIKE', profileId: 'profile_3', videoId: 'video_10', createdAt: new Date('2024-06-03'), updatedAt: new Date('2024-06-03') },
    { reactionId: 'reaction_41', reactionType: 'LIKE', profileId: 'profile_4', videoId: 'video_10', createdAt: new Date('2024-06-04'), updatedAt: new Date('2024-06-04') },
    { reactionId: 'reaction_42', reactionType: 'DISLIKE', profileId: 'profile_5', videoId: 'video_10', createdAt: new Date('2024-06-05'), updatedAt: new Date('2024-06-05') }
];

type SearchSeed = {
    image: string,
    name: string,
    rating: number,
}

export const search: SearchSeed[] = [
    { image: 'https://picsum.photos/seed/search_001/400/300', name: 'Кафе Пушкин', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_002/400/300', name: 'Парк Горького', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_003/400/300', name: 'Кофейня Шоколадница', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_004/400/300', name: 'Ресторан Турандот', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_005/400/300', name: 'Бар Стрелка', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_006/400/300', name: 'Кинотеатр Октябрь', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_007/400/300', name: 'Третьяковская галерея', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_008/400/300', name: 'Библиотека Ленина', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_009/400/300', name: 'Парк Сокольники', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_010/400/300', name: 'White Rabbit', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_011/400/300', name: 'Кофейня Double B', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_012/400/300', name: 'Музей Гараж', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_013/400/300', name: 'Бар Куклы', rating: 4.2 },
    { image: 'https://picsum.photos/seed/search_014/400/300', name: 'Театр МХТ Чехова', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_015/400/300', name: 'Pinzeria by Bontempi', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_016/400/300', name: 'Панорама 360', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_017/400/300', name: 'Кавказская пленница', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_018/400/300', name: 'Антикафе Циферблат', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_019/400/300', name: 'Парк Зарядье', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_020/400/300', name: 'Ресторан Рыбы нет', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_021/400/300', name: 'Кафе Март', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_022/400/300', name: 'Ресторан Большой', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_023/400/300', name: 'Кофе Хауз', rating: 4.1 },
    { image: 'https://picsum.photos/seed/search_024/400/300', name: 'Бар Дорогая я перезвоню', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_025/400/300', name: 'Ресторан Северяне', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_026/400/300', name: 'Парк Коломенское', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_027/400/300', name: 'Музей Экспериментаниум', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_028/400/300', name: 'Океанариум Москвариум', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_029/400/300', name: 'Кинотеатр Пионер', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_030/400/300', name: 'Хачапури и вино', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_031/400/300', name: 'Surf Coffee', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_032/400/300', name: 'Ресторан Техникум', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_033/400/300', name: 'Бар Руки Вверх', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_034/400/300', name: 'Парк Кузьминки', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_035/400/300', name: 'Театр Современник', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_036/400/300', name: 'Ресторан Восход', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_037/400/300', name: 'Кофейня Buna', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_038/400/300', name: 'Мультимедиа Арт', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_039/400/300', name: 'Парк Измайловский', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_040/400/300', name: 'Ресторан Крым', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_041/400/300', name: 'Кафе Ленинград', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_042/400/300', name: 'Бар Проект 15', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_043/400/300', name: 'Кофейня Cofix', rating: 4.2 },
    { image: 'https://picsum.photos/seed/search_044/400/300', name: 'Ресторан Пушкинъ', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_045/400/300', name: 'Парк Патриаршие пруды', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_046/400/300', name: 'Кинотеатр Художественный', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_047/400/300', name: 'Музей Пушкина', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_048/400/300', name: 'Ресторан Пироговая', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_049/400/300', name: 'Кофейня Coffee Bean', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_050/400/300', name: 'Бар Бухарест', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_051/400/300', name: 'Парк Дружбы', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_052/400/300', name: 'Ресторан Шинок', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_053/400/300', name: 'Театр Вахтангова', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_054/400/300', name: 'Кафе Хлеб и Соль', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_055/400/300', name: 'Кинотеатр Формула Кино', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_056/400/300', name: 'Парк Филевский', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_057/400/300', name: 'Ресторан Джаганнат', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_058/400/300', name: 'Кофейня One Price Coffee', rating: 4.1 },
    { image: 'https://picsum.photos/seed/search_059/400/300', name: 'Бар Свобода', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_060/400/300', name: 'Музей Космонавтики', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_061/400/300', name: 'Ресторан Горыныч', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_062/400/300', name: 'Парк Тропарево', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_063/400/300', name: 'Кафе Лакомка', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_064/400/300', name: 'Театр Ленком', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_065/400/300', name: 'Кинотеатр Каро', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_066/400/300', name: 'Ресторан Рыбный базар', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_067/400/300', name: 'Кофейня Кофеин', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_068/400/300', name: 'Бар Тайм', rating: 4.2 },
    { image: 'https://picsum.photos/seed/search_069/400/300', name: 'Парк ВДНХ', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_070/400/300', name: 'Ресторан Мясо и Тесто', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_071/400/300', name: 'Музей Победы', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_072/400/300', name: 'Кафе Пельмени', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_073/400/300', name: 'Театр Сатирикон', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_074/400/300', name: 'Кинотеатр Синема Парк', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_075/400/300', name: 'Парк Царицыно', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_076/400/300', name: 'Ресторан Узбекистан', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_077/400/300', name: 'Кофейня Даблби', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_078/400/300', name: 'Бар Ночь', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_079/400/300', name: 'Музей Востока', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_080/400/300', name: 'Кафе Блинная', rating: 4.2 },
    { image: 'https://picsum.photos/seed/search_081/400/300', name: 'Театр Моссовета', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_082/400/300', name: 'Кинотеатр Иллюзион', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_083/400/300', name: 'Парк Кусково', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_084/400/300', name: 'Ресторан Итальянец', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_085/400/300', name: 'Кофейня Coffee Point', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_086/400/300', name: 'Бар Вино и Точка', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_087/400/300', name: 'Музей Рериха', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_088/400/300', name: 'Кафе Пряники', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_089/400/300', name: 'Театр Ермоловой', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_090/400/300', name: 'Кинотеатр Мираж', rating: 4.2 },
    { image: 'https://picsum.photos/seed/search_091/400/300', name: 'Парк Останкино', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_092/400/300', name: 'Ресторан Грузия', rating: 4.7 },
    { image: 'https://picsum.photos/seed/search_093/400/300', name: 'Кофейня Кофе и Молоко', rating: 4.5 },
    { image: 'https://picsum.photos/seed/search_094/400/300', name: 'Бар Пивная', rating: 4.1 },
    { image: 'https://picsum.photos/seed/search_095/400/300', name: 'Музей Дарвина', rating: 4.8 },
    { image: 'https://picsum.photos/seed/search_096/400/300', name: 'Кафе Чайхана', rating: 4.4 },
    { image: 'https://picsum.photos/seed/search_097/400/300', name: 'Театр Наций', rating: 4.9 },
    { image: 'https://picsum.photos/seed/search_098/400/300', name: 'Кинотеатр Люксор', rating: 4.3 },
    { image: 'https://picsum.photos/seed/search_099/400/300', name: 'Парк Битцевский', rating: 4.6 },
    { image: 'https://picsum.photos/seed/search_100/400/300', name: 'Ресторан Азимут', rating: 4.5 },
]