import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPipe } from '@providerPipes/jobs/job.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JobPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    JobPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
