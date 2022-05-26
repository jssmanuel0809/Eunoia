function sendEmail(){
    Email.send({
        // SecureToken : "9160d7bd-7612-467b-8c8e-8b7415c3a813",
        Host : "smtp.elasticemail.com",
        Username : "developmentpurp@gmail.com",
        Password : "CE16D0FBE2A1048AEF96957988FEA37142C8",
        To : 'developmentpurp@gmail.com',
        From : document.getElementById("email").value,
        Subject : "EUNOIA - Contact Form Inquiry",
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}