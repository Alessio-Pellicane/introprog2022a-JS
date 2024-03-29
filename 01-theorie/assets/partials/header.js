const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Add an active class to highlight the current page */
.active {
  background-color: #04AA6D;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* Dropdown container - needed to position the dropdown content */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Style the dropdown button to fit inside the topnav */
.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Style the links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a dark background on topnav links and the dropdown button on hover */
.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

/* Add a grey background to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

/* Show the dropdown menu when the user moves the mouse over the dropdown button */
.dropdown:hover .dropdown-content {
  display: block;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 1052px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 1052px) {
  .topnav {z-index: 1000}
  .topnav.responsive {
    position: relative;
    height: 500px;
    overflow: hidden;
    overflow-y: scroll;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative; display: block;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>

<div class="topnav" id="myTopnav">
  <a href="index.html" class="active">Home</a>
  <a href="01-variables.html">Variables</a>
  <a href="02-query.html">Méthode querySelector()</a>
  <div class="dropdown">
    <button class="dropbtn">Fonctions
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="03-fonctions.html">Fonctions</a>
      <a href="03b-fonctions-callback.html">setInterval()</a>
      <a href="03c-fonctions-recursives.html">Fonctions récursives</a>
    </div>
  </div>
  <a href="04-conditions.html">Conditions</a>
  <a href="05-boucles.html">Boucles et itérations</a>
  <a href="06-events.html">Méthode addEventListener()</a>
  <div class="dropdown">
    <button class="dropbtn">Fetch asynchrone
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="07-fetch-promises.html">Promesses</a>
      <a href="07b-fetch-async.html">Async / Await</a>
    </div>
  </div>
  <!--
  <div class="dropdown">
    <button class="dropbtn">Materials
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="page1.html">Page1</a>
      <a href="page2.html">Page2</a>
    </div>
  </div>
  -->
  <a href="javascript:void(0);" class="icon">&#9776;</a>
</div>

`;

class Header extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(headerTemplate.content);
    const burgerBtn = shadowRoot.querySelector("#myTopnav");
    // console.log("widget: ", widget);
    burgerBtn.addEventListener("click", (event) => {
      console.log("clicked");
      const x = shadowRoot.querySelector("#myTopnav");
      console.log(x);
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    });
  }
}

customElements.define("header-component", Header);
