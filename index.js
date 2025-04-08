let text = document.getElementById('text').textContent;

console.log(text);

function changeText() {
  document.getElementById('text').textContent = "This is really cool!";
}

document.addEventListener('DOMContentLoaded', changeText);

