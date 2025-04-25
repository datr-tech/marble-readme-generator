import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateInstallLocally = (pkgData) =>
  fsTemplate.getContents('readmeInstallLocallyTemplate', pkgData);
