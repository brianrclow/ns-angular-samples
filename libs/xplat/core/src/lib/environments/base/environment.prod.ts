import { IEnvironment } from '@ns-angular-samples/xplat/core';
import { deepMerge } from '@ns-angular-samples/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
