
import _ from 'lodash'
function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component());
