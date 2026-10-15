document.addEventListener('DOMContentLoaded', () => {
  // Bouncier open/close animation for the gallery lightbox (services.html only)
  if (window.Lightbox3) {
    Lightbox3.Lightbox.init({
      springOpen:  { stiffness: 200, damping: 10 },
      springClose: { stiffness: 200, damping: 12 },
    });
  }

  const form = document.getElementById('contact-form') || document.getElementById('enquiry-form');
  const statusDiv = document.getElementById('form-status');

  // Pages without the contact form (e.g. index.html) have nothing to wire up
  if (!form || !statusDiv) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from reloading lol
    
    statusDiv.style.color = "black";
    statusDiv.textContent = "Sending your message...";

    // Packages up all your form inputs automatically
    const formData = new FormData(form);

    // Sends the data to the email proxy service
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      if (response.status === 200) {
        statusDiv.style.color = "green";
        statusDiv.textContent = "Success! Message sent. I'll email you back soon.";
        form.reset(); // Clears out the form inputs
      } else {
        const json = await response.json();
        statusDiv.style.color = "red";
        statusDiv.textContent = json.message || "Oops! Something went wrong.";
      }
    })
    .catch(error => {
      console.error(error);
      statusDiv.style.color = "red";
      statusDiv.textContent = "Network error. Please try again later.";
    });

  });

});

// Search box under the nav: hides every page link that doesn't contain what was typed
function searchPages() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('searchList');
  var li = ul.getElementsByTagName('li');

  // Hide the whole list while the search box is empty
  if (filter === '') {
    ul.style.display = 'none';
    return;
  }
  ul.style.display = 'block';

  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0];
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
