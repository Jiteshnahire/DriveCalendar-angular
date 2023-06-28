import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from "@angular/forms";



const moduleConstant=[
FormsModule,
CommonModule,
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatToolbarModule,
MatIconModule,
ReactiveFormsModule
]

@NgModule({
    imports:[moduleConstant],
    exports:[moduleConstant]
})
export class SharedModule{

}