import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {
  private _numColumns = 2;
  @Input() set numColumns (val : number) {
    this._numColumns = val
  }
  get numColumns (){return this._numColumns}
  get s () {
    return {
      width: `${(100 / this._numColumns) - 2}%`
    }
  }
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
