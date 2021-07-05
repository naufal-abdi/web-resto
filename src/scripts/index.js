import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';

import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

const loaderComponent = document.querySelector('#loader');

window.addEventListener('hashchange', () => {
  app.renderPage();
  setTimeout(() => {
    loaderComponent.classList.remove('active');
  }, 2000);
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  setTimeout(() => {
    loaderComponent.classList.remove('active');
  }, 2000);
});
