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
}
