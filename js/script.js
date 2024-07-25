document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);
            form.reset();
        } else {
            alert("Harap isi semua kolom sebelum mengirim.");
            document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                formResponse.textContent = "Thank you! Your message has been sent.";
                formResponse.style.color = "green";
                form.reset();
            } else if (data === "missing_fields") {
                formResponse.textContent = "Please fill in all the fields.";
                formResponse.style.color = "red";
            } else {
                formResponse.textContent = "There was an error sending your message. Please try again later.";
                formResponse.style.color = "red";
            }
        })
        .catch(error => {
            formResponse.textContent = "There was an error sending your message. Please try again later.";
            formResponse.style.color = "red";
               });
            });
          });
        }
    });
});
