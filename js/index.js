var my$ = function (id) {
    return document.getElementById(id);
};
my$("portfolioAll").onclick = function () {
    my$("portfolioBar").className = "bar state-1"
};
my$("portfolioFramework").onclick = function () {
    my$("portfolioBar").className = "bar state-2"
};
my$("portfolioValina").onclick = function () {
    my$("portfolioBar").className = "bar state-3"
};

setTimeout(function () {
    my$("siteWelcome").classList.remove('active');
}, 1000);

window.onscroll = function(){
    window.scrollY > 0 ? my$("topNavBar").classList.add("sticky"):my$("topNavBar").classList.remove("sticky")
};

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
for (let i = 0;i<aTags.length;i++){
    aTags[i].onclick = function (x) {
        x.preventDefault();
        let a = x.currentTarget;
        let href = a.getAttribute("href");
        let element = document.querySelector(href);
        let top = element.offsetTop;
        window.scrollTo(0, top - 80);
    }
}
