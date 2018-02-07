#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'andy'
SITENAME = u"Andy's Blog"
SITEURL = 'http://localhost:8000'
DEFAULT_DATE_FORMAT = '%Y.%m.%d'
PATH = 'content'

TIMEZONE = 'Asia/Shanghai'

DEFAULT_LANG = u'en'
# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
USE_FOLDER_AS_CATEGORY = True

# EXTENSIONS = (['codehilite(css_class=github)', 'markdown.extensions.tables'])

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'github'},
        'markdown.extensions.tables': {},
        'markdown.extensions.def_list': {},
        'markdown.extensions.attr_list': {},
        'markdown.extensions.footnotes': {},
    },
}

# MD_EXTENSIONS = (['codehilite(css_class=github)', 'markdown.extensions.tables','extra'])
# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
DISQUS_SITENAME = u"synckey"
THEME = "simple_theme"
HIDE_SIDEBAR = True
# BOOTSTRAP_FLUID =  True
# PDF_PROCESSOR = True
PYGMENTS_STYLE = "github"

STATIC_PATHS = ['static', 'static/images/favicon.ico', 'static/CNAME']
# ARTICLE_PATHS = ['posts']
EXTRA_PATH_METADATA = {
    "static/images/favicon.ico": {"path": "favicon.ico"},
    "static/CNAME": {"path": "CNAME"},
    "static/robots.txt": {"path": "robots.txt"}
}

SITEMAP = {
    'exclude': ['drafts'],
    'format': 'txt'
}

ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}.html'
ARTICLE_SAVE_AS = ARTICLE_URL

DISPLAY_CATEGORIES_ON_MENU = False

PLUGIN_PATHS = ["plugins"]

# PLUGINS = ["neighbors", "bootstrapify", "better_tables","render_math"]
PLUGINS = ["neighbors", "bootstrapify", "better_tables", "sitemap"]

DEFAULT_WECHAT_PIC = "wechat_logo_300x300.jpg"
## for test
GOOGLE_ANALYTICS = ''
BAIDU_ANALYTICS = ''

SHOW_DRAFTS = True

BOOTSTRAPIFY = {
    'table': ['table', 'table-striped', 'table-hover'],
    'img': []
}
