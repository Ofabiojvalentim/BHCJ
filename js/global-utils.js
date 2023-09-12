(function(){
	console.log("Loading globa.js...");

var globa_utils_dc = {};

globa_utils_dc.inserir_snippet = function (selector, pageURL) {
  return fetch(pageURL)                // Faz uma requisição para a página desejada
    .then(response => response.text()) // Converte a resposta em texto
    .then(html => {
      var targetHtml = document.querySelector(selector); //identifica o selector
      targetHtml.innerHTML = html;  //insere o snippet
    })};


$dc = globa_utils_dc;

})();