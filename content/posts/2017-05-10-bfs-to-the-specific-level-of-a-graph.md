Title: BFS遍历到图的指定层的一种方法
Date: 2017-05-10
Category: posts
Tags: algorithm
Slug: BFS-to-the-specific-level-of-a-graph
Author: Andy
Place: Beijing

[leetcode原题](https://leetcode.com/problems/word-ladder/#/description)

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

1. Only one letter can be changed at a time.
1. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

For example,

Given:

beginWord = `"hit"`

endWord = `"cog"`

wordList = `["hot","dot","dog","lot","log","cog"]`

As one shortest transformation is `"hit" -> "hot" -> "dot" -> "dog" -> "cog"`,return its length `5`.

Note:

* Return 0 if there is no such transformation sequence.
* All words have the same length.
* All words contain only lowercase alphabetic characters.
* You may assume no duplicates in the word list.
* You may assume beginWord and endWord are non-empty and are not the same.

这个题可以用图的思路来解答，把beginWord当成是图的root节点，每个词通过一次变换的词作为这个节点的子节点，从beginWord开始遍历搜索endWord，所有的路径中最小的那些就是答案。当然，遍历的过程中要注意，这是一个有环图，要记录已经遍历过的节点。因为是路径搜索，要保存路径，所以最简单的想法是使用DFS对整个图进行搜索，最后将最短路径取出来。然而，这个方法行不通，尤其是在字典比较大的时候，树特别深，会超时。如果对整个树进行BFS也会有一样的结果，都会超时。一个优化的思路就是只对graph进行遍历，一直到endWord第一次出现的那一层终止，因为要找的是最短变换，后面的遍历没有必要。传统的BFS算法使用一个队列来保存将要遍历的节点列表，但是并不能知道当前遍历节点所在的层数。所以就用一个Map<String, Integer>来保存每个节点第一次出现的层数，endWord第一次出现的那一层，就是迭代要终止的那一层，假设为minLevel。在遍历完minLevel以后，就可以终止算法。

最终要输出变换路径，可以一边遍历，一边构造图的结构。这个问题是有向有环图，可以使用`Map<String, Set<String>> graph`来构造整个图。

最终，使用递归打印出构造出来的`graph`中所有`beginWord->endWord`之间的路径。

详细代码见:[263ms Easy to Understand Java Solution Using Simple BFS](https://discuss.leetcode.com/topic/88859/263ms-easy-to-understand-java-solution-using-simple-BFS)

这个问题还有一个简化版的问题[Word Ladder](https://leetcode.com/problems/word-ladder/#/description)，只要求出`beginWord`和`endWord`之间最短变换的路径长度。可以用上面的解法，或者直接DFS这个图，第一次遇到`endWord`时返回路径长度即可。

###References
[Share two similar Java solution that Accpted by OJ.](https://discuss.leetcode.com/topic/2857/share-two-similar-java-solution-that-accpted-by-oj/2)


