import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  
  constructor(private http: HttpClient) { }

  getData(uri: string): Observable<any> {
    return this.http.get(uri);
  }

  postData(uri: string, inputData: any): Observable<any> {
    return this.http.post(uri, inputData).pipe(
      catchError(this.handleError)
    );
  }

  putData(uri: string, inputData: any): Observable<any> {
    return this.http.put(uri, inputData)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteData(uri: string, id: number): Observable<{}> {
    const url = `${uri}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
}
