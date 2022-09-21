import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'lib-ngx-alert',
  templateUrl: './ngx-alert.component.html',
})
export class NgxAlertComponent implements OnInit {
  type: 'success' | 'error' | 'info';
  heading: string;
  message: string;
  data = this.ref.data;
  constructor(private ref: DialogRef) {
    this.type = this.data.type;
    this.message = this.data.message;
    this.heading = this.data.heading || 'Alert Heading';
  }

  ngOnInit(): void {}
}
