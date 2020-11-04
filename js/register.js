$("#Registrar").click(function(e){
    e.preventDefault();
    var username=$("#usr").val();
    var pass=$("#pass").val();
        var obj={
            username: usr,
            contra: pass
        };
        registrarUsuario(obj)
});