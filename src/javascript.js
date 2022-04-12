let newCard = document.querySelector("input#newCard")
let conteiner = document.querySelector("div.container")
newCard.addEventListener('click', () => {
    let child = document.createElement('div')
    child.classList.add("conteudo")

    let title = document.createElement("h3")
    title.classList.add('titulo')

    let data = document.createElement("h4")
    data.classList.add('data')
    let spanExt = document.createElement("span")
    let spanInt = document.createElement("span")
    spanInt.classList.add('tipo')
    let textContent = document.createElement('p')   
    spanExt.appendChild(spanInt, textContent)
    child.appendChild(title, data)
    conteiner.appendChild(child)
})