import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiary } from './beneficiary.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private httpClient: HttpClient) { }


  //#region public methods

  GetRecords(): Observable<Beneficiary[]> {
    return this.httpClient.get<Beneficiary[]>(`${this.baseUrl}`);
  }

  GetOtherBankBeneficiary(): Observable<Beneficiary[]> {
    return this.httpClient.get<Beneficiary[]>(`${this.baseUrl}`).pipe(map(result =>
      result.filter(bene => bene.beneficiaryType.toLocaleLowerCase() === 'others')
    ));
  }

  GetIntraBankBeneficiary(): Observable<Beneficiary[]> {
    return this.httpClient.get<Beneficiary[]>(`${this.baseUrl}`).pipe(map(result =>
      result.filter(beneficary => beneficary.beneficiaryType.toLocaleLowerCase() === "s")));
  }

  add(record: Beneficiary): Observable<Beneficiary> {
    return this.httpClient.post<Beneficiary>(`${this.baseUrl}`, record, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(beneficiary: Beneficiary): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${beneficiary.id}`, beneficiary, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  delete(id: number): Observable<void> {
    if (id != null)
      return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  //#endregion

  //#region private variables

  private baseUrl = "http://localhost:3000/beneficiary";

  //#endregion
}
