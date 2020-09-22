import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
	@Input() users;
	@Input() roles;
	@Input() displayList:boolean;
	@Input() deleteUser:Function;
	@Input() editUser:Function;
	@Input() search:string;
	constructor() {	}

	ngOnInit(): void {
	}

	filterUsers=()=>{
		let search=this.search.toLowerCase().trim();
		if(search.length>0){
			let resul=[];
			for(let user of this.users){
				let name=user.name.toLowerCase();
				let fathersLastName=user.fathersLastName.toLowerCase();
				let mothersLastName=user.mothersLastName.toLowerCase();
				let mail=user.email.toLowerCase();
				if(
					name.indexOf(search)>-1 ||
					fathersLastName.indexOf(search)>-1 ||
					mothersLastName.indexOf(search)>-1 ||
					mail.indexOf(search)>-1
				){
					resul.push(user);
				}
			}
			return resul;
		}
		else{
			return this.users;
		}
	}

}
