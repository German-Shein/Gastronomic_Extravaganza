import { Component } from '@angular/core';
import { Recipe } from './Recipes/Recipe/Recipe.model';

@Component ({
	selector: 'recipe-book',
	templateUrl: './Recipe_Book.component.html',
	styleUrls: ['./Recipe_Book.component.css']
})

export class Recipe_Book_Component
{
	Recipe_Item: Recipe;
}