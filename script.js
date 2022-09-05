const inputs =document.querySelectorAll('input');
const patterns = {
    telephone:/^\d{10}$/,
    Firstname:/^[a-zA-Z]{1,20}$/,
    Lastname:/^[a-zA-Z]{1,20}$/,
    Email: /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
};

//validate function
function validate(field,regex){
if(regex.test(field.value)){
    field.className='valid';
}
//  }else if(regex.test!=(field.value)){
//     field.className ='invalid';

else{
    field.className ='invalid';
}
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        //console.log(e.target.attributes.name.value);
        validate(e.target,patterns[e.target.attributes.name.value])
    });
});

let data=[];
function sub1()
{
var list={
Firstname : document.getElementById("Firstname").value,
Lastname : document.getElementById("Lastname").value,
Email : document.getElementById("Email").value,
telephone : document.getElementById("telephone").value
}
data.push(list);

let btnclear=document.querySelector('#clear');
let inputs=document.querySelectorAll('#Firstname,#Lastname,#Email,#telephone');

 btnclear.addEventListener('click',() =>{
     inputs.forEach(input => input.value  = ''
     )

 });
}
