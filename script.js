const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
var toggle = false
var authorText = author.innerText

const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.querySelector("#search");

btn_toggle.onclick = () => {
  // your code here
  if (!toggle) {
    var l = length.value
    var code = parseInt(author.innerText.split(" ")[0])
    console.log(code - l)
    author.innerText = code - l
    btn_toggle.innerText = "Display Author"
    toggle = true
  }
  else{
    author.innerText = authorText
    btn_toggle.innerText = "Display Calculation"
    toggle = false
  }

}

// more codes for Search and Reset buttons here
