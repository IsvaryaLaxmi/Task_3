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

var list1 =[];
var list2 =[];
var list3 =[];
var list4 =[];

var n = 1;
var x = 0;

function sub1()
{
 var AddRown= document.getElementById('show');
 var NewRow= AddRown.insertRow(n);

 list1[x]= document.getElementById("Firstname").value;
 list2[x]= document.getElementById("Lastname").value;
 list3[x]= document.getElementById("Email").value;
 list4[x]= document.getElementById("telephone").value;

 var cel1 = NewRow.insertCell(0);
 var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
 var cel4 = NewRow.insertCell(3);

 cel1.innerHTML = list1[x];
 cel2.innerHTML = list2[x];
 cel3.innerHTML = list3[x];
 cel4.innerHTML = list4[x];

 n++;
 
let btnclear=document.querySelector('#clear');
let inputs=document.querySelectorAll('#Firstname,#Lastname,#Email,#telephone');

 btnclear.addEventListener('click',() =>{
     inputs.forEach(input => input.value  = '' )

 });


}