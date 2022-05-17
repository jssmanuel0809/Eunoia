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
          padding: 1rem 20%;
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
            <a href="../pages/index.html">HOME</a>
            <a href="../pages/shop.html">SHOP ALL</a>
            <a href="../pages/apparel.html">APPARELS</a>
            <a href="../pages/accessories.html">ACCESSORIES</a>
            <a href="../pages/books.html">BOOKS</a>
            <a href="../pages/faqs.html">FAQS</a>
            <a href="../pages/about.html">ABOUT</a>
          </div>
      </header>

        `;
  }
}

customElements.define('header-component', Header);