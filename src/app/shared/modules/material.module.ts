import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatChipsModule,MatSelectModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule
  ],
  exports: [
    MatChipsModule,MatSelectModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModule { }
