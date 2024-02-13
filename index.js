const btn1No = document.querySelector(".button__no");
const btn1Yes = document.querySelector(".button__yes");
const wrapper1 = document.getElementById("wrapper1");
const hidden1 = document.getElementById("hidden1");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const container1 = document.getElementById("#1");
const container2 = document.getElementById("#2");
const container3 = document.getElementById("#3");

link1.addEventListener("click", () => {
  container1.classList.remove("hidden");
  container2.classList.add("hidden");
  container3.classList.add("hidden");
});

link2.addEventListener("click", () => {
  container1.classList.add("hidden");
  container2.classList.remove("hidden");
  container3.classList.add("hidden");
});

link3.addEventListener("click", () => {
  container1.classList.add("hidden");
  container2.classList.add("hidden");
  container3.classList.remove("hidden");
});

btn1Yes.addEventListener("click", () => {
  wrapper1.style.display = "none";
  hidden1.classList.remove("hidden");
});

btn1No.addEventListener("click", () => {
  if (btn1No.textContent === "Як це?!?!?! Нізащо") {
    btn1No.textContent = "Заборонено";
  }

  if (btn1No.textContent === "Заборонено") {
    btn1No.style.backgroundColor = "rgb(189 189 189)";
    return;
  }

  btn1No.textContent = "Як це?!?!?! Нізащо";
});

window.addEventListener("click", () => {
  document.getElementById("song").play();
});

const mc = () => {
  window.location.href = "https://www.mcdonalds.com/ua/uk-ua.html";
};
