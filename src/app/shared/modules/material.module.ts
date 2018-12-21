import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
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
    MatChipsModule,MatSelectModule, MatPaginatorModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatChipsModule,MatSelectModule, MatPaginatorModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
