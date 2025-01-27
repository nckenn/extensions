import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MtxLoader } from './loader';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatProgressBarModule],
  exports: [MtxLoader],
  declarations: [MtxLoader],
})
export class MtxLoaderModule {}
