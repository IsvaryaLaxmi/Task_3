// function checkData(){
//     var enterEmail = document.getElementById('email').value;
//     var enterPswrd = document.getElementById('pswrd').value;
    
//     var getEmail = localStorage.getItem('userEmail'); 
//     var getPswrd = localStorage.getItem('userPswrd');

//     if(enterEmail == getEmail && enterPswrd == getPswrd)
//     {
//         // if(enterPswrd == getPswrd)
//         // {
          
//             window.location.replace("http://stackoverflow.com");
//         // }
        
//         // else{
//         //     alert("wrong Password");
//         // }
//     }
//     else{
//         alert("Invalid details");
//     }
// }
function redirect(event) {
    var enterEmail = document.getElementById('email').value;
    var enterPswrd = document.getElementById('pswrd').value;
    var getEmail = localStorage.getItem('userEmail'); 
   var getPswrd = localStorage.getItem('userPswrd');

    if(enterEmail == getEmail && enterPswrd == getPswrd)
       window.location = 'Task.html';
    else
       alert("Wrong credentials");
    event.preventDefault();
  }
  
  document.querySelector("form").addEventListener("submit", redirect);