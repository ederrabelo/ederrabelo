btnMudarTema = document.querySelector("#btnMudarTema");

btnMudarTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    console.log("click")
    if (btnMudarTema.classList.value === "fa-solid fa-moon") {
        console.log("ok")
        btnMudarTema.classList.replace("fa-moon", "fa-sun");
    } else {
        btnMudarTema.classList.replace("fa-sun", "fa-moon");
    }
})