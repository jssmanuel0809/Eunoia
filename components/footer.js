class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        footer{
            width: 100%;
            color: #d9d9d9;
        }
        .content1{
            position: relative;
            margin: 130px auto;
            text-align: center;
            padding: 0 20px;
        }
        .content1 .text{
            font-size: 2.5rem;
            font-weight: 600;
            color: #202020;
        }
        .content1 .p{
            font-size: 2.1875rem;
            font-weight: 600;
            color: #202020;
        }
        footer{
            position: relative;
            bottom: 0px;
            width: 100%;
            background: linear-gradient(to right, #3c1053, #ad5389);
        }
        .main-content{
            display: flex;
        }
        .main-content .box{
            flex-basis: 50%;
            padding: 10px 20px;
        }
        .box h2{
            font-family: Courier;
            font-size: 1.125rem;
            font-weight: 600;
            text-transform: uppercase;
        }
        .box .context{
            margin: 20px 0 0 0;
            position: relative;
        }
        .box .context:before{
            position: absolute;
            content: '';
            top: -10px;
            height: 2px;
            width: 100%;
            background: #1a1a1a;
        }
        .box .context:after{
            position: absolute;
            content: '';
            height: 2px;
            width: 15%;
            background: #F582A7;
            top: -10px;
        }
        .left .context p{
            font-family: Courier;
            text-align: justify;
        }
        .left .context .social{
            margin: 20px 0 0 0;
        }
        .left .context .social a{
            padding: 0 2px;
            color: #d9d9d9;
        }
        .left .context .social a span{
            height: 40px;
            width: 40px;
            background: #711A75;
            line-height: 40px;
            text-align: center;
            font-size: 18px;
            border-radius: 5px;
            transition: 0.3s;
        }
        .left .context .social a span:hover{
            background: #F10086;
        }
        .center .context .fas{
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
        .center .context .fas:hover{
            background: #F10086;
        }
        .center .context .text{
            font-family: Courier;
            font-size: 1.0625rem;
            font-weight: 500;
            padding-left: 10px;
        }
        .center .content .phone{
            margin: 15px 0;
        }
        .right form .text{
            font-family: Courier;
            font-size: 1.0625rem;
            margin-bottom: 2px;
            color: white;
        }
        .right form .msg{
            margin-top: 10px;
        }
        .right form input, .right form textarea{
            width: 100%;
            font-size: 1.0625rem;
            color: white;
            background: #333;
            padding-left: 10px;
            border: 1px solid #222222;
        }
        // .right form input:focus,
        // }
        .right form input{
            height: 35px;
        }
        .right form .stud{
            margin-top: 10px;
        }
        .right form .stud button{
            height: 40px;
            width: 100%;
            border: none;
            outline: none;
            background: #F10086;
            font-size: 1.0625rem;
            font-weight: 500;
            cursor: pointer;
            transition: .3s;
        }
        .right form .stud button:hover{
            background:#711A75;
        }
        .bottom center{
            padding: 5px;
            font-size: 0.9375rem;
            background: #180A0A;
        }
        .bottom center span{
            color: #656565;
        }
        .bottom center a{
            color: #E9D5DA;
            text-decoration: none;
        }
        .bottom center a:hover{
            text-decoration: underline;
        }
        @media screen and (max-width: 900px) {
            footer{
                position: relative;
                bottom: 0px;
            }
            .main-content{
                flex-wrap: wrap;
                flex-direction: column;
            }
            .main-content .box{
                margin: 5px 0;
            }
        }
        </style>
      
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

        <footer>
        <div class="main-content">
            <div class="left box">
                <h2>SOCIALS</h2>
                <div class="context">
                <p>Support us in our Social Medias and stay updated in our latest products.</p>
                <div class="social">
                    <a href="https://www.tiktok.com/@matt.court/video/7081701573725785350?is_copy_url=1&is_from_webapp=v1&q=oh%20baby&t=1650560181448"><span class="fab fa-facebook-f"></span></a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><span class="fab fa-twitter"></span></a>
                    <a href="https://www.youtube.com/shorts/Oom3L0UP8j4"><span class="fab fa-instagram"></span></a>
                    <a href="https://www.youtube.com/watch?v=Ao1ZGN52ZeM"><span class="fab fa-youtube"></span></a>
                </div>
                </div>
            </div>
            <div class="center box">
                <h2>Address</h2>
                <div class="context">
                <div class="place">
                    <span class="fas fa-map-marker-alt"></span>
                    <span class="text">898 Street, Bonifacio Global City.</span>
                </div>
                <div class="phone">
                    <span class="fas fa-phone-alt"></span>
                    <span class="text">+898-56-37</span>
                </div>
                <div class="email">
                    <span class="fas fa-envelope"></span>
                    <span class="text">eunoia.customer.service@gmail.com</span>
                </div>
                </div>
            </div>
            <div class="right box">
                <h2>Contact us</h2>
                <div class="context">
                    <form action="#">
                        <div class="email">
                        <div class="text">Email *</div>
                        <input type="email" required>
                        </div>
                        <div class="msg">
                        <div class="text">Message *</div>
                        <textarea rows="2" cols="25" required></textarea>
                        </div>
                        <div class="stud">
                        <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="bottom">
        <center>
            <span class="credit"><a href="https://www.tiktok.com/@cyleu/video/7033603953359146267?is_copy_url=1&is_from_webapp=v1&q=viper&t=1650561372685">Eunoia</a> | </span>
            <span class="far fa-copyright"></span><span> 2022 All rights reserved.</span>
        </center>
        </div>
        </footer>
        `;
  }
}

customElements.define('footer-component', Footer);