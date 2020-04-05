import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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

export interface StepCommuteData {
  currentStepComponent: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private stepperSubject = new Subject<any>();
  private formState: FormGroup[] = [];
  constructor(private http: HttpClient) { }

  public getBaseInfo(): Observable<StepperHead[]> {
    return this.http.get<StepperHead[]>(`assets/base-info.json`);
  }

  public setStepFormState(formGroup: FormGroup[]): void {
    this.formState = formGroup;
  }

  public getStepFormState(): FormGroup[] {
    return this.formState;
  }

  public triggerStepCommunication(stepCommuteData: StepCommuteData) {
    this.stepperSubject.next(stepCommuteData);
  }

  public onStepChange(): Observable<any> {
    return this.stepperSubject.asObservable();
  }
}
