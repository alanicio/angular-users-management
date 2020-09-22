import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
	public displayList:boolean;
	constructor() {
		this.displayList=true;
	}

	ngOnInit(): void {
	}

	changeDisplay=(displayList:boolean)=>{
		this.displayList=displayList;
	}

}
