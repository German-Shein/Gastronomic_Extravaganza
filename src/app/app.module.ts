import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header_Component } from './Header/Header.component';
import { Recipe_Book_Component } from './Recipe_Book/Recipe_Book.component';

import { Description_Component } from './Recipe_Book/Description/Description.component';
import { Recipes_Component } from './Recipe_Book/Recipes/Recipes.component';
import { Recipe_Component } from './Recipe_Book/Recipes/Recipe/Recipe.component';

import { Shopping_List_Component } from './Shopping_List/Shopping_List.component';
import { Editor_Component } from './Shopping_List/Editor/Editor.component';
import { Items_Component } from './Shopping_List/Items/Items.component';
import { FormsModule } from '@angular/forms';

import { Dropdown_Directive } from './Shared_Components/Dropdown.directive';

@NgModule ({
	declarations:
	[
		AppComponent,
		Header_Component,
		Recipe_Book_Component,
		Description_Component,
		Recipes_Component,
		Recipe_Component,
		Shopping_List_Component,
		Editor_Component,
		Items_Component,
		Dropdown_Directive
	],
	imports:
	[
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
