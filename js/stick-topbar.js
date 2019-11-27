let my$ = function (id) {
    return document.getElementById(id);
};

window.addEventListener("scroll", function(){
    window.scrollY > 0 ? my$("topNavBar").classList.add("sticky"):my$("topNavBar").classList.remove("sticky");
    findCloset();
});

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