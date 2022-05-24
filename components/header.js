class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `zzzz
      <head>
        <style>
        @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
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
        /*background-image: url('../public/image/bg-img-dark.png');*/

        /*cart popup*/
        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(40, 36, 36, 0.5);
          transition: opacity 200ms;
          visibility: hidden;
          opacity: 0;
      }
      .overlay:target {
          visibility: visible;
          opacity: 1;
      }
      .cartpopup {
        margin: 130px auto;
        padding: 1px;
        background: #fff;
        width: 75%;
        height: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cartcontent {
      height: 100%;
      width: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: 'Lato', sans-serif;
  }
  .cartcontent h2{
    margin-bottom: 400px;
  }
  .close {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 135px;
    right: 145px;
    opacity: 0.8;
    transition: all 200ms;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
  .close:hover {
    opacity: 1;
  }
        </style>
      </head>

      <header>
            <!-- HEADER - LOGO, LOGIN, CART-->
          <div class="headerlogo">
            <a href="index.html"><img class="logo" src="../public/image/logotextwhite.png"></a>
            <a href="#login"><img class="righticons" src="../public/image/user.png"></a>
            <a href="#popup"><h1class="righticons"><img class="righticons" src="../public/image/cart.png"></h1></a>
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
            <a href="../pages/contact.html">CONTACT</a>
            <h6 id="time"></h6>
          </div>


          <!--cart popup-->
        <!-- button cart image onclick -->
        <button class="button1"><a href=#popup>Button</a></button>
        <!-- pop up -->
        <div id="popup" class="overlay">
            <div class="cartpopup">
                <a class="close" href="#">&times;</a>
                <div class="cartcontent">
                    <h2>YOUR CART</h2>
                    <!-- <label for="uname"><b>Username</b></label> -->
                    <!--<input type="text" placeholder="Email">-->
                    <!-- name="uname" required -->
                    <!-- <label for="psw"><b>Password</b></label> -->
                    <!--<input type="password" placeholder="Password">-->
                    <!-- name="psw" required -->
                    <!-- WALA PANG PROCESS AFTER SIGN IN -->
                    <!--<button class="SIbtn">Sign in</button>-->
                </div>
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
  let dark = true;
  if(dark){
    var element = document.body;
  element.classList.toggle("darkmode");
  }
}

/*var addItemId = 0;
function addToCart(item){
  addItemId++;
  var selectedItem = document.createElement("div");
  selectedItem.classList.add("cartImg");
  selectedItem.setAttribute("id", addItemId);
  var img = document.createElement("img");
  img.setAttribute('src', item.children[0].currentSrc)
  var title = document.createElement('div');
  title.innerText = item.children[1], innerText;
  var label = document.createElement('div');
  label.innerText = item.children[2].children[0].innerText;
  var select = document.createElement('span');
  select.innerText = item.children[2].children[1].value;
  label.append(select);
  var delBtn = document.createElement('button');
  delBtn.innerText = 'Delete';
  delBtn.setAttribute("onclick", "del("+addItemId+")");
  var cartItems = document.getElementById("title");
  selectedItems.append(img);
  selectedItem.append(title);
  selectedItem.append(label);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);
}

function del(item){
  document.getElementById(item).remove();
}

/*function dark(sheet){
  document.getElementById('theme').setAttribute('href', sheet);
}*/

/*let checkbox = document.getElementById("chkmode");
let body = document.getElementById('body')

checkbox.addEventListener( 'change', function() {
if(this.checked) {
    body.classList.add("darkmode")
} else {
    body.classList.remove("darkmode")     
}
});*/