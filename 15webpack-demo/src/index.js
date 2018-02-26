import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  printMe();
  return element;
}
document.body.appendChild(component());

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}