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
  MatFormFieldModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatChipsModule,MatSelectModule, MatPaginatorModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule,MatAutocompleteModule,MatProgressBarModule
  ],
  exports: [
    MatChipsModule,MatSelectModule, MatPaginatorModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule,
    MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
    MatExpansionModule, MatSidenavModule, MatSortModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule,MatAutocompleteModule,MatProgressBarModule
  ]
})
export class MaterialModule { }
