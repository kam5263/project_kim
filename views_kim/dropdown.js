window.addEventListener("load", () => {
    var dropBtn = document.getElementsByClassName('dropbtn')[0];
    dropBtn.onclick = function() {
        var myDropdown = document.getElementById("myDropdown");
        myDropdown.classList.toggle('show');
    }
});
window.addEventListener("load", () => {
    var dropBtn = document.getElementsByClassName('dropbtn')[0];
    var dropDetailsSmall = document.getElementById('s');
    var dropDetailsMedium = document.getElementById('m');
    var dropDetailsLarge = document.getElementById('l');
    dropDetailsSmall.onclick = () => {
        dropBtn.textContent = dropDetailsSmall.textContent;
    }
    dropDetailsMedium.onclick = () => {
        dropBtn.textContent = dropDetailsMedium.textContent;
    }
    dropDetailsLarge.onclick = () => { 
        dropBtn.textContent = dropDetailsLarge.textContent;
    }
}); 
window.addEventListener("load", ()=>{
    var body = document.getElementsByTagName('body')[0];
    body.onclick = function(event) {
        if(!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for(var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')) {   
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});
    /*
     if(!event.target.matches('.dropbtn')) {
            var drowndowns = document.getElementsByClassName('dropdown-content');
            for(var i = 0; i < drowndowns.length; i++) {
                var openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    */