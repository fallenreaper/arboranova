import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {

  blogs = [
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
    {
      postDate: new Date(),
      category: "Sample Cat",
      title: "Sample",
      content: "Sample Content",
      link: "www.google.com"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
