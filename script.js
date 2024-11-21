// Function to toggle the navigation menu on and off for mobile devices
function toggleNav() {
    const nav = document.querySelector('.main-nav');
    const breadcrumbIcon = document.querySelector('.breadcrumb-icon');
    
    // Check if the nav is currently active
    const isActive = nav.classList.contains('active');

    // Toggle active class for nav
    if (isActive) {
        nav.classList.remove('active'); // Hide the navigation
        breadcrumbIcon.innerHTML = '&#9776;'; // Change to hamburger icon
    } else {
        nav.classList.add('active'); // Show the navigation
        breadcrumbIcon.innerHTML = '&#10005;'; // Change to cross icon
    }
}



// Function to validate the contact form fields
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to handle validation

    let valid = true;

    // Clear any previous error messages
    clearErrorMessages();

    // Validate Name field
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        showError('nameError', 'Name is required');
        valid = false;
    }

    // Validate Email field
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        showError('emailError', 'Email is required');
        valid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'Invalid email format');
        valid = false;
    }

    // Validate Message field
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        showError('messageError', 'Message is required');
        valid = false;
    }

    // If all fields are valid, submit the form (or send an AJAX request)
    if (valid) {
        // Perform your form submission or AJAX request here
        alert('Form submitted successfully!');
    }
});

// Function to display error messages
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = message;
}

// Function to clear error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
        element.textContent = '';
    });
}

// Function to dynamically populate the news feed (replace this with actual dynamic content)
document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('newsContainer');

    // Sample news items to be displayed dynamically
    const newsItems = [
        {
            title: "Exciting New Entrepreneurial Programs Launched",
            date: "November 10, 2024",
            content: "We are proud to announce the launch of new programs aimed at empowering young entrepreneurs in our community. Learn more about these opportunities on our website."
        },
        {
            title: "Divine Innovation Hub's Partnership with Local Universities",
            date: "November 9, 2024",
            content: "DIH has partnered with several local universities to provide students with real-world experience through internships and training programs."
        }
    ];

    // Dynamically create news items and append to the news container
    newsItems.forEach(function (item) {
        const newsItemDiv = document.createElement('div');
        newsItemDiv.classList.add('news-item');

        const newsTitle = document.createElement('h3');
        newsTitle.textContent = item.title;
        newsItemDiv.appendChild(newsTitle);

        const newsDate = document.createElement('p');
        newsDate.classList.add('news-date');
        newsDate.textContent = item.date;
        newsItemDiv.appendChild(newsDate);

        const newsContent = document.createElement('p');
        newsContent.classList.add('news-content');
        newsContent.textContent = item.content;
        newsItemDiv.appendChild(newsContent);

        // Append the new news item to the news container
        newsContainer.appendChild(newsItemDiv);
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset to prevent overlap with fixed header
            behavior: 'smooth'
        });
    });
});
