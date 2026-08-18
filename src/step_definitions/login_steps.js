const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');

let loginPage;
let respuestaSistema;

Given('que el usuario se encuentra en la página de login', function () {
  loginPage = new LoginPage();
  loginPage.navigate();
});

When('ingresa el correo {string} y la contraseña {string}', function (email, password) {
  respuestaSistema = loginPage.login(email, password);
});

When('hace clic en el botón de iniciar sesión', function () {
  // Acción simulada en el helper
});

Then('debería ver un mensaje de error {string}', function (mensajeEsperado) {
  expect(respuestaSistema).to.equal(mensajeEsperado);
});