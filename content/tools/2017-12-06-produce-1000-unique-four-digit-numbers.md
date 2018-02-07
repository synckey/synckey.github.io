Title: Produce 1000 Unique Four Digit Numbers
Date: 2017.12.06
Tags: java, algorithm
Slug: produce-1000-unique-four-digit-numbers
Author: Andy
Place: Beijing


>Produce 1000 unique four digit numbers.  
>Conditions:    
>1. No consecutive numbers. 2268, 1155 are not acceptable.   
>2. No sequential numbers. 1234, 1856 are not acceptable.  

题目的要求很简单，可以从根节点构建一棵树，向这个树的节点添加节点时，只要满足题目的两个要求:a.每一位不与前一位相同，b.每一位不是前一个数字的顺序下一个数字。从根节点到叶子节点每条路径上的节点所组成的数字，就是答案。当然，题目要求的数字位数是4位，所以只要构建一颗深度为5的树就行了，这棵树的根节点为空，不需要要算在路径里面。

```
import java.util.ArrayList;
import java.util.List;
```
import java.util.ArrayList;
import java.util.List;
    /**
     * Created by andy on 06/12/2017.
     */
     
    public class GenNumbers {
        private static int[] digits = new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9,};
        private static final int RESULT_SIZE = 1000;
    
        /**
         * @param tempresult
         * @param previous  
         * @param result
         */
        private static void genNumber(int tempresult, int previous, 
                                      List<Integer> result, int depth, 
                                      int maxDepth) {
            if (result.size() >= RESULT_SIZE || depth > maxDepth) {
                return;
            }
            for (int i : digits) {
                if (i == previous || i == previous + 1) {
                    continue;
                }
                int tmp = tempresult * 10 + i;
                if (depth == maxDepth && result.size() < RESULT_SIZE) {
                    result.add(tmp);
                } else {
                    genNumber(tmp, i, result, depth + 1, maxDepth);
                }
            }
        }
    
        public static void main(String[] args) {
            List<Integer> result = new ArrayList<Integer>(RESULT_SIZE);
            genNumber(0, -1, result, 0, 3);
            System.out.println(result);
            System.out.println(result.size());
        }
    }
```