let footer = document.querySelector('#footer');
let today = new Date();
let currentYear = today.getFullYear();
let copyright = document.createElement("P");
copyright.innerHTML = "Giovana Aizona " + currentYear;
footer.appendChild(copyright);

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
const messageForm = document.forms.leave_message;
messageForm.addEventListener ('submit', function(event){
    event.preventDefault ();
    

   let usersName = event.target.usersName.value;
   let usersemail = event.target.usersEmail.value;
   let usersmessage = event.target.usersMessage.value;
    
   const messageSection = document.getElementById ("messages");
   const messageList = messageSection.querySelector ("ul");
   let newMessage = document.createElement ("li");

   newMessage.innerHTML =
   `<a href = "mailito: ${usersemail}">${usersName}</a>
   <span>says: ${usersmessage}</span>`;
   console.log (newMessage);
   messageList.appendChild (newMessage);
   messageForm.reset ();
   
})

let removeButton = document.getElementById ("messages")
removeButton.addEventListener ('click', function (event){
    let button = event.target;
    debugger;
    let entry = button.parentNode;
    entry.remove ();
    //removeButton.appendChild (newMessage);
   //newMessage.appendChild (messageList);
})

fetch('https://api.github.com/users/aizonag/repos')
.then ((response) =>{
   return response.json();
})

.then ((response)=> { 
    let repositories = response;
    console.log (repositories);

    let projectSection = document.getElementById ("projects");
    console.log (projectSection);
    let projectList = projectSection.querySelector ("ul"); 
    console.log (projectList);

    for(let i = 0; i < repositories.length; i++) {
        let project = document.createElement("li") 
        project.innerText = repositories[i].name
        projectList.appendChild(project)
    }})
.catch((error) => {
    console.log('ERROR', error)
});



