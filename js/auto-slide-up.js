let specialTags = document.querySelectorAll("[data-x]");
addOffset();
addAndRemoveActive();

window.addEventListener("scroll", function(){
    removeOffset();
    findCloset();
});

//添加offset
function addOffset(){
    for (let i = 0;i<specialTags.length; i++){
        specialTags[i].classList.add("offset");
    }
}
//删除offset
function removeOffset(){
    let minIndex = 0;
    for (let i = 1;i<specialTags.length; i++){
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[i-1].offsetTop - window.scrollY)){
            minIndex = i;
        }
    }
    specialTags[minIndex].classList.remove("offset");
}
//增加移除active
function addAndRemoveActive(){
    let liTags = document.querySelectorAll("nav.menu > ul > li");
    for (let i=0;i < liTags.length; i++){
        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add("active");
        };
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove("active");
        }
    }
}
//增加移除高亮
function findCloset(){
    let specialTags = document.querySelectorAll("[data-x]");
    let minIndex = 0;
    for (let i = 1;i<specialTags.length; i++){
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[i-1].offsetTop - window.scrollY)){
            minIndex = i;
        }
    }
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href=\"#'+id+'\"]');
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;
    for (let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove("highlight");
    }
    li.classList.add("highlight");
}