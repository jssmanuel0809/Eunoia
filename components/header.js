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
        :root {
          --clr-light: #faf9f8;
          --clr-dark: #201f1e;
          --foreground: var(--clr-dark);
          --background: var(--clr-light);
        }
        .darkmode {
          --clr-light: #faf9f8;
          --clr-dark: #201f1e;
          --foreground: var(--clr-light);
          --background: var(--clr-dark);
        }
        body {
          height: 100%;
          background: var(--background);
          color: var(--foreground);
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
          font-weight: bold;
        }

        .headerlogo .user{
          display: flex;
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
        .headerlogo .logo{
          height: 30px;
          margin-right: 500px;
        }
        .headerlogo img:hover{
          cursor: pointer;
        }
        .headernav{
          position: fixed;
          top: 50; left: 0; right: 0;
          background: var(--background);
          color: var(--foreground);
          padding: 10px 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }
        .headernav a{
          color: gray;
        }
        .headernav a:hover{
          color: var(--foreground);
          text-decoration-line: none;
        }

        .nav-regions{
          position: fixed;
          top: 90; 
          left: 0; 
          right: 0;
          background: var(--background);
          color: var(--foreground);
          padding: 5px 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 7px 13px 1rem rgba(0, 0, 0, .1);
          z-index: 1;
        }
        .nav-regions a{
          color: gray;
        }
        .nav-regions a:hover{
          color: var(--foreground);
          text-decoration-line: none;
        }
        
        .shopDropdown {
          position: relative;
          display: inline-block;
        }     
        .shopDropdown-content {
          display: none;
          position: absolute;
          min-width: 130px;
          z-index: 100;
          justify-items: center;
          background: var(--background);
          color: var(--foreground);
        }
        .shopDropdown:hover .shopDropdown-content {
          display: block;
        }

        .headernav #time{
          margin-bottom: 0px;
          padding-left: 50px;
          text-decoration: none;
          color: gray;
        }

        .dark-mode-toggle {
          position: fixed;
          z-index: 100;
          left: 40px;
          color: gray;
          border: 2px solid currentColor;
          padding: 4px;
          background: transparent;
          cursor: pointer;
          border-radius: 5px;
          width: 30px;
          height: 30px;
        }
        </style>
      </head>

      <header>
            <!-- HEADER - LOGO, LOGIN, CART-->
          <div class="headerlogo">
            <img class="logo" src="../public/image/logotextwhite.png"></a>
            <div class="user">
              <p class="greeting"></p>
              <button class="logout">logout</button>
            </div>
          </div>


          <!-- HEADER - NAV -->

        <div class="headernav">
          <!--dark mode-->
            <button id="dark-mode-toggle" class="dark-mode-toggle">
              <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/></svg>
            </button>
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

          <!-- HEADER - NAV REGIONS -->
        <div class="nav-regions">
            <div class="shopDropdown">
              <span><a href="../pages/shopAsia.html">Asia</a></span>
              <div class="shopDropdown-content">
                <a href="../pages/shopAsia.html#apparelsAsia">APPARELS</a>
                <a href="../pages/shopAsia.html#accessoriesAsia">ACCESSORIES</a>
                <a href="../pages/shopAsia.html#booksAsia">BOOKS</a>
              </div>
            </div>
            <div class="shopDropdown">
              <span><a href="../pages/shopEurope.html">Europe</a></span>
              <div class="shopDropdown-content">
                <a href="../pages/shopEurope.html#apparelsEurope">APPARELS</a>
                <a href="../pages/shopEurope.html#accessoriesEurope">ACCESSORIES</a>
                <a href="../pages/shopEurope.html#booksEurope">BOOKS</a>
              </div>
            </div>
            <div class="shopDropdown">
              <span><a href="../pages/shopAmerica.html">America</a></span>
              <div class="shopDropdown-content">
                <a href="../pages/shopAmerica.html#apparelsAmerica">APPARELS</a>
                <a href="../pages/shopAmerica.html#accessoriesAmerica">ACCESSORIES</a>
                <a href="../pages/shopAmerica.html#booksAmerica">BOOKS</a>
              </div>
            </div>
            <div class="shopDropdown">
              <span><a href="../pages/shopAustralia.html">Australia</a></span>
              <div class="shopDropdown-content">
                <a href="../pages/shopAustralia.html#apparelsAustralia">APPARELS</a>
                <a href="../pages/shopAustralia.html#accessoriesAustralia">ACCESSORIES</a>
                <a href="../pages/shopAustralia.html#booksAustralia">BOOKS</a>
              </div>
            </div>
            <div class="shopDropdown">
              <span><a href="../pages/shopAfrica.html">Africa</a></span>
              <div class="shopDropdown-content">
                <a href="../pages/shopAfrica.html#apparelsAfrica">APPARELS</a>
                <a href="../pages/shopAfrica.html#accessoriesAfrica">ACCESSORIES</a>
                <a href="../pages/shopAfrica.html#booksAfrica">BOOKS</a>
              </div>
            </div>
        </div>
      </header>
        `
        ;
  }
}

customElements.define('header-component', Header);

//darkmode
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
  enableDarkMode();
}
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

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
