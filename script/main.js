$(document).ready(function() {

    let page = $(".page");
    
    window.setInterval(function() {
        
            let rad = Math.floor(1 + Math.random() * 5);
            let div = $('<div></div>');
            div.css({
                "position": "fixed",
                "background-color": "white",
                "width": rad,
                "height": rad,
                "border-radius": 50,
                "top": Math.random() * screen.height + "px",
                "left": screen.width + 5 + "px"
            });
            div.addClass("moving-div");
            page.append(div);
        
    }, 50);

    window.setInterval(function() {
        for (let div of document.getElementsByClassName("moving-div")) {
            let speed = 2;
            div.style.left = parseInt(div.style.left, 10) - speed + "px";
            if (parseInt(div.style.left, 10) < 0)
                div.remove();
        }
    }, 1);

});