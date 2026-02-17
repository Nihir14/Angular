import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NewLoggerService {
    log(msg: string) {
        console.log('NewLoggerService:', msg);
    } 
}