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
	@Output () Change_the_Displayed_Component_Event = new EventEmitter <string> ();

	Change_the_Displayed_Component (Page: string): void
	{
		this.Change_the_Displayed_Component_Event.emit (Page);
	}
}