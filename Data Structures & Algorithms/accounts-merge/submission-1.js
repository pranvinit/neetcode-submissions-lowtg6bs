class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const graph = new Map();
        const emailToName = new Map();

        for (const [name, ...emails] of accounts) {
            const first = emails[0];

            for (const email of emails) {
                if (!graph.has(email)) graph.set(email, []);
                emailToName.set(email, name);

                // connect the first email to every other email (skipping itself)
                // star mesh
                if (email !== first) {
                    graph.get(first).push(email);
                    graph.get(email).push(first);
                }
            }
        }

        const visited = new Set();
        const result = [];

        for (const start of graph.keys()) {
            if (visited.has(start)) continue;

            const component = [];
            const stack = [start];
            visited.add(start);

            while (stack.length) {
                const email = stack.pop();
                component.push(email);

                for (const next of graph.get(email)) {
                    if (visited.has(next)) continue;
                    visited.add(next);
                    stack.push(next);
                }
            }
            component.sort()
            result.push([emailToName.get(start), ...component])
        }

        return result;
    }
}
