import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TimedDialogService } from '../timed-dialog.service';


@Component({
  selector: 'app-timed-dialog',
  templateUrl: './timed-dialog.component.html',
  styleUrls: ['./timed-dialog.component.css']
})
export class TimedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{
                      cancelText: string,
                      confirmText: string,
                      message: string,
                      title: string
                }, private mdDialogRef: MatDialogRef<TimedDialogComponent>,
                private timedDialogService: TimedDialogService) { }

  

  ngOnInit(): void {
  }

  public cancel(): void{
    this.close(false);
  }

  public close(value: boolean): void {
    this.mdDialogRef.close(value);
  }

  public confirm(): void {
    this.close(true);
  }

  private startTimer(): void {
    // this.timedDialogService.startTimer(15000);

    // this.timedDialogService.
  }

  @HostListener("Keydown.esc")
    public onEsc(): void {
      this.close(false);
    }
}
