import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input() exContent: string;

  constructor() { 
    alert(`cosntructor hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }

  ngOnInit() {
    alert(`ngOnInit hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }

  ngOnDestroy() {
    alert(`will be destroyed...`);
  }

  private chkExistence(val) {
    return val !== undefined;
  }

}
