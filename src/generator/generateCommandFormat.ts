import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateCommandFormat = (pkgData) => {
  let commandFormatText = '';

  if (
    typeof pkgData.scripts !== 'undefined' &&
    typeof pkgData.scripts.format !== 'undefined'
  ) {
    commandFormatText = fsTemplate.getContents('readmeCommandFormatTemplate', pkgData);
  }

  return commandFormatText;
};
