import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
/*
  characters: Table[];

  constructor(private tservice: TableService) { }

  ngOnInit() {
    this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
    });
  }
  settings = {
    columns: {
      ordernumber: {
        title: 'ORDERNUMBER'
      },
      orderduedate: {
        title: 'ORDERDUEDATE'
      },
      customername: {
        title: 'CUSTOMER NAME'
      },
      customeraddress: {
        title: 'CUSTOMER ADDRESS'
      },
      customerphone: {
        title: 'CUSTOME PHONE'
      },
      ordertotal: {
        title: 'ORDER TOTAL'
      }
    }
  };
  */

  // It maintains list of Registrations
registrations: Registration[] = [];
// It maintains registration Model
regModel: Registration;
// It maintains registration form display status. By default it will be false.
showNew: Boolean = false;
// It will be either 'Save' or 'Update' based on operation.
submitType: string = 'Save';
// It maintains table row index based on selection.
selectedRow: number;

  constructor() {

    // Add default registration data.
this.registrations.push(new Registration({year: 1980, month: 5, day: 12}, 'Johan', 'USA', '9999999999', '100'));
this.registrations.push(new Registration({year: 1975, month: 12, day: 3},'Mohamed', 'UK',  '8888888888', '200'));
this.registrations.push(new Registration({year: 1970, month: 7, day: 25},'Nirmal', 'DUBAI',  '7777777777', '300'));

   }

  ngOnInit() {
  }
// This method associate to New Button.
onNew() {
  // Initiate new registration.
  this.regModel = new Registration();
  // Change submitType to 'Save'.
  this.submitType = 'Save';
  // display registration entry section.
  this.showNew = true;
  }

  // This method associate to Save Button.
onSave() {
  if (this.submitType === 'Save') {
  // Push registration model object into registration list.
  this.registrations.push(this.regModel);
  } else {
  // Update the existing properties values based on model.
  this.registrations[this.selectedRow].dob = this.regModel.dob;
  this.registrations[this.selectedRow].buyerName = this.regModel.buyerName;
  this.registrations[this.selectedRow].customerAddress = this.regModel.customerAddress;
  this.registrations[this.selectedRow].customerPhone = this.regModel.customerPhone;
  this.registrations[this.selectedRow].orderTotal = this.regModel.orderTotal;
  
  }
  // Hide registration entry section.
  this.showNew = false;
  }

// This method associate to Edit Button.
onEdit(index: number) {
  // Assign selected table row index.
  this.selectedRow = index;
  // Initiate new registration.
  this.regModel = new Registration();
  // Retrieve selected registration from list and assign to model.
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
  // Change submitType to Update.
  this.submitType = 'Update';
  // Display registration entry section.
  this.showNew = true;
  }
  // This method associate to Delete Button.
onDelete(index: number) {
  // Delete the corresponding registration entry from the list.
  this.registrations.splice(index, 1);
  }

  // This method associate to Cancel Button.
onCancel() {
  // Hide registration entry section.
  this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.

}


class Registration {
  constructor(
    public dob: NgbDateStruct = null,
  public buyerName: string = '',
  public customerAddress: string = '',
  public customerPhone: string = '',
  public orderTotal: string = '',

  ) {}
}

