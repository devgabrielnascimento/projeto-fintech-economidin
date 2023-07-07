//Declaração
const btnPassword = document.querySelector("#btnPW");
const inputPassword = document.querySelector("#passwordInput");
const iconEye = document.querySelector("#iconPW");

/*ao digitar alguma tecla no input mostrar botão de senha, input vazio = ocultar */
inputPassword.addEventListener("keyup", () => {
  let emptyPassword = inputPassword.value === "";

  if (emptyPassword) {
    btnPassword.classList.remove("input-group-text");
    btnPassword.style.display = "none";
    iconEye.style.display = "none";
  } else {
    btnPassword.classList.add("input-group-text");
    iconEye.classList.add("#iconPW");
    iconEye.style.display = "flex";
    btnPassword.style.display = "flex";
    btnPassword.style.visibility = "visible";
    btnPassword.style.width = "60px";
    btnPassword.style.justifyContent = "center";
  }
});

// função arrow no botão de senha com evento de clique.
btnPassword.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    iconEye.classList.add("bi", "bi-eye");
  } else {
    inputPassword.type = "password";
    iconEye.classList.remove("bi", "bi-eye");
  }
});
