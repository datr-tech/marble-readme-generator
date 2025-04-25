import { paths } from '@app-mrg/paths';
import fs from 'node:fs';

export const generatePkgData = (pkgName) => {
  const packageJsonPath = paths.derivePackageJsonPath(pkgName);
  const packageJson = fs.readFileSync(packageJsonPath, 'utf8');
  const { dependencies, description, homepage, name, scripts, version } =
    JSON.parse(packageJson);

  return {
    dependencies,
    description,
    homepage,
    name,
    scripts,
    version,
  };
};
