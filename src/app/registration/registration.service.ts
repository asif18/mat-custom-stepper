import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StepperHead {
  icon: any;
  caption: string;
  component: string;
  stepperIndex?: number;
  isSelected?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public getBaseInfo(): Observable<StepperHead[]> {
    return this.http.get<StepperHead[]>(`assets/base-info.json`);
  }
}
