class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = new Map();
        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (const [v1, v2] of edges) {
            graph.get(v1).push(v2);
            graph.get(v2).push(v1);
        }

        const visited = new Set();
        let ans = 0;

        for (const start of graph.keys()) {
            if (visited.has(start)) continue;

            const stack = [start];
            visited.add(start);

            while (stack.length) {
                const node = stack.pop();
                for (const next of graph.get(node)) {
                    if (visited.has(next)) continue;
                    visited.add(next);
                    stack.push(next);
                }
            }

            ans++;
        }

        return ans;
    }
}
