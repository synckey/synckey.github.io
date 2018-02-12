Title: JVM Monitor Tool---jvisualvm
Date: 2016-07-26
Tags: java,posts,jvm,profile,trouble shooting
Slug: jvm-monitor-tool-jvisualvm
Author: Andy
Place: Beijing

## 通过 jvisualvm 查看 jvm 内部详细信息
```language-bash
jvisualvm -Dcom.sun.management.jmxremote.port=8999 -Dcom.sun.management.jmxremote.ssl=false \
-Dcom.sun.management.jmxremote.authenticate=false -Djava.rmi.server.hostname=10.86.46.252
```
     
## 查看哪个线程使用 cpu 最多
```language-bash
ps -mp 2633 -o THREAD,tid,time | sort -rn
```
找到占用 cpu 时间最多的线程。然后将线程 id 转换成16进制格式:

```language-bash
printf "%x\n" 3626
e18
```

最后用 jstack 查看线程的运行 stack:

```language-bash
jstack 2633 |grep e18 -A 30
```
    
[^1]:[生产环境下JAVA进程高CPU占用故障排查](http://blog.chinaunix.net/uid-10449864-id-3463151.html)
