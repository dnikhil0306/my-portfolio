document.addEventListener("DOMContentLoaded", function () {
    // Handle project column clicks
    const projectColumns = document.querySelectorAll(".project-column");
    
    projectColumns.forEach((column) => {
        column.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            if (link) {
                window.open(link, "_blank");
            }
        });
    });

    // Handle form submission
    const form = document.getElementById("myForm");
    const submitButton = document.getElementById("submit-button");
    const formMessage = document.querySelector(".form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                formMessage.innerHTML = '<p class="text-success">Thanks for your submission!</p>';
            } else {
                response.json().then(data => {
                    if (data.errors) {
                        formMessage.innerHTML = '<p class="text-danger">' + data.errors.map(error => error.message).join(", ") + '</p>';
                    } else {
                        formMessage.innerHTML = '<p class="text-danger">Oops! There was a problem submitting your form.</p>';
                    }
                });
            }
        }).catch(error => {
            formMessage.innerHTML = '<p class="text-danger">Oops! There was a problem submitting your form.</p>';
        });
    });

    // Add glow effect to submit button on hover
    submitButton.addEventListener("mouseenter", function () {
        this.classList.add("glow");
    });

    submitButton.addEventListener("mouseleave", function () {
        this.classList.remove("glow");
    });

    // Remove placeholder on input focus
    const inputFields = document.querySelectorAll(".form-control");
    inputFields.forEach(function (input) {
        input.addEventListener("focus", function () {
            this.setAttribute('data-placeholder', this.placeholder);
            this.placeholder = "";
        });

        input.addEventListener("blur", function () {
            this.placeholder = this.getAttribute('data-placeholder');
        });
    });

    // Scroll to top button
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Activate scrollspy
    const scrollspy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNavAltMarkup',
        offset: 100 // Adjust the offset as needed
    });
});

// Function to scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Typing text effect
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        strings: ["Computer Science Engineer", "Web Developer", "Ardent Learner", "Tech Enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000, // Delay before starting to type again
        showCursor: true, // Show blinking cursor
        cursorChar: "|", // Cursor character
        loop: true, // Loop indefinitely
    };

    const typed = new Typed("#typing-text", options);
});

function showPopup(id) {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('popup-' + id).style.display = 'flex';
}

function closePopup() {
    document.querySelector('.container').style.display = 'flex';
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.style.display = 'none';
    });
}