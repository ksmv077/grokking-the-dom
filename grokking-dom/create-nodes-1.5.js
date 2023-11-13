const div1 = document.createElement("div")
div1.classList.add('red')

const div2 = document.createElement("div")
div2.classList.add('green')


const div3 = document.createElement("div")
div3.classList.add('blue')

div3.textContent = 'я вложен'


div1.appendChild(div2)
div2.appendChild(div3)


console.log(div1);
console.log(div2);
console.log(div3);