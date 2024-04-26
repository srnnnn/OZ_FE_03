const path = require('path');

function getPosts(req,res){
    // res.send('<div><h1>post title</h1><p>this is a post</p></div')
    // res.sendFile(path.join(__dirname,'..','public','images','jigu.jpeg'))
    res.render('posts',{
        templateName : 'post'
    })
}

module.exports = {
    getPosts
}