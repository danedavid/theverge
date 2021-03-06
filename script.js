/*  JS script for index.html  */
"use strict";

var sectionOn = false;

function viewNavSection(sectionId) {
  var navSection;
  var navColl = document.getElementById("nav-section-container");
  var body = document.getElementsByTagName("body")[0];

  var navSectionsArray = [].slice.call(document.getElementsByClassName("nav-section"));
  navSectionsArray.forEach( function (navElement) {
    navElement.style.display = "none";
  });

  sectionId = "nav-section-" + sectionId;

  if( sectionOn === false ) {

    sectionOn = true;
    body.style.overflow = "hidden";
    navColl.style.display = "inline-block";
    navSection = document.getElementById(sectionId);
    navSection.style.display = "inline-block";

  } else {

    sectionOn = false;
    body.style.overflow = "initial";
    navColl.style.display = "none";
    navSection = document.getElementById(sectionId);
    navSection.style.display = "none";

  }
}

/*  End of script */
