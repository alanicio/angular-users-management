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
	public edit;
	constructor() {
		this.displayList=true;
		this.displayModal=false;
		this.users=JsonUsers.users;
		this.roles=JsonRoles.roles;
		this.edit=-1;
	}

	ngOnInit(): void {
	}

	changeDisplay=(displayList:boolean)=>{
		this.displayList=displayList;
	}

	displayHandler=()=>{
		(document.getElementById("name") as HTMLInputElement).value="";
		(document.getElementById("lastName") as HTMLInputElement).value="";
		(document.getElementById("mothersLastName") as HTMLInputElement).value="";
		(document.getElementById("mail") as HTMLInputElement).value="";
		(document.getElementById("rol") as HTMLInputElement).value="";
		(document.getElementById("status") as HTMLInputElement).checked=false;
		this.edit=-1;
		this.displayModal=!this.displayModal;
	}

	addUser=(user:object)=>{
		this.users.unshift(user);
	}

	deleteUser=(index:number)=>{
		this.users.splice(index,1);
	}

	editUser=(index)=>{
		this.displayHandler();
		this.edit=index;
		let user=this.users[index];
		(document.getElementById("name") as HTMLInputElement).value=user.name;
		(document.getElementById("lastName") as HTMLInputElement).value=user.fathersLastName;
		(document.getElementById("mothersLastName") as HTMLInputElement).value=user.mothersLastName;
		(document.getElementById("mail") as HTMLInputElement).value=user.email;
		(document.getElementById("rol") as HTMLInputElement).value=user.roleId;
		(document.getElementById("status") as HTMLInputElement).checked=user.active;
	}

	replaceUser=(user,index)=>{
		this.users.splice(index,1,user);
	}

}
