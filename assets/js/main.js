const body = document.getElementsByTagName("body")
const out = document.getElementById("demo")
const red = document.getElementById("rot")
const green = document.getElementById("grun")
const blue = document.getElementById("blau")
let count = 0
function andernHintergrund(color) {
    count++
    body[0].style.background = color
    out.innerHTML = `Wir haben die Farbe ${count} mal geändert`
}
function andernRegler() {
    count++
    body[0].style.background = `rgb(${red.value},${green.value},${blue.value})`
    out.innerHTML = `rgb(${red.value},${green.value},${blue.value}) = ${rgbToHex(+red.value, +green.value, +blue.value)}`
}
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')