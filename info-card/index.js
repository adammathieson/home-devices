export const infoCard = item => {
    const card = document.querySelector("#card")
    const title = document.querySelector("#title")
    const fact1 = document.querySelector("#fact1")
    const fact2 = document.querySelector("#fact2")
    const price = document.querySelector("#price")

    title.textContent = item.title
    fact1.textContent = item.fact1
    fact2.textContent = item.fact2
    price.textContent = item.price
    
}