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
        .headerlogo .greeting{
          font-size: 15px;
          color: white;
          padding-right: 10px;
        }
        .logout{
          color: white;
          transition: background 0.5s;
          text-decoration: none;
          border: none;
          font-size: 15px;
          background: transparent;
          padding-right: 10px;
          margin-bottom: 25;
        }
        .logout:hover{
          text-decoration: none;
          cursor: pointer;
          color: #355C7D;
        }
        .headerlogo .user{
          display: flex;
          /* right: 20%; */
          /* margin-left: 100; */
          margin-right: 50px;
        }
        .headerlogo{
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
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
          margin-left: 0%;
          margin-right: 50%;
        }
        .headerlogo .logo{
          height: 30px;
          margin-left: 15%;
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
        /* dark mode css */
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
        .headernav #time{
          margin-bottom: 0px;
          padding-left: 50px;
          text-decoration: none;
        }
        .darkmode{
          background-color: gray;
          color: white;
        }
        .darkmode .headernav{
          background-color: black;
        }
        .darkmode .headernav a:hover{
          color: white;
        }
        .darkmode .content{
          color: white;
        }
        .darkmode .home .content h3{
          color: white;
        }
        .darkmode .home .content p{
          color: white;
        }
        .darkmode .popular-products h3{
          color: white;
        }
        .darkmode .customer-review h3{
          color: white;
        }
        .darkmode .MultiCarousel-inner .item .pad10 {
          background-color: darkgray;
        }
        /*.darkmode .customer-review .carousel slide .carousel-inner .carousel-item active .header-box .overview{
          color: white;
        }*/
        .darkmode .row .col-1{
          background-color: darkgray;
        }
        /*.darkmode .row .col-1 h4{
          color: white;
        }
        .darkmode .row .col-1 p{
          color: white;
        }*/
        .shopDropdown {
          position: relative;
          display: inline-block;
        }
        .shopDropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          padding: 12px 16px;
          z-index: 1;
        }
        .shopDropdown:hover .shopDropdown-content {
          display: block;
        }
        </style>
      </head>

      <header>
            <!-- HEADER - LOGO, LOGIN, CART-->
          <div class="headerlogo">
            <a href="../pages/index.html"><img class="logo" src="../public/image/logotextwhite.png"></a>
            <div class="user">
              <p class="greeting"></p>
              <button class="logout">logout</button>
            </div>
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
            <div class="shopDropdown">
              <span><a href="../pages/shop.html">SHOP ALL</a></span>
              <div class="shopDropdown-content">
                <a href="../pages/shop.html#apparels">APPARELS</a>
                <a href="../pages/shop.html#accessories">ACCESSORIES</a>
                <a href="../pages/shop.html#books">BOOKS</a>
              </div>
            </div>
            <a href="../pages/faqs.html">FAQS</a>
            <a href="../pages/reviews.html">REVIEWS</a>
            <a href="../pages/about.html">ABOUT</a>
            <a href="../pages/contact.html">CONTACT</a>
            <h6 id="time"></h6>
          </div>
      </header>
        `
        ;
  }
}

customElements.define('header-component', Header);

//darkmode
function darkMode(){
  document.body.style.backgroundColor="gray";
  const headernav = document.getElementsByClassName("headernav");
  headernav[0].style.background="black";

}

//time
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
}
currentTime();


function myFunction(){
  let dark = true;
  if(dark){
    var element = document.body;
  element.classList.toggle("darkmode");
  }
}


//login
// const greeting = document.querySelector('.greeting');

// window.onload = () => {
//     if(!sessionStorage.name){
//         location.href = '/login';
//     }
//     else{
//         greeting.innerHTML = sessionStorage.name;
//     }
// }

// const logOut = document.querySelector('.logout');

// logOut.onclick = () => {
//     sessionStorage.clear();
//     location.reload();
// }