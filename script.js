const button = document.getElementById("ex1_button");
const content = document.getElementById("ex1_content");

button.addEventListener("click", () => {
  content.innerHTML = "";
  let lenght = 9;

  for (let i = 0; i <= lenght; i++) {
    content.innerHTML += i;
    if (i != lenght) content.innerHTML += ", ";
  }
});
