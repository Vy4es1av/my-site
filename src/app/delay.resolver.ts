import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of, delay } from 'rxjs';

@Injectable()
export class DelayResolver implements Resolve<null> {
    private delay = 500;

    public resolve(): Observable<null> {
        return of(null).pipe(delay(this.delay));
    }
}