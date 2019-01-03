import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../app.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AppSettings} from "../../core/app-settings";
import {Note} from "../../shared/models/note";
import {CaseManagement} from "../models/case-management";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent {
  form: FormGroup;
  note: Note;
  caseManagementItem: CaseManagement;

  constructor(private appService: AppService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<NotesComponent>,
              @Inject(MAT_DIALOG_DATA) item: CaseManagement)
  {
    this.caseManagementItem = item;
    this.note = item.note;

    this.form = fb.group({
      noteType: [this.note.noteType, Validators.required],
      noteText: [this.note.noteText, Validators.required]
    })
  }

  save() {
    this.caseManagementItem.note.noteType= this.form.value['noteType'];
    this.caseManagementItem.note.noteText = this.form.value['noteText'];

    this.appService.update(AppSettings.updateCaseManagementApi, this.caseManagementItem.id, this.caseManagementItem)
      .subscribe(() => {
        this.dialogRef.close(this.caseManagementItem);
        this.appService.log("Note Info has been updated.")
      });
  }

  close() {
    this.dialogRef.close();
  }
}
