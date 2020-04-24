$(function ($) {

    $("form").submit(function (event) {

        event.preventDefault();

        $.ajax({
            url: "https://formspree.io/alexlr10@hotmail.com",
            method: "POST",
            data: {
                name: $("#nome").val(),
                email: $("#email").val()
            },
            dataType: "json"
        }). done(function () {
            $("#name").val("");
                $("#email").val("");
            alert("Email enviado com sucesso!");
        }).fail(function () {
            alert("Erro ao enviar email");
        });
    });
});
