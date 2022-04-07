function sendEmail() {
    Email.send({
      Host : "smtp.gmail.com",
      Username : "dvdvanveen95@gmail.com",
      Password : "Password",
      To : 'dvdvanveen95@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Enquiry",
      Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message sent successfully!")
  );
}
