import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
	public displayList:boolean;
	public displayModal:boolean;
	constructor() {
		this.displayList=true;
		this.displayModal=false;
	}

	ngOnInit(): void {
	}

	changeDisplay=(displayList:boolean)=>{
		this.displayList=displayList;
	}

	displayHandler=()=>{
		this.displayModal=!this.displayModal;
	}

}
