let o = document.querySelector("#opacity");
let r = document.querySelector("#radius");
let images = document.querySelectorAll(".image");
o.addEventListener("input",OpacityRange)
r.addEventListener("input",RadiusRange)
function RadiusRange() {
    const val_r = r.value;
    for (let j = 0; j < images.length; j++) {
        images[j].style.borderRadius = `${val_r}px`
    }
    let rad_json= JSON.stringify(val_r);
    console.log(jsonRadius);
    localStorage.setItem("radius", rad_json);
}
function OpacityRange() {
    const val_o= o.value;
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = `${val_o}`
    }
    let op_json= JSON.stringify(val_o);
    console.log(jsonOpacity);
    localStorage.setItem("opacity", op_json);
}
