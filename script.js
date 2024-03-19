const s1 = document.querySelector('.svg1')
const s2 = document.querySelector('.svg2')
const s3 = document.querySelector('.svg3')
const s4 = document.querySelector('.svg4')
const plainbox1 = document.querySelector('.plainBox1')
const plainbox2 = document.querySelector('.plainBox2')
const plainbox3 = document.querySelector('.plainBox3')
const plainbox4 = document.querySelector('.plainBox4')

s1.addEventListener("click",()=>{
    plainbox1.style.display = 'block';
})
s2.addEventListener("click",()=>{
    plainbox2.style.display = 'block';
})
s3.addEventListener("click",()=>{
    plainbox3.style.display = 'block';
})
s4.addEventListener("click",()=>{
    plainbox4.style.display = 'block';
})


const error_msg = document.querySelector('.error_msg');

error_msg.addEventListener("click",()=>{
    plainbox1.style.display = 'none';
})

const warning_msg = document.querySelector('.warning_msg')

warning_msg.addEventListener("click",()=>{
    plainbox2.style.display = 'none';
})

const sucess_msg = document.querySelector('.sucess_msg')

sucess_msg.addEventListener("click",()=>{
    plainbox3.style.display = 'none';
})

const help_msg = document.querySelector('.help_msg')

help_msg.addEventListener("click",()=>{
    plainbox4.style.display = 'none';
})