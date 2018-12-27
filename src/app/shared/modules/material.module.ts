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
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatChipsModule,MatSelectModule, MatPaginatorModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule,MatAutocompleteModule
  ],
  exports: [
    MatChipsModule,MatSelectModule, MatPaginatorModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule,MatAutocompleteModule
  ]
})
export class MaterialModule { }
