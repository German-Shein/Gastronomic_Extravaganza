import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from './Recipe.model';

@Component ({
	selector: 'recipe',
	templateUrl: './Recipe.component.html',
	styleUrls: ['./Recipe.component.css']
})
export class Recipe_Component
{
	@Input () Recipe_Item: Recipe;
}