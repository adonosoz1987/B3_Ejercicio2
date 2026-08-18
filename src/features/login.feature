Feature: Autenticación de Usuario
  Como usuario de la plataforma
  Quiero iniciar sesión con mi correo y contraseña
  Para acceder a mi panel principal

  Scenario Outline: Intento de inicio de sesión con datos incorrectos
    Given que el usuario se encuentra en la página de login
    When ingresa el correo "<email>" y la contraseña "<password>"
    And hace clic en el botón de iniciar sesión
    Then debería ver un mensaje de error "<mensaje_error>"

    Examples:
      | email              | password      | mensaje_error                  |
      | usuario@test.com   | claveErronea  | Credenciales inválidas         |
      | noexiste@test.com  | Password123   | Usuario no registrado          |