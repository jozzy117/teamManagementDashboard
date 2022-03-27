let toggleSidebar = function() {
    
    var toggle = document.getElementById("header-toggle");
    var nav = document.getElementById("nav-bar");
    var bodypd = document.getElementById("body-pd");
    var headerpd = document.getElementById("header");
    var user_icon = document.getElementById("user_down");
    var create_new = document.getElementById("create_new");
    nav.classList.toggle('show')
    toggle.classList.toggle('bx-x')
    bodypd.classList.toggle('body-pd')
    headerpd.classList.toggle('body-pd')
    user_icon.classList.toggle('d-none');
    create_new.classList.toggle('d-none');
    
}

document.addEventListener("DOMContentLoaded", function(event) {
    const linkColor = document.querySelectorAll('.nav_link')
        
     function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
     }
     linkColor.forEach(l=> l.addEventListener('click', colorLink))
});