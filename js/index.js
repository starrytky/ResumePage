let my$ = function (id) {
    return document.getElementById(id);
};

let specialTags = document.querySelectorAll("[data-x]");
for (let i = 0;i<specialTags.length; i++){
    specialTags[i].classList.add("offset");
}


findCloset();
window.onscroll = function(){
    window.scrollY > 0 ? my$("topNavBar").classList.add("sticky"):my$("topNavBar").classList.remove("sticky");
    findCloset();
};
function findCloset(){
    let specialTags = document.querySelectorAll("[data-x]");
    let minIndex = 0;
    for (let i = 1;i<specialTags.length; i++){
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[i-1].offsetTop - window.scrollY)){
            minIndex = i;

        }
    }
    specialTags[minIndex].classList.remove("offset");
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href=\"#'+id+'\"]');
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;
    for (let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove("highlight");
    }
    li.classList.add("highlight");
}
let liTags = document.querySelectorAll("nav.menu > ul > li");
for (let i=0;i < liTags.length; i++){
    liTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add("active");
    };
    liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove("active");
    }
}
let aTags = document.querySelectorAll("nav.menu > ul > li > a");
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0;i<aTags.length;i++){
    aTags[i].onclick = function (x) {
        x.preventDefault();
        // let a = x.currentTarget;
        // let href = a.getAttribute("href");
        // let element = document.querySelector(href);
        // let top = element.offsetTop;
        let top  = document.querySelector(x.currentTarget.getAttribute("href")).offsetTop;
        let currentTop = window.scrollY;
        let targetTop = top - 80;
        let s = targetTop - currentTop;
        let coords = { y: currentTop};
        let t = Math.abs((s/100)*150);
        if (t>1500){
            t = 1100;
        }
        console.log(t);
        let tween = new TWEEN.Tween(coords)
            .to({ y: targetTop}, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                window.scrollTo(0,coords.y);
            })
            .start();
    }
}
var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView : 1,
    centeredSlides : true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
