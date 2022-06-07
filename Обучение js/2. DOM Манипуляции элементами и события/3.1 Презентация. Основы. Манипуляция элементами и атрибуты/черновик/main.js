const title = document.querySelector("h1")
title.innerHTML = "<span>text</span>"//поменяется h1 на спан
title.textContent = "sdasas"//поменяется содержимое спана
title.insertAdjacentElement("beforebegin", "<h2>title</h2>")//перед спаном добавиться h2


// *Создание элемента
const span = document.createElement("span")//создается тег но его нет в html
span.textContent = "span created"
span.classList.add("myClass")//добавляется класс 
title.appendChild(span)//добавится в html 

const fragment = document.createDocumentFragment();//создается фрагмент это такой контейнер
const colors = ["black", "yellow", "orange"]
colors.forEach(color => {
    const item = document.createElement('div')
    item.classList.add(`bg${color}`)
    item.textContent = color
    fragment.appendChild(item)
})
document.body.appendChild(fragment)//добавится в разметку цвета

// *Удаление элементов
title.remove()