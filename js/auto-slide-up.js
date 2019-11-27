let specialTags = document.querySelectorAll("[data-x]");
addOffset();
addAndRemoveActive();

//添加offset
function addOffset(){
    for (let i = 0;i<specialTags.length; i++){
        specialTags[i].classList.add("offset");
    }
}
window.addEventListener("scroll", function(){
    removeOffset();
});
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