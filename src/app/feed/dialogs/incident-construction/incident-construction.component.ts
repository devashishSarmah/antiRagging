import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-incident-construction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incident-construction.component.html',
  styleUrls: ['./incident-construction.component.scss']
})
export class IncidentConstructionComponent {

  constructor(public dialogRef: DialogRef<IncidentConstructionComponent>) { }

  onClickPost(): void {

  }
}
