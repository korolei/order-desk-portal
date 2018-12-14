import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    MatChipsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule
  ],
  exports: [
    MatChipsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule
  ]
})
export class MaterialModule { }
