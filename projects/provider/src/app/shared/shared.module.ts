import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPipe } from '@providerPipes/jobs/job.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    JobPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  exports: [
    JobPipe,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
