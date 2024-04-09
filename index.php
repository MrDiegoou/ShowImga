<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./styles/styles.css">
</head>

<body>
    <section>
        <div class="form-box">
            <div class="form-value">
                <form id="loginForm">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input id="email" type="email" required>
                        <label for="email">Correo</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input id="password" type="password" required>
                        <label for="password">Contraseña</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox">Recordar <a href="#">Contraseña</a></label>
                    </div>
                    <div id="warnings" class="warnings"></div>
                    <button type="submit">Iniciar sesión</button>
                    <div class="register">
                        <p>¿Olvidaste tu <a href="Forgot/forgotpassword.php">Contraseña?</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="script.js"></script>
    <script src="remenber.js"></script>
</body>

</html>
