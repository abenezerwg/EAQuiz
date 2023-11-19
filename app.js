const express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser')
const app = express();

// parse application/json
app.use(cookieParser())
app.set('view engine','ejs')
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234abcd',
    database : 'eaQuiz',
    insecureAuth : true

})

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connect');
})



app.listen(8000, () => {
    console.log('Server started on port 8000')
})



app.get("/",fetchData,(req,res) =>{
    res.render('addQuestion.ejs')
})

//Insert hostInfo
app.get('/hostInfo', (req,res) => {
    
    //let title = req.body.title;
   // let HostID = res.body.HostID;


    let data = {HostID:'12346', Title:'Title1'};
    let sql = 'insert into HostInfo SET ?';
    let query = db.query(sql, data, (err, result) => {
        if(!err){
            res.send(result)
        }
    })
    // console.log(query);
})

//insert question

app.post('/addQuestion', (req,res) => {
    let Question = req.body.qn;
    let Option1 = req.body.Option1;
    let Option2 = req.body.Option2;
    let Option3 = req.body.Option3;
    let Option4 = req.body.Option4;
    let CorrectAnswer = req.body.CorrectAnswer;
   // let HostID = res.body.HostID;
    let data = {Question:Question, Option1:Option1, Option2:Option2, Option3:Option3, Option4:Option4, CorrectAnswer:CorrectAnswer, HostID:'123456'};
    let sql = 'insert into questionBank SET ?';
    let query = db.query(sql, data, (err, result) => {
        if(!err){
            console.log(result)
            res.redirect('/showQuestions')
        }
    })
    // console.log(query);
})

app.get('/showQuestions',fetchData,(req,res)=>{
    res.render('addQuestion');
})

function fetchData(req,res,next){
        let sql = 'select * from questionBank where HostID="12345"';
        let query = db.query(sql, (err, result) => {
        
            if(!err){
                
                // const answers = result.map(result => result.answer);
                // Render the EJS template with the question and answers
                // console.log(result)
                res.cookie('update', result);
                next();
            }
            else{
                res.cookie('update', {});
                next();
            }
        })
}




