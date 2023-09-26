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
      softwares();
    }

    if(clickEvent.target.contains(document.getElementById("nav-item-services")) ){
      services();
    }

    if(clickEvent.target.contains(document.getElementById("nav-item-locations")) ){
      locations();
    }
  }) //endof $(document).on('click', function()

function home(){
$dc.inserir_snippet('main','html/snippet/home.html');
console.log("snippet home loaded");

}
  
function notebooks(){
    $dc.inserir_snippet('main','html/snippet/products-notebooks.html');
    console.log("snippet notebooks loaded");
}

function desktops(){
    $dc.inserir_snippet('main','html/snippet/products-desktops.html');
    console.log("snippet desktop loaded");
}

function servers(){
  $dc.inserir_snippet('main','html/snippet/products-servers.html');
    console.log("snippet servers loaded");
}

function services(){
  $dc.inserir_snippet('main','html/snippet/services.html');
    console.log("snippet services loaded");
    
}

function locations(){
  //$dc.inserir_snippet('main','html/snippet/locations.html');
    console.log("snippet locations loaded");
    alert("services clicked!");
}

   


})();


