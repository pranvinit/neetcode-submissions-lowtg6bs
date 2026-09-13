class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adj = new Map();
        for(let i = 0; i < numCourses; i++){
            adj.set(i, []);
        }

        const preMap = new Map();

        for(const [pre, crs] of prerequisites){
            adj.get(crs).push(pre);
        }

        const dfs = (crs) => {
            if(preMap.has(crs)){
                return preMap.get(crs);
            }

            const prereqs = new Set();
            for(const pre of adj.get(crs)){
                for (const p of dfs(pre)) prereqs.add(p);
            }
            prereqs.add(crs);
            preMap.set(crs, prereqs);
            return prereqs;
        }

        for(let crs = 0; crs < numCourses; crs++){
            dfs(crs);
        }

        return queries.map(([u, v]) => preMap.get(v).has(u));
    }
}
