class Twitter {
    constructor() {
        this.tweetStore = {};
        this.followeeStore = {};
        this.count = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweetStore[userId] = [...(this.tweetStore[userId] ?? []), { tweetId, count: ++this.count }];    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let newsFeed = [];
        for(const id in this.tweetStore){
            if((this.followeeStore[userId] ?? []).includes(Number(id)) || Number(id) === userId){
                newsFeed = [...newsFeed, ...this.tweetStore[id]];
            }
        }
        return newsFeed.sort((a, b) => b.count - a.count).slice(0, 10).map(item => item.tweetId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.followeeStore[followerId] = [...(this.followeeStore[followerId] ?? []), followeeId];
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.followeeStore[followerId] = (this.followeeStore[followerId] ?? []).filter(id => id !== followeeId);
    }
}
