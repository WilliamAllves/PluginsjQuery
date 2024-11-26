$(document).ready(function () {
  $('#carousel-imagens').slick({
      autoplay: true,
  })

$('#telefone').mask('(00) 00000-0000')

$('#cpf').mask('000.000.000-00')

$('#cep').mask('00000-000')

$('form').validate({
  rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
          email: true
      },
      telefone: {
        required: true
      },
      cep: {
        required: true
      },
      cpf: {
        required: true
      }
    },

    
    messages:{
        nome: 'Insira o seu nome',
        email: 'Por favor, insira um e-mail válido',
        telefone:'Por favor, insira seu telefone',
        cpf:'Por favor, insira seu CPF',
        cep:'Insira seu CEP',
      },

  submitHandler: function (form) {
    console.log(form)
  },
  invalidHandler: function (evento, validador) {
          let camposIncorretos = validador.numberOfInvalids();
          if (camposIncorretos) {
            alert(`Falta ${camposIncorretos} preencher os campos`)
          };
    }
});
});