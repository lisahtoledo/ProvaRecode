module.exports = {
    getCadastroRemedioPage: (req, res) => {
        res.render('cadastro.ejs', { 
            title: 'Pharmácia Boa Nota | Remédios',
            message: ''
        });
    },
    
    cadastroRemedio: (req, res) => {
        
        let sql = "INSERT INTO Remédios SET ?;";
        let data = {nome: req.body.nome, laboratorio: req.body.laboratorio, quant_mg: req.body.quant_mg, preco: req.body.preco};
        
        let query = db.query(sql, data, (err, results) => {
            if(err) return res.status(500).send(err);
            res.redirect('/remediosAdm');
        });
    },

    getEditaRemedioPage: (req, res) => {
        let remedioId = req.params.id;
        let sql = 'SELECT * FROM Remédio WHERE id = ?;';
        db.query(sql, [remedioId], (err, result)=>{
            if(err) return res.status(500).send(err);
            res.render('editaremedio.ejs', {
                title: 'Pharmácia Boa Nota | Remédios',
                remedio:  result[0],
                message: ''
            });
        });
    },

    editaRemedio: (req, res) => {
        let data = {nome: req.body.nome, laboratorio: req.body.laboratorio, quant_mg: req.body.quant_mg, preco: req.body.preco};

        console.log(req.param.id);
        let sql = "UPDATE Remédios SET ? WHERE ?;";
        let query = db.query(sql, [data , {id:req.param.id}] , (err, result) => {
            if(err) return res.status(500).send(err); 
            console.log(result);
            res.redirect('/remediosAdm');
        });
    
    },
    
    deletaRemedio: (req, res) => {
        let sql = "DELETE FROM Remédios WHERE ?;"
        console.log(req.params.id);
        let query = db.query(sql,  {id: req.params.id}, (err, result)=> {
            if(err) return res.status(500).send(err);
            res.redirect('/remediosAdm');
        });
    }
};
    

