import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css',
})
export class CategoryUpdateComponent {
  categoryUpdateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.createBrandUpdateForm();
  }
  createBrandUpdateForm(){
    this.categoryUpdateForm = this.formBuilder.group({
      categoryId:["",Validators.required],
      categoryName:["",Validators.required]
    })
  }


  update(){
    if(this.categoryUpdateForm.valid){
      let brandModel = Object.assign({}, this.categoryUpdateForm.value);
      this.categoryService.update(brandModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message, "Başarılı", {
          progressBar:true
        })
      })
    }else{
      this.toastrService.error("Formunuz eksik", "Hata",{
        progressBar:true
      })
    }
  }
  
}
