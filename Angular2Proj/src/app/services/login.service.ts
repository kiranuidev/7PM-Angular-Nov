import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class LoginService {
    private subject:Subject<any>= new Subject<any>();
    isLoggedIn=false;
    
    loggedIn(){
        this.isLoggedIn=true;
        this.subject.next(this.isLoggedIn);
    }

    getStatus():Observable<any>{
        return this.subject.asObservable();
    }

}
