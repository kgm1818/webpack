
function component() {
  var element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}
document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  return response.json()
})
.then(result => {
  console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
  console.log(result)
})
.catch(error => {
  console.error('Something went wrong when fetching this data: ', error)
})

