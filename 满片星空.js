window.onload = function () {
    let w = document.body.clientWidth;
    let h = document.body.clientHeight;
    let count = 500;
    for (let i = 0; i < count; i++) {
        let x = createRandom(0, w);
        let y = createRandom(15, h);
        createXingxing(x, y, i);
    }
}

function createXingxing(x, y, i) {
    let xx = document.createElement("div");
    xx.setAttribute("class", "xingxing");
    xx.setAttribute("style", "left:" + x + "px;top:" + y + "px;animation-delay:" + i * 0.1 + "s");
    let xIn = document.createElement("div");
    xIn.setAttribute("class", "x-inside");
    xIn.setAttribute("style", "animation-delay:" + i * 0.2 + "s");
    xx.appendChild(xIn);
    document.getElementById("container").append(xx);
}

function createRandom(n, m) {
    return Math.round(Math.random() * (m - n) + n);
} 