var plusbtn = document.querySelector(".plus");
var crossbtn = document.querySelector(".cross");
var exbtnArr = document.querySelectorAll(".icon.ex");
var minimizeIcon = document.querySelectorAll(".icon.minus");

function plusbtnClick(){
    document.querySelector(".dialog").style.display = "flex"
}

function crossbtnClick(){
    document.querySelector(".dialog").style.display = "none"
}


function addTicket(){
    crossbtnClick();
    var boxes = document.querySelector(".wrapper main");
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    console.log(boxes);
    console.log(title);
    boxes.innerHTML = puranaHTML + `
    <div class = "box">
                <div class = "box-header">
                    <div class = "box-heading">${title.value}</div>
                    <div class = "icon minus">-</div>
                    <div class = "icon edit">E</div>
                    <div class = "icon ex">x</div>
                </div>
                <main><textarea name="" id="" cols="30" rows="10">${boxContent.value}</textarea></main>
            </div>`

title.value = "";
boxContent.value = "";
addDelTkLogic()
}
function addDelTkLogic(){
    var exbtnArr = document.querySelectorAll(".icon.ex");
    var minimizeIcon = document.querySelectorAll(".icon.minus");

    function exTicket(e){
        var box = e.target.closest(".box");
        box.style.display = "none";
    
    }
    function minimize(e){
        var box = e.target.closest(".box");
        console.log(box);
        if(box.querySelector("main").style.display !== "none"){
            box.querySelector("main").style.display = "none";
        }else{
            box.querySelector("main").style.display = "flex";
        }
    }
    for (let index = 0; index < exbtnArr.length; index++) {
        const element = exbtnArr[index];
        element.addEventListener("click", exTicket); 
    }
    for (let index = 0; index < minimizeIcon.length; index++) {
        const element = minimizeIcon[index];
        element.addEventListener("click", minimize); 
    }
    
}
plusbtn.addEventListener("click", plusbtnClick);
crossbtn.addEventListener("click", crossbtnClick);