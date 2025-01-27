
let body = document.querySelector("body");

let header = document.querySelector("header");
let heroSection1 = document.querySelector("#about-me")
let heroSection2 = document.querySelector("#portfolio");
let heroSection3 = document.querySelector("#contact-me");
let footer = document.querySelector("footer");
let navLink1 = document.querySelector("#nav-link1");
let navLink2 = document.querySelector("#nav-link2");
let navLink3 = document.querySelector("#nav-link3");
let navLink4 = document.querySelector("#nav-link4");
let helloMenu = document.querySelector(".hello-menu");
let footerPara = document.querySelector("footer p");
let headerPara = document.querySelector("#header-para1");


let cvBtn = document.querySelector("#contact-details button");
let cvBtnText = document.querySelector("#contact-details button a");

cvBtn.addEventListener("mouseover", () => {
    cvBtnText.style.color = "black";
})


let skill = document.querySelector("#skills")
let achivements = document.querySelector("#achievements");
let education = document.querySelector("#education");

let skillHeading = document.querySelector("#about-me-tag-skill");
let achivementHeading = document.querySelector("#about-me-tag-achievement");
let educationHeading = document.querySelector("#about-me-tag-education");

skillHeading.addEventListener("click", () => {
    skill.style.display = "inherit";
    achivements.style.display = "none";
    education.style.display = "none";
})
achivementHeading.addEventListener("click", () => {
    achivements.style.display = "inherit";
    skill.style.display = "none";
    education.style.display = "none";
})
educationHeading.addEventListener("click", () => {
    education.style.display = "inherit";
    skill.style.display = "none";
    achivements.style.display = "none";
})

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz9HgJXHdP4e3HzaCBNkAE-epo_jmex8Zvw8rdpXakeeWC8ey2cNg6YhJgUzM24r6Bs/exec';
  const form = document.forms['google-sheet'];

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById("your-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation logic
    if (!name || !email.includes("@") || !message) {
      alert("Please fill out all fields with valid information.");
      return;
    }

    // Send data to Google Sheets
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        // Show the modal on success
        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();

        // Reset form fields
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert('There was an error submitting your form. Please try again.');
      });
  });


//scroll reveal

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

     ScrollReveal().reveal('.header', { origin: 'top' });
     ScrollReveal().reveal('.profile-img', { origin: 'bottom'});

     //typed javascript

     const typed = new Typed ('.multiple-text', {
        strings: ['Mechanical Engineer', "Frontend Developer"],
        typeSpeed: 100, 
        backSpeed: 100,
        backDelay: 1000,
        loop: true
     });
  
