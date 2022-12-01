import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { FbOpsService } from '../../services/fb-ops.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incident-construction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './incident-construction.component.html',
  styleUrls: ['./incident-construction.component.scss']
})
export class IncidentConstructionComponent {

  text: string = '';

  constructor(public dialogRef: DialogRef<IncidentConstructionComponent>, private fbOps: FbOpsService) { }

  onClickPost(): void {
    this.fbOps.addPost({ text: this.text });
    this.dialogRef.close();
  }
}
