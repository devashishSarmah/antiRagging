import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { IncidentConstructionComponent  } from '../../dialogs/incident-construction/incident-construction.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {

  }

  onClickReportIncident(): void {
    const dialogRef = this.dialog.open(IncidentConstructionComponent,
      {
        width: '20rem',
        height: '20rem',
        disableClose: true
    });
  }
}
