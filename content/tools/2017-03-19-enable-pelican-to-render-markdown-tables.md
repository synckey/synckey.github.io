Title: Enable Pelican to Render Markdown Tables
Date: 2017.03.19
Tags: tools,pelican,blog
Slug: enable-pelican-to-render-markdown-tables
Author: Andy
Place: Beijing

Pelican will not process markdown style table in default. However, if you want to use this kind of tables, you can add the follow config to pelicanconf.py:

    :::python
    MARKDOWN = {
        'extension_configs': {
            'markdown.extensions.tables':{},
        }
    }
Then,you can use the following code to generate the table below:

    |First Header  | Second Header|
    |------------- | -------------|
    |Content Cell  | Content Cell|
    |Content Cell  | Content Cell|


|First Header  | Second Header|
|------------- | -------------|
|Content Cell  | Content Cell|
|Content Cell  | Content Cell|

By default,if you use bootstrap, the table will not have borders, you can tackle this problem by adding the following codes  to the end of your html file.

    :::javascript
    <script>
      $(document).ready(function () {
        $("table").attr("class","table table-condensed table-bordered");
      });
    </script>

###References

[Markdown extensions](https://pythonhosted.org/Markdown/extensions/tables.html)

[Pelican Document](http://docs.getpelican.com/en/stable/)

