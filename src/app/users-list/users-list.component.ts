import { Component, OnInit } from '@angular/core';
import JsonUsers from '../../assets/users.json';
import JsonRoles from '../../assets/roles.json';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
	public displayList:boolean;
	public displayModal:boolean;
	public users;
	public roles;
	constructor() {
		this.displayList=true;
		this.displayModal=false;
		this.users=JsonUsers.users;
		this.roles=JsonRoles.roles;
	}

	ngOnInit(): void {
	}

	changeDisplay=(displayList:boolean)=>{
		this.displayList=displayList;
	}

	displayHandler=()=>{
		this.displayModal=!this.displayModal;
	}

	addUser=(user:object)=>{
		this.users.unshift(user);
	}

}
