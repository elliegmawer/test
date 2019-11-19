function sendMail(contactForm) {
    emailjs.send("gmail", "developer_weather_app", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "project_enquiry": contactForm.projectsummary.value
        })
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            console.log("FAILED...", error);
        });
    return false; // To block from loading a new page
}

//modal
$("#emailform").on('submit', function(e) {
    $('#myModal').modal('show');
    e.preventDefault();
});

function clearForm() {
  document.getElementById("emailform").reset();
}
