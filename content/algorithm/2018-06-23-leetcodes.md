Title: Leetcodes
Date: 2018-06-23
Category: posts
Tags: algorithm
Slug: leetcodes
Author: Andy
Place: Vancouver

> This post records many of the leetcodes that I think worth a second try.
> The solutions mainly come from the discussions, which are pretty smart ones. I can not list all the original pages for them, 
> but they can be easily found by Google.


### [857. Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/description/)

There are `N` workers.  The `i-th` worker has a `quality[i]` and a minimum wage expectation `wage[i]`.

Now we want to hire exactly `K` workers to form a paid group.  When hiring a group of `K` workers, we must pay them according to the following rules:  

1. Every worker in the paid group should be paid in the ratio of their quality compared to other workers in the paid group.
1. Every worker in the paid group must be paid at least their minimum wage expectation.   

Return the least amount of money needed to form a paid group satisfying the above conditions.

 
**Example 1:**
```java
Input: quality = [10,20,5], wage = [70,50,30], K = 2
Output: 105.00000
Explanation: We pay 70 to 0-th worker and 35 to 2-th worker.
```
**Example 2:**
```
Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], K = 3
Output: 30.66667
Explanation: We pay 4 to 0-th worker, 13.33333 to 2-th and 3-th workers seperately. 
```

**Note:**

1. 1 <= K <= N <= 10000, where N = quality.length = wage.length
1. 1 <= quality[i] <= 10000
1. 1 <= wage[i] <= 10000
1. Answers within 10^-5 of the correct answer will be considered correct.

```
class Solution {
    public double mincostToHireWorkers(int[] q, int[] w, int K) {
        double[][] workers = new double[w.length][2];
        for (int i = 0; i < w.length; i++) {
            workers[i] = new double[]{((double) w[i]) / q[i], (double) q[i]};
        }
        Arrays.sort(workers, (a, b) -> Double.compare(a[0], b[0]));
        double res = Double.MAX_VALUE, qsum = 0;
        PriorityQueue<Double> pq = new PriorityQueue<>();
        for (double[] worker : workers) {
            qsum += worker[1];
            pq.add(-worker[1]);
            if (pq.size() > K) qsum += pq.poll();
            if (pq.size() == K) res = Math.min(res, qsum * worker[0]);
        }
        return res;
    }
}
```
### [858. Mirror Reflection](https://leetcode.com/contest/weekly-contest-90/problems/mirror-reflection/)
There is a special square room with mirrors on each of the four walls.  Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.  
The square room has walls of length p, and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.  
Return the number of the receptor that the ray meets first.  (It is guaranteed that the ray will meet a receptor eventually.)
**Example 1:**
```
Input: p = 2, q = 1
Output: 2
Explanation: The ray meets receptor 2 the first time it gets reflected back to the left wall.
```

![image](https://drive.google.com/uc?id=1FbPFKkJfS_DqQdI1w_AMw4c_cLheHrHO)

**Note:**   

1. 1 <= p <= 1000
2. 0 <= q <= p

```java
class Solution {
    int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    public int mirrorReflection(int p, int q) {
        /*
        It can be expanded to this...
        ...
        |-0
        | |
        2-1
        | |
        |-0
        | |
        2-1
        | |
        |-0
        you just need to know ?q=kp (?,k belong to Z)
        */
        int vertlen = p * q / gcd(p, q);
        int box = vertlen / p;
        if (box % 2 == 0) return 0;
        int reftime = vertlen / q;
        if (reftime % 2 == 0) return 2;
        return 1;
    }

```
### [140. Word Break II](https://leetcode.com/problems/word-break-ii/description/)

Given a **non-empty** string s and a dictionary wordDict containing a list of **non-empty** words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

**Note:**

* The same word in the dictionary may be reused multiple times in the segmentation.
* You may assume the dictionary does not contain duplicate words.
**Example 1:**
```
Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
```
**Example 2:**
```
Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
```
**Example 3:**
```
Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
```
### [855. Exam Room](https://leetcode.com/articles/exam-room/)
```java
class Solution {
    private List<String> breakS(String s, Set<String> dic, Map<String, List<String>> memo) {
        if (memo.containsKey(s)) return memo.get(s);
        List<String> res = new LinkedList<>();
        if (s.length() == 0) {
            res.add("");
            return res;
        }
        for (String ds : dic) {
            if (s.startsWith(ds)) {
                String sub = s.substring(ds.length());
                List<String> subList = breakS(sub, dic, memo);
                for (String su : subList) {
                    res.add(ds + (su.isEmpty() ? "" : " ") + su);
                }
            }
        }
        memo.put(s, res);
        return res;

    }

    public List<String> wordBreak(String s, List<String> wordDict) {
        List<String> res = new LinkedList();
        if (s.length() == 0) return res;
        Set<String> dic = new HashSet(wordDict);
        Map<String, List<String>> map = new HashMap<>();
        breakS(s, dic, map);
        return map.get(s);
    }
}
```
In an exam room, there are `N` seats in a single row, numbered `0, 1, 2, ..., N-1`.   
When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the room, then the student sits at seat number 0.).  
Return a class `ExamRoom(int N)` that exposes two functions: `ExamRoom.seat()` returning an int representing what seat the student sat in, and `ExamRoom.leave(int p)` representing that the student in seat number p now leaves the room.  It is guaranteed that any calls to `ExamRoom.leave(p)` have a student sitting in seat `p`.  
**Example 1:**
```
Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
Output: [null,0,9,4,2,null,5]
Explanation:
ExamRoom(10) -> null
seat() -> 0, no one is in the room, then the student sits at seat number 0.
seat() -> 9, the student sits at the last seat number 9.
seat() -> 4, the student sits at the last seat number 4.
seat() -> 2, the student sits at the last seat number 2.
leave(4) -> null
seat() -> 5, the student​​​​​​​ sits at the last seat number 5.
​​​​​​​
```
**Note:**

1. 1 <= N <= 10^9
1. ExamRoom.seat() and ExamRoom.leave() will be called at most 10^4 times across all test cases.
1. Calls to ExamRoom.leave(p) are guaranteed to have a student currently sitting in seat number p.

### [854. K-Similar Strings](https://leetcode.com/problems/k-similar-strings/discuss/139872/Java-Backtracking-with-Memorization/146428)
Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.

Given two anagrams A and B, return the smallest K for which A and B are K-similar.

**Example 1:**
```
Input: A = "ab", B = "ba"
Output: 1
```
**Example 2:**
```
Input: A = "abc", B = "bca"
Output: 2
```
**Example 3:**
```
Input: A = "abac", B = "baca"
Output: 2
```
**Example 4:**
```
Input: A = "aabc", B = "abca"
Output: 2
```
**Note:**
1. 1 <= A.length == B.length <= 20
1. A and B contain only lowercase letters from the set {'a', 'b', 'c', 'd', 'e', 'f'}

Simple and straightforward. Swap the characters in A using backtracking to get close to B.
Use a map to memorize.
```java


class Solution {
    public int kSimilarity(String A, String B) {
        Map<String, Integer> map = new HashMap<>();
        return backtrack(A.toCharArray(), B, map, 0);
    }
    private int backtrack(char[] A, String B, Map<String, Integer> map, int i) {
        String sa = new String(A);
        if (sa.equals(B)) {
            return 0;
        }
        if (map.containsKey(sa)) {
            return map.get(sa);
        }
        int min = Integer.MAX_VALUE;
        while (i < A.length && A[i] == B.charAt(i)) {
            i++;
        }
        for (int j = i + 1; j < B.length(); j++) {
            if (A[j] == B.charAt(i)) {
                swap(A, i, j);
                int next = backtrack(A, B, map, i + 1);
                if (next != Integer.MAX_VALUE) {
                    min = Math.min(min, next + 1);
                }
                swap(A, i, j);
            }
        }
        map.put(sa, min);
        return min;
    }
    private void swap(char[] cs, int i, int j) {
        char temp = cs[i];
        cs[i] = cs[j];
        cs[j] = temp;
    }
}
```















### [134. Gas Station](https://leetcode.com/problems/gas-station/discuss/42568/Share-some-of-my-ideas.)

There are N gas stations along a circular route, where the amount of gas at station i is `gas[i]`.  
You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.   
Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.   
**Note:**  
- If there exists a solution, it is guaranteed to be unique.
- Both input arrays are non-empty and have the same length.
- Each element in the input arrays is a non-negative integer.  

**Example 1:**
```
Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```
**Example 2:**
```
Input: 
gas  = [2,3,4]
cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
```
I have thought for a long time and got two ideas:
1. If car starts at A and can not reach B. Any station between A and B
can not reach B.(B is the first station that A can not reach.)
1. If the total number of gas is bigger than the total number of cost. There must be a solution.  
Here is my solution based on those ideas:
```
 public int canCompleteCircuit(int[] gas, int[] cost) {
        int start = 0,total = 0,tank = 0;

        //if car fails at 'start', record the next station
        for(int i = 0; i < gas.length; i++) {
            tank += gas[i] - cost[i];
            if (tank < 0) {
                start = i + 1; //move starting position forward
                total += tank; //add the negative tank value to total
                tank = 0; //reset tank
            }
        }
        //negative total + positive tank should be 0 or more, if so we can do a round trip and return start
        return (total+tank < 0)? -1: start;
    }
```
Proof of idea 1:  
- Assume A is reachable to any points before B.
The gas on car when it is at station A is 0.
- When the car reaches station x (x is between A and B), the gas on car is g (and g >= 0).
- If starting from x with gas amount g could not reach B, then starts from x with gas amount 0 could not reach B.
- For cases when there are stations between A and B that are not reachable from A, we can reduce these cases to the above situation.  

Proof of idea 2:
- We assume that a car could run even when there is negative amount of oil and the oil dash board would goes down to the negative space. (let's imagine that would happen)
- Then we start from station 0, and keep track of the amount of oil. When we go to the end of station, our oil dash board amount would be g (g >= 0)
There would be a toughest time that the oil dash board shows the minimum amount of oil. Assume the position is x;
- We start from x and goes to the end of station. Then we will never come to the situation that our oil dash board goes below 0.
- We go from end of station to station 0. We have oil g left.
- We start from station 0 and then to x. We will never come to the situation that our oil dash board goes below 0;
- Approved

### [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/discuss/41057/Simple-O(n)-with-Explanation-Just-walk-each-streak) 
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.  
Your algorithm should run in O(n) complexity.  
**Example:**
```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```
```java
class Solution {
    public int longestConsecutive(int[] nums) {
        
        Set<Integer> set = new HashSet();
        for(int n:nums) set.add(n);
        int res = 0;
        for(int i:nums){
            int count = 1;
            if(!set.contains(i-1)) {
                int y = i+1;
                while(set.contains(y)) y++;
                res= Math.max(res, y-i);
            }
        }
        return res;
    }
}
```
### [132. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/description/)
Given a string s, partition s such that every substring of the partition is a palindrome.  
Return the minimum cuts needed for a palindrome partitioning of s.  
**Example:**
```
Input: "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
```
```java
class Solution {
   private void find(String s, int l, int r, int[] dp) {
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
            if (l == 0) dp[r] = 0;
            else {
                dp[r] = Math.min(dp[r], dp[l-1] + 1);
            }
            l--;
            r++;
        }
    }

    public int minCut(String s) {
        int[] dp = new int[s.length()];
        for (int i = 0; i < s.length(); i++) {
            dp[i] = i;
        }
        for (int i = 0; i < s.length(); i++) {
            find(s, i, i, dp);
            find(s, i, i + 1, dp);
        }
        return dp[s.length() - 1];

    }
}
```
### [850. Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/description/)
We are given a list of (axis-aligned) `rectangles`.  Each `rectangle[i] = [x1, y1, x2, y2]`, where (x1, y1) are the coordinates of the bottom-left corner, and (x2, y2) are the coordinates of the top-right corner of the `ith` rectangle.

Find the total area covered by all rectangles in the plane.  Since the answer may be too large, return it modulo `10^9 + 7`.

![image](https://drive.google.com/uc?id=1jpZ-jXJ8cX9rpJeOhJwZ0pw5rxt6bAcg)

**Example 1:**
```
Input: [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
Output: 6
Explanation: As illustrated in the picture.
```
**Example 2:**
```
Input: [[0,0,1000000000,1000000000]]
Output: 49
Explanation: The answer is 10^18 modulo (10^9 + 7), which is (10^9)^2 = (-7)^2 = 49.
```
**Note**:  
- 1 <= rectangles.length <= 200
- rectanges[i].length = 4
- 0 <= rectangles[i][j] <= 10^9
- The total area covered by all rectangles will never exceed 2^63 - 1 and thus will fit in a 64-bit signed integer.
```java
class Solution {
        public int rectangleArea(int[][] rectangles) {
        Set<Integer> xs = new HashSet();
        Set<Integer> ys = new HashSet();
        for (int[] r : rectangles) {
            xs.add(r[0]);
            xs.add(r[2]);
            ys.add(r[1]);
            ys.add(r[3]);
        }
        List<Integer> xsort = new ArrayList<>(xs);
        List<Integer> ysort = new ArrayList<>(ys);
        Collections.sort(xsort);
        Collections.sort(ysort);
        Map<Integer, Integer> xmap = new HashMap<>();
        Map<Integer, Integer> ymap = new HashMap<>();
        for (int i = 0; i < xsort.size(); i++) {
            xmap.put(xsort.get(i), i);
        }

        for (int i = 0; i < ysort.size(); i++) {
            ymap.put(ysort.get(i), i);
        }
        boolean[][] grid = new boolean[xmap.size()][ymap.size()];
        for (int[] r : rectangles) {
            for (int x = xmap.get(r[0]); x < xmap.get(r[2]); x++) {
                for (int y = ymap.get(r[1]); y < ymap.get(r[3]); y++) {
                    grid[x][y] = true;
                }

            }
        }
        long res = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j]) {
                    res += (long)(xsort.get(i + 1) - xsort.get(i)) * (ysort.get(j + 1) - ysort.get(j));
                }
            }
        }
        return (int) (res % 1000000007);
    }
}
```

### [851. Loud and Rich](https://leetcode.com/contest/weekly-contest-88/problems/loud-and-rich/)

In a group of N people (labelled `0, 1, 2, ..., N-1`), each person has different amounts of money, and different levels of quietness.  
For convenience, we'll call the person with label `x`, simply "person `x`".  
We'll say that `richer[i] = [x, y]` if person `x` definitely has more money than person `y`.  Note that richer may only be a subset of valid observations.

Also, we'll say `quiet[x] = q` if person `x` has quietness `q`.

Now, return `answer`, where `answer[x] = y` if `y` is the least quiet person (that is, the person `y` with the smallest value of `quiet[y]`), among all people who definitely have equal to or more money than person `x`.

 

**Example 1:**
```
Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
Output: [5,5,2,5,4,5,6,7]
Explanation: 
answer[0] = 5.
Person 5 has more money than 3, which has more money than 1, which has more money than 0.
The only person who is quieter (has lower quiet[x]) is person 7, but
it isn't clear if they have more money than person 0.

answer[7] = 7.
Among all people that definitely have equal to or more money than person 7
(which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x])
is person 7.
```
```java
class Solution {
  private int dfs(int target, List<List<Integer>> tree, int[] quiet, int[] res) {
        if (res[target] >= 0) return res[target];
        res[target] = target;
        for (int i : tree.get(target)) {
            if (quiet[res[target]] > quiet[dfs(i, tree, quiet, res)]) res[target] = res[i];
        }
        return res[target];
    }

    public int[] loudAndRich(int[][] richer, int[] quiet) {
        ArrayList<List<Integer>> tree = new ArrayList<>();
        for (int i = 0; i < quiet.length; i++) tree.add(new LinkedList<>());
        for (int[] a : richer) {
            tree.get(a[1]).add(a[0]);
        }

        int[] res = new int[quiet.length];
        Arrays.fill(res, -1);

        for (int i = 0; i < res.length; i++) {
            dfs(i, tree, quiet, res);
        }

        return res;
    }
}
```
The other answers can be filled out with similar reasoning.  
**Note:**  
1.  1 <= quiet.length = N <= 500
2.  0 <= quiet[i] < N, all quiet[i] are different.
3.  0 <= richer.length <= N * (N-1) / 2
4.  0 <= richer[i][j] < N
5.  richer[i][0] != richer[i][1]
6.  richer[i]'s are all different.
7.  The observations in richer are all logically consistent.

### [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/discuss/41963/Java:-Backtracking-solution.)
Given a string s, partition s such that every substring of the partition is a palindrome.  
Return all possible palindrome partitioning of s.  
**Example:**
```
Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
```

```java
Class Solution{
    List<List<String>> resultLst;
    ArrayList<String> currLst;

    public List<List<String>> partition(String s) {
        resultLst = new ArrayList<>();
        currLst = new ArrayList<>();
        backTrack(s, 0);
        return resultLst;
    }

    public void backTrack(String s, int l) {
        if (currLst.size() > 0 //the initial str could be palindrome
                && l >= s.length()) {
            List<String> r = (ArrayList<String>) currLst.clone();
            resultLst.add(r);
        }
        for (int i = l; i < s.length(); i++) {
            if (isPalindrome(s, l, i)) {
                if (l == i)
                    currLst.add(Character.toString(s.charAt(i)));
                else
                    currLst.add(s.substring(l, i + 1));
                backTrack(s, i + 1);
                currLst.remove(currLst.size() - 1);
            }
        }
    }

    public boolean isPalindrome(String str, int l, int r) {
        if (l == r) return true;
        while (l < r) {
            if (str.charAt(l) != str.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }
}
```

### [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/discuss/5651/Easy-DP-Java-Solution-with-detailed-Explanation)
Here are some conditions to figure out, then the logic can be very straightforward.
```
1.If p.charAt(j) == s.charAt(i) :  dp[i][j] = dp[i-1][j-1];
2.If p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1];
3.If p.charAt(j) == '*': 
    //here are two sub conditions:
    1 if p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]  //in this case, a* only counts as empty
    2.if p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.':
        dp[i][j] = dp[i-1][j]    //in this case, a* counts as multiple a 
        or dp[i][j] = dp[i][j-1]   // in this case, a* counts as single a
        or dp[i][j] = dp[i][j-2]   // in this case, a* counts as empty
```
Here is the solution

```
public boolean isMatch(String s, String p) {

    if (s == null || p == null) {
        return false;
    }
    boolean[][] dp = new boolean[s.length()+1][p.length()+1];
    dp[0][0] = true;
    for (int i = 0; i < p.length(); i++) {
        if (p.charAt(i) == '*' && dp[0][i-1]) {
            dp[0][i+1] = true;
        }
    }
    for (int i = 0 ; i < s.length(); i++) {
        for (int j = 0; j < p.length(); j++) {
            if (p.charAt(j) == '.') {
                dp[i+1][j+1] = dp[i][j];
            }
            if (p.charAt(j) == s.charAt(i)) {
                dp[i+1][j+1] = dp[i][j];
            }
            if (p.charAt(j) == '*') {
                if (p.charAt(j-1) != s.charAt(i) && p.charAt(j-1) != '.') {
                    dp[i+1][j+1] = dp[i+1][j-1];
                } else {
                    dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1]);
                }
            }
        }
    }
    return dp[s.length()][p.length()];
}
```

### [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)
Given a non-empty binary tree, find the maximum path sum.  
For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.  
Example 1:
```
Input: [1,2,3]

       1
      / \
     2   3

Output: 6
```
Example 2:

```
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

```
#### [Solution](https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/39775/Accepted-short-solution-in-Java)
For every Node `a`, check the path `sum` with `a` as root, if `sum` > `currentMaxSum`, we can update `currentMaxSum = sum`.  
With recursion we can get all the path sum for every node. 

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    int maxSum = Integer.MIN_VALUE;
    private int findMax(TreeNode root){
        if(root == null) return 0;
        int left = findMax(root.left);
        int right = findMax(root.right);
        int sum = root.val + left + right;
        if(sum > maxSum) maxSum = sum;
        // Math.max(left, right)  because we're tracing the path, for a certain node, 
        // only its left or right could be added to the path.
        // Math.max(Math.max(left, right) + root.val, 0), 
        // if a node's path sum is negative,  we can safely ignore this node.
        return Math.max(Math.max(left, right) + root.val, 0);
        
    }
    public int maxPathSum(TreeNode root) {
        findMax(root);
        return maxSum;
    }
}
```


### [Remove K Digits](https://leetcode.com/problems/remove-k-digits/description/)
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

**Note**:
- The length of num is less than 10002 and will be ≥ k. 
- The given num does not contain any leading zero. 

Example 1:  
```
Input: num = "1432219", k = 3 
Output: "1219" 
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest. 
```
Example 2:
``` 
Input: num = "10200", k = 1 
Output: "200" 
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
```
Example 3:
```
Input: num = "10", k = 2
Output: "0" 
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
```
#### Solution [A greedy method using stack, O(n) time and O(n) space](https://leetcode.com/problems/remove-k-digits/discuss/88660/A-greedy-method-using-stack-O(n)-time-and-O(n)-space)
```
public class Solution {
    public String removeKdigits(String num, int k) {
        int digits = num.length() - k;
        char[] stk = new char[num.length()];
        int top = 0;
        // k keeps track of how many characters we can remove
        // if the previous character in stk is larger than the current one
        // then removing it will get a smaller number
        // but we can only do so when k is larger than 0
        for (int i = 0; i < num.length(); ++i) {
            char c = num.charAt(i);
            while (top > 0 && stk[top-1] > c && k > 0) {
                top -= 1;
                k -= 1;
            }
            stk[top++] = c;
        }
        // find the index of first non-zero digit
        int idx = 0;
        while (idx < digits && stk[idx] == '0') idx++;
        return idx == digits? "0": new String(stk, idx, digits - idx);
    }
}
```
### [Single Number II](https://leetcode.com/problems/single-number-ii/discuss/43295/Detailed-explanation-and-generalization-of-the-bitwise-operation-method-for-single-numbers)

The usual bit manipulation code is bit hard to get and replicate. I like to think about the number in 32 bits and just count how many 1s are there in each bit, and `sum %= 3` will clear it once it reaches 3. After running for all the numbers for each bit, if we have a 1, then that 1 belongs to the single number, we can simply move it back to its spot by doing `ans |= sum << i`;

This has complexity of O(32n), which is essentially O(n) and very easy to think and implement. Plus, you get a general solution for any times of occurrence. Say all the numbers have 5 times, just do `sum %= 5`.
```java
public int singleNumber(int[] nums) {
    int ans = 0;
    for(int i = 0; i < 32; i++) {
        int sum = 0;
        for(int j = 0; j < nums.length; j++) {
            if(((nums[j] >> i) & 1) == 1) {
                sum++;
                sum %= 3;
            }
        }
        if(sum != 0) {
            ans |= sum << i;
        }
    }
    return ans;
}
```

### [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/discuss/37327/easy-to-understand-dp-in-java)

Given a string **S** and a string **T**, count the number of distinct subsequences of **S** which equals **T**.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `"ACE"` is a subsequence of `"ABCDE"` while `"AEC"` is not).

**Example 1:**
```
Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
```
**Example 2:**
```
Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
```

The idea is the following:

* we will build an array mem where mem[i+1][j+1] means that S[0..j] contains T[0..i] that many times as distinct subsequences. Therefor the result will be mem[T.length()][S.length()].
* we can build this array rows-by-rows:
* the first row must be filled with 1. That's because the empty string is a subsequence of any string but only 1 time. So mem[0][j] = 1 for every j. So with this we not only make our lives easier, but we also return correct value if T is an empty string.
* the first column of every rows except the first must be 0. This is because an empty string cannot contain a non-empty string as a substring -- the very first item of the array: mem[0][0] = 1, because an empty string contains the empty string 1 time.  
So the matrix looks like this:

```
  S 0123....j
T +----------+
  |1111111111|
0 |0         |
1 |0         |
2 |0         |
. |0         |
. |0         |
i |0         |
```
From here we can easily fill the whole grid: for each `(x, y)`, we check if `S[x] == T[y]` we add the previous item and the previous item in the previous row, otherwise we copy the previous item in the same row. The reason is simple:
* if the current character in S doesn't equal to current character T, then we have the same number of distinct subsequences as we had without the new character.
* if the current character in S equal to the current character T, then the distinct number of subsequences: the number we had before plus the distinct number of subsequences we had with less longer T and less longer S.  
An example:  
`S: [acdabefbc]` and `T: [ab]`  

first we check with `a`:  
```
           * *
      S = [acdabefbc]
mem[1] = [0111222222]
```

then we check with `ab`:
```
               *  * ]
      S = [acdabefbc]
mem[1] = [0111222222]
mem[2] = [0000022244]
```
And the result is 4, as the distinct subsequences are:
```
      S = [a   b    ]
      S = [a      b ]
      S = [   ab    ]
      S = [   a   b ]
```      
See the code in Java:
```java
public int numDistinct(String S, String T) {
    // array creation
    int[][] mem = new int[T.length()+1][S.length()+1];

    // filling the first row: with 1s
    for(int j=0; j<=S.length(); j++) {
        mem[0][j] = 1;
    }
    
    // the first column is 0 by default in every other rows but the first, which we need.
    
    for(int i=0; i<T.length(); i++) {
        for(int j=0; j<S.length(); j++) {
            if(T.charAt(i) == S.charAt(j)) {
                mem[i+1][j+1] = mem[i][j] + mem[i+1][j];
            } else {
                mem[i+1][j+1] = mem[i+1][j];
            }
        }
    }
    
    return mem[T.length()][S.length()];
}
```
### [10-line template that can solve most 'substring' problems](https://leetcode.com/problems/minimum-window-substring/discuss/26808/Here-is-a-10-line-template-that-can-solve-most-'substring'-problems)
For most substring problem, we are given a string and need to find a substring of it which satisfy some restrictions. A general way is to use a hashmap assisted with two pointers. The template is given below.

```java
int findSubstring(string s){
        vector<int> map(128,0);
        int counter; // check whether the substring is valid
        int begin=0, end=0; //two pointers, one point to tail and one  head
        int d; //the length of substring

        for() { /* initialize the hash map here */ }

        while(end<s.size()){

            if(map[s[end++]]-- ?){  /* modify counter here */ }

            while(/* counter condition */){ 
                 
                 /* update d here if finding minimum*/

                //increase begin to make it invalid/valid again
                
                if(map[s[begin++]]++ ?){ /*modify counter here*/ }
            }  

            /* update d here if finding maximum*/
        }
        return d;
  }
```

One thing needs to be mentioned is that when asked to find maximum substring, we should update maximum after the inner while loop to guarantee that the substring is valid. On the other hand, when asked to find minimum substring, we should update minimum inside the inner while loop.  
The code of solving Longest Substring with At Most Two Distinct Characters is below:

```java
int lengthOfLongestSubstringTwoDistinct(string s) {
        vector<int> map(128, 0);
        int counter=0, begin=0, end=0, d=0; 
        while(end<s.size()){
            if(map[s[end++]]++==0) counter++;
            while(counter>2) if(map[s[begin++]]--==1) counter--;
            d=max(d, end-begin);
        }
        return d;
    }
```
The code of solving Longest Substring Without Repeating Characters is below:

```
int lengthOfLongestSubstring(string s) {
        vector<int> map(128,0);
        int counter=0, begin=0, end=0, d=0; 
        while(end<s.size()){
            if(map[s[end++]]++>0) counter++; 
            while(counter>0) if(map[s[begin++]]-->1) counter--;
            d=max(d, end-begin); //while valid, update d
        }
        return d;
    }
```



[^1]:[Accepted short solution in Java](https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/39775/Accepted-short-solution-in-Java)
[^2]:[A greedy method using stack, O(n) time and O(n) space](https://leetcode.com/problems/remove-k-digits/discuss/88660/A-greedy-method-using-stack-O(n)-time-and-O(n)-space)