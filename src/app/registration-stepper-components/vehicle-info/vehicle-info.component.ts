import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  @Output() onFormSubmit: EventEmitter<FormGroup> = new EventEmitter();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      formName: new FormControl(this.constructor.name),
      vehicleName: new FormControl(null, {validators: [Validators.required]}),
      vehicleNumber: new FormControl(null, {validators: [Validators.required]})
    });
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit() {
    if (this.form.valid) {
      this.onFormSubmit.emit(this.form);
    }
  }
}
