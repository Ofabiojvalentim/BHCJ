(function(){
  console.log("Loading header.js")

  $(document).on('click', '.nav-item', function(clickEvent) {

    if(clickEvent.target.contains(document.getElementById("navbar-home")) ){
      home();
    }
  
    if(clickEvent.target.contains(document.getElementById("dropdown-notebooks")) ){
      notebooks();
    }

    if(clickEvent.target.contains(document.getElementById("dropdown-desktops")) ){
      desktops();
    }

    if(clickEvent.target.contains(document.getElementById("dropdown-servers")) ){
      servers();
    }

    if(clickEvent.target.contains(document.getElementById("dropdown-softwares")) ){
      servers();
    }
  }) //endof $(document).on('click', function()

function home(){
$dc.inserir_snippet('main','html/snippet/home.html');
console.log("snippet home loaded");
runCarousel();


}

//function runCarousel(){ $('#main_carousel').carousel(); console.log("works")}
function runCarousel(){  var mainCarousel = $('#main_carousel');
  if (mainCarousel.length > 0) {
    mainCarousel.on('load.bs.carousel', function() {
      mainCarousel.carousel();
      console.log("Carousel iniciado");
    });
  } else {
    console.log("#main_carousel não foi encontrado");
  }
}

  
function notebooks(){
    $dc.inserir_snippet('main','html/snippet/products-notebooks.html');
    console.log("notebooks clicked and loaded");
}

function desktops(){
    alert("desktop clicked!")
}

function servers(){
  alert("servers clicked!")
}

function softwares(){
  alert("softwares clicked!")
}

   

  /*

 $(document).on('click', '.dropdown-item', function() {

  console.log("Loading dropdown menu clickevent")

  $("#navbar-home").click(home);
  $("#dropdown-notebooks").click(notebooks);
  $("#dropdown-desktops").click(desktops);
  $("#dropdown-servers").click(servers);
  $("#dropdown-softwares").click(softwares);


   function home(){
  $dc.inserir_snippet('main','html/snippet/home.html');
  console.log("home clicked and loaded");
  }

  function notebooks(){
    $dc.inserir_snippet('main','html/snippet/products-notebooks.html');
    console.log("notebooks clicked and loaded");
  }

  function desktops(){
    alert("desktop clicked!")
  }

  function servers(){
    alert("servers clicked!")
  }

  function softwares(){
    alert("softwares clicked!")
  }
*/



})();


