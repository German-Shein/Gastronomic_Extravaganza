import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './Recipe/Recipe.model';
import { Recipes_Service } from './Recipes.service';

@Component ({
	selector: 'recipes',
	templateUrl: './Recipes.component.html',
	styleUrls: ['./Recipes.component.css'],
	providers: [Recipes_Service]
})

export class Recipes_Component
{
	Recipes: Recipe [];

	constructor (private Recipes_Service_Instance: Recipes_Service)
	{

	}

	ngOnInit ()
	{
		this.Recipes = this.Recipes_Service_Instance.Get_Recipes ();
	}

	@Output () Select_the_Recipe_Event = new EventEmitter <Recipe> ();

	Select_the_Recipe (Recipe_Item): void
	{
		this.Select_the_Recipe_Event.emit (Recipe_Item);
	}
}