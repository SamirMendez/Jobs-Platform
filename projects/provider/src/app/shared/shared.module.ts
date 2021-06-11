import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPipe } from '@providerPipes/jobs/job.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    JobPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    JobPipe,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
