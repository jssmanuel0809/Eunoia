function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "developmentpurp@gmail.com",
        Password : "CE16D0FBE2A1048AEF96957988FEA37142C8",
        To : 'developmentpurp@gmail.com',
        From : document.getElementById("email").value,
        Subject : "EUNOIA - Contact Form Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}