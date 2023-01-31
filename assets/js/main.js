btnChangeTheme = document.querySelector("#btnChangeTheme");

btnChangeTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    console.log("click")
    if (btnChangeTheme.classList.value === "fa-solid fa-moon") {
        console.log("ok")
        btnChangeTheme.classList.replace("fa-moon", "fa-sun");
    } else {
        btnChangeTheme.classList.replace("fa-sun", "fa-moon");
    }
})