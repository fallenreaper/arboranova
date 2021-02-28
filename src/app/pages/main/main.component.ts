import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  // materials = ["hello", "world"]
  images = [
    {
      name: 'Shooting Strain Mother with Sentry',
      src: 'assets/images/sentry-shoots-mother.png',
    },
    { name: 'Sentry Life', src: 'assets/images/sentry-life.png' },
    {
      name: 'Logistics SQD Repositions during the Fight.',
      src: 'assets/images/basi-reposition.png',
    },
    {
      name: 'Bustards Move our Corp Assets',
      src: 'assets/images/bustard-bridge.png',
    },
    {
      name: 'Gila walks away from NPC Explosions',
      src: 'assets/images/gila-michael-bay.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
