import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

interface StepperHead {
  icon: any;
  caption: string;
  isSelected: boolean;
  stepperIndex?: number;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public stepperHeads: StepperHead[] = [
    {
      icon: 1,
      caption: 'Personal Info',
      isSelected: true
    },
    {
      icon: 2,
      caption: 'Educational Info',
      isSelected: false
    },
    {
      icon: 3,
      caption: 'Offcial Info',
      isSelected: false
    },
    {
      icon: 4,
      caption: 'Vehicle Info',
      isSelected: false
    },
    {
      icon: 5,
      caption: 'Residential Info',
      isSelected: false
    },
    {
      icon: 6,
      caption: 'Commerical Info',
      isSelected: false
    }
  ];

  public sliderProperties: any = {
    sliceStart: 0,
    sliceEnd: 5
  };

  @ViewChild('stepper') private myStepper: MatStepper;

  constructor() {}

  ngOnInit() {
    this.stepperHeads.map((head: StepperHead, index: number) => head.stepperIndex = index);
  }

  public moveStepper(index: number): void {
    this.myStepper.selectedIndex = index;
    this.makeHeadSelected();
  }

  public prevStep(stepper: MatStepper): void {
    if (stepper.selectedIndex > 0) {
      this.myStepper.previous();
      this.makeHeadSelected();
    }

    if (stepper.selectedIndex === (this.sliderProperties.sliceStart - 1)) {
      Object.assign(this.sliderProperties, {
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
      Object.assign(this.sliderProperties, {
        sliceStart: this.sliderProperties.sliceStart + 1,
        sliceEnd: this.sliderProperties.sliceEnd + 1,
      });
    }
  }

  private makeHeadSelected(): void {
    this.stepperHeads.map((head: StepperHead) => head.isSelected = false);
    this.stepperHeads[this.myStepper.selectedIndex].isSelected = true;
  }
}
