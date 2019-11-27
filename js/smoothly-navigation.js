function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
smoothNav();


function smoothNav(){
    let aTags = document.querySelectorAll("nav.menu > ul > li > a");
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
            let tween = new TWEEN.Tween(coords)
                .to({ y: targetTop}, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() {
                    window.scrollTo(0,coords.y);
                })
                .start();
        }
    }
}