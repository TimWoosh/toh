import { Time } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observable, timer, Subscription, Observer } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { TimedDialogComponent } from './timed-dialog/timed-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TimedDialogService {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<TimedDialogComponent>;
  timerFinished: Observable<boolean>;

  public open(options): void {
    this.dialogRef = this.dialog.open(TimedDialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    });
  }

  // public startTimer(ms: number): Observable<boolean> {
  //   const myTimer = timer (ms);
  //   const timerFinished = myTimer.subscribe(val => console.log(val);
  //   return timerFinished;
  // }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
      return res;
      }
    ));
  }
}
