import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-step-template-base',
  template: '',
})
export class StepTemplateBaseComponent {
  @Input() data: any;
}
