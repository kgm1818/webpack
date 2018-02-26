

// function getComponent () {
//   return import(/* webpackChunkName: "lodash"*/ 'lodash')
//   .then(_ => {
//     var element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['hello', 'webpack'], ' ');

//     return element;
//     }).catch(error =>'An error occurred while loading the component');
// }
// getComponent().then(component => {
//   document.body.appendChild(component);
// })


async function getComponent() {
  var element = document.createElement('div');
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  return element;
}
getComponent().then(component => {
  document.body.appendChild(component);
});
