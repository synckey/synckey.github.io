Title: Plot Sigmoid in Matlab
Date: 2015-12-24
Tags: machine learning,technology,logistic regression
Slug: plot-sigmoid-in-matlab
Author: Andy
Wechat_logo: wechat_log_300x300_sigmoid.png
Place: Beijing

```language-matlab
a=2;
x=-10:0.1:10;
y=1./[1+exp(-a.*x)];
plot(x,y,'b');
grid on;
```
<p align="center">
<img src="/static/images/sigmoid.svg" alt="sigmoid"  width="50%" />
</p>

