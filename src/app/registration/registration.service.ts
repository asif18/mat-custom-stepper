import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

export interface StepperHead {
  icon: any;
  caption: string;
  component: string;
  stepperIndex?: number;
  isSelected?: boolean;
  isSubmitted?: boolean;
  canEdit?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private formState: FormGroup[] = [];
  constructor(private http: HttpClient) { }

  public getBaseInfo(): Observable<StepperHead[]> {
    return this.http.get<StepperHead[]>(`assets/base-info.json`);
  }

  public setStepFormState(formGroup: FormGroup[]): void {
    this.formState = formGroup;
    console.log(this.formState);
  }

  public getStepFormState(): FormGroup[] {
    return this.formState;
  }
}
