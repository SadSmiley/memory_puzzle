import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
	size = {};
	card = [];
	submitted = false;

	ngOnInit()
	{
		$("#size_modal").modal();
	}

	submit_size()
	{
		this.card = [];

		for (var i = 0; i < this.size.height; i++) 
		{
			this.card[i] = [];

			for (var x = 0; x < this.size.width; x++) 
			{
				this.card[i][x] = null;
			}
		}

		this.submitted = true;
	}
}
