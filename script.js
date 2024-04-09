document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const warnings = document.getElementById("warnings");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const contraseña = passwordInput.value;

        // Datos de inicio de sesión quemados
        const usuarioPredeterminado = "ADMINISTRADOR@example.com";
        const contraseñaPredeterminada = "ADMINISTRADOR2024";

        if (email === usuarioPredeterminado && contraseña === contraseñaPredeterminada) {
            // Redirigir a la página de usuario después de un inicio de sesión exitoso
            window.location.href = "interface.php";
        } else {
            // Mostrar una alerta indicando que los datos no coinciden
            alert("Los datos no coinciden. Por favor, inténtelo nuevamente.");
        }
    });
});
