document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.querySelector("input[type='checkbox']");
  
    // Verificar si hay credenciales recordadas y completar los campos correspondientes
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail && rememberedPassword) {
        emailInput.value = rememberedEmail;
        passwordInput.value = rememberedPassword;
        rememberCheckbox.checked = true; // Marcar la casilla de recordar contraseña
    }
  
    // Escuchar cambios en la casilla de recordar contraseña
    rememberCheckbox.addEventListener("change", function() {
        if (rememberCheckbox.checked) {
            // Guardar las credenciales en el almacenamiento local
            localStorage.setItem("rememberedEmail", emailInput.value);
            localStorage.setItem("rememberedPassword", passwordInput.value);
        } else {
            // Eliminar las credenciales del almacenamiento local
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
        }
    });
});
