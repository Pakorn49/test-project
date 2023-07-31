const house = [
    {
        code: "SM",
        name: "smith"
    },
    {
        code: "JD",
        name: "Jordan"
    },
    {
        code: "BL",
        name: "Billy"
    },
]

const getFamily = houseCode => {
    switch(houseCode){
        case "SM":
            return["Mario", "Mario", "Mario"]
        case "JD":
            return["Jasmine", "Jasmine", "Jasmine"]
        case "BL":
            return["Dean", "Dean", "Dean"]
        default:
            return[]
    }
}

const createOptionElement = (text, value) => {
    const element = document.createElement("option")
    element.textContent = text
    element.value = value
    return element
}

const createLiElement = text =>{
    const element = document.createElement("Li")
    element.textContent = text
    return element
}

const houseElement = document.querySelector("select")

house.forEach(house => {
    houseElement.appendChild(createOptionElement(house.name, house.code))
})

//Controller
houseElement.addEventListener("change", e => {
    const fams = getFamily(e.target.value)
    const famsElement = document.getElementById("family")

    famsElement.innerHTML = ""
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam))
    })
})