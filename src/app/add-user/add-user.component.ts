import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
	@Input() displayModal:boolean;
	@Input() displayHandler:Function;
	constructor() { }

	ngOnInit(): void {
	}

	modalStatus=()=>{
		if(this.displayModal){
			return "block";
		}
		else{
			return "none";
		}
	}

}
