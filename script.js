const inputs =document.querySelectorAll('input');
const patterns = {
    Telephone:/^\d{10}$/,
    Firstname:/^[a-zA-Z]{1,20}$/,
    Lastname:/^[a-zA-Z]{1,20}$/,
    Email: /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
};

//validate function
function validate(field,regex){
if(regex.test(field.value)){
    field.className='valid';
}
// }else if(regex.test!=(field.value)){
// field.className ='invalid';

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

 var data = [];


function sub1()
{
 

//  var list={
    
// Firstname : document.getElementById("Firstname").value,
// Lastname : document.getElementById("Lastname").value,
// Email : document.getElementById("Email").value,
// Telephone : document.getElementById("Telephone").value,


// }
let id=data.length+1;
data.push({Firstname:document.getElementById("Firstname").value, Lastname:document.getElementById("Lastname").value, Email:document.getElementById("Email").value,Telephone:document.getElementById("Telephone").value, id:id });
var html = "<table border='1|1' class='table'>"

html+="<thead>"
html+="<tr>";
    //html+="<td>"+"SNO"+"</td>";
    html+="<td>"+"Firstname"+"</td>";
    html+="<td>"+"Lastname"+"</td>";
    html+="<td>"+"Email"+"</td>";
    html+="<td>"+"Telephone"+"</td>";
    html+="<td>"+"Action"+"</td>";
        
    html+="</tr>";
    html+="</thead>"

for (var i=0; i<data.length; i++){
    //var sno=i+1;
    html+="<tr>";
   // html+="<td>"+sno+"</td>";
    html+="<td>"+data[i].Firstname+"</td>";
    html+="<td>"+data[i].Lastname+"</td>";
    html+="<td>"+data[i].Email+"</td>";
    html+="<td>"+data[i].Telephone+"</td>";
    html+="<td>"+`<button type="button" class="btn"  onclick='removeItem(${data[i].id})'>Delete</button>`+"</td>";
        
    html+="</tr>";}
    html+="</table>"
    document.getElementById("tableDiv").innerHTML= html;
    clearAllFields();
}


function clearAllFields(){
    
document.getElementById("Firstname").value =""
document.getElementById("Lastname").value = ""
document.getElementById("Email").value =""
document.getElementById("Telephone").value = ""

}

function removeItem(rec){
 console.log(rec);
 var filt=data.filter((a,i)=>{
    if(rec == a.id){
         data.splice(i,1);
         
     }
     })
     console.log(data);
 }
 
    
   
    
    

