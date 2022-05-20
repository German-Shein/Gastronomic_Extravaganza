import { EventEmitter } from "@angular/core";
import { Recipe } from "./Recipe/Recipe.model";
import { Ingredient } from "../../Shared_Components/Ingredient.model";

export class Recipes_Service
{
	Recipe_Selection_Event = new EventEmitter <Recipe> ()

	private Recipes: Recipe [] =
	[
		new Recipe ('The Spiciest Burger', 'Grease, meat, bread and all sorts of stuff', 'https://qph.fs.quoracdn.net/main-qimg-64c07583904e2b8f3a4a7aeb10a8eebc.webp', [new Ingredient (2, 'Buns'), new Ingredient (5, 'Beef Patty')]),
		new Recipe ('GIGANTIC PIZZA!', 'CHEESE, BEEF, TOMATO SAUCE AND JALAPEÑOS!!!', 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg', [new Ingredient (2, 'Cheese'), new Ingredient (1, 'Tomato Sauce'), new Ingredient (32652, 'Jalapeño')])
	];

	Get_Recipes (): Recipe []
	{
		return this.Recipes.slice ();
	}
}