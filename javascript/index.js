// Crea 2 arrays de datos que contengan al menos 10 elementos cada uno

const marcasVehiculos = [
  "Toyota",
  "Nissan",
  "Mazda",
  "Honda",
  "Kia",
  "Hyundai",
  "Chevrolet",
  "Ford",
  "Renault",
  "Fiat",
  "Maserati",
]

const razasPerros = [
  "Bulldog",
  "Labrador",
  "Pitbull",
  "Poodle",
  "Chihuahua",
  "Golden Retriever",
  "Pug",
  "Beagle",
  "Dalmata",
  "Pastor Aleman",
  "Rottweiler",
]

const btn1 = document.getElementById("btn1") // map
const btn2 = document.getElementById("btn2") // forEach
const btn3 = document.getElementById("btn3") // filter
const btn4 = document.getElementById("btn4") // reduce
const btn5 = document.getElementById("btn5") // find
const btn6 = document.getElementById("btn6") // findIndex
const btn7 = document.getElementById("btn7") // some
const btn8 = document.getElementById("btn8") // sort

const marcas = document.getElementById("marcas")
const razas = document.getElementById("razas")
let marcasHTML = ""
let razasHTML = ""

btn1.addEventListener("click", () => {
  marcasHTML = ""
  marcasVehiculos.map((marca) => {
    marcasHTML += `<li>${marca}</li>`
  })
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasPerros.map((raza) => {
    razasHTML += `<li>${raza}</li>`
  })
  razas.innerHTML = razasHTML
})

btn2.addEventListener("click", () => {
  marcasHTML = ""
  marcasVehiculos.forEach((marca) => {
    marcasHTML += `<li>${marca}</li>`
  })
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasPerros.forEach((raza) => {
    razasHTML += `<li>${raza}</li>`
  })
  razas.innerHTML = razasHTML
})

btn3.addEventListener("click", () => {
  marcasHTML = ""
  marcasVehiculos.filter((marca) => {
    if (marca.length > 5) {
      marcasHTML += `<li>${marca}</li>`
    }
  })
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasPerros.filter((raza) => {
    if (raza.length > 5) {
      razasHTML += `<li>${raza}</li>`
    }
  })
  razas.innerHTML = razasHTML
})

btn4.addEventListener("click", () => {
  marcasHTML = ""
  marcasVehiculos.reduce((acumulador, marca) => {
    marcasHTML += `${marca}, `
  }, "Las marcas de vehiculos son: ")
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasPerros.reduce((acumulador, raza) => {
    razasHTML += `${raza}, `
  }, "Las razas de perros son: ")
  razas.innerHTML = razasHTML
})

btn5.addEventListener("click", () => {
  marcasHTML = ""
  marcasVehiculos.find((marca) => {
    if (marca === "Mazda") {
      marcasHTML += `<li>${marca}</li>`
    }
  })
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasPerros.find((raza) => {
    if (raza === "Poodle") {
      razasHTML += `<li>${raza}</li>`
    }
  })
  razas.innerHTML = razasHTML
})

btn6.addEventListener("click", () => {
  marcasHTML = ""
  marcasHTML += `<li>Nissan se encuentra en la posicion ${marcasVehiculos.findIndex(
    (marca) => marca === "Nissan"
  )}</li>`
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasHTML += `<li>Beagle se encuentra en la posicion ${razasPerros.findIndex(
    (raza) => raza === "Beagle"
  )}</li>`
  razas.innerHTML = razasHTML
})

btn7.addEventListener("click", () => {
  marcasHTML = ""
  marcasHTML += `<li>${marcasVehiculos.some(
    (marca) => marca === "Maserati"
  )}</li>`
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasHTML += `<li>${razasPerros.some((raza) => raza === "Dalmat")}</li>`
  razas.innerHTML = razasHTML
})

btn8.addEventListener("click", () => {
  marcasHTML = ""
  marcasVehiculos.sort().map((marca) => {
    marcasHTML += `<li>${marca}</li>`
  })
  marcas.innerHTML = marcasHTML
  razasHTML = ""
  razasPerros.sort().map((raza) => {
    razasHTML += `<li>${raza}</li>`
  })
  razas.innerHTML = razasHTML
})

var txt = "     eStoy en El modulo tres DEl curso de JavAscript     "

const texto = document.getElementById("text")
texto.innerHTML = txt

function normalizarTexto(txt) {
  const textToUpdate = document.getElementById("format")
  textToUpdate.innerHTML = txt
    .trim()
    .toLowerCase()
    .replace("e", "E")
    .replace("j", "J")
    .replace("tres", "3")
    .replace("Javas", "JavaS")
}

normalizarTexto(txt)

var number = "3,8,9,8.65,3.6965378,9"

function mostrarNumeros(number) {
  const tagNumber = document.getElementById("format")
  const numeros = document.createElement("p")
  numeros.innerHTML = number
  tagNumber.appendChild(numeros)

  const tagMax = document.getElementById("format")
  const tagMin = document.getElementById("format")

  const max = document.createElement("p")
  const min = document.createElement("p")

  const arrayNumber = number.split(",")
  const arrayNumberFloat = arrayNumber.map((num) => parseFloat(num))

  const maxNumber = Math.max(...arrayNumberFloat)
  const minNumber = Math.min(...arrayNumberFloat)

  max.innerHTML = maxNumber.toFixed(2)
  min.innerHTML = minNumber.toFixed(2)

  tagMax.appendChild(max)
  tagMin.appendChild(min)

  const tagAsc = document.getElementById("format")
  const tagDesc = document.getElementById("format")

  const asc = document.createElement("p")
  const desc = document.createElement("p")

  const arrayAsc = arrayNumberFloat.sort((a, b) => a - b)
  const arrayDesc = arrayNumberFloat.sort((a, b) => b - a)

  asc.innerHTML = arrayAsc
  desc.innerHTML = arrayDesc

  tagAsc.appendChild(asc)
  tagDesc.appendChild(desc)
}

mostrarNumeros(number)
