
const inputText = document.getElementById("input-text")
const convertButton = document.getElementById("convert-button")
const metersFeet= document.getElementById("meters-feet")
const litersGallons= document.getElementById("liters-gallons")
const kilosPounds= document.getElementById("kilos-pounds")

inputText.value = 0

convertButton.addEventListener("click", function() {
    let input = inputText.value
    metersFeet.textContent = `${input} meters = ${metersToFeet(input).toFixed(3)} feet | ${input} feet = ${feetToMeters(input).toFixed(3)} meters`
    litersGallons.textContent = `${input} liters = ${litersToGallons(input).toFixed(3)} gallons | ${input} gallons = ${gallonsToLiters(input).toFixed(3)} liters`
    kilosPounds.textContent = `${input} kilos = ${kilostoPounds(input).toFixed(3)} pounds | ${input} pounds = ${poundstoKilos(input).toFixed(3)} kilos`
})

function metersToFeet(number) {
    return number * 3.281
}

function feetToMeters(number) {
    return number / 3.281
}

function litersToGallons(number) {
    return number / 3.785
}

function gallonsToLiters(number) {
    return number * 3.785
}

function kilostoPounds(number) {
    return number * 2.205
}

function poundstoKilos(number) {
    return number / 2.205
}