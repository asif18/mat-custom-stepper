import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @Output() onFormSubmit: EventEmitter<FormGroup> = new EventEmitter();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      formName: new FormControl(this.constructor.name),
      name: new FormControl(null, {validators: [Validators.required]}),
      age: new FormControl(null, {validators: [Validators.required]})
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
