import { Component, Input } from '@angular/core';
import { Ingredient } from '../Shared_Components/Ingredient.model';

@Component ({
	selector: 'shopping-list',
	templateUrl: './Shopping_List.component.html',
	styleUrls: ['./Shopping_List.component.css']
})
export class Shopping_List_Component
{
	Ingredients: Ingredient [] =
	[
		new Ingredient (2, 'Bun'),
		new Ingredient (3, 'Beef Patty'),
		new Ingredient (1, 'Cheese Bottle, 100 ml')
	];

	Add_an_Ingredient (Ingredient_Item): void
	{
		this.Ingredients.push (Ingredient_Item);
	}
}