class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // build adjacency list
        const preMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }

        for(const [crs, pre] of prerequisites){
            preMap.get(crs).push(pre);
        }

        const visiting = new Set();

        function dfs(crs) {
            if(visiting.has(crs)){
                // cycle detected
                return false;
            }
            
            // no prereq
            if(preMap.get(crs).length === 0){
                return true;
            }

            // mark the path node as visiting
            visiting.add(crs);
            for(let pre of preMap.get(crs)){
                if(!dfs(pre)){
                    return false;
                }
            }

            // backtrack for the next cycle
            visiting.delete(crs);
            preMap.set(crs, []);
            return true;
        }

        // call from each course because what if graph is not fully connected
        for(let c = 0; c < numCourses; c++){
            if(!dfs(c)){
                return false;
            }
        }

        return true;
    }
}
