const btnChangeTheme = document.querySelector("#btnChangeTheme");

btnChangeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (btnChangeTheme.classList.value === "fa-solid fa-moon") {
    btnChangeTheme.classList.replace("fa-moon", "fa-sun");
  } else {
    btnChangeTheme.classList.replace("fa-sun", "fa-moon");
  }
});
