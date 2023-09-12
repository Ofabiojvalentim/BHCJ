(function(){
  console.log("Loading header.js")

 $(document).on('click', '.dropdown-item', function() {

  $("#navbar-home").click(home);
  $("#dropdown-notebooks").click(notebooks);
  $("#dropdown-desktops").click(desktops);
  $("#dropdown-servers").click(servers);
  $("#dropdown-softwares").click(softwares);
  
});


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



})();


