const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

// Listeners for when hovering the main options
about.addEventListener('mouseenter', (event) => {
  about.innerHTML = 'About';
});

about.addEventListener('mouseleave', (event) => {
  about.innerHTML = 'Hello.';
});

work.addEventListener('mouseenter', (event) => {
  work.innerHTML = 'Work';
});

work.addEventListener('mouseleave', (event) => {
  work.innerHTML = 'I am';
});

contact.addEventListener('mouseenter', (event) => {
  contact.innerHTML = 'Contact';
});

contact.addEventListener('mouseleave', (event) => {
  contact.innerHTML = 'Fernando';
});
