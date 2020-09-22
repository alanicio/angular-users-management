import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
	@Input() displayModal:boolean;
	@Input() displayHandler:Function;
	@Input() addUser:Function;
	@Input() roles;
	@Input() edit;
	@Input() users;
	@Input() replaceUser:Function;
	public imageSrc;
	constructor() { }

	ngOnInit(): void {
	}

	ngOnChanges(){
		if(this.edit>-1){
			this.imageSrc=this.users[this.edit].picture;
		}
		else{
			this.imageSrc="";
		}
		console.log(this.edit);
		console.log(this.users[this.edit]);
	}

	modalStatus=()=>{
		if(this.displayModal){
			return "block";
		}
		else{
			return "none";
		}
	}

	readURL(event: Event): void {
		let files=(event.target as HTMLInputElement).files;
	    if (files && files[0]) {
	        const file = files[0];

	        const reader = new FileReader();
	        reader.onload = e => this.imageSrc = reader.result;
	        reader.readAsDataURL(file);
	    }
	}

	generateUser=()=>{
		let user={
			"picture": this.imageSrc,
			"name": (<HTMLInputElement>document.getElementById("name")).value,
			"fathersLastName": (<HTMLInputElement>document.getElementById("lastName")).value,
			"mothersLastName": (<HTMLInputElement>document.getElementById("mothersLastName")).value,
			"email": (<HTMLInputElement>document.getElementById("mail")).value,
			"roleId": (<HTMLInputElement>document.getElementById("rol")).value,
			"active": (<HTMLInputElement>document.getElementById("status")).value,
		};
		if(this.edit<0){
			this.addUser(user);
		}
		else{
			this.replaceUser(user,this.edit);
		}
		this.displayHandler();
	}

}
