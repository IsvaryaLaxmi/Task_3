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

// var list1 =[];
// var list2 =[];
// var list3 =[];
// var list4 =[];

var n = 1;
// var x = 0;

function sub1()
{
 var AddRown= document.getElementById('show');
 var NewRow= AddRown.insertRow(n);
var list={

Firstname : document.getElementById("Firstname").value,
Lastname : document.getElementById("Lastname").value,
Email : document.getElementById("Email").value,
telephone : document.getElementById("telephone").value
}
 var cel1 = NewRow.insertCell(0);
 var cel2 = NewRow.insertCell(1);
 var cel3 = NewRow.insertCell(2);
 var cel4 = NewRow.insertCell(3);

 cel1.innerHTML = list.Firstname;
 cel2.innerHTML = list.Lastname;
 cel3.innerHTML = list.Email;
 cel4.innerHTML = list.telephone;

 n++;
 
let btnclear=document.querySelector('#clear');
let inputs=document.querySelectorAll('#Firstname,#Lastname,#Email,#telephone');

 btnclear.addEventListener('click',() =>{
     inputs.forEach(input => input.value  = '' )

 });
}
