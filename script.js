let i = 1;
function scroll() {
    if(i === 1) {
        document.getElementById('about').style.transform = "translateY(-100%)";
    } else {
        document.getElementById('about').style.transform = "translateY(100%)";
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