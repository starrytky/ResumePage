# ResumePage

## 导航栏下的div
```css
.topNavBar nav > ul > li > a {    font-size: 12px;    color: inherit;    font-weight: bold;    border-bottom: 3px solid transparent;    border-top: 3px solid transparent;    padding-top: 5px;    padding-bottom: 5px;    display: block;
    position: relative;}
.topNavBar nav > ul > li > a:hover::after {    content: '';    display: block;    position: absolute;    left: 0;    top: 100%;   width: 100%;   background: rgb(232, 103, 107);    height: 3px;}
```