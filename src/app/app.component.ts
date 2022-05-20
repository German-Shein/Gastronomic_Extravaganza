import { Component } from '@angular/core';

@Component ({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent
{
	Page: string = "Recipe Book"

	Change_the_Displayed_Component (Page: string): void
	{
		this.Page = Page;
	}
}