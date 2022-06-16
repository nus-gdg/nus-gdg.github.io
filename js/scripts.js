/*!
 * Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

//////////// NEW ADDITIONAL INFO FOR SECTIONS

// onclick Expand the window
const ProfessionalTalksInfo = document.getElementById("ProfessionalTalksInfo");
const GameJamsInfo = document.getElementById("GameJamsInfo");
const GameDevelopmentTutorialsInfo = document.getElementById(
  "GameDevelopmentTutorialsInfo"
);
const CollaborationsInfo = document.getElementById("CollaborationsInfo");

const ProfessionalTalksThumb = document.getElementById(
  "ProfessionalTalksThumb"
);
const GameJamsThumb = document.getElementById("GameJamsThumb");
const GameDevelopmentTutorialsThumb = document.getElementById(
  "GameDevelopmentTutorialsThumb"
);
const CollaborationsThumb = document.getElementById("CollaborationsThumb");

ProfessionalTalksThumb.addEventListener("click", function handleClick(event) {
  // event.target.classList.add('thumb-active');
  turnOffAllWiggle() 
  ProfessionalTalksThumb.getElementsByTagName("img")[0].style.cssText = `
    filter: drop-shadow( 0px 0px 10px #000 );
  `;
  ProfessionalTalksThumb.getElementsByClassName(
    "sectionThumbTitle"
  )[0].style.cssText = `
  background-color: #ffc800;
`;

    
});

GameJamsThumb.addEventListener("click", function handleClick(event) {
  // event.target.classList.add('thumb-active');
  turnOffAllWiggle() 
  GameJamsThumb.getElementsByTagName("img")[0].style.cssText = `
    filter: drop-shadow( 0px 0px 10px #000 );
    `;
  GameJamsThumb.getElementsByClassName("sectionThumbTitle")[0].style.cssText = `
  background-color: #ffc800;
  `;


});
GameDevelopmentTutorialsThumb.addEventListener(
  "click",
  function handleClick(event) {
    // event.target.classList.add('thumb-active');
    turnOffAllWiggle() 
    GameDevelopmentTutorialsThumb.getElementsByTagName(
      "img"
    )[0].style.cssText = `
    filter: drop-shadow( 0px 0px 10px #000 );
    `;
    GameDevelopmentTutorialsThumb.getElementsByClassName(
      "sectionThumbTitle"
    )[0].style.cssText = `
    background-color: #ffc800;
`;
  }
);
CollaborationsThumb.addEventListener("click", function handleClick(event) {
  // event.target.classList.add('thumb-active');
  turnOffAllWiggle() 
  CollaborationsThumb.getElementsByTagName("img")[0].style.cssText = `
    filter: drop-shadow( 0px 0px 10px #000 );
    `;
  CollaborationsThumb.getElementsByClassName(
    "sectionThumbTitle"
  )[0].style.cssText = `
  background-color: #ffc800;
`;
});

closeDiv();

function openDiv(divName) {
  closeDiv();

  switch (divName) {
    case "ProfessionalTalksInfo":
      ProfessionalTalksInfo.style.display = "block";
      break;
    case "GameJamsInfo":
      GameJamsInfo.style.display = "block";
      break;
    case "GameDevelopmentTutorialsInfo":
      GameDevelopmentTutorialsInfo.style.display = "block";
      break;
    case "CollaborationsInfo":
      CollaborationsInfo.style.display = "block";
      break;
    default:
      return;
  }
}

function closeDiv() {
  ProfessionalTalksInfo.style.display = "none";
  GameJamsInfo.style.display = "none";
  GameDevelopmentTutorialsInfo.style.display = "none";
  CollaborationsInfo.style.display = "none";

  // ProfessionalTalksThumb.classList.remove('thumb-active');
  // GameJamsThumb.classList.remove('thumb-active');
  // GameDevelopmentTutorialsThumb.classList.remove('thumb-active');
  // CollaborationsThumb.classList.remove('thumb-active');

  ProfessionalTalksThumb.getElementsByTagName("img")[0].style.cssText = `
    filter: none;
    `;
  GameJamsThumb.getElementsByTagName("img")[0].style.cssText = `
    filter: none;
    `;
  GameDevelopmentTutorialsThumb.getElementsByTagName("img")[0].style.cssText = `
    filter: none;
    `;
  CollaborationsThumb.getElementsByTagName("img")[0].style.cssText = `
    filter: none;
    `;

  ProfessionalTalksThumb.getElementsByClassName(
    "sectionThumbTitle"
  )[0].style.cssText = `
  background-color: none;
`;

  GameJamsThumb.getElementsByClassName("sectionThumbTitle")[0].style.cssText = `
  background-color: none;
`;

  GameDevelopmentTutorialsThumb.getElementsByClassName(
    "sectionThumbTitle"
  )[0].style.cssText = `
  background-color: none;
`;

  CollaborationsThumb.getElementsByClassName(
    "sectionThumbTitle"
  )[0].style.cssText = `
  background-color: none;
`;
}

function turnOffWiggle(element) {
  const imgElement = element.getElementsByTagName("img")[0];

  imgElement.classList.remove("wiggle-animation");
}

function turnOffAllWiggle() {
  turnOffWiggle(ProfessionalTalksThumb);
  turnOffWiggle(GameJamsThumb);
  turnOffWiggle(GameDevelopmentTutorialsThumb);
  turnOffWiggle(CollaborationsThumb);
}