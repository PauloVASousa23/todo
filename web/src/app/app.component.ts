import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web';

  formTodo : any;
  adicionarTags: boolean = false;
  tags : any = [];

  constructor(private fb : FormBuilder){};

  ngOnInit(){
    this.formTodo = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  cadastrarTodo(){
    console.log(this.formTodo);

    if(this.formTodo.valid){
      console.log(this.formTodo);
      console.log(this.tags);
    }
  }

  add(event: any): void {
    console.log(document.querySelector<HTMLInputElement>("#novaTag").value);
    let element = event.srcElement;

    // Add our fruit
    if ((element.value || '').trim()) {
      this.tags.push({nome: element.value.trim()});
    }

    // Reset the input value
    if (element.value) {
      element.value = '';
    }
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
