import { Component, OnInit, Input } from '@angular/core';
import JsonUsers from '../../assets/users.json';
import JsonRoles from '../../assets/roles.json';

@Component({
  selector: 'display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
	public users;
	public roles;
	@Input() displayList:boolean;
	constructor() {
		this.users=JsonUsers.users;
		this.roles=JsonRoles.roles;
		console.log(this.displayList);
	}

	ngOnInit(): void {
	}

}
