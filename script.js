let taskbar = document.getElementsByClassName("task-bar")[0];
let startmenu = document.getElementsByClassName("start-menu")[0];
taskbar.addEventListener("click", function(){
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-650px";
    }
    else{
        startmenu.style.bottom = "50px";
    }
})
