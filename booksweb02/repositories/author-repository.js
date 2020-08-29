let Author=require('../entities/author');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const username= process.env.BMS_DB_USERNAME; 
const password= process.env.BMS_DB_PASSWORD;
const server=process.env.BMS_DB_SERVER;

const dbname='booksdb';
const collectionName='authors';

const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;


// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });








let path=require('path');
const { resolve } = require('path');



class AuthorRepository{

    constructor(){
        this.authors=[];
    }

    async getAll(){

        if (this.authors.length===0){
            //load the author from the path
            await this.load();
        };
        return this.authors;
    
    }

    async add(author){
        this.authors.push(author); //store locally in memory
        await this.save();  //also save it in the file
        
    }

    async getById(id){
        let author=await (await this.getAll()).find(a=>a.id===id);
        return author;
    }

    async remove(id){
        let author=await this.getById(id);
        if(author){
            this.authors=this.authors.filter(a=>a.id!==id);
            await this.save();
            return true;
        } else{
            return false;
        }

    }

    save(){

        let path=process.env.AUTHORS_DB;
        console.log('path',path);
        fs.writeFile(path, JSON.stringify(this.authors), (error)=>{
            if(!error){
                resolve();
            } else{
                console.log(`error saving ${path}`);
                reject(error);
            }
        });
    }

    load(){
        return new Promise((resolve,reject)=>{

            let path=process.env.AUTHORS_DB;

            fs.readFile(path, (error,result)=>{
                if(!error){
                    this.authors=JSON.parse(result);
                    resolve(this.authors);
                } else{
                    console.log(`Error loading ${path}. Starting as empty repository`);
                    //reject(error);
                    resolve(this.authors); //don't fail. just start a new array
                }
            });

        });

    }

}


module.exports=AuthorRepository;