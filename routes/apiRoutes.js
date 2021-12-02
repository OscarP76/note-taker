const Router = require('express').Router();
const fs = require('fs');

Router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        res.status(200).json(JSON.parse(data));
    })
})

Router.post('/api/notes', (req, res) => {
    let db = [];
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        {
            db = JSON.parse(data);
            db.push(req.body)
            updateData(db, res)
        }
    })
});

Router.delete('/api/notes/:id', function (req, res) {
    let db = [];
    fs.readFile('./db/db.json', (err, data) => {
        {
            db = JSON.parse(data);
            db.splice(req.params.id-1, 1)
            updateData(db, res) 
        }
    })
})

function updateData(data, res) {
    fs.writeFileSync('./db/db.json', JSON.stringify(data))
    console.log(data)
    res.json(data)

}




module.exports = Router;