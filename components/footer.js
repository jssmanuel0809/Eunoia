class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <style>
                footer{
                    width: 100%;
                    color: #d9d9d9;
                }
                footer{
                    position: relative;
                    bottom: 0px;
                    width: 100%;
                    background: linear-gradient(to right, #3c1053, #ad5389);
                }
                .footer-box{
                    display: flex;
                }
                .footer-box .content-box{
                    flex-basis: 50%;
                    padding: 10px 20px;
                }
                .content-box h2{
                    font-family: Courier;
                    font-size: 1.125rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .content-box .footer-context{
                    margin: 20px 0 0 0;
                    position: relative;
                }
                .content-box .footer-context:before{
                    position: absolute;
                    content: '';
                    top: -10px;
                    height: 2px;
                    width: 100%;
                    background: #1a1a1a;
                }
                .content-box .footer-context:after{
                    position: absolute;
                    content: '';
                    height: 2px;
                    width: 15%;
                    background: #F582A7;
                    top: -10px;
                }
                .social-box .footer-context p{
                    font-family: Courier;
                    text-align: justify;
                }
                .social-box .footer-context .social{
                    margin: 20px 0 0 0;
                }
                .social-box .footer-context .social a{
                    padding: 0 2px;
                    color: #d9d9d9;
                }
                .social-box .footer-context .social a span{
                    height: 40px;
                    width: 40px;
                    background: #711A75;
                    line-height: 40px;
                    text-align: center;
                    font-size: 18px;
                    border-radius: 5px;
                    transition: 0.3s;
                }
                .social-box .footer-context .social a span:hover{
                    background: #F10086;
                }
                .contact-box .footer-context .fas{
                    font-size: 1.4375rem;
                    background: #711A75;
                    height: 45px;
                    width: 45px;
                    line-height: 45px;
                    text-align: center;
                    border-radius: 50%;
                    transition: 0.3s;
                    cursor: pointer;
                }
                .contact-box .footer-context .fas:hover{
                    background: #F10086;
                }
                .contact-box .footer-context .text{
                    font-family: Courier;
                    font-size: 1.0625rem;
                    font-weight: 500;
                    padding-left: 10px;
                }
                .contact-box .content .phone{
                    margin: 15px 0;
                }
                .bottom-footer center{
                    padding: 5px;
                    font-size: 0.9375rem;
                    background: #180A0A;
                }
                .bottom-footer center span{
                    color: #656565;
                }
                .bottom-footer center a{
                    color: #E9D5DA;
                    text-decoration: none;
                }
                .bottom-footer center a:hover{
                    text-decoration: underline;
                }
                @media screen and (max-width: 900px) {
                    footer{
                        position: relative;
                        bottom: 0px;
                    }
                    .footer-box{
                        flex-wrap: wrap;
                        flex-direction: column;
                    }
                    .footer-box .content-box{
                        margin: 5px 0;
                    }
                }
            </style>
        </head>
        <body>
        <footer>
        <div class="footer-box">
            <div class="social-box content-box">
                <h2>SOCIALS</h2>
                <div class="footer-context">
                <p>Support us in our Social Medias and stay updated in our latest products.</p>
                <div class="social">
                    <a href="https://www.tiktok.com/@matt.court/video/7081701573725785350?is_copy_url=1&is_from_webapp=v1&q=oh%20baby&t=1650560181448"><span class="fab fa-facebook-f"></span></a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><span class="fab fa-twitter"></span></a>
                    <a href="https://www.youtube.com/shorts/Oom3L0UP8j4"><span class="fab fa-instagram"></span></a>
                    <a href="https://www.youtube.com/watch?v=Ao1ZGN52ZeM"><span class="fab fa-youtube"></span></a>
                </div>
                </div>
            </div>
            <div class="contact-box content-box">
                <h2>Address</h2>
                <div class="footer-context">
                <div class="contact-address">
                    <span class="fas fa-map-marker-alt"></span>
                    <span class="text">898 Street, Bonifacio Global City.</span>
                </div>
                <div class="contact-phone">
                    <span class="fas fa-phone-alt"></span>
                    <span class="text">+898-56-37</span>
                </div>
                <div class="contact-email">
                    <span class="fas fa-envelope"></span>
                    <span class="text">eunoia.customer.service@gmail.com</span>
                </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
        <center>
            <span class="credit"><a href="https://www.tiktok.com/@cyleu/video/7033603953359146267?is_copy_url=1&is_from_webapp=v1&q=viper&t=1650561372685">Eunoia</a> | </span>
            <span class="far fa-copyright"></span><span> 2022 All rights reserved.</span>
        </center>
        </div>
        </footer>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
        </body>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script src="../script/email.js"></script>
        `;
  }
}

customElements.define('footer-component', Footer);