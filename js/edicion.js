$(document).ready(function(){

    const URL_API = 'http://localhost/crud/index.php/api/';
    const url = document.URL;

    var id = 0;
    var parametros = [];

    var usuario = {
        id : 0,
        nombre : '',
        apellidos : ''
    };

    function cargaPagina()
    {
        var urlApi = URL_API+'usuarios/obtener/';

        usuario.id = url.split('?').length > 1 ? url.split('?')[1].split('=')[1] : 0;

        $('#titulo').text('Registrar Usuario');

        if(usuario.id > 0){

            $('#titulo').text('Editar Usuario');

            urlApi += usuario.id;

            $.ajax({
                type : 'get',
                url : urlApi,
                data : '',
                contentType : 'application/json;charset=utf-8',
                success : function(data){
                    console.log(data);
                    $('#nombre').val(data.result[0].nombre);
                    $('#apellidos').val(data.result[0].apellidos);
                },
                error : function(result){
                    alert('Error en el servicio');
                }
            });
        }
    }

    $('#btnGuardar').click(()=>{
        var method = 'post';
        var urlApi = URL_API+'usuarios/insertar';

        usuario.nombre = $('#nombre').val();
        usuario.apellidos = $('#apellidos').val();

        if(usuario.id > 0){
        method = 'put';
        urlApi = URL_API+'usuarios/actualizar';
        }

        $.ajax({
            type : method,
            url : urlApi,
            data : JSON.stringify(usuario),
            contentType : 'application/json;charset=utf-8',
            success : function(result){
                alert('Actualizacion correcta');
                window.location.href = 'index.html';
            },
            error : function(result){
                alert('Error en el servicio');
            }    
        });
    });

    $('#btnVolver').click(()=>{
        window.localStorage.href = 'index.html';
    });

    cargaPagina();

});