module.exports = function(application){

    application.get('/formulario', function(req, res){
        application.app.controllers.admin.formulario(application, req, res );
    });

    application.post('/noticias_salvar', function(req, res){
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });
};
