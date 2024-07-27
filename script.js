const dialog =document.getElementById("handouts");
const hereBtn =document.getElementById("guidelines");
const closeDialog =document.getElementById("close_dialog");
const bsaDialog =document.getElementById("bsa-dialog");
const bsaBtn =document.getElementById("bsa");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bsaAnswer = document.getElementById("bsa_answer");
const bsaCalculate = document.getElementById("bsa-calculate");
const closeBsaDialog =document.getElementById("close-bsa-dialog")



const bsaWorking=()=>{
   bsaAnswer.textContent = Math.sqrt((weight.value * height.value)/3600);
}

hereBtn.addEventListener("click", ()=>{
    dialog.showModal();
});
closeDialog.addEventListener("click", ()=>{
    dialog.close();
});
bsaBtn.addEventListener("click", ()=>{
    bsaDialog.showModal();
});
bsaCalculate.addEventListener("click",bsaWorking);

closeBsaDialog.addEventListener("click", ()=>{
    bsaDialog.close();
})