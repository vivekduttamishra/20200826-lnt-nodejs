const AuthorService = require("../services/author-service");
const Author=require('../entities/author');
const AuthorRepository=require('../repositories/author-repository');



let authorRepository=new AuthorRepository();

async function seed(){
    let authors= await authorRepository.getAll();
    if(authors.length===0){
        authors=[
            new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.png','vivek@conceptarchitect.in'),
            new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.png','jeffrey.archer@gmail.com'),
            new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.png')
        ];
        authorRepository.authors=authors;
        await authorRepository.save();
    }
}

seed();

// authorService.add(new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.png','vivek@conceptarchitect.in'));
// authorService.add(new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.png','jeffrey.archer@gmail.com'));
// authorService.add(new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.png'));

var authorService=new AuthorService(authorRepository);


async function  getAuthorList(request,response){
    try{
        var authors=await authorService.getAll();
        await response.render('authors/list', {authors:authors});
    }catch(e){
        console.log('error',e,e.message);
    }

}


async function  showAuthorForm(request,response){

    var author={};
    await response.render('authors/create', {author:author});

}

async function addAuthor(request,response){
    var author=request.body;
    try{
    await authorService.add(author);
    await response.redirect('/authors');
    }catch(e){
        console.log(e.message);
    }
}




var express = require('express');
var router = express.Router();

//all this will be mapped /authors/
router.get('/', getAuthorList);
router.get('/create', showAuthorForm);
router.post('/create', addAuthor);



module.exports = router;




