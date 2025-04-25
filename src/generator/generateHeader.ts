import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateHeader = (pkgData) =>
  fsTemplate.getContents('readmeHeaderTemplate', pkgData);
