import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive ({
	selector: "[Dropdown]"
})

export class Dropdown_Directive
{
	@HostBinding ('class') Element_Class: string = '';
	Openning_Status: boolean = false;

	constructor (private Element_Reference: ElementRef)
	{

	}

	@HostListener ('document:click', ['$event']) Toggle_the_Dropdown (Event_Data: Event)
	{
		if (!this.Openning_Status && this.Element_Reference.nativeElement.contains (Event_Data.target))
		{
			this.Element_Class = 'open';
			this.Openning_Status = true;
		}
		else
		{
			this.Element_Class = '';
			this.Openning_Status = false;
		}
	}
}