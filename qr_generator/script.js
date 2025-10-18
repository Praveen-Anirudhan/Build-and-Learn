let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('input-qr');
let generateQRbtn =document.getElementById('generate-qr-btn');

function generateQR(){
if(!qrText.value){
qrText.classList.add('error');
setTimeout(()=>{
qrText.classList.remove('error');
},1000)
return }
qrImage.src =
  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
  encodeURIComponent(qrText.value.trim());
imgBox.classList.add("show-img")
}

generateQRbtn.addEventListener('click',generateQR)
