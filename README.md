# Files Organizer

## Overview
This Node.js project automatically organizes files into folders based on their extensions. It scans the `AllFiles` directory, detects file types, and moves them into respective extension-based folders.

## Features
- Automatically detects file extensions.
- Creates new folders for extensions if they don't exist.
- Moves files into the respective extension folders.
- Uses `fs.promises` for asynchronous file operations.

## Project Structure
```
ProjectModules/
│-- main.js
│-- AllFiles/  (This is where unorganized files should be placed)
│-- .gitignore
│-- README.md
```

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ndk123-web/Files_Organizer.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Files_Organizer
   ```
3. **Install Node.js (if not installed):**
   Download from [Node.js official site](https://nodejs.org/)

4. **Run the script:**
   ```bash
   node main.js
   ```

## How It Works
1. The script reads the `AllFiles` directory to find unorganized files.
2. It extracts the file extensions and checks if a folder for that extension exists.
3. If the folder exists, it moves the file inside.
4. If the folder does not exist, it creates one and then moves the file inside.

## Code Explanation
### `OrganizeFiles()`
- Reads all files from `AllFiles`.
- Calls `moveFile()` if the extension folder already exists.
- Calls `createAndMoveFile()` if the folder needs to be created.

### `moveFile(file, ext)`
- Moves the file to the existing extension folder.

### `createAndMoveFile(file, ext)`
- Creates a new folder for the file extension.
- Moves the file to the newly created folder.
- Stores the extension name to avoid redundant folder creation.

## Example Usage
If `AllFiles` contains:
```
document.pdf
image.png
music.mp3
script.js
```
After running `node main.js`, the structure will be:
```
Files_Organizer/
│-- main.js
│-- README.md
│-- PDF/
│   └── document.pdf
│-- PNG/
│   └── image.png
│-- MP3/
│   └── music.mp3
│-- JS/
│   └── script.js
```

## Notes
- Ensure that the `AllFiles` directory exists before running the script.
- This script does not handle nested directories.

## Contributions
Feel free to fork this project and submit pull requests!

