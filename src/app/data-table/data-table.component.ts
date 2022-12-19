import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Employee {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Gender: string;
  JobTitle: string;
}


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements AfterViewInit {
  EmpData: Employee[] = [
    {
      Id: 1,
      FirstName: 'Phuc',
      LastName: 'Phan',
      Email: 'phucphan@gmail.com',
      Gender: 'M',
      JobTitle: 'Developer',
    },
    {
      Id: 2,
      FirstName: 'Hoang',
      LastName: 'Pham',
      Email: 'hoangpham@gmail.com',
      Gender: 'M',
      JobTitle: 'Developer',
    },
    {
      Id: 3,
      FirstName: 'Tam',
      LastName: 'Hoang',
      Email: 'tamhoang@gmail.com',
      Gender: 'M',
      JobTitle: 'Developer',
    },
    {
      Id: 4,
      FirstName: 'Duy',
      LastName: 'Nguyen',
      Email: 'duynguyen@gmail.com',
      Gender: 'M',
      JobTitle: 'Editor',
    },
    {
      Id: 5,
      FirstName: 'Quynh',
      LastName: 'Truong',
      Email: 'quynhtruong@gmail.com',
      Gender: 'F',
      JobTitle: 'Editor',
    },
    {
      Id: 6,
      FirstName: 'Thanh',
      LastName: 'Le',
      Email: 'thanhle@gmail.com',
      Gender: 'M',
      JobTitle: 'Editor',
    },
    {
      Id: 7,
      FirstName: 'Hieu',
      LastName: 'Nguyen',
      Email: 'hieunguyen@gmail.com',
      Gender: 'M',
      JobTitle: 'Editor',
    },
    {
      Id: 8,
      FirstName: 'Quan',
      LastName: 'Hoang',
      Email: 'quanhoang@gmail.com',
      Gender: 'M',
      JobTitle: 'Editor',
    },
    {
      Id: 9,
      FirstName: 'Tam',
      LastName: 'Nguyen',
      Email: 'tamnguyen@gmail.com',
      Gender: 'M',
      JobTitle: 'Manager',
    },
    {
      Id: 10,
      FirstName: 'Nhi',
      LastName: 'Do',
      Email: 'nhido@gmail.com',
      Gender: 'F',
      JobTitle: 'Manager',
    },
  ];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email','Gender','JobTitle'];

  @ViewChild('paginator') paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Employee>;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.EmpData);
    this.dataSource.paginator = this.paginator;
  }
}
