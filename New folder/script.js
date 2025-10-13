document.getElementById("submitBtn").addEventListener("click",function (event){
event.preventDefault();



let name = document.getElementById("name").value.trim();
let roll = document.getElementById("roll").value.trim();
let cnic = document.getElementById("cnic").value.trim();
let message = document.getElementById("message");


localStorage.setItem("name",name);
localStorage.setItem("roll",roll);
localStorage.setItem("cnic",cnic);


window.location.href= "quiz.html";


   message.textContent = "";
    message.style.color = "red";


if (name === ""){
    message.textContent =  "⚠️ Please enter your name!";
    return;
}
if (roll.length !== 6){
    message.textContent = "⚠️ Please enter a valid 6 digits!"
    return;
}

if (cnic.length !== 13){
    message.textContent = "⚠️ Please enter a valid 13 digits!"
    return;
}



  message.textContent = "✅ Form submitted successfully!";



  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("cnic").value = "";


  setTimeout(function(){
    message.textContent = "";
  },1000);


setTimeout(function(){
    window.location.href = "quiz.html"; 
}, 1000); 


});