// Write an app that will copy a file from one specified location to another like
// Linux cp command: `cp file.txt file-copy.txt`.
// - It must do nothing in case the user is trying to copy to the same location.
// - The app must support only copying of files, and no additional options (flags). Plain copying of files.


'use strict';
import * as fs from 'fs';

const copyFile = (
  input,
  output = `${input.split('.')[0]}-copy.${input.split('.')[1]}`
) => {
  const initialPath = `src/${input}`;
  let resultOutput = output;

  fs.readFile(initialPath, 'utf-8', (error, fileData) => {
    if (error) {
      console.log(error);
      return;
    }

    if (!output.includes('.')) {
      resultOutput = `${output}/${input}`;
    }

    console.log(output)

    fs.writeFile(`src/${resultOutput}`, fileData, (error) => {
      if (error) {
        console.log(error);
        return;
      }
    });
  });
}

copyFile('1.txt');
