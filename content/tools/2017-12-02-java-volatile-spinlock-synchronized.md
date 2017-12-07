Title: Java 中 volatile, spin lock 和 synchronzied 的语义
Date: 2017.12.02
Tags: java
Slug: java-volatile-spinlock-synchronized
Author: Andy
Place: Beijing
status:draft


### Java内存模型（Java Memory Model）
<div class="figure">
    <img src="/static/images/java-volatile-spinlock-synchronized-jmm.svg" alt="degree_deploma"  width="100%" class="img-responsive carousel-inner img-rounded"/>
    <div class="caption">线程，主内存，工作内存三者之间的关系[[1](#understand_jvm)]</div>
 </div>
 
给定一个程序和一组执行序列，一个内存模型描述了一组执行序列是不是这个程序的合法执行序列。Java内存模型根据一系列规则来检测执行序列中的每个读操作和
其对应的写操作是不是合法，它描述了一个程序可能的行为。

Java中线程共享的数据：

* 实例变量
* 静态变量
* 构成数组对象的元素


线程私有的数据:

* 局部变量
* 方法的形式参数
* exception handler parameters(catch(Exception e)中的e)

对同一个变量的两个访问(reads or writes)中至少包含一个write操作时，称这两个操作是冲突的。


Footnotes[^1] have a label[^@#$%] and the footnote's content.





### volatile
Java语言允许在线程间共享变量。为了保证共享变量的一致性可靠的更新，每个线程要获得该变量的锁从而对该变量进行排他性访问。    
Java还提供了一种在某些情况下比上锁更便捷的机制---volatile域。Java内存模型保证被声明为volatile的变量在所有线程中看到的值都是一致的。  
但是"基于volatile变量的运算在并发下是安全的"这个结论并不正确。




###References

[^1]: [深入理解Java虚拟机:JVM高级特性与最佳实践(第2版)](https://www.amazon.cn/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Java%E8%99%9A%E6%8B%9F%E6%9C%BA-JVM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7%E4%B8%8E%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5-%E5%91%A8%E5%BF%97%E6%98%8E/dp/B00D2ID4PK/ref=sr_1_1?ie=UTF8&qid=1512302879&sr=8-1&keywords=%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA)
[^2]: [JSR 133 (Java Memory Model) FAQ](https://www.cs.umd.edu/~pugh/java/memoryModel/jsr-133-faq.html)
[^3]: [jls9](https://docs.oracle.com/javase/specs/jls/se9/jls9.pdf)