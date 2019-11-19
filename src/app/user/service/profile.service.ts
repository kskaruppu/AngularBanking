import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from 'src/app/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { ForgetProfile } from '../profile/forgetprofile';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpSvc: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ProfileService');
  }

  //#region public methods 

  public getProfiles() {
    this.httpSvc.get<any>(this.baseUrl);
  }

  public addProfile(record: ForgetProfile): Observable<ForgetProfile> {
    return this.httpSvc.post<ForgetProfile>(`${this.baseUrl}`, record, httpOptions)
      .pipe(
        catchError(this.handleError('addProfile', record))
      );
  }

  public getProfile(record: ForgetProfile): Observable<ForgetProfile[]> {
    return this.httpSvc.get<ForgetProfile[]>(`${this.baseUrl}`).pipe(map(result =>
      result.filter(prop => prop.HintQuestion.toLocaleLowerCase() === record.HintQuestion.toLocaleLowerCase()
        && prop.HintAnswer.toLocaleLowerCase() === record.HintAnswer.toLocaleLowerCase())));
  }

  //#endregion

  //#region private variables

  componentName: string;
  baseUrl = 'http://localhost:3000/ProfilePassword';
  private handleError: HandleError;

  //#endregion
}
