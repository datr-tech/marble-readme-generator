import { commonRoot } from '@app-mrg/config';
import path from 'node:path';

export const deriveReadmePath = (pkgName) =>
  path.resolve(commonRoot, pkgName, 'README.md');
