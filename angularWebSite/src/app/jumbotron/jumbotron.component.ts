import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  jbtHeading = 'Hello World!';
  jbtText = `This is a template for a simple marketing or informational website. It includes a large callout called a
  jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.`;
  jbtButtonText = 'Lear more';
  jbtUrl = '/about';

  constructor() { }

  ngOnInit() {
  }

}
