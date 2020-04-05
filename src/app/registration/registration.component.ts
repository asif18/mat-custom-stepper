import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { map, assign, forEach, size, isObject } from 'lodash';
import { StepperHead, RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public stepperHeads: StepperHead[] = [];
  public sliderProperties: any = {
    sliceStart: 0,
    sliceEnd: 3
  };
  private submittedForms: FormGroup[] = [];
  public stepInput: any;

  @ViewChild('stepper') private myStepper: MatStepper;

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    this.getStepHeads();
  }

  private getStepHeads(): void {
    this.subscriptions.push(this.registrationService.getBaseInfo().subscribe(responseData => {
      this.stepperHeads = forEach(responseData, (head: StepperHead, index: number) => {
        assign(head, {
         stepperIndex: index,
         isSelected: (index === 0),
         canEdit: (index === 0),
         isSubmitted: false
       });
     });
    }));
  }

  public moveStepper(stepperHead: StepperHead): void {
    if (stepperHead.canEdit) {
      this.myStepper.selectedIndex = stepperHead.stepperIndex;
      this.makeHeadSelected();
    }
  }

  public prevStep(stepper: MatStepper): void {
    if (stepper.selectedIndex > 0) {
      this.myStepper.previous();
      this.makeHeadSelected();
    }

    if (stepper.selectedIndex === (this.sliderProperties.sliceStart - 1)) {
      assign(this.sliderProperties, {
        sliceStart: this.sliderProperties.sliceStart - 1,
        sliceEnd: this.sliderProperties.sliceEnd - 1,
      });
    }
  }

  public nextStep(stepper: MatStepper): void {
    if (stepper.selectedIndex !== (this.stepperHeads.length - 1)) {
      this.myStepper.next();
      this.makeHeadSelected();
    }

    if (stepper.selectedIndex === this.sliderProperties.sliceEnd) {
      assign(this.sliderProperties, {
        sliceStart: this.sliderProperties.sliceStart + 1,
        sliceEnd: this.sliderProperties.sliceEnd + 1,
      });
    }
  }

  private makeHeadSelected(): void {
    map(this.stepperHeads, (head: StepperHead) => head.isSelected = false);
    this.stepperHeads[this.myStepper.selectedIndex].isSelected = true;
  }

  public onFormSubmit(formGroup: FormGroup): void {
    // If form is submitted already and user changes the values and submits again then remove the old and push new
    forEach(this.submittedForms, (form: FormGroup, index: number) => {
      const isFormSubmittedAlready = (form.value.formName === formGroup.value.formName);
      if (isFormSubmittedAlready) {
        this.submittedForms.splice(index, 1);
      }
    });

    this.submittedForms.push(formGroup);

    // Save into service to get form values at any time in any place
    this.registrationService.setStepFormState(this.submittedForms);

    // Once the form is submitted, set the current active steps isSubmitted = true
    this.stepperHeads[this.myStepper.selectedIndex].isSubmitted = true;

    // Make next step form as editable once current step is submitted
    if (isObject(this.stepperHeads[this.myStepper.selectedIndex + 1])) {
      this.stepperHeads[this.myStepper.selectedIndex + 1].canEdit = true;
      // automatically move to next step
      this.nextStep(this.myStepper);
    }
  }

  ngOnDestroy() {
    forEach(this.subscriptions, (subscription: Subscription) => subscription.unsubscribe());
  }
}
