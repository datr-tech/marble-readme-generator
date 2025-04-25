import fs from "node:fs";
import { generator } from '@app-mrg/generator';
import { paths } from '@app-mrg/paths';
import { pkgNames } from '@app-mrg/config';
import { isPossibleDependency } from '@app-mrg/util';

pkgNames.forEach((pkgName) => {
  const pkgData = generator.generatePkgData(pkgName);
	const { name } = pkgData;
	
	let commandFormatText = "";
	let commandLintText = "";
	let headerText = "";
	let installAsDependencyText = "";
	let installLocallyText = "";
	let readmeText = "";

	headerText = generator.generateHeader(pkgData);
	
	if (isPossibleDependency(name)) {
		installAsDependencyText = generator.generateInstallAsDependency(pkgData);
	}

	installLocallyText = generator.generateInstallLocally(pkgData);
	commandFormatText = generator.generateCommandFormat(pkgData);
	commandLintText = generator.generateCommandLint(pkgData);
  
	if (headerText !== "") {
		readmeText = headerText;
	}

	if (readmeText !== "") {
		if (installAsDependencyText !== "") {
			readmeText += installAsDependencyText;
		}
		
		if (installLocallyText !== "") {
			readmeText += installLocallyText;
		}
		
		if (commandFormatText !== "") {
			readmeText += commandFormatText;
		}
		
		if (commandLintText !== "") {
			readmeText += commandLintText;
		}
	}

	if (readmeText !== "") {
		const readmePath = paths.deriveReadmePath(pkgName);

		fs.writeFileSync(readmePath, readmeText, "utf8");
	}
});
