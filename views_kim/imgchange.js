window.addEventListener("load", ()=>{
    var LeftBtn = document.querySelector(".leftbtn");
    var arrImg = ['/mainImg1.jpg', '/mainImg2.jpg', '/mainImg3.jpg'];
    var cntleft = 1;
    LeftBtn.onclick = function() {
        var mainImg = document.querySelector("#main_image");
        if(cntleft >= arrImg.length){
            cntleft = 0;
        }
        cntleft++;
        mainImg.style.backgroundImage = "url(" + arrImg[cntleft-1] + ")";
    }
    
});
window.addEventListener("load", ()=>{
    var RightBtn = document.querySelector(".rightbtn");
    var arrImg = ['/mainImg1.jpg', '/mainImg2.jpg', '/mainImg3.jpg'];
    var cntright = arrImg.length;
    RightBtn.onclick = function() {
        var mainImg = document.querySelector("#main_image");
        cntright--;
        if(cntright < 0){
            cntright = arrImg.length-1;
        }
        mainImg.style.backgroundImage = "url(" + arrImg[cntright] + ")";
    }
});