import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MakesService {

  private url:string = "http://localhost:3000/makes";


  constructor(private http: HttpClient) {}

  /** GET machines from the server */
  getAllMakes(): Observable<any[]>  {
    return this.http.get<any[]>(this.url)
    .pipe(
      tap((message: any) => this.log(`fetched makes and models with status ${message.status}`)),
      catchError(this.handleError('getAllMakes', []))
    );
  }

  getMake(id:string): Observable<any[]>  {
    return this.http.get<any[]>(this.url + "/" + id)
    .pipe(
      tap((payload: any) => this.log(`fetched make with status ${payload.status} and make ${payload.data[0].make}`)),
      catchError(this.handleError('getMake', []))
    );
  }

  updateMake (make: any): Observable<any> {
    return this.http.put<any>(this.url, make, httpOptions).pipe(
      tap((payload: any) => this.log(`updated make with status ${payload.status}`)),
      catchError(this.handleError<any>('updateMake'))
    );
  }

  /*addMachine (machine: any): Observable<any> {
    return this.http.post<any>(this.url, machine, httpOptions).pipe(
      tap((message: any) => this.log(`added machine with status ${message.status}`)),
      catchError(this.handleError<any>('addMachine'))
    );
  }

  updateMachine (machine: any): Observable<any> {
    return this.http.put<any>(this.url, machine, httpOptions).pipe(
      tap((payload: any) => this.log(`updated machine with status ${payload.status}`)),
      catchError(this.handleError<any>('updateMachine'))
    );
  }

  deleteMachine (id: string): Observable<any> {
    return this.http.delete<any>(this.url + "/" + id, httpOptions).pipe(
      tap((payload: any) => this.log(`deleted machine with status ${payload.status}`)),
      catchError(this.handleError<any>('deleteMachine'))
    );
  }*/

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
