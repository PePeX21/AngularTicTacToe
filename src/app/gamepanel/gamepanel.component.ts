import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector: 'app-gamepanel',
    templateUrl: './gamepanel.component.html',
    styleUrls: ['./gamepanel.component.css']
})
export class GamePanelComponent{

    constructor(private http: HttpClient) {}

    logout(): void{
        console.log('logout')
        this.http.post<any>('http://localhost:5252/api/user/logout', {}, { withCredentials: true }).subscribe(
            (response) => {
                // Handle the response from the API here
                console.log('User login:');
                },
            (error) => {
                // Handle errors here
                console.error('Error logining user:', error);
            });
        
    }
}