import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared_Components/Ingredient.model';

@Component ({
	selector: 'editor',
	templateUrl: './Editor.component.html',
	styleUrls: ['./Editor.component.css']
})
export class Editor_Component
{
	@Output () Add_an_Ingredient_Event = new EventEmitter <Ingredient> ();
	@ViewChild ('Amount_Input', {static: true}) Amount: ElementRef;
	@ViewChild ('Name_Input', {static: true}) Name: ElementRef;

	Add_an_Ingredient (): void
	{
		this.Add_an_Ingredient_Event.emit (new Ingredient (this.Amount.nativeElement.value, this.Name.nativeElement.value));
	}
}