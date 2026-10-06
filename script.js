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

const txt = document.getElementById("ex2_text");
const ex2_cont = document.getElementById("ex2_content");

txt.addEventListener("input", () => {
  ex2_cont.innerHTML = "";

  if (/[a-zA-Z]/.test(txt.value)) {
    ex2_cont.innerHTML = "Numer nie może zawierać liter";
    return;
  }

  if (/[^0-9a-zA-Z]/.test(txt.value)) {
    ex2_cont.innerHTML = "Numer nie może zawierać znaków specjalnych";
    return;
  }

  if (txt.value.length !== 9) {
    ex2_cont.innerHTML = "Długość numeru musi być równa 9";
    return;
  }

  ex2_cont.innerHTML = "Numer telefonu jest poprawny";
});
