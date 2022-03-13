import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldTimeInputComponent } from './components/formly-field-time-input/formly-field-time-input.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true, checkExpressionOn: 'modelChange' },
      types: [
        {
          name: 'time',
          component: FormlyFieldTimeInputComponent,
          wrappers: ['form-field'],
        },
        // {
        //   name: 'datepicker',
        //   component: DatepickerTypeComponent,
        //   wrappers: ['form-field'],
        //   defaultOptions: {
        //     defaultValue: new Date(),
        //     templateOptions: {
        //       datepickerOptions: {}
        //     }
        //   }
        // }
      ],
    }),
    FormlyMaterialModule,
  ],
  exports: [FormlyFieldTimeInputComponent],
})
export class AreFormlyModule {}
