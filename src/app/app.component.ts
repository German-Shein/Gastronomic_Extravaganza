import { Component } from '@angular/core';

@Component ({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent
{
	Recipe_Book_Display_Status: boolean = true;
	Shopping_List_Display_Status: boolean = false;

	Change_the_Displayed_Component (Statuses): void
	{
		this.Recipe_Book_Display_Status = Statuses.Recipe_Book_Display_Status;
		this.Shopping_List_Display_Status = Statuses.Shopping_List_Display_Status;
	}
}