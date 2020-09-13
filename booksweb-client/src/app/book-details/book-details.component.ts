import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book';
import {ActivatedRoute, Router} from '@angular/router'; 
import { SimpleBookService } from '../service/simple-book-service';
import { HttpBookService } from '../service/http-book-service';


@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  //private bookService:SimpleBookService=new SimpleBookService();

  public selectedBook: Book;

  constructor(

    private activatedRoute : ActivatedRoute , 
    private router:Router,
    //private bookService:SimpleBookService
    private bookService:HttpBookService

  ) { 

    
  }

  ngOnInit(): void {


    let bookId= this.activatedRoute.snapshot.params.bookId;

    //let book= this.bookService.getBook(bookId);
    // if(book)
    //   this.selectedBook=book;
    // else    
    //   this.router.navigateByUrl(`/404?error=No Such Book&id=${bookId}`);
    
    this.bookService.getBook(bookId)
        .subscribe(
          book=> this.selectedBook=book,  //if request is successfull

          error=> this.router.navigateByUrl(`/404?error=No Such Book&id=${bookId}`)

        )

  }

  goBack(){
    this.router.navigateByUrl('/book/list');
  }

}
