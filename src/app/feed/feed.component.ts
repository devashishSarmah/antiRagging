import { Component, inject, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FbOpsService } from './services/fb-ops.service';
import * as moment from 'moment';

@Pipe({
  name: 'formatTimestamp',
  standalone: true
})
export class FormatTimeStampPipe implements PipeTransform {
  transform(seconds: number) {
    return moment.utc(seconds * 1000).fromNow();
  }
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormatTimeStampPipe],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  fbOps = inject(FbOpsService);
}

