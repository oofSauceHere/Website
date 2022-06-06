let i = 1;
function scroll() {
    if(i === 1) {
        document.getElementById('about').style.transform = "translateY(-100%)";

        document.getElementById('side').style.transform = "translateX(100%)";
        document.getElementById('side').style.visibility = "hidden";

        document.getElementById('nav').style.visibility = "visible";
        document.getElementById('nav').style.transform = "translateX(-5vw)";
    } else {
        document.getElementById('about').style.transform = "translateY(100%)";

        document.getElementById('side').style.visibility = "visible";
        document.getElementById('side').style.transform = "translateX(0%)";

        document.getElementById('nav').style.transform = "translateX(0%)";
        document.getElementById('nav').style.visibility = "hidden";
    }

    i *= -1;
}

let j = 360;
function rotatePFP() {
    document.getElementById('blurb-img').style.transform = "rotate(" + j + "deg)";
    j += 360;
}

document.getElementById('action-btn').addEventListener('click', scroll);
document.getElementById('blurb-img').addEventListener('click', rotatePFP);