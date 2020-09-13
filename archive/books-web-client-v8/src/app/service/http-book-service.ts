import {Observable} from 'rxjs'; 
import {HttpClient} from '@angular/common/http'; 
import { Injectable } from '@angular/core';


@Injectable()
export class HttpBookService{
    private baseUrl='/api/';

   
    constructor(private http: HttpClient) {
    }



    getBooks(): Observable<any> {
        let bookListUrl=`${this.baseUrl}/books.json`;
        return this
                    .http
                    .get(bookListUrl);
    }
    


}