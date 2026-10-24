document.addEventListener('DOMContentLoaded', () => {
  // Bouncier open/close animation for the gallery lightbox (services.html only)
  if (window.Lightbox3) {
    Lightbox3.Lightbox.init({
      springOpen:  { stiffness: 200, damping: 10 },
      springClose: { stiffness: 200, damping: 12 },
    });
  }

  loadFaq();

  const form = document.getElementById('contact-form') || document.getElementById('enquiry-form');
  const statusDiv = document.getElementById('form-status');

  // Pages without the contact form (e.g. index.html) have nothing to wire up
  if (!form || !statusDiv) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from reloading lol

    // Check the inputs ourselves and show a custom error message
    var error = validateForm(form);
    if (error) {
      statusDiv.style.color = "red";
      statusDiv.textContent = error;
      return;
    }

    // Enquiry page only: show an estimated cost and availability for the chosen service
    var quoteDiv = document.getElementById('quote-result');
    if (quoteDiv) {
      var service = form.querySelector('#services').value;
      quoteDiv.textContent = "Estimated cost for " + service + ": " + prices[service].cost +
        ". Availability: " + prices[service].availability + ".";
    }

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

// Starting prices and lead times shown on the enquiry page
var prices = {
  '3D Printing': { cost: 'from R250', availability: 'available, about 3 to 5 working days' },
  'CNC':         { cost: 'from R800', availability: 'available, about 1 to 2 weeks' },
  'Welding':     { cost: 'from R500', availability: 'available, about 2 to 4 working days' }
};

// Returns an error message for the first invalid field, or an empty string if everything is fine
function validateForm(form) {
  var name = form.querySelector('#name').value.trim();
  var email = form.querySelector('#email').value.trim();
  var phone = form.querySelector('#phone').value.trim();
  var message = form.querySelector('#feedback').value.trim();
  var services = form.querySelector('#services');

  if (name.length < 2) {
    return "Please enter your name (at least 2 letters).";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address, e.g. name@example.com.";
  }
  if (phone !== '' && !/^[0-9]{10}$/.test(phone)) {
    return "Phone number must be exactly 10 digits, e.g. 0612345678.";
  }
  if (services && services.value === 'Deselected') {
    return "Please select the service you need.";
  }
  if (message.length < 10) {
    return "Please write a message of at least 10 characters.";
  }
  return '';
}

// FAQ questions, added to the Services page by loadFaq()
var faqs = [
  { question: 'How long does a job take?', answer: 'Most 3D printing and welding jobs take under a week. CNC work takes 1 to 2 weeks.' },
  { question: 'Do I need my own design?', answer: 'No. We can draw up a CAD design from your description of the project.' },
  { question: 'How do I get a quote?', answer: 'Fill in the form on the Enquiry page and we will email you a quote.' }
];

// Builds the FAQ accordion from the faqs array: clicking a question shows or hides its answer
function loadFaq() {
  var faqDiv = document.getElementById('faq');
  if (!faqDiv) return;

  for (var i = 0; i < faqs.length; i++) {
    var button = document.createElement('button');
    button.className = 'accordion';
    button.textContent = faqs[i].question;

    var panel = document.createElement('div');
    panel.className = 'panel';
    panel.innerHTML = '<p>' + faqs[i].answer + '</p>';

    button.addEventListener('click', function() {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      // Slide the panel open by animating max-height (transition is in styles.css)
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });

    faqDiv.appendChild(button);
    faqDiv.appendChild(panel);
  }
}

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

// Search box above the services table: hides every row that doesn't contain what was typed
function searchTable() {
  var input = document.getElementById('tableInput');
  var filter = input.value.toUpperCase();
  var table = document.getElementById('serviceTable');
  var tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName('td')[0];
    if (td) { // The header row has no <td>, so it is skipped and always stays visible
      // Search the whole row (service, materials and description), not just the first column
      var txtValue = tr[i].textContent || tr[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
