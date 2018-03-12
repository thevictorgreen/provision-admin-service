import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DellService {

  private url:string = "http://localhost:3000/dell";


  constructor(private http: HttpClient) {}

  /** GET machines from the server */
  getMake(id:string): Observable<any[]>  {
    return this.http.get<any[]>(this.url + "/" + id)
    .pipe(
      tap((payload: any) => this.log(`fetched make with status ${payload.status} and make ${payload.data.make}`)),
      catchError(this.handleError('getMake', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
