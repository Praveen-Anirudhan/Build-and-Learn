const passwordBox = document.getElementById('password');
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*";
const length = 18;
const allChar = upperCase+lowerCase+symbol+number;
 const generateBtn = document.getElementById('generate-button');
 const copyBtn = document.getElementById('copy-btn')
 function generatePassword ()
 {
 let password = '';
 password+=upperCase[Math.floor(Math.random()*upperCase.length)]
 password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
 password+=number[Math.floor(Math.random()*number.length)]
 password+=symbol[Math.floor(Math.random()*symbol.length)]
while (password.length<length){
 password+=allChar[Math.floor(Math.random()*allChar.length)]
}

passwordBox.value = password;
 }

function copyPassword() {
    if (!passwordBox.value) {
        return;
    }

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            showToast();
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

 generateBtn.addEventListener('click',generatePassword);
 copyBtn.addEventListener('click',copyPassword);