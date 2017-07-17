import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'reactive-form',
    templateUrl: './app/reactive/reactive-form.component.html'
})

export class ReactiveFormComponent implements OnInit{
    public form: FormGroup;
    public nameError: string;
    public usernameError: string;

    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.form = this.fb.group({
            name: ['Lionel zhang'],
            username: ['mangguoaidami']
        })
        
        this.form.valueChanges.subscribe(data => {
            // console.log(data);

            let name = this.form.get('name');
            let username = this.form.get('username');

            if(name.invalid && name.dirty){
                this.nameError = 'please input some!'
            }else{
                this.nameError = ''
            }

            if(username.invalid && username.dirty){
                this.usernameError = 'please input some!'
            }else{
                this.usernameError = ''
            }
        })
    }

    processForm(){
        console.log('processing', this.form.value);
    }
}