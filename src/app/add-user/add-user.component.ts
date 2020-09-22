import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
	@Input() displayModal:boolean;
	@Input() displayHandler:Function;
	public imageSrc;
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

	readURL(event: Event): void {
		let files=(event.target as HTMLInputElement).files;
	    if (files && files[0]) {
	        const file = files[0];

	        const reader = new FileReader();
	        reader.onload = e => this.imageSrc = reader.result;

	        reader.readAsDataURL(file);
	    }
	}

}
