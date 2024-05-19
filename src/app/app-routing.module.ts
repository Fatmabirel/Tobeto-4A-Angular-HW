import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', component: CategoryComponent },
  { path: 'category/update/:categoryId', component: CategoryUpdateComponent },
  { path: 'category/update', component: CategoryUpdateComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
