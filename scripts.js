// ----TABS-----

var projectBtn = document.getElementById("Katie Gaudin");

projectBtn.addEventListener("click", function(event) {
  // show #contKatieGaudin
  document.getElementById("contKatieGaudin").style.display = "block";
  // hide all other tab cont's
  document.getElementById("contProjects").style.display = "none";
  document.getElementById("contContact").style.display = "none";
});


var projectBtn = document.getElementById("projects");

projectBtn.addEventListener("click", function(event) {
  // show #contProjects
  document.getElementById("contProjects").style.display = "block";
  // hide all other tab cont's
  document.getElementById("contKatieGaudin").style.display = "none";
  document.getElementById("contContact").style.display = "none";
});


var projectBtn = document.getElementById("contact");

projectBtn.addEventListener("click", function(event) {
  // show #contProjects
  document.getElementById("contContact").style.display = "block";
  // hide all other tab cont's
  document.getElementById("contKatieGaudin").style.display = "none";
  document.getElementById("contProjects").style.display = "none";
});