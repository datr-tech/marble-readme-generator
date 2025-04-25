import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateInstallAsDependency = (pkgData) =>
  fsTemplate.getContents('readmeInstallAsDependencyTemplate', pkgData);
