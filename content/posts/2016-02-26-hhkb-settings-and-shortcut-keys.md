Title: HHKB 设置与快捷键
Date: 2016-02-26
Category: posts
Tags: hhkb,keyboad
Slug: hhkb-settings-and-shortcut-keys
Author: Andy
Place: Beijing

入了hhkb的坑,买了一个hhkb types pro2,折腾了一阵子.个人感觉hhkb的手感并不比cherry青轴手感好,但是有一点比青轴好太多,就是按键很灵敏.以前我的cherry不知道是我自己人品不好买到瑕疵品了还是怎么回事,F1按的太多以后就总是有点不灵,而且Cherry的按键总是给人一种按下去粘粘的弹不起来的感觉(按键感觉,不是键帽材质)不是很清爽.比Cherry好的第二优点是使用寿命,机械键盘的开关说是有2000w次的寿命,理论上可以用5-8年,而hhkb属于静电电容键盘,按键的触发是根据电容的变化来判断的,每次敲击是没有物理接触的,所以经典电容理的开关理论上是不会坏的,可以作为程序猿传家宝传给儿子.虽然hhkb的手感并没有让人很惊艳,但是用一阵子之后再换回mac book自带的键盘就感觉差太多了,再加上熟悉了hhkb键盘布局以后用回mac的键盘老是误按,所以现在算是离不开hhkb了.

我用hhkb的开关是`011001`,主要是使用macintosh的键盘布局并且将delete键设置为'BS'.另外,也安装了[Karabiner](https://pqrs.org/osx/karabiner/index.html.en)这款神器,它一方面可以设置系统自动识别是否插入了外接键盘,如果插入了外接键盘,可以将mac的键盘disable掉,另一方面它具有强大的改键功能.硬件方面,买了一个miniusb右弯的接头,这样把hhkb放在mac键盘上的时候,线就不会弯曲到挡着屏幕了.

<p align="center">
<img src="/static/images/miniusb.jpg" alt="miniusb"  width="50%" class="img-responsive img-rounded"  title="An awesome picture caption!" />
</p>



hhkb的键盘布局最大的特点就把Control键移到了Caps键的位置,所以小拇指很容易就能按到它,所以hhkb的键盘布局对emacs非常友好.而mac os操作系统对emacs风格的快捷键原生就有支持,在界面中可以通过`CTRL+B`等快捷键移动光标,大大减少使用触摸板的时间.为了能充分发挥hhkb的功能,本来打算从vim迁移到emacs的,但是idea里面没有像IdeaVim这样好用的插件,再加上Idea里面的emacs keymap并不好用,所以就放弃了emacs,是的因为idea跟emacs不能很好的工作才放弃emacs的.

不过虽然不用emacs,但是记住emacs风格的快捷键还是很有帮助的,下面是一些最常用到的快捷键,在iTerm2和大部分mac应用窗口都可以使用.在浏览器的表单填写页面里面,某些快捷键会失效,比如:在百度的搜索栏俩面填写搜索词的时候`CTRL+N`没反应,这个时候在karabiner的emacs模式里面设置下就好了.

  - Ctrl+p shell中上一个命令,或者文本中移动到上一行
  - Ctrl+n shell中下一个命令,或者 文本中移动到下一行
  - Ctrl+r 往后搜索历史命令
  - Ctrl+s 往前搜索历史命令
  - Ctrl+f 光标前移
  - Ctrl+b 光标后退
  - Ctrl+a 到行首
  - Ctrl+e 到行尾
  - Ctrl+d 删除一个字符,删除一个字符,相当于通常的Delete键
  - Ctrl+h 退格删除一个字符,相当于通常的Backspace键
  - Ctrl+u 删除到行首
  - Ctrl+k 删除到行尾
  - Ctrl+l 类似 clear 命令效果
  - Ctrl+y 粘贴
  
###References
[码农神器HHKB Pro2入手与开箱](http://www.xiaozhou.net/got_hhkb_pro_2-2013-06-03.html)