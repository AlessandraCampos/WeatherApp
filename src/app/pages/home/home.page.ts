import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Store, select} from '@ngrx/store';
import * as fromHomeAction from './state/home.action';
import * as fromHomeSelectors from './state/home.selectors';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
  
  searchControl = new FormControl('');
  text!: string;
  constructor(private store: Store){}

   ngOnInit(): void {
     this.searchControl = new FormControl('', Validators.required);
    // this.store.pipe(select(fromHomeSelectors.selectHomeText))
    // .subscribe(text => this.text =text);
   }
  dosearch(){
    const text = this.searchControl.value;
    this.store.dispatch(fromHomeAction.changeText({text}));
  }

}
