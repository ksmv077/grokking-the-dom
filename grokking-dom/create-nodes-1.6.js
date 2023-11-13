const div = document.createElement('div')

const ul = document.createElement('ul')

const li1 = document.createElement('li')
const li2 = document.createElement('li')

const a1 = document.createElement('a')
const a2 = document.createElement('a')

a1.textContent = "наша инста"
a1.href='https://instagram.com/intocode'

a2.textContent = "наш сайт"
a2.href="https://intocode.ru"

div.appendChild(ul);
ul.append(li1, li2)


li1.appendChild(a1);
li2.appendChild(a2);
 

console.log(div);

