import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ApiService} from "../../../services/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  //Initialize the form
  companyForm !: FormGroup;
  actionBtn = "Add";


  constructor(private formBuilder: FormBuilder, private api : ApiService, @Inject(MAT_DIALOG_DATA) public editData : any,
              private dialogRef : MatDialogRef<DialogComponent>) {
  }


  //Verify all the fields again
  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      sector: ['', Validators.required],
      typeOfActivity: ['', Validators.required],
      DetailOfActivity: ['', Validators.required],
      BRN: ['', Validators.required],
      TAN: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      date: ['', Validators.required],
      currency: ['', Validators.required],
      mainBusinessOfActivity: ['', Validators.required],
    });
    if(this.editData){
      this.actionBtn = "Edit";
      this.companyForm.controls['name'].setValue(this.editData.name);
      this.companyForm.controls['email'].setValue(this.editData.email);
      this.companyForm.controls['phone'].setValue(this.editData.phone);
      this.companyForm.controls['sector'].setValue(this.editData.sector);
      this.companyForm.controls['typeOfActivity'].setValue(this.editData.typeOfActivity);
      this.companyForm.controls['DetailOfActivity'].setValue(this.editData.DetailOfActivity);
      this.companyForm.controls['BRN'].setValue(this.editData.BRN);
      this.companyForm.controls['TAN'].setValue(this.editData.TAN);
      this.companyForm.controls['date'].setValue(this.editData.date);
      this.companyForm.controls['currency'].setValue(this.editData.currency);
      this.companyForm.controls['mainBusinessOfActivity'].setValue(this.editData.mainBusinessOfActivity);
    }
  }

  //Verify email
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  //Verify name
  name = new FormControl('', [Validators.required, Validators.minLength(2),]);

  getErrorMessageName() {
    return this.name.hasError('required') ? 'You must enter a value' :
      this.name.hasError('name') ? 'Not a valid name' :
        this.name.hasError('minlength') ? 'The name must be at least 2 characters' :
          '';
  }

  //Verify phone number
  phone = new FormControl('', [Validators.required, Validators.minLength(7),
    Validators.maxLength(8)]);
  getErrorMessagePhone() {
    return this.phone.hasError('required') ? 'You must enter a value' :
      this.phone.hasError('phone') ? 'Not a valid phone number' :
        this.phone.hasError('minlength') ? 'The number must be at least 7 digits' :
          this.phone.hasError('maxlength') ? 'The number must be at most 8 digits' :
            '';
  }

  //Verify Sector
  sector = new FormControl('', [Validators.required]);
  getErrorMessageSector() {
    return this.sector.hasError('required') ? 'You must enter a value' :
      this.sector.hasError('sector') ? 'Not a valid sector' :
        '';
  }
  //Create a list of Sectors
  sectors = [
    {value: 'Primary_Sector', name: "Primary Sector (Raw Materials)", icon: "business"},
    {value: 'Secondary Sector', name: "Secondary Sector (Manufacturing)", icon: "settings_input_hdmi"},
    {value: 'Tertiary Sector', name: "Tertiary Sector (Services)", icon: "beach_access"}
  ];

  //Verify Type of Activity
  typeOfActivity = new FormControl('', [Validators.required]);
  getErrorMessageTypeOfActivity() {
    return this.typeOfActivity.hasError('required') ? 'You must enter a value' :
      this.typeOfActivity.hasError('type') ? 'Not a valid type' :
        '';
  }
  //Create a list of activities
  activities = [
    {name: 'Marketing and Advertising', value: 'Marketing_and_Advertising'},
    {name: 'Sales and Business Development', value: 'Sales_and_Business_Development'},
    {name: 'Human Resources', value: 'Human_Resources'},
    {name: 'Operations and Logistics', value: 'Operations_and_Logistics'},
    {name: 'Financial Management', value: 'Financial_Management'},
    {name: 'Product Development', value: 'Product_Development'},
    {name: 'Research and Development', value: 'Research_and_Development'},
    {name: 'Customer Service', value: 'Customer_Service'},
    {name: 'IT and Technology', value: 'IT_and_Technology'},
    {name: 'Legal and Compliance', value: 'Legal_and_Compliance'},
    {name: 'Strategy and Planning', value: 'Strategy_and_Planning'},
    {name: 'Project Management', value: 'Project_Management'},
    {name: 'Supply Chain Management', value: 'Supply_Chain_Management'},
    {name: 'Accounting and Auditing', value: 'Accounting_and_Auditing'},
    {name: 'Quality Control', value: 'Quality_Control'},
    {name: 'Distribution and Fulfillment', value: 'Distribution_and_Fulfillment'},
    {name: 'Executive Management', value: 'Executive_Management'},
    {name: 'Business Intelligence', value: 'Business_Intelligence'},
    {name: 'Public Relations', value: 'Public_Relations'},
    {name: 'Business Process Optimization', value: 'Business_Process_Optimization'},
    {name: 'Business Continuity Planning', value: 'Business_Continuity_Planning'},
    {name: 'Business Analytics', value: 'Business_Analytics'},
    {name: 'Supply Chain Optimization', value: 'Supply_Chain_Optimization'},
    {name: 'Business Development', value: 'Business_Development'},
    {name: 'Business Consulting', value: 'Business_Consulting'},
    {name: 'Business Process Automation', value: 'Business_Process_Automation'},
    {name: 'Business Process Re-engineering', value: 'Business_Process_Re-engineering'},
    {name: 'Business Model Innovation', value: 'Business_Model_Innovation'},
    {name: 'Business Transformation', value: 'Business_Transformation'},
    {name: 'Business Process Outsourcing', value: 'Business_Process_Outsourcing'}
  ];

  //Verify Detail of acitvity
  DetailOfActivity = new FormControl('', [Validators.required]);
  getErrorMessageDetailOfActivity() {
    return this.DetailOfActivity.hasError('required') ? 'You must enter a value' :
      this.DetailOfActivity.hasError('type') ? 'Not a valid type' :
        '';
  }
  activityDetails = [
    {value: 1, name: "Accounting"},
    {value: 2, name: "Advertising"},
    {value: 3, name: "Agriculture"},
    {value: 4, name: "Air Transportation"},
    {value: 5, name: "Apparel and Other Textile Products"},
    {value: 6, name: "Auto and Truck Manufacturers"},
    {value: 7, name: "Banking and Financial Services"},
    {value: 8, name: "Biotechnology"},
    {value: 9, name: "Chemical Manufacturing"},
    {value: 10, name: "Computer and Electronic Products"},
    {value: 11, name: "Construction"},
    {value: 12, name: "Consulting Services"},
    {value: 13, name: "Consumer Products"},
    {value: 14, name: "Education"},
    {value: 15, name: "Electric Power Generation, Transmission and Distribution"},
    {value: 16, name: "Electronics and Appliance Stores"},
    {value: 17, name: "Engineering Services"},
    {value: 18, name: "Environmental Services"},
    {value: 19, name: "Facilities Support Services"},
    {value: 20, name: "Finance and Insurance"},
    {value: 21, name: "Food and Beverage Stores"},
    {value: 22, name: "Food Manufacturing"},
    {value: 23, name: "Gasoline Stations"},
    {value: 24, name: "General Merchandise Stores"},
    {value: 25, name: "Government"},
    {value: 26, name: "Health Care and Social Assistance"},
    {value: 27, name: "Health Care Services"},
    {value: 28, name: "Hotel and Accommodation Services"},
    {value: 29, name: "Information"},
    {value: 30, name: "Information Technology"}
  ];

  //Verify BRN
  BRN = new FormControl('', [Validators.required]);
  getErrorMessageBRN() {
    return this.BRN.hasError('required') ? 'You must enter a value' :
      this.BRN.hasError('BRN') ? 'Not a valid BRN' :
        '';
  }

  //Verify TAN
  TAN = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]);
  getErrorMessageTAN() {
    return this.TAN.hasError('required') ? 'You must enter a value' :
      this.TAN.hasError('TAN') ? 'Not a valid TAN' :
        this.TAN.hasError('minLength') ? 'The TAN must have 10 characters' :
          this.TAN.hasError('maxLength') ? 'The TAN must have 10 characters' :
            '';
  }

  //Verify date for closing of account
  date = new FormControl('', [Validators.required]);
  getErrorMessageDate() {
    return this.date.hasError('required') ? 'You must enter a value' :
      this.date.hasError('date') ? 'Not a valid date' :
        '';
  }

  //Verify the currency
  currency = new FormControl('', [Validators.required]);
  getErrorMessageCurrency() {
    return this.currency.hasError('required') ? 'You must enter a value' :
      this.currency.hasError('currency') ? 'Not a valid currency' :
        '';
  }
  currencies = [
    {code: 'USD', name: 'United States Dollar'},
    {code: 'EUR', name: 'Euro'},
    {code: 'GBP', name: 'British Pound Sterling'},
    {code: 'INR', name: 'Indian Rupee'},
    {code: 'AUD', name: 'Australian Dollar'},
    {code: 'CAD', name: 'Canadian Dollar'},
    {code: 'SGD', name: 'Singapore Dollar'},
    {code: 'CHF', name: 'Swiss Franc'},
    {code: 'MYR', name: 'Malaysian Ringgit'},
    {code: 'JPY', name: 'Japanese Yen'},
    {code: 'CNY', name: 'Chinese Yuan Renminbi'},
    {code: 'BRL', name: 'Brazilian Real'},
    {code: 'MXN', name: 'Mexican Peso'},
    {code: 'ZAR', name: 'South African Rand'},
    {code: 'SAR', name: 'Saudi Arabian Riyal'},
    {code: 'AED', name: 'United Arab Emirates Dirham'},
    {code: 'SEK', name: 'Swedish Krona'},
    {code: 'NOK', name: 'Norwegian Krone'},
    {code: 'DKK', name: 'Danish Krone'},
    {code: 'TRY', name: 'Turkish Lira'},
    {code: 'RUB', name: 'Russian Ruble'},
    {code: 'KRW', name: 'South Korean Won'},
    {code: 'IDR', name: 'Indonesian Rupiah'},
    {code: 'THB', name: 'Thai Baht'},
    {code: 'PHP', name: 'Philippine Peso'},
    {code: 'HKD', name: 'Hong Kong Dollar'},
    {code: 'NZD', name: 'New Zealand Dollar'},
    {code: 'PLN', name: 'Polish Zloty'},
    {code: 'CZK', name: 'Czech Koruna'},
    {code: 'ILS', name: 'Israeli New Shekel'},
    {code: 'HUF', name: 'Hungarian Forint'},
    {code: 'PKR', name: 'Pakistani Rupee'},
    {code: 'RON', name: 'Romanian Leu'},
    {code: 'BGN', name: 'Bulgarian Lev'},
    {code: 'MUR', name: 'Mauritian Rupee'},
  ];

  //Verify the Main business of activity
  mainBusinessOfActivity = new FormControl('', [Validators.required]);
  getErrorMessageMainBusinessOfActivity() {
    return this.mainBusinessOfActivity.hasError('required') ? 'You must enter a value' :
      this.mainBusinessOfActivity.hasError('type') ? 'Not a valid type' :
        '';
  }

  addCompany() {
    if(!this.editData){
      if(this.companyForm.valid){
        this.api.postCompany(this.companyForm.value)
          .subscribe({
            next:(res) => {
              alert("Company added successfully"+this.phone.value?.length);

            },
            error:(err) => {
              alert("Error while adding company");
            }

          })
      }else{
        alert(`Please fill the form correctly`);
      }
    }else{
      this.updateCompany();
    }
    }


  updateCompany(){
    this.api.updateCompany(this.companyForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Company updated successfully");
          this.companyForm.reset();
          this.dialogRef.close();
        },
        error: (err) => {
          alert("Error while updating company");
        }
      })
  }
}
