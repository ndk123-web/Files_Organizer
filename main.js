const fs = require("fs");
const path = require("path");

// to store EXT folder to check whether it's created or not
const myArr = [];

allFilesPath = "AllFiles"

// main function for Organizing Files
// await always works with a promise that resolves with res() or rejects with rej()
const OrganizeFiles = async () => {
  try {
    // fs.promises.readdir returns a promise, so we await it
    const files = await fs.promises.readdir(path.join(__dirname, allFilesPath));
    
    // Loop over each file in the directory
    for (const file of files) {
      let ext = path.extname(file).toUpperCase().substring(1); // Get the file extension

      // If the folder for the extension already exists, move the file there
      if (myArr.includes(ext)) {
        await moveFile(file, ext);
      } else {
        // If not, create a folder and move the file there
        await createAndMoveFile(file, ext);
      }
    }
  } catch (err) {
    console.log("Error: ", err); // Catch any errors during file processing
  }
};

// to move file if folder already there
const moveFile = (file, ext) => {
  return new Promise((res, rej) => {
    fs.rename(
      path.join(__dirname, allFilesPath, file), // Current file path
      path.join(__dirname, ext, file), // New path for the file (based on extension folder)
      (err) => {
        if (err) {
          rej("There is Error: ", err); // Reject the promise if there is an error
        } else {
          res("Successfully Moved !"); // Resolve the promise if file is successfully moved
        }
      }
    );
  });
};

// create folder and move the file inside the new location (extension folder)
const createAndMoveFile = (file, ext) => {
  return new Promise((res, rej) => {
    fs.mkdir(ext, (err) => {
      if (err) {
        rej("Error: ", err); // Reject if there is an error creating the folder
      } else {
        // Move the file after creating the folder
        fs.rename(
          path.join(__dirname, allFilesPath, file),
          path.join(__dirname, ext, file),
          (err) => {
            if (err) {
              rej("Error in Moving"); // Reject if there is an error moving the file
            } else {
              res("Successfully Moved"); // Resolve once the file is successfully moved
              myArr.push(ext); // Add the new folder extension to the list
            }
          }
        );
      }
    });
  });
};

// Call the OrganizeFiles function, passing the folder name where all files are stored
OrganizeFiles();
