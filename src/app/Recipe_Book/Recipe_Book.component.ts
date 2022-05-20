import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './Recipes/Recipe/Recipe.model';
import { Recipes_Service } from './Recipes/Recipes.service';

@Component ({
	selector: 'recipe-book',
	templateUrl: './Recipe_Book.component.html',
	styleUrls: ['./Recipe_Book.component.css'],
	providers: [Recipes_Service]
})

export class Recipe_Book_Component
{
	Recipe_Item: Recipe;

	@Output () Selected_Page_Event = new EventEmitter <string> ();

	constructor (private Recipe_Service_Instance: Recipes_Service)
	{

	}

	Change_the_Page (Page: string)
	{
		this.Selected_Page_Event.emit (Page);
	}
}