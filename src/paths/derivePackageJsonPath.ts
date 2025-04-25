import { commonRoot } from '@app-mrg/config';
import path from 'node:path';

export const derivePackageJsonPath = (pkgName) =>
  path.resolve(commonRoot, pkgName, 'package.json');
