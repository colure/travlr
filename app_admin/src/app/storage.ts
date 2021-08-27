/*Allows to access local storage cache.*/

import {InjectionToken} from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage //setup for local storage
});
