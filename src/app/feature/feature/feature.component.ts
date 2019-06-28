import { Component, OnInit, Injector } from '@angular/core';
import { FeatureService } from '../feature.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  private feaSer: FeatureService;

  constructor(
    injector: Injector,
    route: ActivatedRoute,
  ) {
    const token = route.snapshot.data['serToken']
    this.feaSer = injector.get(token)
  }

  ngOnInit() {
  }

  onClick() {
    this.feaSer.logger('button clicked!')
  }
}
