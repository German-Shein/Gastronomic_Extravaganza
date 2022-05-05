import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './Recipe/Recipe.model';

@Component ({
	selector: 'recipes',
	templateUrl: './Recipes.component.html',
	styleUrls: ['./Recipes.component.css']
})
export class Recipes_Component
{
	Recipes: Recipe [] =
	[
		new Recipe ('A Badass Burger', 'Grease, meat, garbage bread, I don\'t know', 'https://qph.fs.quoracdn.net/main-qimg-64c07583904e2b8f3a4a7aeb10a8eebc.webp'),
		new Recipe ('GIGANTIC PIZZA!', 'CHEESE, BEEF, TOMATO SAUCE AND JALAPEÑOS TO BURN YOUR MOUTH', 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg')
	];

	@Output () Select_the_Recipe_Event = new EventEmitter <Recipe> ();

	Select_the_Recipe (Recipe_Item): void
	{
		this.Select_the_Recipe_Event.emit (Recipe_Item);
	}
}