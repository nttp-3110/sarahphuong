window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btt_pc").style.display = "block";
    } else {
        document.getElementById("btt_pc").style.display = "none";
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btt_mb").style.display = "block";
  } else {
      document.getElementById("btt_mb").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunctionPC() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function topFunctionMB() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// dropdown menu
function dropdownMenu() {
  document.getElementById("menuDropdown").classList.toggle("show");
  document.getElementById("btndropdown").classList.toggle("btnClick");
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btndropdown')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        document.getElementById("btndropdown").cremoveClass("btnClick");
        openDropdown.classList.remove('show');
      }
    }
  
  }
}

// Load page content

function loadPage(place, address){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(place).innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", address, true);
  xhttp.send();
}



//load page Home
function loadPageHome(){
  loadPage("c-content","./assets/include/index.html" )
};

function loadPageService(){
  loadPage("c-content","./assets/include/_pageService.html" )
};

function loadPageChracter(){
  loadPage("c-content","./assets/include/_pageCharacter.html" )
};
function loadPageConsult(){
  loadPage("c-content","./assets/include/_pageConsult.html" )
};
function loadPageProfile(){
  loadPage("c-content","./assets/include/_pageProfile.html" )
};
// responsive
$(window).resize(function(){
  
     var width = $(window).width();
     console.log(width);
     if (width <= 768){
         $('.character .container').addClass('container-fluid');
         $('.character .container').removeClass('container');
         
     }
     else{
      $('.character .container-fluid').addClass('container');
      $('.character .container-fluid').removeClass('container-fluid');
     }
     
 });
 var width = $(window).width();
 console.log(width);
 if (width <= 768){
     $('.character .container').addClass('container-fluid');
     $('.character .container').removeClass('container');
     
 }
 else{
  $('.character .container-fluid').addClass('container');
  $('.character .container-fluid').removeClass('container-fluid');
 }