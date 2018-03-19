
    //se ejecuta cuando nuestro codigo este listo
    //alert('test');
    
    //referencia de donde esta la api
    //const URL_API = 'http://programacion/xyz/mtw/204/crud/index.php/api/';
    const URL_API = 'http://localhost/crud/index.php/api/';

    //console.log(URL_API);

    //para editar un id especifico, pasandoleel parametro por la URL
    function editar(id){
        alert('boton editar');
        window.location.href = 'edicion.html?id='+id;
    }

    //se obtine la lista de usuarios, data es la respuesta
    function tblUsuarios(data)
    {   
        console.log(data);

        if(data.status){
            var tbl = '';

            $.each(data.result, function(i, usuario){
                tbl += '<tr>'
                tbl += '<td class="d-none d-md-table-cell" >'+(i+1)+'</td>';
                tbl += '<td class="d-none d-md-table-cell" >'+usuario.nombre+'</td>';
                tbl += '<td class="d-none d-md-table-cell" >'+usuario.apellidos+'</td>';
                tbl += '<td class="d-table-cell d-md-none" >'+usuario.nombre+' '+usuario.apellidos+'</td>';
                tbl += '<td>'
                tbl += '<div class="d-flex justofy-content-center">';
                tbl += '<button class="btn btn-primary" onclick="editar('+usuario.id+')">Editar</button>';
                tbl += '<button class="btn btn-danger ml-2">Eliminar</button>';
                tbl += '</div>';
                tbl += '</td>';
                tbl += '</tr>'
            });
            
            $('#usuarios-table-body').html(tbl);
        }else{
            alert('Error en el servicio');
        }

    }


$(document).ready(function(){
    $('#btnBuscar').click(function(){
        //alert('Buscar');
        var url = URL_API+'usuarios/obtener';
        
        $.ajax({
            type: 'get',
            url: url,
            data: '',
            contentType: 'application/json;charset=utf-8',
            traditional: true,
            success: tblUsuarios,
            error: function(result){
                alert('Error en el servicio');
            }
        });
    });

    $('#btnNuevo').click(function(){
        //alert('Nuevo');
        window.location.href = 'edicion.html';
   });
});
