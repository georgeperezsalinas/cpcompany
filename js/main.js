document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector("nav.menu");
  if (burger && menu) burger.addEventListener("click", () => menu.classList.toggle("open"));

  const form = document.querySelector("#contacto-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note");
      note.textContent = "Consulta registrada. En producción el envío llega a operaciones@cpcompanysac.com con acuse.";
      form.reset();
    });
  }

  const cookie = document.querySelector(".cookie");
  const ok = document.querySelector("[data-cookie-ok]");
  if (cookie && !localStorage.getItem("cp_cookie_ok")) cookie.classList.add("show");
  if (ok) ok.addEventListener("click", () => {
    localStorage.setItem("cp_cookie_ok", "1");
    cookie.classList.remove("show");
  });
});
