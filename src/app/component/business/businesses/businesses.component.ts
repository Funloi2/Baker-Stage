import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ApiService} from "../../../services/api.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'sector', 'typeOfActivity', 'detailOfActivity', 'BRN', 'TAN',
    'dateOfClosing', 'currency', 'mainBusinessOfActivity', "action"];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {
  }

// Open Dialog to add a new company
  openDialogAddCompany() {
    this.dialog.open(DialogComponent, {
      width: ' 75%',
    }).afterClosed().subscribe(result => {
      this.getAllCompanies();
    });
  }

  ngOnInit() {
    this.getAllCompanies();
  }

  editCompany(row: any) {
    this.dialog.open(DialogComponent, {
      width: '75%',
      data: row
    }).afterClosed().subscribe(result => {
      this.getAllCompanies();
    });
  }

  // Filter the table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Delete a company by id
  deleteCompany(id: number) {
    this.api.deleteCompany(id)
      .subscribe({
        next: (res) => {
          alert("Company deleted successfully");
          this.getAllCompanies();
        },
        error: (err) => {
          alert("Error while deleting the company")
        }
      })
  }

  //get all companies
  getAllCompanies() {
    this.api.getCompany(httpOptions)
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while showing the companies")
        }
      })
  }
}
