const issueId = document.querySelector('input[name="issue-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="issue-title"]').value;
  const image_url = document.querySelector('input[name="issue-image_url"]').value;
  const state = document.querySelector('textarea[name="issue-state"]').value;

  await fetch(`/api/issue/${issueId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      image_url,
      state
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/issue/${issueId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-issue-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);