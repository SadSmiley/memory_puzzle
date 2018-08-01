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
	first_flip = null;
	second_flip = null;

	ngOnInit()
	{
		$("#size_modal").modal();
	}

	submit_size()
	{
		this.submitted = true;
		this.card = [];

		for (var i = 0; i < this.size.height; i++) 
		{
			this.card[i] = [];

			for (var x = 0; x < this.size.width; x++) 
			{
				this.card[i][x] = [];
				this.card[i][x].flipped = 0;
				this.card[i][x].value = "A";
			}

			if (i + 1 == this.size.height) 
			{
				$("#size_modal").modal('hide');
			}
		}
	}

	flip_it(index, index2)
	{
		if (this.first_flip && this.second_flip) 
		{
			if (this.first_flip.index == index && this.first_flip.index2 == index2) 
			{
				alert("You already clicked this card. Please select another.");
			}
			else
			{
				if (this.second_flip.index == index && this.second_flip.index2 == index2) 
				{
					alert("You already clicked this card. Please select another.");
				}
				else
				{
					this.flipperino(index, index2);
				}
			}
		}
		else
		{
			this.flipperino(index, index2);
		}
	}

	flipperino(index, index2)
	{
		if (this.first_flip) 
		{
			this.card[this.first_flip.index][this.first_flip.index2].flipped = 0;
			this.card[this.second_flip.index][this.second_flip.index2].flipped = 0;

			this.first_flip = null;
			this.second_flip = null;
		}
		
		if (!this.first_flip)
		{
			if (this.second_flip) 
			{
				if (this.second_flip.index == index && this.second_flip.index2 == index2) 
				{
					alert("You already clicked this card. Please select another.");
				}
				else
				{
					this.first_flip = [];
					this.first_flip.index = index;
					this.first_flip.index2 = index2;
				}
			}
			else
			{
				this.second_flip = [];
				this.second_flip.index = index;
				this.second_flip.index2 = index2;
			}
		}
		else
		{
			if (this.first_flip.index == index && this.first_flip.index2 == index2) 
			{
				alert("You already clicked this card. Please select another.");
			}
		}

		this.card[index][index2].flipped = 1;
	}
}
