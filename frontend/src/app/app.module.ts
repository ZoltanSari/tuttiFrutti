import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { UserRecipeListComponent } from './components/user/user-recipe-list/user-recipe-list.component';
import { UserFavouriteRecipeComponent } from './components/user/user-favourite-recipe/user-favourite-recipe.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { AddNewRecipeComponent } from './components/recipe/new-recipe/add-new-recipe.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    UserComponent,
    SearchComponent,
    LoginComponent,
    UserRecipeListComponent,
    UserFavouriteRecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    AddNewRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
