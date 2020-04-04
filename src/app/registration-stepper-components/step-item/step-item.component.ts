import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { StepTemplateBaseComponent } from '../step-template-base';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { EducationalInfoComponent } from '../educational-info/educational-info.component';
import { OfficialInfoComponent } from '../official-info/official-info.component';
import { VehicleInfoComponent } from '../vehicle-info/vehicle-info.component';
import { ResidentialInfoComponent } from '../residential-info/residential-info.component';
import { CommercialInfoComponent } from '../commercial-info/commercial-info.component';

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss']
})
export class StepItemComponent implements OnInit {

  @Input() data: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  readonly templateMapper = {
    PersonalInfoComponent,
    EducationalInfoComponent,
    OfficialInfoComponent,
    VehicleInfoComponent,
    ResidentialInfoComponent,
    CommercialInfoComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent(this.data.component));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<StepTemplateBaseComponent>componentRef.instance).data = this.data;
  }

  private getComponent(componentName) {
    return this.templateMapper[componentName];
  }
}
