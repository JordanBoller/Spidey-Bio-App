import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css'],
    standalone: false
})
export class JobsComponent implements OnInit {

  jobList: any = [];

  constructor(private jobServiceService: JobServiceService) { }

  ngOnInit(): void {
    this.jobServiceService.getJobs().subscribe(list => {
      this.jobList = list;
    })

  }
}
