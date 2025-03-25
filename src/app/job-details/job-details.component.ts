import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.css'],
    standalone: false
})
export class JobDetailsComponent implements OnInit {

  jobList: any = [];
  jobDetail: any;

  currentID: string = '';

  currentTitle: string = '';

  currentDescription: string = '';

  currentDuration: string = '';

  currentEmployer: string = '';

  constructor(private jobServiceService: JobServiceService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {


    this.currentID = this.actRoute.snapshot.params["id"] ?? "";

    this.jobServiceService.getJob(parseInt(this.currentID)).subscribe(list => {
      this.jobDetail = list;
    }
    )
  }
}


