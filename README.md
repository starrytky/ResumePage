# ResumePage

## 导航栏下的div
```css
.topNavBar nav > ul > li > a {    font-size: 12px;    color: inherit;    font-weight: bold;    border-bottom: 3px solid transparent;    border-top: 3px solid transparent;    padding-top: 5px;    padding-bottom: 5px;    display: block;
    position: relative;}
.topNavBar nav > ul > li > a:hover::after {    content: '';    display: block;    position: absolute;    left: 0;    top: 100%;   width: 100%;   background: rgb(232, 103, 107);    height: 3px;}
```

## 立即执行函数与闭包的结合使用

- 1.立即执行函数使用person无法被外部访问
- 2.闭包是的匿名函数可以操作person
- 3.window.f1保存了匿名函数的地址
- 4.任何地方都可以使用window.f1

=> 任何地方都可以使用window.f1操作person，但是不能直接访问person