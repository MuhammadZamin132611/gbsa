document.addEventListener("DOMContentLoaded", function () {

    emailjs.init({
        publicKey: "jQ7Eehmz5EMxd7oUu"
    });

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            title: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        emailjs.send(
            "service_967654r",
            "template_73rjzke",
            formData
        )
            .then(function (response) {
                alert("Message sent successfully!");
                console.log("SUCCESS!", response);
                form.reset();
            })
            .catch(function (error) {
                alert("Failed to send message. Please try again later.");
                console.error("FAILED...", error);
            });
    });

});