import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs-compat/Rx';
import { Subscription } from 'rxjs-compat/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number = 0;
  counterSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
