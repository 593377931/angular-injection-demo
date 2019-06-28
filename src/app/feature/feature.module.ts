import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { RouterModule } from '@angular/router';
import { FeatureService } from './feature.service';

const featureServiceInjectToken = new InjectionToken('FEATURE_SERVICE')
// export const featureServiceInjectToken = new InjectionToken('FEATURE_SERVICE')

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureComponent,
        data: {
          serToken: featureServiceInjectToken
        }
      }
    ])
  ],
  providers: [
    {
      provide: featureServiceInjectToken,
      useClass: FeatureService,
    }
  ]
})
export class FeatureModule { }
