let currentyear = document.querySelector('#currentyear');
let today = new Date ();
currentyear.innerText = today.getFullYear();

let skills = [ 
"Interpersonal skills",
 "Self-awareness", 
 "Emotional intelligence", 
 "Critical thinking"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++) {
    let skill =document.createElement("li")
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
};
let messageForm = document.getElementByName ("leave_message");
messageForm.addEventListener ('submit', function(event){
    event.preventDefault ();
    

   let userNames = event.target.userNames.value;
   let usersemail = event.target.usersEmail.value;
   let usersmessage = event.target.usersMessage.value;
    
   const messageSection = document.getElementById ("messages");
   const messageList = messageSection.querySelector ("ul");
   let newMessage = document.createElement ("li");

   newMessage.innerHTML =
   `<a href = "mailito: ${usersemail}">${usersName}</a>
   <span>says: ${usersmessage}</span>`;
   
   messageForm.reset ();
   
})

let removeButton = document.getElementById ("messages")
removeButton.addEventListener ('click', function (event){
    let button = event.target.Remove;
    let entry = button.parentNode;
    entry.remove ();
    removeButton.appendChild (newMessage);
    newMessage.appendChild (messageList);
})
