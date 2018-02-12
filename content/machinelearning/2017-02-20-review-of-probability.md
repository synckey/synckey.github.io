Title:《概率论》复习笔记
Date: 2017-02-20
Tags: machine learning, deep learning, probability
Slug: review-of-probability
Author: Andy
Place: Beijing

####1. 随机事件和概率
#####1.1全概率公式
设事件 $A_1,A_2,\cdots,A_n$ 两两互不相容，$P(A_i)>0(i=1,2,\cdots,n)$，且$\sum\limits_{i=1}^{n}{A_i}=\Omega$，
则对任一事件$B$，有
$$
P(B)=\sum_{i=1}^{n}{P(A_i)\cdot P{(B|A_i)}}.
$$
满足公式中的$A_1,A_2,\cdots,A_n$  叫**完备事件组**。

#####1.2贝叶斯公式
设事件 $A_1,A_2,\cdots,A_n$ 构成完备事件组，则对任一事件 $B(P(B)>0)$，有
$$
  P(A_k|B)=\frac{P(A_k)P(B|A_k)}{\sum_{i=1}^{n}{P(A_i)P(B|A_i)}}   {   (k=1,2,\cdots,n)}.
$$

#####1.3伯努利概型
若实验$E$ 只有两种可能的结果：$A$ 及$\overline{A}$，记$P(A)=p,P(\overline{A})=1-p=q$，这种实验称为**伯努利(Bernoulli)实验**。 若将实验$E$ 重复$n$ 次，且每次实验结果互不影响（相互独立），则称为 **n重伯努利实验**。

设每次实验中，事件$A$发生的概率为$p(0<p<1)$，则在 $n$ 次 重复独立实验中，$A$ 发生$k$次的概率为:
$$
P_n(k)=C_n^kp^k(1-p)^{n-k},k=0,1,2,\cdots,n.
$$

####2.随机变量及其分布
设实验$E$的样本空间为$\Omega$，如果对每一个样本点$\omega\in\Omega$，都有唯一实数 $X(\omega)$与之对应，称$X=X(\omega)$为样本空间$\Omega$上的**随机变量**。
对于随机变量，一般分两类进行讨论，如果随机变量的取值只有有限个活无限可列个数值，则称这种随机变量为**离散型随机变量**。其余的统称为非离散型随机变量，在非离散型随机变量中，最重要的是**连续型随机变量**。
#####2.1离散型随机变量及其分布
######超几何分布
一般来说，在总共$N$ 件产品中，其中有$M$件次品，先从中任取$n$件（不放回地抽取），则这$n$件中所含的次品数$X$是一个离散随机变量，其概率分布为：
$$
P(X=k)=\frac{C_M^kC_{N-M}^{n-k}}{C_N^n},k=0,1,2,\cdots,l
$$
其中$l=min(M,n)$。通常称这个概率分布为**超几何分布**。
######两点分布
在**一次**伯努利实验中， 只有两个可能的结果，$A$或者$\overline{A}$，并且$P(A)=p,P((\overline{A}))=q=1-p$，若以$X$记事件$A$出现的次数，则$X$的分布列为:
$$
\begin{array}{c|cc}
X & 0 & 1   \\\\
\hline
P & q & p   \\\\
\end{array}
$$
即，$P(X=k)=p^kq^{1-k},k=0,1$，称$X$服从**两点分布**。

######二项分布
在$n$重伯努利实验中，若事件$A$出现的次数记为$X$，则随机变量$X$可能的取值是$0,1,2,\cdots,n$,相应概率分布为
$$
P(X=k)=C_n^kp^kq^{n-k},k=0,1,2,\cdots,n.
$$
式中$0<p<1,q=1-p$。称$X$服从参数为$n，p$ 的二项分布，记作$X\sim B(n,p)$。$(n+1)p$称为二项分布$B(n,p)$ 的**最可能出现次数**。
######泊松定理
设随即变量$X_n(n=1,2,\cdots,n)$服从参数$n,p_n$的二项分布，若$\mathop{lim}\limits_{n\to\infty}np_n=\lambda$，则有
$$
\lim_{n\to\infty}P(X_n=k)=\frac{\lambda ^ k}{k!}e^{-\lambda}
$$
根据泊松定理，当$n$较大而$p$较小是，有如下近似公式成立:
$$
C_n^kp^k(1-p)^{n-k}\approx\frac{\lambda ^ k}{k!}e^{-\lambda},\lambda=np.
$$

在实际应用中，当$n>10,p<0.1$时，可以用上式近似计算二项分布的概率。
######泊松分布
如果随即变量X的概率分布为
$$
P(X_n=k)=\frac{\lambda ^ k}{k!}e^{-\lambda},k=0,1,2,\cdots .
$$
式中$\lambda>0$是常数，则称$X$服从以$\lambda$为参数的泊松分布，记作$X\sim P(\lambda)$。

[^1]:[《概率论与数理统计》](https://www.amazon.cn/%E5%A4%A7%E5%AD%A6%E6%95%B0%E5%AD%A6%E6%95%99%E7%A8%8B-%E6%A6%82%E7%8E%87%E8%AE%BA%E4%B8%8E%E6%95%B0%E7%90%86%E7%BB%9F%E8%AE%A1/dp/B005EV51AO/ref=sr_1_1?ie=UTF8&qid=1487571721&sr=8-1&keywords=%E6%A6%82%E7%8E%87%E8%AE%BA%E4%B8%8E%E6%95%B0%E7%90%86%E7%BB%9F%E8%AE%A1+%E5%88%98%E5%BB%BA%E4%BA%9A)
