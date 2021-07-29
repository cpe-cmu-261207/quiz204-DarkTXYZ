const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
var toggle = false
var authorText = author.innerText

const length = document.getElementById('length')
const color = document.querySelector('#color')
const search_btn = document.querySelector("#search");
const reset_btn = document.querySelector("#reset");
const text = document.querySelector('#text')

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
  else {
    author.innerText = authorText
    btn_toggle.innerText = "Display Calculation"
    toggle = false
  }

}

search_btn.onclick = () => {
  /*
  var l = length.value
  var words = text.innerText.split(" ")
  var selectword = []

  for (const word of words) {
    if (word.length >= l)
      selectword.push(word)
  }
  for (const word of selectword) {
    var innerHTML = text.innerHTML
    var index = innerHTML.indexOf(word)
    innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + text.length) + "</span>" + innerHTML.substring(index + text.length);
    text.innerHTML = innerHTML;
  }
  */
}


reset_btn.onclick = () => {
  location.reload()
}
// more codes for Search and Reset buttons here
