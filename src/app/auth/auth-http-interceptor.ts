import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter, tap } from "rxjs/operators";
/**
 * 
 */

@Injectable({
    providedIn:'root'
})
export class AuthHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        const modifiedReq=req.clone({
            withCredentials:true
        })
        return next.handle(modifiedReq);
    }

}
