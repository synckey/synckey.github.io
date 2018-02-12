Title: Notes for Leetcode
Date: 2016-10-20
Category: posts
Tags: algorithm
Slug: notes-for-leetcode.md
Author: Andy
Place: Beijing

## 1.Binary Number Representation 
```language-java
x = 0b1111; // which is equals to `x = 15`; and is useful when use the number for masking.
```
    
## 2.Rotate Function
### Original Question
原始问题链接：[Rotate Function](https://leetcode.com/problems/rotate-function/).

Given an array of integers $A$ and let $n$ to be its length.

Assume $B_k$ to be an array obtained by rotating the array $A$ $k$ positions clock-wise, we define a "rotation function" $F$ on $A$ as follow:
$$
F(k) = 0 * B_k[0] + 1 * B_k[1] + \cdots + (n-1) * B_k[n-1].
$$
Calculate the maximum value of $F(0), F(1), \cdots, F(n-1)$.
Example:
```language-java
A = [4, 3, 2, 6]
F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
```

So the maximum value of $F(0), F(1), F(2), F(3)$ is $F(3) = 26$.

### 思路([来源](https://discuss.leetcode.com/topic/58616/java-solution-o-n-with-non-mathametical-explaination/8))
定义新的函数 $D(n)$为 $B_k[0]=A[n]$时$F(n)$ 的值，求 $F(n)$ 的最大值等价于求 $D(n)$ 的最大值，从而有：
$$
   D(n) = D(n-1) - A.length*A[n];
$$
即可得解：

```language-java
public int maxRotateFunction(int[] A) {
    if (A.length <= 1) {
        return 0;
    }
    int max = Integer.MIN_VALUE;
    int sum = 0;
    int ai = 0;
    for (int i = 0; i < A.length; i++) {
        sum += A[i];
        ai += i * A[i];
    }
    max = ai;
    for (int i = A.length - 1; i > 0; i--) {
        ai += sum - A.length * A[i];
        max = Math.max(max, ai);
    }
    return max;
} 
``` 
## 3. Pascal's Triangle(杨辉三角)
### 问题

原始问题连接:[Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/).

Given an index $k(k=1,2,3,\cdots)$ , return the $k^{th}$ row of the Pascal's triangle.

For example, given k = 3,

Return `[1,3,3,1]`.

问题很简单，就是打印杨辉三角的指定列。
### 杨辉三角的性质
1. 第$n$行有$n$项。
1. 第$n$行数字和为$2^n-1$。 
1. 第$n$行的第$m$的数字为$C_{n}^{m-1}$(二项式系数)。

### 组合计算
$C_{n}^{m}=\frac{A_{n}^{m}}{n!}=\frac{n(n-1)(n-2)\cdots(n-m+1)}{m!}$

上述公式在计算的时候已经避免直接计算$n!$,防止溢出，最终得到的解如下(参考[JAVA combination number](https://discuss.leetcode.com/topic/62617/java-combination-number))：

```language-java
public int combine(int m, int n) {
    long res = 1;
    for (int i = 1; i <= n; i++) {
        res = res * (m - i + 1) / i;
    }
    return (int) res;
}

public List<Integer> getRow(int rowIndex) {
    List<Integer> result = new ArrayList(rowIndex);
    for (int i = 0; i <= rowIndex; i++) {
        result.add(combine(rowIndex, i));
    }
    return result;
    }
}
``` 
    
### 4.Convert Char to Numeric

```language-java
Character.getNumericValue('5');
int number = '5' - '0';
```
### 5. 将一个数字二进制表示的第一个1后面的所有位都置为1，例如input 是`5`，二进制表示是`101`，希望得到`111`。

### 6.素数(prime number)
#### 素数的定义
>质数（Prime number），又称素数，指在大于1的自然数中，除了1和该数自身外，无法被其他自然数整除的数（也可定义为只有1与该数本身两个因数的数）。
### 7. LinkedHashSet
这个集合会保持元素的插入顺序，所以，如果想要用它做`FIFO`队列，出栈的时候要从第一个元素开始删。在[LFU Cache](https://leetcode.com/problems/lfu-cache/#/description)这题中，可以用到`LinkedHashSet`，因为从中删除元素的复杂度是O(1)。
    
```language-java 
LinkedHashSet<Integer> set = new LinkedHashSet();
set.add(1);
set.add(2);
set.add(3);
System.out.println(set);
//:~output [1, 2, 3]
```
### 8. Word Ladder II
太麻烦了，单独开一篇：[BFS遍历到图的指定层的一种解法。](/posts/2017/05/10/BFS-to-the-specific-level-of-a-graph.html)
    
### 9. 中位数定义
如果有一组数据(假设其个数为n)，将其排序，如果n为奇数，则中间的那个数为中位数，如果n为偶数，则中间两个数的平均值为这组数据的中位数。

### 10. 计算平均值防止溢出
一般情况下我们想要计算两个int:a,b的平均值时，我们会使用$(a+b)/2$的方式，如果a,b为数组的下标，这么做一般没有问题。但是如果a,b的值很大，a + b > Integer.MAX_VALUE时，这样做就会导致溢出，从而返回错误的结果。所以保守起见，可以使用$a+(a-b)/2$的方式来计算a,b的平均值，不会溢出哦。

[^1]:[Solution to Convert a Number to Hexadecimal](https://discuss.leetcode.com/topic/65028/java-clean-code-with-explanations-and-running-time-2-solutions)
[^2]:[Rotate Function](https://leetcode.com/problems/rotate-function/)
[^3]:[Java Solution O(n) with non mathametical explaination](https://discuss.leetcode.com/topic/58616/java-solution-o-n-with-non-mathametical-explaination/8)
[^4]:[素数](https://zh.wikipedia.org/wiki/%E7%B4%A0%E6%95%B0)