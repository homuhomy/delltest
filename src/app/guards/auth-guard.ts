import { CanActivateFn, Router } from '@angular/router';
import { Data } from '../services/data';
import { inject } from '@angular/core';
import { Misc} from '../services/misc';

export const authGuard: CanActivateFn = (route, state) => {
  const dataService = inject(Data);
  const router = inject(Router);
  const misc = inject(Misc);

  let token = dataService.getLocalStorage('token');
  if(token){
    return true;
  }
  router.navigateByUrl('/login');
  misc.openSnackBar('Please login first to access the page', 'ok');

  return true;
};
