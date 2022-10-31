function addData(){
 var email = document.getElementById('email-Feild').value;
 var pass = document.getElementById('pswrd-Feild').value;

 localStorage.setItem('userEmail',email);
 localStorage.setItem('userPswrd',pass);
 alert("user registered successfully!")

 

}
const form = document.querySelector('#acc-form');

form.addEventListener('submit',(event)=>{
    //event.preventDefault();
    addData();
   
    clearAllFields();
});
// const inputs =document.querySelectorAll('input');
// const patterns = {
//     email: /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/,
//     pswrd:/^[a-zA-Z]{1,20}$/
    
// };

// //validate function
// function validate(field,regex){
// if(regex.test(field.value)){
//     field.className='valid';
// }
// // }else if(regex.test!=(field.value)){
// // field.className ='invalid';

// else{
//     field.className ='invalid';
// }
// }
// inputs.forEach((input)=>{
//     input.addEventListener('keyup',(e)=>{
//         //console.log(e.target.attributes.name.value);
//         validate(e.target,patterns[e.target.attributes.name.value])
//     });
// });
var emailFeild= document.getElementById("email-Feild");
var emailError =document.getElementById("email-Error");
var passwordFeild=document.getElementById("pswrd-Feild");
var PasswordError=document.getElementById("password-Error");

function validateEmail(){
    if(!emailFeild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML="Please enter a valid email id";
        emailFeild.style.borderColor="red";
        return false;
    }
    
    else
    {
        emailError.innerHTML="";
        emailFeild.style.borderColor="green";
        return true;
    }
}
    function validatePassword(){

    if(!passwordFeild.value.match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    )
    {
        PasswordError.innerHTML="Please enter atleast 8 characters";
        passwordFeild.style.borderColor="red";
        return false;
    }
    else{
        PasswordError.innerHTML="";
        passwordFeild.style.borderColor="green";
        return true;
    }

}
function clearAllFields(){

    document.getElementById("email-Feild").value=""
    document.getElementById("pswrd-Feild").value=""
}  
// function isFormValid(){
//     const validemail=
// }


