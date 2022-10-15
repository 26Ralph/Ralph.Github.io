function start(){
    let selector = document.querySelector("h1");
    selector.style.setProperty("animation-name", "color");
    selector.style.setProperty("animation-duration", "1s");
    selector.style.setProperty("animation-iteration-count", "infinite");

    let selector2 = document.getElementById(2);
    selector2.style.setProperty("animation-name", "color");
    selector2.style.setProperty("animation-duration", "1s");
    selector2.style.setProperty("animation-iteration-count", "infinite");

    let selector3 = document.getElementById(3);
    selector3.style.setProperty("animation-name", "color");
    selector3.style.setProperty("animation-duration", "1s");
    selector3.style.setProperty("animation-iteration-count", "infinite");
}

function off(){
    let selector = document.querySelector("h1");
    selector.style.setProperty("animation-name", "color");
    selector.style.setProperty("animation-duration", "1s");
    selector.style.setProperty("animation-iteration-count", "0");

    let selector2 = document.getElementById(2);
    selector2.style.setProperty("animation-name", "color");
    selector2.style.setProperty("animation-duration", "1s");
    selector2.style.setProperty("animation-iteration-count", "0");

    let selector3 = document.getElementById(3);
    selector3.style.setProperty("animation-name", "color");
    selector3.style.setProperty("animation-duration", "1s");
    selector3.style.setProperty("animation-iteration-count", "0");
}

