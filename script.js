/* this entire thing is scuffed */
document.getElementById('action-btn').style.pointerEvents = "none";
setTimeout(() => {
    document.getElementById('action-btn').style.pointerEvents = "auto";
}, 1000);

let i = 1;
function scroll() {
    document.getElementById('action-btn').style.pointerEvents = "none";
    if(i === 1) {
        // document.getElementById('about').style.transform = "translateY(-100%)";
        document.getElementById('projects').style.transform = "translateY(-100%)";

        document.getElementById('side').style.transform = "translateX(100%)";
        document.getElementById('side').style.visibility = "hidden";

        setTimeout(() => {
            document.getElementById('nav').style.visibility = "visible";
            document.getElementById('nav').style.transform = "translateX(-5vw)";
        }, 1000);
    } else {
        // document.getElementById('about').style.transform = "translateY(100%)";
        document.getElementById('projects').style.transform = "translateY(100%)";

        document.getElementById('nav').style.transform = "translateX(0%)";
        setTimeout(() => {
            document.getElementById('nav').style.visibility = "hidden";
        }, 500);

        setTimeout(() => {
            document.getElementById('side').style.visibility = "visible";
            document.getElementById('side').style.transform = "translateX(0%)";
        }, 500);
    }

    setTimeout(() => {
        document.getElementById('action-btn').style.pointerEvents = "auto";
    }, 1500);

    i *= -1;
}

let j = 360;
function rotatePFP() {
    document.getElementById('blurb-img').style.transform = "rotate(" + j + "deg)";
    j += 360;
}

document.getElementById('action-btn').addEventListener('click', scroll);
document.getElementById('blurb-img').addEventListener('click', rotatePFP);