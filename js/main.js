/*Verificacion de formulario login*/
$(document).ready(function () {
    $("#errorlogin").hide();
    $("#btn_login").click(function (event) {
        event.preventDefault();
        let user = $("#user").val();
        let pass = $("#pass").val();
            if (user == "" || pass == "") {
                $("#errorlogin").show().text('Por favor llene todos los campos');
            }else{
                $.ajax({
                    url:"./process/login.php",
                    method:"POST",
                    data:{
                        login: 1,
                        userphp: user,
                        passphp: pass
                    },
                    success: function(resp){
                        console.log(resp);
                        if (resp  == "success") {
                            window.location.href = "./main.php";
                        }else{
                            $("#errorlogin").show().text(resp);     
                        }
                    },
                    dataType: 'text',
                })
            }      
    })
})

/*Verificacion de formulario registro*/
$(document).ready(function () {
    $("#error-registro").hide();
    $("#btn_signup").click(function (event) {
        event.preventDefault();
        let nombre = $("#nombre").val().trim();
        let apellido = $("#apellido").val().trim();
        let user = $("#user").val().trim(); 
        let pass = $("#pass").val().trim(); 
        if (nombre != "" && apellido != "" && user != "" && pass != "") {
            $.ajax({
                url:"../process/registro.php",
                method:"POST",
                data:{nombre:nombre, apellido:apellido, user:user, pass:pass},
                success:function (res) {
                    if (res == 1) {
                        //error al registrarse
                        $("#error-registro").show().html('<div class="alert alert-danger text-center" role="alert" id="error-registro">'+res+'</div>');
                    }else{
                        //resgistrado;
                        $("#error-registro").show().html('<div class="alert alert-success text-center" role="alert" id="success">'+res+'</div>');
                        $("#form_signup")[0].reset();
                    }
                }
            })
        }else{
            $("#error-registro").show().html('<div class="alert alert-danger text-center" role="alert" id="error-registro">Por favor llene todo los campos</div>');
        }
    })   
})

/*Subida de archivos*/

$(document).ready(function(){
    $("#errorfile").hide();
    $("#btn_file").click(function (event) {
        event.preventDefault();
        let titulo = $("#titulo").val();
        let options = $("#options").val();
        let formfile = $('#formfile').prop('files')[0];
        if (formfile != 0 && options != 0 && titulo != "") {
            let form_data = new FormData();
            form_data.append("file",formfile);
            form_data.append("titulo", titulo);
            form_data.append("options", options);
            $.ajax({
                url:'./process/upload.php',
                type:'POST',
                contentType:false,
                processData:false,
                data: form_data,
                success:function (respuesta) {
                    if (respuesta == "success") {
                        console.log(respuesta);
                        $("#errorfile").show().html('<div class="alert alert-success text-center" role="alert">'+respuesta+'</div>');
                        $("#form_file")[0].reset();
                    }else{
                        $("#errorfile").show().html('<div class="alert alert-danger text-center" role="alert">'+respuesta+'</div>');
                    }
                }
            })
        }else{
            $("#errorfile").show().html('<div class="alert alert-danger text-center" role="alert">Por favor, verifique si la informacion esta completa</div>');

        }

    })
})

/*funcion para borrar elementos*/
$(document).ready(function () {
    $(".delete").click(function () {
        let el = this;
        let deleteid = $(this).data('id');
        console.log("el = "+ el+"   deleteid = "+deleteid);
        let confirmacion = confirm("¿Estas seguro de eliminar este archivo?");
        if (confirmacion) {
            $.ajax({
                url:'./process/delete.php',
                type:'POST',
                data:{id: deleteid},
                success:function (response) {
                    if (response == 'success') {
                        window.location.reload();
                    }else{
                        alert("php dice = "+response);
                    }
                }
            })
        }
    })
})