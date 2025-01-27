import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MtxPipesModule } from '@ng-matero/extensions/core';
import { MtxDialogContainer } from './dialog-container';
import { MtxDialog } from './dialog';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MtxPipesModule],
  exports: [MtxDialogContainer],
  declarations: [MtxDialogContainer],
  providers: [MtxDialog],
})
export class MtxDialogModule {}
