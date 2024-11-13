document.addEventListener('DOMContentLoaded', function () {
    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Mock validation logic (replace with your actual validation logic or backend call)
        if (email === "user@example.com" && password === "password123") {
            // Redirect to dashboard page if credentials match
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password.");
        }
    });

    // Handle sign-up form submission
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Mock sign-up logic (you can expand this with actual backend validation)
        if (username && email && password) {
            // Redirect to dashboard page after successful sign-up
            window.location.href = "dashboard.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});

  

document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    });


    


