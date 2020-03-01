module.exports = {
    loginPagina: (req,res)=> {
        res.render('login.ejs')
    },

    loginForm : (req, res) => {
        if(req.body.usuario == "admin" && req.body.senha == "lasagna123"){
            res.render('/aulasAdm');
        } else {
            res.send("password_false");
        }
    },
    
    register: (req, res) => {
        var today = new Date();
        var users = {
            "primeiro_nome": req.body.primeiro_nome,
            "segundo_nome": req.body.segundo_nome,
            
        }        
    }
};

