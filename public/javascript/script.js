function openNav() {
    document.getElementById("js-side_nav").style.width = "250px";
    document.getElementsByClassName("content")[0].style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("js-side_nav").style.width = "0";
    document.getElementsByClassName("content")[0].style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

(function(){
    document.querySelector('#header > #nav > ul > .icon').addEventListener('click', function(){
        document.querySelector('#header > #nav > ul').classList.toggle('responsive');
    });
})();
