class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1; // pushed value

        // Bubble up
        while (i > 1) {
            // because root (index 1) has no parent
            const parent = Math.floor(i / 2);

            if (this.heap[parent][0] <= this.heap[i][0]) {
                break;
            }

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return null;

        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        const minimum = this.heap[1];

        this.heap[1] = this.heap.pop(); // replace root with last value

        let i = 1;

        // Bubble down
        while (2 * i < this.heap.length) {
            // left child does not overflow
            const left = 2 * i;
            const right = 2 * i + 1;

            let smallerChild = left;

            if (right < this.heap.length && this.heap[right][0] < this.heap[left][0]) {
                smallerChild = right;
            }

            if (this.heap[i][0] <= this.heap[smallerChild][0]) {
                break;
            }

            [this.heap[i], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[i]];

            i = smallerChild;
        }

        return minimum; // return root;
    }

    peek() {
        return this.heap[1] ?? null;
    }

    size() {
        return this.heap.length - 1; // 1-indexed
    }

    isEmpty() {
        return this.heap.length === 1;
    }
}

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
        this.tweetStore[userId] = [...(this.tweetStore[userId] ?? []), [--this.count, tweetId]];
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let res = [];
        if (!this.followeeStore[userId]) {
            this.followeeStore[userId] = new Set();
        }
        this.followeeStore[userId].add(userId);

        const minHeap = new MinHeap();

        for (const followeeId of this.followeeStore[userId]) {
            if (this.tweetStore[followeeId]) {
                const tweets = this.tweetStore[followeeId];
                const index = tweets.length - 1;
                const [count, tweetId] = tweets[index];
                minHeap.push([count, tweetId, followeeId, index - 1]);
            }
        }

        while (!minHeap.isEmpty() && res.length < 10) {
            const [count, tweetId, followeeId, nxtIndex] = minHeap.pop();
            res.push(tweetId);
            if (nxtIndex >= 0) {
                const [oldCount, oldTweetId] = this.tweetStore[followeeId][nxtIndex];
                minHeap.push([oldCount, oldTweetId, followeeId, nxtIndex - 1]);
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followeeStore[followerId]) {
            this.followeeStore[followerId] = new Set();
        }

        this.followeeStore[followerId].add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followeeStore[followerId]) {
            this.followeeStore[followerId].delete(followeeId);
        }
    }
}
