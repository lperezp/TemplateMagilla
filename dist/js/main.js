$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    /* $("#dedo").toggleClass("hover"); */
  });

  $("#btn-sign-out").on("mouseover", function() {
    $("#sign-out").toggleClass("hover");
  });

  $(".card #btn-i").on("mouseover", function() {
    mostrarElemento(".card #dedoi");
  });

  $(".card #btn-i").on("mouseout", function() {
    ocultarElemento(".card #dedoi");
  });

  $(".card #btn-d").on("mouseover", function() {
    mostrarElemento(".card #dedod");
  });

  $(".card #btn-d").on("mouseout", function() {
    ocultarElemento(".card #dedod");
  });

  function mostrarElemento(elemento) {
    $(elemento).removeClass("hidden");
  }

  function ocultarElemento(elemento) {
    $(elemento).addClass("hidden");
  }

  $("#img_huella").on("mouseout", function() {
    lecturaHuellaOK();
  });

  $("#img_huella").on("mouseover", function() {
    lecturaHuella();
  });

  function lecturaHuellaOK() {
    lectura = document.getElementById("estadoLectura");
    lectura.innerHTML = "<span>Bienvenido {{ Usuario }}</span>";
    $("div .spinner-border").addClass("sr-only");
  }

  function lecturaHuella() {
    lectura = document.getElementById("estadoLectura");
    lectura.innerHTML = "Procesando</span>";
    $("div .spinner-border").removeClass("sr-only");
  }

  $("#tabla_registro").tablesorter();
  bsCustomFileInput.init();
  var btn = document.getElementById("btnResetForm");
  var form = document.querySelector("form");
  btn.addEventListener("click", function() {
    form.reset();
  });
});
