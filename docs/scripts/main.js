import { setParallax } from './parallax.js';
import { goToPage as renderApp } from './renderApp.js';

setParallax();

renderApp();
  
window.addEventListener('popstate', renderApp);