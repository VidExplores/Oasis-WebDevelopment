document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent traditional form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = encodeURIComponent('Inquiry from ' + name);
        const body = encodeURIComponent(`Hello Vidisha,\n\nMy name is ${name}.\n\n${message}\n\nYou can contact me back at ${email}.`);

        const mailtoLink = `mailto:biswalvidisha@gmail.com?subject=${subject}&body=${body}`;

        console.log(mailtoLink); // Check the generated link in the console

        window.location.href = mailtoLink; // Open mail client
    });
});
