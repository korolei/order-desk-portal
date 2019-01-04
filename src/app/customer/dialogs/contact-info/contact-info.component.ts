import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Contact } from "../../../shared/models/contact";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {AppService} from "../../../app.service";
import {AppSettings} from "../../../core/app-settings";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styles: []
})
export class ContactInfoComponent {
  form: FormGroup;
  contact: Contact;

  constructor(private appService: AppService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<ContactInfoComponent>,
              @Inject(MAT_DIALOG_DATA) contact:Contact)
  {
    this.contact = contact;
    this.form = fb.group({
      firstName: [contact.firstName, Validators.required],
      lastName: [contact.lastName, Validators.required],
      email: [contact.email, Validators.required],
      phone: [contact.phone, Validators.required],
      jobTitle: [contact.jobTitle, Validators.required],
      companyName: [contact.companyName, Validators.required]
    })
  }

  save() {
    this.contact.firstName = this.form.value['firstName'];
    this.contact.lastName = this.form.value['lastName'];
    this.contact.email = this.form.value['email'];
    this.contact.phone = this.form.value['phone'];
    this.contact.jobTitle = this.form.value['jobTitle'];
    this.contact.companyName = this.form.value['companyName'];
    this.contact.address = this.contact.address;

    this.appService.update(AppSettings.updateContactInfoApi, this.contact.id, this.contact)
      .subscribe(() => {
        this.dialogRef.close(this.contact);
        this.appService.log("Contact Info has been updated.")
      });
  }

  close() {
    this.dialogRef.close();
  }
}
