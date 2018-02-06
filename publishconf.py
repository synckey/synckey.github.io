#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

import os
import sys

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

sys.path.append(os.curdir)

TIMEZONE = 'Asia/Shanghai'
SITEURL = 'http://synckey.name'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

# DISQUS_SITENAME = "synckey"
# GOOGLE_ANALYTICS = ""
# DUOSHUO_SITENAME = u"synckey"
GOOGLE_ANALYTICS = "UA-55913313-1"
GOOGLE_GMT = 'GTM-K3XTKKX'
BAIDU_ANALYTICS = "5c7645d659d92aabca4e974b4aa61755"

SHOW_DRAFTS = False
