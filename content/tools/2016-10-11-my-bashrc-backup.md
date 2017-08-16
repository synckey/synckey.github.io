Title: My Bashrc Backup
Date: 2016-10-11
Tags: tools,vim,linux,config,macos
Slug: my-bashrc-backup
Author: Andy
Place: Beijing

    :::bash
    # .bashrc
    # Source global definitions
    if [ -f /etc/bashrc ]; then
    	. /etc/bashrc
    fi
    # User specific aliases and functions

    export LS_OPTIONS='--color=auto' # 如果没有指定，则自动选择颜色
    export CLICOLOR='Yes' #是否输出颜色
    export LSCOLORS='Exfxcxdxbxegedabagacad' #指定颜色
    alias ll='ls -l'
    export PS1="\[\e[0;31m\][\u@\H \w]\\$ \[\e[m\]"
    # vim:ts=4:sw=4
    export PATH=$PATH:/usr/local/bin/
