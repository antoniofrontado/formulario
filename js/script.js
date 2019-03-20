$('#validate').click(function() {

    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    if (regex.test($('#correo').val().trim())) {
        alert('Correo validado');

    } else {
        alert('La direccón de correo no es válida');
    }
});
