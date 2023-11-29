const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="issue-title"]').value;
    const description = document.querySelector('textarea[name="issue-description"]').value;
    const image_url = document.querySelector('input[name="issue-image_url"]').value;
    const state = document.querySelector('textarea[name="issue-state"]').value;
    const location = document.querySelector('textarea[name="issue-location"]').value;
  

    await fetch(`/api/issue`, {
      method: 'post',
      body: JSON.stringify({
        title,
        description,
        image_url,
        state,
        location
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-issue-form')
    .addEventListener('submit', newFormHandler);