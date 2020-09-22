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
	@Input() selectedRol;
	constructor() {	}

	ngOnInit(): void {
	}

	filterUsers=()=>{
		let search=this.search.toLowerCase().trim();
		let selectedRol=this.selectedRol;
		if(search.length>0 || selectedRol>0){
			let resul=[];
			for(let user of this.users){
				let name=user.name.toLowerCase();
				let fathersLastName=user.fathersLastName.toLowerCase();
				let mothersLastName=user.mothersLastName.toLowerCase();
				let mail=user.email.toLowerCase();
				let rol=user.roleId;
				if(
					(name.indexOf(search)>-1 ||
					fathersLastName.indexOf(search)>-1 ||
					mothersLastName.indexOf(search)>-1 ||
					mail.indexOf(search)>-1)
					&&
					(selectedRol==0?true:selectedRol==rol?true:false)
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
