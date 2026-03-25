document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-success');
  const sendAnotherBtn = document.getElementById('send-another');
  
  if (!form) return;

  // Simple email regex for validation
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const showError = (input) => {
    const parent = input.closest('.form-group');
    if (parent) {
      parent.classList.add('has-error');
    }
  };

  const clearError = (input) => {
    const parent = input.closest('.form-group');
    if (parent) {
      parent.classList.remove('has-error');
    }
  };

  // Preemptively clear errors when typing
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => clearError(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');
    
    [nameInput, emailInput, msgInput].forEach(clearError);
    
    if (!nameInput.value.trim()) {
      showError(nameInput);
      isValid = false;
    }
    
    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      showError(emailInput);
      isValid = false;
    }
    
    if (!msgInput.value.trim()) {
      showError(msgInput);
      isValid = false;
    }
    
    if (isValid) {
      // Hide form and display success card
      form.classList.add('hidden');
      successMsg.classList.remove('hidden');
    }
  });

  sendAnotherBtn.addEventListener('click', () => {
    // Check if the form has a reset method
    form.reset();
    
    // Switch view
    successMsg.classList.add('hidden');
    form.classList.remove('hidden');
  });
});
