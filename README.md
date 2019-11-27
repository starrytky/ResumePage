# ResumePage
>主要用于尝试mvc模式和使用swiper、tween等工具
## 知识点
### 1.MVC
M：**模块化** ，将每个功能js拆分成为独立的js文件
V：**视图层** ，每个功能所针对的html元素
C：**控制层** ，将js再拆分成view、init、事件绑定模块(这里可以再拆)

### 2、立即执行函数与闭包的结合使用

- 1.立即执行函数使用person无法被外部访问
- 2.闭包是的匿名函数可以操作person
- 3.window.f1保存了匿名函数的地址
- 4.任何地方都可以使用window.f1

=> 任何地方都可以使用window.f1操作person，但是不能直接访问person

## 主要问题

### 1。字体问题

在本地打开项目，icon没有出现，原因是协议原本是http或者是https换成本地是file
```html
<script src="//at.alicdn.com/t/font_1491778_n0pdzqeo03r.js"></script>
```
### 2.避免换行
white-space:nowrap;

### 3.Tween使用
按照官方文档加入css、js、在cdn的链接，没有出现缓动效果.

解决思路：换版本
```html
<script src="https://cdn.bootcss.com/tween.js/r14/Tween.js"></script>
```

### 4.swiper
#### 1.轮播图片
将相同比例的图片放入轮播图中，出现错位和轮播图被拉长的问题。

解决思路：直接给定宽高，之后居中，后面出尝试用flex给父元素，也可以实现效果。最后将轮播图居中，将轮播图中的图片左右居中
```css
section.portfolio #mySlides{    
    display: flex;    
    justify-content: center;    
    align-items: center;
}
section.portfolio .swiper-slide img{    
    display: block;    
    margin-left: auto;    
    margin-right: auto;    
    width: 100%;    
    border:none;
}
```
#### 2.更改样式失败
原因分析，main.css在swiper.css之前引入，写的css没有覆盖

#### 3.定位左右按键
将swiper-button-prev、swiper-button-next移出swiper-container

### 5.active和highlight
两个激活状态效果是相同的，所以一开始是将两个效果当一个效果写在同一个地方，之后将active和highlight分离，当鼠标移入用active，当内容到某个位置使用highlight。