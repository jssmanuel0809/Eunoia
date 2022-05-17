class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <head>
        <style>
        *{
          font-family: Courier;
          font-size: 18px;
          outline: none;
          border: none;
          text-decoration: none;
        }
        header{
          width: 100%
        }
        .headerlogo #clock{
          font-size: 10px;
          color: black;
        }
        .headerlogo{
          position: fixed;
          background: #355C7D;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          height: 50;
          width: 100%;
          top: 0; left: 0; right: 0;
          text-align: center;
          font-size: 100%;
          padding: 15 0 0 0;
          z-index: 2;
        }
        .headerlogo a{
          color: white;
          margin-left: 80px;
        }
        .righticons{
          height:20px;
          float: right;
          margin-right: 30px;
        }
        .headerlogo .logo{
          height: 30px;
          margin-left: 125px;
        }
        .headerlogo img:hover{
          cursor: pointer;
        }
        .headernav{
          position: fixed;
          top: 50; left: 0; right: 0;
          background: #fff;
          padding: 10px 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 .6rem 1rem rgba(0, 0, 0, .1);
          z-index: 2;
        }
        .headernav a{
          color: gray;
        }
        .headernav a:hover{
          color: black;
          text-decoration-line: none;
        }

        <!--dark mode css-->
        body.dark {
          background-color: gray;
          color: white;
        }
        .checkboxmode {
          opacity: 0;
          position: absolute;
        }
        /* edit mo nalang to depende kung san mo ilalagay/position yung toggle */
        .labelmode {
          background-color: gray;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px;
          position: relative;
          height: 20px;
          width: 44px;
          transform: scale(1.3);
          margin-right: 45px;
          margin-top: 5px;
        }
        /* ito yung gumagalaw na circle pag nagttoggle ganon */
        .labelmode .ballmode {
            /* palitan mo nalang color if di bagay white para dun sa circle */
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
          height: 16px;
          width: 16px;
          transform: translateX(0px);
          transition: transform 0.2s linear;
        }
        
        .checkboxmode:checked + .labelmode .ballmode {
          transform: translateX(24px);
        }
        
        .clock #time{
          margin-bottom: 0px;
          padding-left: 50px;
        }

        .darkmode{
          background-color: gray;
          color: white;
        }
        .darkmode .headernav{
          background-color: black;
        }
        .darkmode .content{
          color: white;
        }
        </style>
      </head>

      <header>
            <!-- HEADER - LOGO, LOGIN, CART-->
          <div class="headerlogo">
            <a href="index.html"><img class="logo" src="../public/image/logotextwhite.png"></a>
            <a href="#login"><img class="righticons" src="../public/image/user.png"></a>
            <a href=""><img class="righticons" src="../public/image/cart.png"></a>
          </div>

            <!-- HEADER - NAV -->
          <div class="headernav">
          <!--dark mode-->
          <div>
            <input type="checkbox" onclick="myFunction()" class="checkboxmode" id="chkmode" />
            <label class="labelmode" for="chkmode">
                <div class="ballmode"></div>
            </label>
          </div>

            <a href="../pages/index.html">HOME</a>
            <a href="../pages/shop.html">SHOP ALL</a>
            <a href="../pages/apparel.html">APPARELS</a>
            <a href="../pages/accessories.html">ACCESSORIES</a>
            <a href="../pages/books.html">BOOKS</a>
            <a href="../pages/faqs.html">FAQS</a>
            <a href="../pages/about.html">ABOUT</a>

            <div class="clock" onclick="myFunction()">
              <p id="time"></p>
            </div>
          </div>

          

      </header>

        `;
  }
}

customElements.define('header-component', Header);
function darkMode(){
  document.body.style.backgroundColor="gray";
  const headernav = document.getElementsByClassName("headernav");
  headernav[0].style.background="black";

}

function currentTime(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  if(hours > 12){
    hours = hours - 12;
    session = "PM";
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  time = hours + ":" + minutes + ":" + seconds + " " + session;

  document.getElementById("time").innerHTML = time;
  setTimeout(function(){currentTime() }, 1000);
  console.log(time);
}
currentTime();


function myFunction(){
  var element = document.body;
  element.classList.toggle("darkmode");
}