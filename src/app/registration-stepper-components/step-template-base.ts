import {Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-step-template-base',
  template: '',
})
export class StepTemplateBaseComponent implements OnInit {
  @Input() data: any;

  ngOnInit() {
    console.log(this.data);
  }
}
