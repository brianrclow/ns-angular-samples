import { environmentBase } from './environment.base';
import { IEnvironment } from '@ns-angular-samples/xplat/core';
import { environmentProd } from '@ns-angular-samples/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});
