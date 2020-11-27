import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() postDate: Date = new Date()
  @Input() category = "Sample Category";
  @Input() title = "Sample";
  @Input() content = "Sample Content";
  @Input() link = 'www.google.com';

  
  constructor() { }

  ngOnInit(): void {
  }

}
