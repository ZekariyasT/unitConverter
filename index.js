/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
const lengthEl=document.getElementById("length-el")
const volumeEl=document.getElementById("volume-el")
const massEl=document.getElementById("mass-el")
const convertBtn=document.getElementById("convert-btn")
const inputEl=document.getElementById("input-el")
let val=""


convertBtn.addEventListener("click",function (){
    val=Number(inputEl.value)
    
    if(typeof val=== "number"){
       convert(val) 
    }
    
    
})

function convert(num){
    const feet = (num * 3.281).toFixed(3)
    const meter = (num / 3.281).toFixed(3)
    const gallon = (num * 0.264).toFixed(3)
    const liter = (num / 0.264).toFixed(3)
    const pound = (num * 2.204).toFixed(3)
    const kg = (num / 2.204).toFixed(3)
    
const length = `${num} meters = ${feet} feet | ${num} feet = ${meter}meters`
const volume = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`
const mass = `${num} kilos = ${pound} pounds | ${num} pounds = ${kg} kilos`

lengthEl.innerHTML =length
volumeEl.innerHTML =  volume
massEl.innerHTML = mass
}