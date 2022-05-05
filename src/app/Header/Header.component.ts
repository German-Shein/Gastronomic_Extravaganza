import { Component, EventEmitter, Output } from '@angular/core';
import { Dropdown_Directive } from '../Shared_Components/Dropdown.directive';

@Component ({
	selector: 'application-header',
	templateUrl: './Header.component.html',
	styleUrls: ['./Header.component.css']
})
export class Header_Component
{
	Collapse_Status: boolean = true;
	@Output () Change_the_Displayed_Component_Event = new EventEmitter <{Recipe_Book_Display_Status: boolean, Shopping_List_Display_Status: boolean}> ();

	Change_the_Displayed_Component (Recipe_Book_Display_Status: boolean, Shopping_List_Display_Status: boolean): void
	{
		this.Change_the_Displayed_Component_Event.emit ({Recipe_Book_Display_Status: Recipe_Book_Display_Status, Shopping_List_Display_Status: Shopping_List_Display_Status});
	}
}