// button click on homepage navigate to request blood page
document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.querySelector('.register-btn');
    if (registerBtn) {
      registerBtn.addEventListener('click', () => {
        window.location.href = 'requestblood.html';
      });
    }
  });

// show message on submit in request blood page
document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.querySelector('.request-form');
    if (requestForm) {
      requestForm.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent page reload
        alert('Your blood request has been submitted successfully!');
        this.reset(); // clear the form
      });
    }
  });

  // handle Contact Us form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // prevent page reload
            alert('Your message has been sent successfully! We will get back to you soon.');
            this.reset(); // clear the form
        });
    }
});

// handle registration form submission in register.html
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form'); 
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            alert('Thank you for registering as a donor! We appreciate your willingness to save lives.');
            this.reset(); 
        });
    }
});


    const searchInput = document.getElementById('search');
    const results = document.getElementById('results');
    const items = Array.from(results.children);

    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(query) ? 'flex' : 'none';
      });
    });
  

  
