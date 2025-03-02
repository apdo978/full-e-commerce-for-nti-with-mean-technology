import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../servcies/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // استخراج التوكن من الخدمة وإضافته للهيدر
    const token = this.userService.getTokenFromLocalStorage();
    let clonedReq = req;

    if (token) {
      clonedReq = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    // تمرير الطلب والتحقق من الاستجابة
    return next.handle(clonedReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // التحقق من وجود `userType` في الاستجابة
          if (event.body && event.body.userType) {
            const userType = event.body.userType;

            // تخزين `userType` في localStorage
            localStorage.setItem('userType', userType);
            console.log(`userType stored: ${userType}`);
          }
        }
      })
    );
  }
}


