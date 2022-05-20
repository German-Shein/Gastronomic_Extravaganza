import { Ingredient } from "../../../Shared_Components/Ingredient.model";

export class Recipe
{
    public Name: string;
    public Description: string;
    public Image_URL: string;
    public Ingredients: Ingredient [];

    constructor (Name: string, Description: string, Image_URL: string, Ingredients: Ingredient [])
    {
        this.Name = Name;
        this.Description = Description;
        this.Image_URL = Image_URL;
        this.Ingredients = Ingredients;
    }
}