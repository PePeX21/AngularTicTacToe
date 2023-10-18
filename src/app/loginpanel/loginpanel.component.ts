import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-loginpanel',
    templateUrl: './loginpanel.component.html',
    styleUrls: ['./loginpanel.component.css']
})
export class LoginPanelComponent{
    signupUsers: any[] = [];
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

    constructor() {}

    ngOnInit(): void {
    }

    authenticateUp(form:NgForm){
        console.log("3 chuje i 4 zapalki", this.signupObj.name)
        if(form.valid){
            if(this.signupObj.encryptedPassword == this.signupObj.repeatPassword){
                console.log("jeeeeejjj to samo haslo")
            }
        }
    /*
        if(form.valid){
            this.auth.authenticate(this.username ?? "", this.password ?? "").subscribe(response =>{
                if(response){
                    this.router.navigateByUrl("/admin/main")
                }
                this.errorMessage = "Nie da rady byku"
            })
            this.router.navigateByUrl("/admin/main")
        }else{
            this.errorMessage = "Nie ma takiego konta"
        }
    */
    }
    authenticateIn(form:NgForm){
        console.log("to tylko login")
    }
}
