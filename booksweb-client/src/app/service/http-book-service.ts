import {Book} from './book'; 
import {BookService} from './book-service'; 
import {Observable,throwError} from 'rxjs'; 
import {tap,map,catchError} from 'rxjs/operators'; 

import {HttpClient} from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'; 



@Injectable()
export class HttpBookService {

  
   // private baseUrl='http://localhost:7000/api/books';
   private baseUrl= environment.booksBaseUrl;
   private bookListUri=environment.bookListUri;
   private bookDetailsUri=environment.bookDetailsUri;
    
    constructor(private http: HttpClient) {
  
    }

    static _transform(book:Book):Book{
        //we can change the data we got from the server

        book.cover=`/assets/images/books/${book.isbn}.jpg`; //change the cover to my preferred cover.
       
        console.log('_transform',book);
        return book;
    }

    _transformList(books:Book[]):Book[]{
        console.log('_transformList',books);
        return books.map( book=>{
            return HttpBookService._transform(book);
        });
    }
    
    _get(url):Observable<any>{
        console.log('GET', url);
        return this.http
                    .get(url)
                    .pipe(
                        tap(r=> console.log('raw response',r)),
                        catchError(r=>{
                            console.log('error',r.status);
                            return throwError(r);
                        })
                    );
    }

    getBooks(): Observable<any> {
        let url=`${this.baseUrl}${this.bookListUri}`;
        return this
                ._get(url)
                .pipe(
                    map(this._transformList) //transform a list of books
                );
    }
    

    getBook(isbn):Observable<Book>{
        let url=`${this.baseUrl}${this.bookDetailsUri}`.replace(':isbn',isbn);
        return this
                    ._get(url)
                    .pipe(
                        map(HttpBookService._transform) // transform  a single book data
                    );

    }

    
    

}
