import { SubscriptionModel, ChannelModel, CommentModel, ProfileModel, ReactionModel, VideoModel } from "../src/generated/prisma/models"

export const profiles: ProfileModel[] = [
    { profileId: 'profile_1', avatar: 'https://i.pravatar.cc/150?img=1', profileName: 'Alice Johnson', createdAt: new Date('2024-01-15'), updatedAt: new Date('2024-01-15') },
    { profileId: 'profile_2', avatar: 'https://i.pravatar.cc/150?img=2', profileName: 'Bob Smith', createdAt: new Date('2024-02-20'), updatedAt: new Date('2024-02-20') },
    { profileId: 'profile_3', avatar: 'https://i.pravatar.cc/150?img=3', profileName: 'Charlie Brown', createdAt: new Date('2024-03-10'), updatedAt: new Date('2024-03-10') },
    { profileId: 'profile_4', avatar: 'https://i.pravatar.cc/150?img=4', profileName: 'Diana Williams', createdAt: new Date('2024-04-05'), updatedAt: new Date('2024-04-05') },
    { profileId: 'profile_5', avatar: 'https://i.pravatar.cc/150?img=5', profileName: 'Eve Davis', createdAt: new Date('2024-05-12'), updatedAt: new Date('2024-05-12') }
]

export const channels: ChannelModel[] = [
    { channelId: 'channel_1', channelName: 'Alice Vlogs', userName: 'alice_vlogs', subscribers: 4, description: 'Travel and lifestyle vlogs', logo: 'https://i.pravatar.cc/150?img=1', ownerId: 'profile_1', createdAt: new Date('2024-01-15'), updatedAt: new Date('2024-01-15') },
    { channelId: 'channel_2', channelName: 'Bob Tech', userName: 'bob_tech', subscribers: 2, description: 'Tech reviews and tutorials', logo: 'https://i.pravatar.cc/150?img=2', ownerId: 'profile_2', createdAt: new Date('2024-02-20'), updatedAt: new Date('2024-02-20') },
    { channelId: 'channel_3', channelName: 'Charlie Gaming', userName: 'charlie_gaming', subscribers: 5, description: 'Gaming montages and streams', logo: 'https://i.pravatar.cc/150?img=3', ownerId: 'profile_3', createdAt: new Date('2024-03-10'), updatedAt: new Date('2024-03-10') },
    { channelId: 'channel_4', channelName: 'Diana DIY', userName: 'diana_diy', subscribers: 1, description: 'DIY projects and crafts', logo: 'https://i.pravatar.cc/150?img=4', ownerId: 'profile_4', createdAt: new Date('2024-04-05'), updatedAt: new Date('2024-04-05') },
    { channelId: 'channel_5', channelName: 'Eve Science', userName: 'eve_science', subscribers: 3, description: 'Science experiments and facts', logo: 'https://i.pravatar.cc/150?img=5', ownerId: 'profile_5', createdAt: new Date('2024-05-12'), updatedAt: new Date('2024-05-12') }
]

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
]

export const videos: VideoModel[] = [
    { videoId: 'video_1', preview: 'https://picsum.photos/seed/1/640/360', title: 'Amazing Sunset', description: 'Beautiful sunset over the ocean', released: new Date('2024-01-20'), views: 1200, creatorId: 'channel_1', createdAt: new Date('2024-01-20'), updatedAt: new Date('2024-01-20') },
    { videoId: 'video_2', preview: 'https://picsum.photos/seed/2/640/360', title: 'City Night Lights', description: 'Night view of the city skyline', released: new Date('2024-02-01'), views: 2500, creatorId: 'channel_1', createdAt: new Date('2024-02-01'), updatedAt: new Date('2024-02-01') },
    { videoId: 'video_3', preview: 'https://picsum.photos/seed/3/640/360', title: 'Mountain Hiking', description: 'Hiking in the Rocky Mountains', released: new Date('2024-02-25'), views: 4500, creatorId: 'channel_2', createdAt: new Date('2024-02-25'), updatedAt: new Date('2024-02-25') },
    { videoId: 'video_4', preview: 'https://picsum.photos/seed/4/640/360', title: 'Cooking Pasta', description: 'How to make perfect pasta', released: new Date('2024-03-05'), views: 3100, creatorId: 'channel_2', createdAt: new Date('2024-03-05'), updatedAt: new Date('2024-03-05') },
    { videoId: 'video_5', preview: 'https://picsum.photos/seed/5/640/360', title: 'Gaming Montage', description: 'Best moments from my gaming sessions', released: new Date('2024-03-15'), views: 8900, creatorId: 'channel_3', createdAt: new Date('2024-03-15'), updatedAt: new Date('2024-03-15') },
    { videoId: 'video_6', preview: 'https://picsum.photos/seed/6/640/360', title: 'Travel Vlog: Paris', description: 'Exploring the streets of Paris', released: new Date('2024-04-01'), views: 5600, creatorId: 'channel_3', createdAt: new Date('2024-04-01'), updatedAt: new Date('2024-04-01') },
    { videoId: 'video_7', preview: 'https://picsum.photos/seed/7/640/360', title: 'DIY Furniture', description: 'Building a wooden table from scratch', released: new Date('2024-04-10'), views: 980, creatorId: 'channel_4', createdAt: new Date('2024-04-10'), updatedAt: new Date('2024-04-10') },
    { videoId: 'video_8', preview: 'https://picsum.photos/seed/8/640/360', title: 'Meditation Guide', description: '10-minute meditation for beginners', released: new Date('2024-04-20'), views: 750, creatorId: 'channel_4', createdAt: new Date('2024-04-20'), updatedAt: new Date('2024-04-20') },
    { videoId: 'video_9', preview: 'https://picsum.photos/seed/9/640/360', title: 'Science Experiments', description: 'Fun experiments you can do at home', released: new Date('2024-05-15'), views: 7200, creatorId: 'channel_5', createdAt: new Date('2024-05-15'), updatedAt: new Date('2024-05-15') },
    { videoId: 'video_10', preview: 'https://picsum.photos/seed/10/640/360', title: 'Fitness Workout', description: 'Full body workout at home', released: new Date('2024-06-01'), views: 4300, creatorId: 'channel_5', createdAt: new Date('2024-06-01'), updatedAt: new Date('2024-06-01') }
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