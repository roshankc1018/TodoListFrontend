import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly internalStatus$ = new BehaviorSubject<string | undefined>(undefined);

  constructor() {}

  readonly currentUser$ = this.internalStatus$.pipe();

  async login(username: string, password: string) {
    return of([username, password])
      .pipe(
        delay(200),
        map(([username, password]) => {
          const success =
            (username?.toLowerCase() === 'stuart' ||
              username?.toLowerCase() === 'tyler' ||
              username?.toLowerCase() === 'adam' ||
              username?.toLowerCase() === 'lan') &&
            password === '12345';
          this.internalStatus$.next(success ? username : undefined);
          return success;
        })
      )
      .toPromise();
  }
}
