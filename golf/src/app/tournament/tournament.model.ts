import { Time } from '@angular/common';

export class Tournament {
  constructor(
    public id: string,
    public player: string,
    public startDate: Date,
    public startTime: Time,
    public userId: string,

  ) {}
}