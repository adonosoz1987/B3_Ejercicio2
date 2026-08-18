class LoginPage {
  constructor() {
    this.email = '';
    this.password = '';
  }

  navigate() {
    return true;
  }

  login(email, password) {
    this.email = email;
    this.password = password;
    
    // Simulación de respuesta según credenciales
    if (email === 'noexiste@test.com') {
      return 'Usuario no registrado';
    }
    if (password === 'claveErronea') {
      return 'Credenciales inválidas';
    }
    return 'OK';
  }
}

module.exports = LoginPage;