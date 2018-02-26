import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
import Data from './data.xml';
function component(){
  var element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'],' ');
  element.classList.add('hello');
  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log(Data);
  return element;
}
document.body.appendChild(component());