// Script to Import and Layout Multiple AI Files Across Multiple Documents
// Creates new 225" x 225" documents automatically as needed

#target illustrator

function main() {
    // Create dialog box to get user input
    var dialog = new Window("dialog", "Import and Layout Settings - Multiple Documents");
    
    dialog.add("statictext", undefined, "Sign Width (inches):");
    var widthInput = dialog.add("edittext", undefined, "24");
    widthInput.characters = 10;
    
    dialog.add("statictext", undefined, "Sign Height (inches):");
    var heightInput = dialog.add("edittext", undefined, "24");
    heightInput.characters = 10;
    
    dialog.add("statictext", undefined, "Number of Columns Across:");
    var colsInput = dialog.add("edittext", undefined, "8");
    colsInput.characters = 10;
    
    dialog.add("statictext", undefined, "Number of Rows Down:");
    var rowsInput = dialog.add("edittext", undefined, "8");
    rowsInput.characters = 10;
    
    dialog.add("statictext", undefined, "Horizontal Spacing (inches):");
    var hSpacingInput = dialog.add("edittext", undefined, "0.5");
    hSpacingInput.characters = 10;
    
    dialog.add("statictext", undefined, "Vertical Spacing (inches):");
    var vSpacingInput = dialog.add("edittext", undefined, "0.5");
    vSpacingInput.characters = 10;
    
    dialog.add("statictext", undefined, "Start at file number (leave blank for first file):");
    var startNumInput = dialog.add("edittext", undefined, "");
    startNumInput.characters = 10;
    
    var buttonGroup = dialog.add("group");
    buttonGroup.add("button", undefined, "OK", {name: "ok"});
    buttonGroup.add("button", undefined, "Cancel", {name: "cancel"});
    
    if (dialog.show() === 1) {
        // Get all the user settings
        var signWidth = parseFloat(widthInput.text) * 72; // Convert inches to points
        var signHeight = parseFloat(heightInput.text) * 72;
        var numCols = parseInt(colsInput.text);
        var numRows = parseInt(rowsInput.text);
        var hSpacing = parseFloat(hSpacingInput.text) * 72;
        var vSpacing = parseFloat(vSpacingInput.text) * 72;
        
        var startFileNum = 0;
        if (startNumInput.text !== "") {
            startFileNum = parseInt(startNumInput.text) - 1;
        }
        
        // Calculate how many files per document
        var filesPerDoc = numRows * numCols;
        
        // Ask for the folder with all the files
        var sourceFolder = Folder.selectDialog("Select folder containing your .ai files");
        
        if (sourceFolder !== null) {
            // Get all .ai files from the folder
            var aiFiles = sourceFolder.getFiles("*.ai");
            
            if (aiFiles.length === 0) {
                alert("No .ai files found in the selected folder.");
                return;
            }
            
            // Sort files by name to maintain order
            aiFiles.sort(function(a, b) {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
            });
            
            // Calculate total documents needed
            var totalFilesToProcess = aiFiles.length - startFileNum;
            var totalDocsNeeded = Math.ceil(totalFilesToProcess / filesPerDoc);
            
            // Confirm with user
            var confirmMsg = "This will create " + totalDocsNeeded + " document(s) with " + 
                           filesPerDoc + " files each.\n" +
                           "Total files to process: " + totalFilesToProcess + "\n\n" +
                           "Continue?";
            
            if (!confirm(confirmMsg)) {
                return;
            }
            
            // Process all files across multiple documents
            var currentFileIndex = startFileNum;
            var docCounter = 1;
            var totalPlaced = 0;
            
            while (currentFileIndex < aiFiles.length) {
                // Create new document with 225" x 225" artboard
                var newDoc = app.documents.add(
                    DocumentColorSpace.CMYK,
                    225 * 72, // width in points (225 inches)
                    225 * 72  // height in points (225 inches)
                );
                
                // Get the artboard's top-left corner as starting point
                var artboard = newDoc.artboards[0];
                var artboardRect = artboard.artboardRect;
                var startX = artboardRect[0];  // Left edge
                var startY = artboardRect[1];  // Top edge
                
                // Place files in grid on this document
                var currentCol = 0;
                var currentRow = 0;
                var filesPlacedThisDoc = 0;
                
                // Place up to filesPerDoc files on this document
                while (currentFileIndex < aiFiles.length && filesPlacedThisDoc < filesPerDoc) {
                    // Calculate position
                    var xPos = startX + (currentCol * (signWidth + hSpacing));
                    var yPos = startY - (currentRow * (signHeight + vSpacing));
                    
                    // Place the file
                    var placedItem = newDoc.placedItems.add();
                    placedItem.file = aiFiles[currentFileIndex];
                    
                    placedItem.left = xPos;
                    placedItem.top = yPos;
                    placedItem.width = signWidth;
                    placedItem.height = signHeight;
                    
                    // Move to next position
                    currentCol++;
                    if (currentCol >= numCols) {
                        currentCol = 0;
                        currentRow++;
                    }
                    
                    currentFileIndex++;
                    filesPlacedThisDoc++;
                    totalPlaced++;
                }
                
                docCounter++;
            }
            
            alert("Complete!\n\n" +
                  "Created " + (docCounter - 1) + " document(s)\n" +
                  "Placed " + totalPlaced + " files total\n\n" +
                  "Remember to save each document manually!");
            
        } else {
            alert("No folder selected. Operation cancelled.");
        }
    }
}

// Run the script
main();