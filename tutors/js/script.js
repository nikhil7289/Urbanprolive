let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}



// scripts.js
function bookActivity(activityName) {
   document.getElementById('bookingActivityName').innerText = `Booking for ${activityName}`;
   document.getElementById('bookingModal').style.display = "block";
}

function closeModal() {
   document.getElementById('bookingModal').style.display = "none";
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
   event.preventDefault();
   alert('Booking confirmed!');
   closeModal();
});








//////////////////////////////////////////////////////////////////////


document.getElementById('reviewForm').addEventListener('submit', function(event) {
   event.preventDefault();
   const tutor = document.getElementById('tutor').value;
   const rating = document.getElementById('rating').value;
   const comment = document.getElementById('comment').value;

   const review = document.createElement('div');
   review.classList.add('review');
   review.innerHTML = `
       <h3>${tutor} - Rating: ${rating}</h3>
       <p>${comment}</p>
   `;

   document.getElementById('reviewList').appendChild(review);
   document.getElementById('reviewForm').reset();
});





// feedback 

// scripts.js
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
   event.preventDefault();
   const className = document.getElementById('class').value;
   const tutorName = document.getElementById('tutorFeedback').value;
   const feedbackComment = document.getElementById('feedbackComment').value;

   alert(`Feedback submitted for class: ${className}, tutor: ${tutorName}`);
   document.getElementById('feedbackForm').reset();
});







/////////////////////////////////////

//live chat


document.getElementById('sendBut').addEventListener('click', sendMessage);
document.getElementById('messageInpt').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
   
    }
});

function sendMessage() {
    const messageInpt = document.getElementById('messageInpt');
    const message = messageInpt.value.trim();
    
    if (message !== '') {
        addMessage(message, 'user');
        messageInpt.value = '';
        messageInpt.focus();
        
        // Simulate a bot response
        setTimeout(() => {
            addMessage('Hii', 'bot');
        }, 1000);
      //   console.log("hi")
        setTimeout(() => {
            addMessage('my name is suraj', 'bot');
        }, 9000);
    }
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}


///////////////////////////////////////////////////////




document.addEventListener("DOMContentLoaded", function() {
   var form = document.getElementById("account-settings-form");
   var message = document.getElementById("message");
   form.addEventListener("submit", function(event) {
       event.preventDefault(); 
       alert("updated successfully!")
       var username = document.getElementById("username").value;
       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
       message.textContent = "Account settings updated successfully!";
       alert("updated successfully!");
       message.style.color = "red";
   });
});
/////////////////////////////////////////////////////////////////


const billingData = [
   { date: '2023-01-01', amount: '$100', status: 'Paid' },
   { date: '2023-02-01', amount: '$200', status: 'Pending' },
   { date: '2023-03-01', amount: '$150', status: 'Paid' }
];

const billingTableBody = document.getElementById('billingTableBody');

billingData.forEach(item => {
   const row = document.createElement('tr');
   row.innerHTML = `<td>${item.date}</td><td>${item.amount}</td><td>${item.status}</td>`;
   billingTableBody.appendChild(row);
});

































