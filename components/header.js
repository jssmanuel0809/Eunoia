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
        .wrapper{
          background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
          position: fixed;
          width: 100%;
        }
        .wrapper nav{
          position: relative;
          display: flex;
          max-width: calc(100% - 200px);
          margin: 0 auto;
          height: 70px;
          align-items: center;
          justify-content: flex-start;
          z-index:100;
        }
        nav .content-header{
          display: flex;
          align-items: center;
        }
        nav .content-header .links{
          margin-left: 80px;
          display: flex;
        }
        .content-header .logo a{
          color: #fff;
          font-size: 30px;
          font-weight: 400;
          position: fixed;
        }
        .content-header .links li{
          list-style: none;
          line-height: 70px;
        }
        .content-header .links li a,
        .content-header .links li label{
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          padding: 9px 40px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        .content-header .links li label{
          display: none;
        }
        .content-header .links li a:hover,
        .content-header .links li label:hover{
          background: #A91079;
        }
        .wrapper .search-icon,
        .wrapper .menu-icon{
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          line-height: 70px;
          width: 70px;
          text-align: center;
        }
        .wrapper .menu-icon{
          display: none;
        }
        .wrapper #show-search:checked ~ .search-icon i::before{
          content: "\f00d";
        }
        
        .wrapper .search-box{
          position: absolute;
          height: 100%;
          max-width: calc(100% - 50px);
          width: 100%;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        .wrapper #show-search:checked ~ .search-box{
          opacity: 1;
          pointer-events: auto;
        }
        .search-box input{
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          font-size: 17px;
          color: #fff;
           background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
          padding: 0 100px 0 15px;
        }
        .search-box input::placeholder{
          color: #f2f2f2;
        }
        .search-box .go-icon{
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          line-height: 60px;
          width: 70px;
          background: #711A75;
          border: none;
          outline: none;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }
        .wrapper input[type="checkbox"]{
          display: none;
        }
        
        /* Dropdown Menu code start */
        .content-header .links ul{
          position: absolute;
          background: #827397;
          top: 80px;
        /*z-index: -1;*/
          opacity: 0;
          visibility: hidden;
        }
        .content-header .links li:hover > ul{
          top: 70px;
          opacity: 1;
          visibility: visible;
          transition: all 0.3s ease;
        }
        .content-header .links ul li a{
          display: block;
          width: 100%;
          line-height: 30px;
          border-radius: 0px!important;
        }
        .content-header .links ul ul{
          position: absolute;
          top: 0;
          right: calc(-100% + 8px);
        }
        .content-header .links ul li{
          position: relative;
        }
        .content-header .links ul li:hover ul{
          top: 0;
        }
        
        
        /* Responsive code start */
        @media screen and (max-width: 1250px){
          .wrapper nav{
            max-width: 100%;
            padding: 0 20px;
          }
          nav .content-header .links{
            margin-left: 30px;
          }
          .content-header .links li a{
            padding: 8px 13px;
          }
          .wrapper .search-box{
            max-width: calc(100% - 100px);
          }
          .wrapper .search-box input{
            padding: 0 100px 0 15px;
          }
          .dropdown{
            margin-left: 130px;
          }
          .products p{
            margin-bottom: 0;
          }
          .time{
            display: none;
          }
          
        }
        
        @media screen and (max-width: 900px){
          .wrapper .menu-icon{
            display: block;
          }
          .wrapper #show-menu:checked ~ .menu-icon i::before{
            content: "\f00d";
          }
          nav .content-header .links{
            display: block;
            position: fixed;
            background:  linear-gradient(to right, #4D4C7D, #827397);
            height: 100%;
            width: 100%;
            top: 70px;
            left: -100%;
            margin-left: 0;
            max-width: 350px;
            overflow-y: auto;
            padding-bottom: 100px;
            transition: all 0.3s ease;
          }
          nav #show-menu:checked ~ .content-header .links{
            left: 0%;
          }
          .content-header .links li{
            margin: 15px 20px;
          }
          .content-header .links li a,
          .content-header .links li label{
            line-height: 40px;
            font-size: 20px;
            display: block;
            padding: 15px 30px;
            cursor: pointer;
          }
          .content-header .links li a.desktop-link{
            display: none;
          }
        
          /* dropdown responsive code start */
          .content-header .links ul,
          .content-header .links ul ul{
            position: static;
            opacity: 1;
            visibility: visible;
            background: none;
            max-height: 0px;
            overflow: hidden;
          }
          .content-header .links #show-features:checked ~ ul,
          .content-header .links #show-services:checked ~ ul,
           .content-header .links #show-about:checked ~ ul,
          .content-header .links #show-items:checked ~ ul,
          .content-header .links #show-asia:checked ~ ul,
          .content-header .links #show-america:checked ~ ul,
          .content-header .links #show-africa:checked ~ ul,
          .content-header .links #show-australia:checked ~ ul,
          .content-header .links #show-europe:checked ~ ul,
          .content-header .links #show-category:checked ~ ul{
            max-height: 100vh;
          }
          .content-header .links ul li{
            margin: 7px 20px;
          }
          .content-header .links ul li a{
            font-size: 18px;
            line-height: 10px;
            border-radius: 5px!important;
          }
        }
        
        @media screen and (max-width: 400px){
          .wrapper nav{
            padding: 0 10px;
          }
          .content-header .logo a{
            font-size: 27px;
          }
          .wrapper .search-box{
            max-width: calc(100% - 70px);
          }
          .wrapper .search-box .go-icon{
            width: 30px;
            right: 0;
          }
          .wrapper .search-box input{
            padding-right: 30px;
          }
         
        }
        
        .dropdown {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        .projects,
        .products {
          position: relative;
        }
        
        .projects ul,
        .products ul {
          margin-top: 10px;
          position: absolute;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          align-items: center;
          width: 80px;
          height: 50px;
          background: #827397;
          left: 0px;
          list-style: none;
          border-radius: 5px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: all 0.4s ease;
        }
        .projects li,
        .products li {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }       
        .projects a,
        .products a {
          color: black;
          text-decoration: none;
        }
        
        .dropdown button,
        .home {
          background: none;
          text-decoration: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }
        
        .projects button:focus + ul,
        .products button:focus + ul {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0px);
        }
        .time
        {
          margin-left: 10px;
          padding: 20px;
          color: #faf9f8;
        }
        .content-header
        {
          cursor: pointer;
        }
        .dark-mode-toggle {
          color: #faf9f8;
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

        <div class="wrapper">
        <nav>
          <input type="checkbox" id="show-search">
          <input type="checkbox" id="show-menu">
          <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
          <div class="content-header">
            <img src="../public/image/logotextwhite.png" width="115" height="32"></img>
            <ul class="links">
              <li><a href="../pages/index.html">Home</a></li>
              <li>
                <a href="../pages/shop.html" class="desktop-link">Shop</a>
                <input type="checkbox" id="show-category">
                <label for="show-category">Shop</label>
                <ul>
                  <li><a href="../pages/shop.html#apparels">Apparel</a></li>
                  <li><a href="../pages/shop.html#accessories">Accessories</a></li>
                  <li><a href="../pages/shop.html#books">Books</a></li> 
                </ul>
              </li>
              <li>
                <a href="" class="desktop-link">Continents</a>
                <input type="checkbox" id="show-features">
                <label for="show-features">CONTINENT</label>
                <ul>
                   <li>
                    <a href="../pages/shopEurope.html" class="desktop-link">Europe</a>
                    <input type="checkbox" id="show-europe">
                    <label for="show-europe">Europe</label>
                    <ul>
                      <li><a href="../pages/shopEurope.html#apparelsEurope">APPARELS</a></li>
                      <li><a href="../pages/shopEurope.html#accessoriesEurope">ACCESSORIES</a></li>
                      <li><a href="../pages/shopEurope.html#booksEurope">BOOKS</a></li>
                    </ul>
                  </li>
                   <li>
                    <a href="../pages/shopAsia.html" class="desktop-link">Asia</a>
                    <input type="checkbox" id="show-asia">
                    <label for="show-asia">Asia</label>
                    <ul>
                      <li><a href="../pages/shopAsia.html#apparelsAsia">APPARELS</a></li>
                      <li><a href="../pages/shopAsia.html#accessoriesAsia">ACCESSORIES</a></li>
                      <li><a href="../pages/shopAsia.html#booksAsia">BOOKS</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="../pages/shopAmerica.html" class="desktop-link">America</a>
                    <input type="checkbox" id="show-america">
                    <label for="show-america">America</label>
                    <ul>
                      <li><a href="../pages/shopAmerica.html#apparelsAmerica">APPARELS</a></li>
                      <li><a href="../pages/shopAmerica.html#accessoriesAmerica">ACCESSORIES</a></li>
                      <li><a href="../pages/shopAmerica.html#booksAmerica">BOOKS</a></li>
                    </ul>
                  </li>
                   <li>
                    <a href="../pages/shopAustralia.html" class="desktop-link">Australia</a>
                    <input type="checkbox" id="show-australia">
                    <label for="show-australia">Australia</label>
                    <ul>
                      <li><a href="../pages/shopAustralia.html#apparelsAustralia">APPARELS</a></li>
                      <li><a href="../pages/shopAustralia.html#accessoriesAustralia">ACCESSORIES</a></li>
                      <li><a href="../pages/shopAustralia.html#booksAustralia">BOOKS</a></li>
                    </ul>
                  </li>
             <li>
                    <a href="../pages/shopAfrica.html" class="desktop-link">Africa</a>
                    <input type="checkbox" id="show-africa">
                    <label for="show-africa">Africa</label>
                    <ul>
                      <li><a href="../pages/shopAfrica.html#apparelsAfrica">APPARELS</a></li>
                      <li><a href="../pages/shopAfrica.html#accessoriesAfrica">ACCESSORIES</a></li>
                      <li><a href="../pages/shopAfrica.html#booksAfrica">BOOKS</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            <li><a href="../pages/about.html">About</a></li>
              <li>
                <a href="" class="desktop-link">More</a>
                <input type="checkbox" id="show-services">
                <label for="show-services">More</label>
                <ul>
                  <li><a href="../pages/reviews.html">Reviews</a></li>
                  <li><a href="../pages/faqs.html">FAQS</a></li>
                  <li><a href="../pages/contact.html">Contact</a></li> 
                </ul>
              </li>
          
            </ul>
          </div>
          
    
          <div class="dropdown">
            
            <div class="products">
              <button><p class="greeting">Hello</p></button>
              <ul>
                <li><button class="logout">Logout</button></li>
              </ul>
            </div>
    
    
            <div class="time"> 
            <h6 id="time"></h6>
            </div>

            <!--dark mode-->
            <div class="theme">
              <button id="dark-mode-toggle" class="dark-mode-toggle">
                <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/></svg>
              </button>
            </div>
    
          </div>

        </nav>
      </div>
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
// logOut.onmousedown = () => {
//     sessionStorage.clear();
//     location.reload();
// }
