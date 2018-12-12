import {Recipe} from '../recipes/models/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'This is simply a description',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.' +
      'myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%' +
      '2Frecipes%2Fsl%2F13%2F07%2Ffirecracker-grilled-salmon-sl-x.jpg%3Fitok%3DDXNiVdiS&w=1000&c=sc&poi=face&q=70',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Burger', 'This is simply a description',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.' +
      'myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%' +
      '2Frecipes%2Fsl%2F13%2F07%2Ffirecracker-grilled-salmon-sl-x.jpg%3Fitok%3DDXNiVdiS&w=1000&c=sc&poi=face&q=70',
      [
        new Ingredient('Bread', 3),
        new Ingredient('Meat', 3),
        new Ingredient('cheese', 3)
      ]),
    new Recipe('Cooked Chiken', 'This is simply a description',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.' +
      'myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%' +
      '2Frecipes%2Fsl%2F13%2F07%2Ffirecracker-grilled-salmon-sl-x.jpg%3Fitok%3DDXNiVdiS&w=1000&c=sc&poi=face&q=70',
      [
        new Ingredient('chicken', 1),
        new Ingredient('honey', 1)
      ])

  ];

  constructor (private shoppinglistService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

}
