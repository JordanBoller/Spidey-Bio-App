import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  listOfJobs: any[] = [
    {
      id: 1,
      title: "Pizza Delivery Boy",
      description: "Delivering hot fresh pizzas by moped",
      duration: "1 year",
      employer: "Joe's Pizza"
    },
    {
      id: 2,
      title: "Photographer",
      description: "Taking pictures for the newspaper, particularly of Spiderman",
      duration: "4 years",
      employer: "The Daily Bugle"
    },
    {
      id: 3,
      title: "Professional Cage Fighter",
      description: "Fighting until victory or defeat in a cage with a massive crowd",
      duration: "1 minute",
      employer: "WWE"
    },

  ]
  constructor() { }

  getJobs(): Observable<any> {
    return of(this.listOfJobs);
  }

  getJob(id: number): Observable<any> {
    let job: any;
    this.listOfJobs.map((val, i) => {
      if (val.id === id) {

        job = val;
      }
    })

    return of(job);
  }
}
