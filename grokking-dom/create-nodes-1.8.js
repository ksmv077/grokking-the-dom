
const arr = [
  {
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'intocode',
    url: 'https://intocode.ru'
  },
]

function render(arr) {
  const ul = document.createElement('ul')
  for(let i = 0; i < arr.length; i++){
    const li = document.createElement('li')
    const a = document.createElement('a')


    a.href = arr[i].url
    a.textContent = arr[i].name


    li.append(a)
    ul.append(li)
  }

  document.body.append(ul)

}

render(arr)


