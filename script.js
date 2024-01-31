let imgBox = document.getElementById("img_box");
let QrImg = document.getElementById("qr_img");
let QrText = document.getElementById("qr_text");


function generateQr () 
{
 
    if (QrText.value.length > 0)
    {

       QrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ QrText.value
       imgBox.classList.add("show_img");
    
   }
   
   else
     {
        alert ("Please enter some text to generate a QR code");
     }






}