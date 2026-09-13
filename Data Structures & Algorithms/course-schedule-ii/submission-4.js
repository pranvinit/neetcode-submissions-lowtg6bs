class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const preMap = new Map();

        // create - adj list for courses
        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }
        for (const [crs, pre] of prerequisites) {
            preMap.get(crs).push(pre);
        }

        const output = [];
        const cycle = new Set(); // currently in recursive path
        const visit = new Set(); // fully processed and added to output

        function dfs(course) {
            if(cycle.has(course)){
                return false;
            }

            if(visit.has(course)){
                return true;
            }

            cycle.add(course);
            for(const pre of preMap.get(course)){
                if(!dfs(pre)){
                    return false;
                }
            }
            cycle.delete(course);
            visit.add(course);
            output.push(course);
            return true;
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return [];
            }
        }

        return output;
    }
}
