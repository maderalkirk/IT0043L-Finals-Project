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
  