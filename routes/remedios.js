module.exports = {
    getRemediosPage: (req, res) => {
        let sql = 'SELECT * FROM Remédios';
        let query = db.query(sql, (err, result) =>{
            if (err) return console.log(err);
            console.log(result);
            res.render('remedios.ejs', {remedios: result}); 
        });
    },

    getRemediosAdmPage: (req, res) => {
        let sql = 'SELECT * FROM Remédios';
        let query = db.query(sql, (err, result) =>{
            if (err) return console.log(err);
            console.log(result);
            res.render('remediosadm.ejs', {remedios: result}); 
        });
    }
}