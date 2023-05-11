$(`#telefone`).mask('(00) 00000-0000', {
    placeholder: "(00) 00000-0000"
})
$(`#cpf`).mask('000.000.000-00', {
    placeholder: "000.000.000-00"
})
$(`#cep`).mask('00000-000', {
    placeholder: "00000-000"
})

$(`form`).validate({
    rules: {
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        cpf: {
            required: true
        },
        endereço: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages: {
        nome: "Por favor, insira o seu nome"
    },

    messages: {
        email: "Por favor, insira um e-mail válido"
    },

    messages: {
        telefone: "Este campo é obrigatório"
    },

    messages: {
        cpf: "Este campo é obrigatório"
    },

    messages: {
        endereço: "Este campo é obrigatório"
    },

    messages: {
        cep: "Este campo é obrigatório"
    },

    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert (`Existem ${camposIncorretos} campos incorretos`)
        }
    }

})