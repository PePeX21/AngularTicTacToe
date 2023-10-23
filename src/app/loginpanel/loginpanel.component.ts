import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { UserModel } from "../model/user.model";
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router'

@Component({
    selector: 'app-loginpanel',
    templateUrl: './loginpanel.component.html',
    styleUrls: ['./loginpanel.component.css']
})
export class LoginPanelComponent{
    signupUsers: any[] = []; ////// ????? czy mozna wyjebac ?
    signupObj: any = {
        name: '',
        email: '',
        encryptedPassword: '', 
        repeatPassword: ''
    }
    loginObj: any = {
        name: '',
        encryptedPassword: ''
    }

    constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) {}

    ngOnInit(): void {
    }

    authenticateUp(form:NgForm){
        console.log("3 chuje i 4 zapalki", this.signupObj.name)
        if(form.valid){
            const user: UserModel = {   
                                                        /// to pozmieniac by bylo obslugiwane przez serwis
                Name: this.signupObj.name,
                Email: this.signupObj.email,
                EncryptedPassword: this.signupObj.encryptedPassword,
                Id: 0,
                LastLogonAttempt: ""
            };
            if(this.signupObj.encryptedPassword == this.signupObj.repeatPassword){
                console.log("jeeeeejjj to samo haslo")
                this.http.post<UserModel>('http://localhost:5252/api/user/register', user).subscribe(
                    (response) => {
                        this.toastr.success("User succesfully registered yeeey")
                        console.log('User registered:');
                    },
                    (error) => {
                        this.toastr.error('Error registering user:', error)
                        console.error('Error registering user:', error);
                    });
            }
        }
    }
    authenticateIn(form:NgForm){
        console.log("to tylko login")

        if(form.valid){
            const user: UserModel = {   
                Name: this.loginObj.name,
                Email: '',
                EncryptedPassword: this.loginObj.encryptedPassword,
                Id: 0,
                LastLogonAttempt: ""
            };
            const httpOptions = {
                withCredentials: true
              };
            this.http.post<any>('http://localhost:5252/api/user/login', user, { observe: 'response', withCredentials: true }).subscribe(
                (response) => {
                    this.toastr.success("User succesfully LOGIN yeeey bitch")
                    console.log('User login:', response );
                    this.router.navigate(['/tictactoe'])
                    },
                (error) => {
                    this.toastr.error('Error LOGING user :<:', error)
                    console.error('Error logining user:', error);
                });
        }
    }
}
