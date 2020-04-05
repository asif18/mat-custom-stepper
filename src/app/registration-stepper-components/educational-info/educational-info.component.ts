import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-educational-info',
  templateUrl: './educational-info.component.html',
  styleUrls: ['./educational-info.component.scss']
})
export class EducationalInfoComponent implements OnInit {

  @Input() stepInput: any;
  @Output() onFormSubmit: EventEmitter<FormGroup> = new EventEmitter();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      formName: new FormControl(this.constructor.name),
      collegeName: new FormControl(null, {validators: [Validators.required]}),
      course: new FormControl(null, {validators: [Validators.required]})
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
