import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input, Output, ViewChild, ViewContainerRef,
  ComponentRef, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepTemplateBaseComponent } from '../step-template-base';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { EducationalInfoComponent } from '../educational-info/educational-info.component';
import { OfficialInfoComponent } from '../official-info/official-info.component';
import { VehicleInfoComponent } from '../vehicle-info/vehicle-info.component';
import { ResidentialInfoComponent } from '../residential-info/residential-info.component';
import { CommercialInfoComponent } from '../commercial-info/commercial-info.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss']
})
export class StepItemComponent implements OnInit, OnDestroy {

  private componentRef: ComponentRef<any>;
  @Input() data: any;
  @Output() onFormSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  readonly templateMapper = {
    PersonalInfoComponent,
    EducationalInfoComponent,
    OfficialInfoComponent,
    VehicleInfoComponent,
    ResidentialInfoComponent,
    CommercialInfoComponent,
    SummaryComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent(this.data.component));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<StepTemplateBaseComponent>this.componentRef.instance).data = this.data;
    this.componentRef.instance.onFormSubmit.subscribe((event: FormGroup) => this.onFormSubmit.emit(event));
  }

  private getComponent(componentName: string) {
    return this.templateMapper[componentName];
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
