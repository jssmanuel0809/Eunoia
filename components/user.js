class User extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
        /* 'SHADOW' BEHIND CONTENT */
        .overlay {
            position: fixed;
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
  
        /* POPUP BOX */
        #login{
            z-index: 3;
        }
        .popup {
            margin: 75px auto;
            padding: 1px;
            background: #fff;
            /* border: 1px solid #666; */
            width: 80%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* box-shadow: 0 0 50px rgba(0,0,0,0.5); */
            /* position: fixed; */
        }
        /* CONTENT INSIDE POPUP */
        .content {
            height: 100%;
            width: 100%;
            overflow: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            /* background: #091033; */
            /* background-color: white; */
            /* opacity: 90%; */
            font-family: 'Lato', sans-serif;
            z-index: 1;
        }
        .content .login_form{
            height: 50%;
            width: 100%;
            overflow: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        /* Full-width input fields */
        input[type=text], input[type=password] {
            width: 50%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
  
        .login_form #email_error, .login_form #pass_error{
            margin-top: 5px;
            width: 345px;
            font-size: 18px;
            color: #C62828;
            background: rgba(255,0,0,0.1);
            text-align: center;
            padding: 5px 8px;
            border-radius: 3px;
            border: 1px solid #EF9A9A;
            display: none;
        }
  
        /* SIGN IN BUTTON */
        .SIbtn {
            width: 30%;
            margin: 0 auto;
            background: #fff;
            padding: 10px;
            border: 1px solid #ccc;
            background-clip: padding-box;
            text-align: center;
        }
        .SIbtn:hover {
            background-color: #ccc;
            color: white;
        }

        .login-close {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 20px;
            right: 20px;
            opacity: 0.8;
            transition: all 200ms;
            font-size: 24px;
            font-weight: bold;
            text-decoration: none;
            color: white;
          }
          .login-close:hover {
            opacity: 1;
          }
      </style>

      <div id="login" class="overlay">
      <div class="popup">
          <a class="login-close" href="#">&times;</a>
          <div class="content">
              <h2>SIGN IN TO YOUR <br>ACCOUNT</h2>
              <form class="login_form" action="index.html" method="post" name="form" onsubmit="return validated()">
              <input autocomplete="off" type="text" placeholder="Email" name="email">
              <div id="email_error">Please fill up your Email or Phone</div>
              <input type="password" placeholder="Password" name="password">
              <div id="pass_error">Password should be more than 6 characters</div>
              <button type="submit" class="SIbtn">Sign in</button>
              </form>
          </div>
      </div>
    </div>

        `;
  }
}

customElements.define('login-component', User);