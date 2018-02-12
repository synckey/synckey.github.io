Title: 让VIM记录文件上次编辑的位置
Date: 2016-03-11
Tags: tools,vim,linux,config
Slug: set-vim-to-remember-previous-eidt-place
Author: Andy
Place: Beijing

在`~/.vimrc`中加入如下配置:

```language-vim
autocmd BufReadPost *
\ if line("'\"")>0&&line("'\"")<=line("$") |
\ exe "normal g'\"" |
\ endif
autocmd BufReadPost *
\ if line("'\"")>0&&line("'\"")<=line("$") |
\ exe "normal g'\"" |
\ endif
syntax enable
set nu
```
    
[^1]:[让VIM记录文件上次编辑的位置](http://www.2cto.com/os/201311/255061.html)

