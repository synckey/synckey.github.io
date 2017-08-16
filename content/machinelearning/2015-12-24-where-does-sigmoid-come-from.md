Title: Where does sigmoid come from 
Date: 2015-12-24
Tags: machine learning,technology,logistic regression
Slug: where-does-sigmoid-come-from
Author: Andy
Place: Beijing

>主要根据Andrew Ng的教学讲义整理。

逻辑回归(Logistic Regression)是机器学习中用的最广泛的算法之一，其中 $sigmoid$ 函数是逻辑回归用到的核心函数，它的输出形状如下:
<p align="center">
<img src="/static/images/sigmoid.svg" alt="sigmoid"  width="60%" />
</p>
书里面都说它的输出可以认为是预测的概率，但是，为什么是$sigmoid$，它是从哪来的呢？为什么可以它做二分类?书里面好像都没有说呢。

###1.逻辑回归的建模
首先从逻辑回归($Logistic$ $Regression$)的基本假设说起。在二分类中，我们假设 $y \in \lbrace0,1\rbrace$,在给定 $x$ 的情况下，很自然
就想到使用 $Bernoulli$ 对 $y$ 的条件分布进行建模。$Bernoulli$
分布可以认为是二项分布一个特例($n=1$)，其结果只能取$0$或1。假设实验成功的概率为$p$,则$Bernoulli$的概率密度函数和数学期望为:

$$
\begin{eqnarray\*}
    f(x) &=& p^x(1-p)^{1-x}\\\\
    E(y) &=& p
\end{eqnarray\*}
$$

###2.指数族分布($The$ $exponential$ $family$ $distribution$)

如果一个分布可以被写成如下形式，就称其服从指数族分布($The$ $exponential$ $family$ $distribution$):

$$
p(y;\eta)=b(x)exp\\{\eta^{T}T(x)-a(\eta)\\}
$$

选定了 $T,a,b$ 就定义了一个参数为 $\eta$ 的分布族，我们改变 $\eta$ ，就可以在该分布族内得到不同的分布。很多常见的分布 $Bernoulli,$ $Gaussian,$
$Bimomial,$ $Poisson$ 等，均属于指数族分布。下面的推导过程可以证明 $Bernoulli$ 是属于$The$ $exponential$ $family$ $distribution$ 的。


假设 $y\sim Bernoulli(p),y\in\lbrace {0,1}\rbrace$,则有 $ p(y=1) = p,p(y=0)=1-p $,$Bernoulli$的概率密度函数可以改写为:

$$
\begin{eqnarray\*}
p(y) &=& p^y(1-p)^{1-y} \\\\
     &=& exp\\{log[p^y(1-p)^{1-y}] \\} \\\\
     &=& exp\\{ ylog(p) + (1-y)log(1-p) \\} \\\\
     &=& exp\\{[log(\frac{p}{1-p})]y + log(1-p)\\}
\end{eqnarray\*}
$$

令 $\eta=log(\frac{p}{1-p})$, 则我们得到 $p,\eta $之间的关系，即:

$$
    p=\frac{1}{1+e^{-\eta}}
$$

看！这就是我们的*$sigmoid$*函数!同时 $p(y)=exp\lbrace \eta y - log(1+e^{\eta}) \rbrace$ ,我们有:

$$
\begin{eqnarray\*}
T(y)        &=& y \\\\
a(\eta)     &=& log(1+e^{\eta}) \\\\
b(y)        &=& 1
\end{eqnarray\*}
$$

符合指数族分布的定义。

###3.广义线性模型($Generalized$ $Linear$ $Models$)
假设我们有一个回归问题($regression$ $problem$)或者分类问题($classification$ $problem$)，我们要预测某些关于 $x$ 的随机变量 $y$ 的值。
要为这个问题推导一个$GLM$($Generalized$ $Linear$ $Model$),我们对 $y$ 关于 $x$ 的条件分布做以下三个假设:

1. $y|x;\theta  \sim$  $ExponentialFamily(\eta)$。
2. 在给定 $x$ 的情况下，我们的目标是预测 $T(y)$ 的期望。一般情况下，我们有 $ T(y)=y $,这意味着，我们希望我们的假设 $h$ 输出的结果 $h(x)$
满足 $h(x)=E[y|x]$ 。
3. $\eta(natural parameter)$ 与输入 $x$ 之间线性相关,即: $\eta=\theta^{T}x$。

其中第三个与其说是假设，倒不如说是我们的`设计选择`。有了三个假设，我们就可以推导出来非常优雅的学习算法，称为`GLM`。


$$
\begin{eqnarray\*}
T(y)        &=& y \\\\
a(\eta)     &=& log(1+e^{\eta}) \\\\
b(y)        &=& 1
\end{eqnarray\*}
$$

####逻辑回归($Logistic$ $Regression$)
在逻辑回归中，我们考虑的是二分类问题，所以有 $y \in \lbrace 0,1\rbrace $，很自然的我们假设 $y$ 是关于 $x$的$Bernoulli$分布，
即:$Bernoulli(p),y\in\lbrace {0,1}\rbrace$。因为$y|x;\theta  \sim  Bernoulli(p)$,则$E[y|x;\theta]=p$,所以我们有:
$$
\begin{eqnarray\*}
h_{\theta}(x)        &=& E[y|x;\theta] \\\\
                     &=& p             \\\\
                     &=& \frac{1}{1+e^{-\eta}} \\\\
                     &=& \frac{1}{1+e^{-\theta x}}
\end{eqnarray\*}
$$

$$
\begin{eqnarray\*}
T(y)        &=& y \\\\
a(\eta)     &=& log(1+e^{\eta}) \\\\
b(y)        &=& 1
\end{eqnarray\*}
$$

这就是为什么对 $y$  的预测使用 $ h_{\theta}(x)=\frac{1}{1+e^{-\theta x}} $方程。事实上，一旦你假设 $y|x;\theta  \sim  Bernoulli(p)$, 由GLM和指数族
分布的定义，就自然而然的给出了逻辑回归函数。


###References
[Andrew Ng Machine Learning ](http://open.163.com/special/opencourse/machinelearning.html)

[Michael I. Jordan The exponential family: Basics](http://www.cs.berkeley.edu/~jordan/courses/260-spring10/other-readings/chapter8.pdf)