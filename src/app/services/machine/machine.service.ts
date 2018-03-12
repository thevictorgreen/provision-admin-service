import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MachineService {

  private url:string = "http://localhost:3000/machines";


  constructor(private http: HttpClient) {}

  /** GET machines from the server */
  getAllMachines(): Observable<any[]>  {
    return this.http.get<any[]>(this.url)
    .pipe(
      tap((message: any) => this.log(`fetched machines with status ${message.status}`)),
      catchError(this.handleError('getAllMachines', []))
    );
  }
//tap((payload: any) => this.log(`fetched machine with status ${payload.status} and hostname ${payload.data[0].hostname}`))
  getMachine(id:string): Observable<any[]>  {
    return this.http.get<any[]>(this.url + "/" + id)
    .pipe(
      tap((payload: any) => this.log(`fetched machine with status ${payload.status} and payload ${payload.data}`)),
      catchError(this.handleError('getMachine', []))
    );
  }

  addMachine (machine: any): Observable<any> {
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
