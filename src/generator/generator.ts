import { generateCommandFormat } from './generateCommandFormat';
import { generateCommandLint } from './generateCommandLint';
import { generateHeader } from './generateHeader';
import { generateInstallAsDependency } from './generateInstallAsDependency';
import { generateInstallLocally } from './generateInstallLocally';
import { generatePkgData } from './generatePkgData';

export const generator = {
  generateCommandFormat,
  generateCommandLint,
  generateHeader,
  generateInstallAsDependency,
  generateInstallLocally,
  generatePkgData,
};
