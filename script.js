// JavaScript for opening project links in a new tab
document.addEventListener("DOMContentLoaded", function () {
    const projectColumns = document.querySelectorAll(".project-column");
    
    projectColumns.forEach((column) => {
        column.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            if (link) {
                window.open(link, "_blank");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const projectColumns = document.querySelectorAll(".project-column");

    projectColumns.forEach((column) => {
        column.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            if (link) {
                window.open(link, "_blank");
            }
        });
    });

    const form = document.getElementById("myForm");
    const submitButton = document.getElementById("submit-button");
    const formMessage = document.querySelector(".form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const phoneField = document.getElementById("phone");
        const subjectField = document.getElementById("subject");
        const messageField = document.getElementById("message");

        const name = nameField.value;
        const email = emailField.value;
        const phone = phoneField.value;
        const subject = subjectField.value;
        const message = messageField.value;

        if (!name || !email || !phone || !subject || !message) {
            formMessage.innerHTML = "Please fill in all fields.";
            formMessage.classList.remove("text-success");
            formMessage.classList.add("text-danger");
        } else {
            formMessage.innerHTML = "Request submitted!";
            formMessage.classList.remove("text-danger");
            formMessage.classList.add("text-success");

            // Clear form fields
            form.reset();

            // Display hints again
            nameField.placeholder = "Name";
            emailField.placeholder = "Email";
            phoneField.placeholder = "Phone Number";
            subjectField.placeholder = "Subject";
            messageField.placeholder = "Your Message";
        }
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
            this.placeholder = "";
        });

        input.addEventListener("blur", function () {
            this.placeholder = this.getAttribute("placeholder");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    // Add a click event listener to the button
    scrollToTopButton.addEventListener("click", function () {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Activate scrollspy
    const scrollspy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNavAltMarkup',
        offset: 100 // Adjust the offset as needed
    });

    // Scroll to top button
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const projectColumns = document.querySelectorAll(".project-column");

    projectColumns.forEach((column) => {
        column.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            if (link) {
                window.open(link, "_blank");
            }
        });
    });
});

function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
}



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
