const element = document.querySelector('.content')

// get slider value
element.addEventListener('change', function (event) {
  let p = event.target.nextSibling.nextSibling
  p.textContent = event.target.value
  drawColor()
})

function drawColor() {
  const red = Number(document.querySelector('.redvalue').textContent)
  const green = Number(document.querySelector('.greenvalue').textContent)
  const blue = Number(document.querySelector('.bluevalue').textContent)
  const hex = NumtoHex(red) + NumtoHex(green) + NumtoHex(blue)

  // Update HEX num
  document.querySelector('.hexvalue').textContent = "#" + hex

  // Update background color
  element.style.backgroundColor = hex
}

function NumtoHex(num) {
  let hex = num.toString(16).toUpperCase()
  if (hex.length < 2) {
    hex = "0" + hex
  }

  return hex
}