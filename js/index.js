var my$ = function(id){
    return document.getElementById(id);
};
my$("portfolioAll").onclick =function(){
    my$("portfolioBar").className = "bar state-1"
};
my$("portfolioFramework").onclick =function(){
    my$("portfolioBar").className = "bar state-2"
};
my$("portfolioValina").onclick =function(){
    my$("portfolioBar").className = "bar state-3"
};