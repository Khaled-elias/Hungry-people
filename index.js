const express =require('express');
const app = express();
const PORT =5050
app.use(express.static('public'))
app.set('view engine' , 'ejs')


app.get('/' ,(req,res) =>{
    res.render('index',{title:'Home/About'})
})
app.get('/team' ,(req,res) =>{
    res.render('team',{title:'Team'})
})
app.get('/booking' ,(req,res) =>{
    res.render('booking',{title:'Booking'})
})
app.get('/GALLERY' ,(req,res) =>{
    res.render('GALLERY',{title:'GALLERY'})
})
app.get('/MENU' ,(req,res) =>{
    res.render('MENU',{title:'MENU'})
})

app.get('/event' ,(req,res) =>{
    res.render('event',{title:'Event'})
})

app.get('/contact' ,(req,res) =>{
    res.render('contact',{title:'Contact'})
})

app.use(function (req, res, next) {
    res.status(404).render('404', { title:'Error' });
});





app.listen(PORT,() => console.log(`erver running on http://localhost:${PORT}`))