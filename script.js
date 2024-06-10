// CLASS LIST
const btnOpen = document.querySelector(".btn-open")
const box1  = document.querySelector(".box")
const boxModal = document.querySelector(".modal")
const btnClose = document.getElementById("close")


btnOpen.addEventListener("click",function(){
    setTimeout(()=>{
        box1.style.visibility = "hidden"
        btnOpen.style.opacity = "0"
    },100)
   setTimeout(()=> {
    boxModal.style.visibility = "visible"
   },100)
})

btnClose.addEventListener("click",function(){
    setTimeout(()=>{
        boxModal.style.visibility = "hidden"
        box1.style.visibility = "visible"
        btnOpen.style.opacity = "1"
    })
})