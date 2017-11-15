Title: Java8 笔记
Date: 2017.11.15
Tags: tools, java8
Slug: notes-of-java8
Author: Andy
Place: Beijing
status:draft

###Lambda
Lambda的基本语法

1. (parameters) -> expression
1. (parameters) -> {statements;}

从上述例子可以看粗Lambda有三个组成部分:a.参数列表，b.箭头，c.Lambda主体。主体部分如果只有一个简单的表达式，可以不加花括号，如果Lambda主体有多条语句，或者为控制流语句，则需要加花括号。以下是两条合法的Lambda表达式。

    :::java
    (Apple a1, Apple a2) -> a1.getWeight().compareTo(a2.getWeight());
    (Integer i) -> {return "Alan" + i;}

其中第二条因为return是一条控制流语句，必须要使用花括号。

**函数式接口**就是只定义`一个`抽象方法的接口。如:

    :::java
    public interface Runnable{
        void run();
    }




