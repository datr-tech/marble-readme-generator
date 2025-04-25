import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateCommandLint = (pkgData) => {
  let commandLintText = '';

  if (
    typeof pkgData.scripts !== 'undefined' &&
    typeof pkgData.scripts.lint !== 'undefined'
  ) {
    commandLintText = fsTemplate.getContents('readmeCommandLintTemplate', pkgData);
  }

  return commandLintText;
};
