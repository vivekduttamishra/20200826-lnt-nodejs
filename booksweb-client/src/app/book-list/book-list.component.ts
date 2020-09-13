import { Component, OnInit } from '@angular/core';
import {Book} from '../service/book'; 
import { RangeInfo } from '../ca-range/ca-range.component';
import {SimpleBookService} from '../service/simple-book-service'; 
import { HttpBookService } from '../service/http-book-service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public showImages=true;
  public books: Book[];
  public imageWidth=120;
  //public bookService=new SimpleBookService();
  public status='';

  constructor(
    //private bookService: SimpleBookService,
    private bookService: HttpBookService

    
  ) { 


  }

  public bookList: Observable<Book[]>;
  
  ngOnInit(): void {
    //this.books=this.bookService.getBooks(); //components gets the book from the service  
    this.books=[];
    this.status='';
    //Approach #1 -- subscribe to the service and once you get the data assign it to books list
    // this
    //   .bookService
    //   .getBooks()
    //   .subscribe(
    //     //what to do when we get the result
    //     books=> {
    //       this.books=books;
    //       this.status=`Total books :${books.length}`;
    //     },

    //     //what to do on http response errors
    //     error=> {console.log('component error',error)
    //     this.status=`Unable to fetch books`;
    //     }
    //   );

    //Approach #2 -- we don't need to subscribe. we can directly bind the Observable in our template
        
    this.bookList= this.bookService.getBooks();
  }

  toggleImages(){

    this.showImages=!this.showImages;
  }

 


 
  
  
  onImageWidthInfoChanged(r: RangeInfo){

    //console.log(r);
    
  }
  

}
