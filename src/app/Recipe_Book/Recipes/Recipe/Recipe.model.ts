export class Recipe
{
    public Name: string;
    public Description: string;
    public Image_URL: string;

    constructor (Name: string, Description: string, Image_URL: string)
    {
        this.Name = Name;
        this.Description = Description;
        this.Image_URL = Image_URL;
    }
}