import { Component, OnInit } from '@angular/core';

export class User{
    name: string;
    username: string;
}

@Component({
    selector: 'template-form',
    styleUrls: ['./app/template/template-form.component.css'],
    templateUrl: './app/template/template-form.component.html'
})

export class TemplateFormComponent implements OnInit{
    public user: User;
    public submited: boolean = false;

    ngOnInit(){
        this.user = {
            name: 'Lionel Zhang',
            username: 'mangguoaidami'
        }
    }

    get diagnostic(){
        return JSON.stringify(this.user);
    }

    processForm(){
        console.log(this.user);
        this.submited = true;
    }
}