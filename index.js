function handleSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const newMessage = {
    name,
    email,
    message
  };

  fetch('http://localhost:3000/contactMessages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
  })
    .then(response => response.json())
    .then(data => {
      
      alert('Message submitted successfully!');
     
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    })
    .catch(error => {
      
      alert('An error occurred. Please try again later.');
      console.error(error);
    });
}


fetch('http://localhost:3000/inspirationStories')
  .then(response => response.json())
  .then(data => {
    const storiesContainer = document.getElementById('stories');
    data.forEach(story => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h3>${story.title}</h3>
        <img src="${story.image}" alt="${story.title}">
        <p>${story.description}</p>
      `;
      storiesContainer.appendChild(article);
    });
  });


const form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);
