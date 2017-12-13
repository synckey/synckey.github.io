Title: Java 中 volatile, spin lock 和 synchroized 的语义
Date: 2017.12.02
Tags: java
Slug: java-volatile-spinlock-synchronized
Author: Andy
Place: Beijing
status:draft

读《深入理解Java虚拟机》[^1]，对volatile，spin lock，synchronized　有了新的认识，整理记录如下。

### Java内存模型（Java Memory Model）
<div class="figure">
    <img src="/static/images/java-volatile-spinlock-synchronized-jmm.svg" alt="degree_deploma"  width="100%" class="img-responsive carousel-inner img-rounded"/>
    <div class="caption">线程，主内存，工作内存三者之间的关系[^1]</div>
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





### volatile
Java语言允许在线程间共享变量。为了保证共享变量的一致性可靠的更新，每个线程要获得该变量的锁从而对该变量进行排他性访问。    
Java还提供了一种在某些情况下比上锁更便捷的机制---volatile域。Java内存模型保证被声明为volatile的变量在所有线程中看到的值都是一致的。
将一个变量声明为volatile之后，它将具备两个特性:

1. 保证此变量对所有线程的可见性，这里的”可见性“是指当一条线程修改了这个变量的值，新值对于其他线程来说是立即可见的。
2. 使用volatile变量的第二个语义是禁止指令重排序优化，普通的变量仅仅保证在该方法的执行过程中是偶有依赖赋值结果的地方都能获取到正确的结果，
而不能保证变量赋值操作的顺序于程序代码中的执行顺序一致。

但是"基于volatile变量的运算在并发下是安全的"这个结论并不正确。因为虽然volatile变量的读写是线程安全的，但是运算操作并不是院子的，所以 volatile
变量的运算在并发下并不安全。因为运算操作并不是原子的，例如`x++`看上去是单独操作，但是却是由读取-修改-写入操作序列组成的组合操作。
由于volatile变量只能保证可见性，在不符合以下两条规则的运算场景中，我们然要通过加锁来保证原子性。

1. 对变量的写操作不依赖于当前值[^4]。
2. 该变量没有包含在具有其他变量的不变式中。  






    :::java
    @NotThreadSafe
    public class NumberRange {
        private int lower, upper;
        public int getLower() { return lower; }
        public int getUpper() { return upper; }
     
        public void setLower(int value) { 
            if (value > upper) 
                throw new IllegalArgumentException(...);
            lower = value;
        }
     
        public void setUpper(int value) { 
            if (value < lower) 
                throw new IllegalArgumentException(...);
            upper = value;
        }
    }



以上的代码，就算把`lower`,`upper`设置为volatile的也不能保证这个类是线程安全的。例如，如果初始状态是 (0, 5)，同一时间内，线程 A
调用 `setLower(4)` 并且线程 B 调用 `setUpper(3)`，显然这两个操作交叉存入的值是不符合条件的，那么两个线程都会通过用于保护不变式的检查，
使得最后的范围值是(4, 3) —— 一个无效值。我们需要使 
`setLower()` 和 `setUpper()` 操作原子化 —— 而将字段定义为 volatile 类型是无法实现这一目的的。

使用 volatile 变量的主要原因是其简易性：在某些情形下，使用 volatile 变量要比使用相应的锁简单得多。使用 volatile 变量次要原因是其性能：某些情况下，volatile 变量同步机制的性能要优于锁。
虽是如此，但是jvm中，对所实行了很多消除和优化，很难量化地认为 volatile 就会比 synchronized 快。在目前大多数的处理器架构上，volatile 
读操作开销非常低 —— 几乎和非 volatile 读操作一样。而 volatile 写操作的开销要比非 volatile 写操作多很多，因为要保证可见性需要实现内存界定，
即便如此，volatile 的总开销仍然要比锁获取低。


### spin lock(自旋锁)
Java中使用互斥同步会对性能产生比较大的影响，主要的原因是阻塞的实现。线程在等待获取一个排他锁到时候将会转入blocked状态，从而释放其占有的cpu，
这个状态的转入和恢复都需要转入内核态中完成，给系统的并发性能带来了很大的压力。而如果其他线程对锁的占用时间很短，这样的切换就不如直接不释放cpu
直接循环等待，不断的判断锁的可用状态

### synchronized





###References

[^1]: [深入理解Java虚拟机:JVM高级特性与最佳实践(第2版)](https://www.amazon.cn/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Java%E8%99%9A%E6%8B%9F%E6%9C%BA-JVM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7%E4%B8%8E%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5-%E5%91%A8%E5%BF%97%E6%98%8E/dp/B00D2ID4PK/ref=sr_1_1?ie=UTF8&qid=1512302879&sr=8-1&keywords=%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA)
[^2]: [JSR 133 (Java Memory Model) FAQ](https://www.cs.umd.edu/~pugh/java/memoryModel/jsr-133-faq.html)
[^3]: [jls9](https://docs.oracle.com/javase/specs/jls/se9/jls9.pdf)
[^4]: [正确使用 Volatile 变量](https://www.ibm.com/developerworks/cn/java/j-jtp06197.html)