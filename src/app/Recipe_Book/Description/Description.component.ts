import { Component, Input } from '@angular/core';
import { Dropdown_Directive } from 'src/app/Shared_Components/Dropdown.directive';
import { Recipe } from '../Recipes/Recipe/Recipe.model';

@Component ({
	selector: 'description',
	templateUrl: './Description.component.html',
	styleUrls: ['./Description.component.css']
})
export class Description_Component
{
	@Input () Recipe_Item: Recipe;
}