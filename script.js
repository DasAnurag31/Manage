const hamburger=document.getElementById("Hamburger");
const open=document.getElementById("open");
const close=document.getElementById("close");
const menu=document.getElementById("mobile-menu");
const body=document.getElementById("body");
hamburger.onclick=()=>{
    // to open menu
    if(open.className=="" && close.className=="hidden")
    {
        open.className="hidden";
        close.className="";
        menu.classList.remove("hidden");
        console.log(menu.classList);
        body.classList.add("bg-op");
    }
    // to close menu
    else{
        menu.classList.add("hidden");
        open.className="";
        close.className="hidden";
    }
    
}