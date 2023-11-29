const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const nameEl = document.querySelector('#name-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
    const emailEl = document.querySelector('#email-input-signup');
    const addressEl = document.querySelector('#address-input-signup');

    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        name: nameEl.value,
        password: passwordEl.value,
        address: addressEl.value,
        email: emailEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);