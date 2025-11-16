// Auto-generated JSX Script to Create Sign Template Files
// Generated from sign schedule Excel file

#target illustrator

function main() {
    // Ask user where to save the template files
    var outputFolder = Folder.selectDialog("Select folder to save sign template files");
    
    if (outputFolder === null) {
        alert("No folder selected. Operation cancelled.");
        return;
    }
    
    var createdFiles = [];
    

    // ========================================
    // Create Template for Sign Type A
    // ========================================
    try {
        // Create new document - 8.0" x 9.5"
        var docA = app.documents.add(
            DocumentColorSpace.CMYK,
            8.0 * 72,  // width in points
            9.5 * 72   // height in points
        );
        
        docA.rulerOrigin = [0, 0];
        
        // Create layers with proper naming for Variables
        var bgLayer = docA.layers.add();
        bgLayer.name = "Background";
        
        var contentLayer = docA.layers.add();
        contentLayer.name = "Content";
        
        var textLayer = docA.layers.add();
        textLayer.name = "Variable Text";
        
        // Set text layer as active
        docA.activeLayer = textLayer;
        
        // Create background rectangle (sign outline)
        docA.activeLayer = bgLayer;
        var bgRect = docA.pathItems.rectangle(
            9.5 * 72,      // top
            0,                  // left
            8.0 * 72,      // width
            9.5 * 72       // height
        );
        bgRect.filled = true;
        bgRect.fillColor = createCMYKColor(0, 0, 0, 10); // Light gray
        bgRect.stroked = true;
        bgRect.strokeColor = createCMYKColor(0, 0, 0, 100); // Black stroke
        bgRect.strokeWidth = 1;
        bgRect.name = "SignOutline";
        
        // Create placeholder text for Room Number
        docA.activeLayer = textLayer;
        var roomNumText = docA.textFrames.add();
        roomNumText.contents = "###";  // Placeholder for room number
        roomNumText.textRange.characterAttributes.size = 48;
        roomNumText.textRange.characterAttributes.fillColor = createCMYKColor(0, 0, 0, 100);
        roomNumText.textRange.paragraphAttributes.justification = Justification.CENTER;
        roomNumText.name = "RoomNumber";
        
        // Position room number at top center
        roomNumText.top = (9.5 * 72) - 36;
        roomNumText.left = ((8.0 * 72) - roomNumText.width) / 2;
        
        // Create placeholder text for Room Name
        var roomNameText = docA.textFrames.add();
        roomNameText.contents = "ROOM NAME";  // Placeholder for room name
        roomNameText.textRange.characterAttributes.size = 24;
        roomNameText.textRange.characterAttributes.fillColor = createCMYKColor(0, 0, 0, 100);
        roomNameText.textRange.paragraphAttributes.justification = Justification.CENTER;
        roomNameText.name = "RoomName";
        
        // Position room name at center
        roomNameText.top = (9.5 * 72) / 2;
        roomNameText.left = ((8.0 * 72) - roomNameText.width) / 2;
        
        // Add a guide note layer
        var noteLayer = docA.layers.add();
        noteLayer.name = "Notes (Delete Before Production)";
        docA.activeLayer = noteLayer;
        
        var noteText = docA.textFrames.add();
        noteText.contents = "Type A Template - 8.0\" x 9.5\"\n\nVariable Layers:\n- RoomNumber\n- RoomName\n\nDelete this notes layer before production.";
        noteText.textRange.characterAttributes.size = 10;
        noteText.textRange.characterAttributes.fillColor = createCMYKColor(100, 0, 100, 0); // Magenta
        noteText.name = "TemplateNotes";
        noteText.top = 20;
        noteText.left = 10;
        
        // Save the file
        var saveFile = new File(outputFolder + "/SignType_A_Template.ai");
        docA.saveAs(saveFile);
        docA.close();
        
        createdFiles.push("SignType_A_Template.ai");
        
    } catch (e) {
        alert("Error creating Type A template: " + e);
    }

    // ========================================
    // Create Template for Sign Type B
    // ========================================
    try {
        // Create new document - 8.0" x 9.5"
        var docB = app.documents.add(
            DocumentColorSpace.CMYK,
            8.0 * 72,  // width in points
            9.5 * 72   // height in points
        );
        
        docB.rulerOrigin = [0, 0];
        
        // Create layers with proper naming for Variables
        var bgLayer = docB.layers.add();
        bgLayer.name = "Background";
        
        var contentLayer = docB.layers.add();
        contentLayer.name = "Content";
        
        var textLayer = docB.layers.add();
        textLayer.name = "Variable Text";
        
        // Set text layer as active
        docB.activeLayer = textLayer;
        
        // Create background rectangle (sign outline)
        docB.activeLayer = bgLayer;
        var bgRect = docB.pathItems.rectangle(
            9.5 * 72,      // top
            0,                  // left
            8.0 * 72,      // width
            9.5 * 72       // height
        );
        bgRect.filled = true;
        bgRect.fillColor = createCMYKColor(0, 0, 0, 10); // Light gray
        bgRect.stroked = true;
        bgRect.strokeColor = createCMYKColor(0, 0, 0, 100); // Black stroke
        bgRect.strokeWidth = 1;
        bgRect.name = "SignOutline";
        
        // Create placeholder text for Room Number
        docB.activeLayer = textLayer;
        var roomNumText = docB.textFrames.add();
        roomNumText.contents = "###";  // Placeholder for room number
        roomNumText.textRange.characterAttributes.size = 48;
        roomNumText.textRange.characterAttributes.fillColor = createCMYKColor(0, 0, 0, 100);
        roomNumText.textRange.paragraphAttributes.justification = Justification.CENTER;
        roomNumText.name = "RoomNumber";
        
        // Position room number at top center
        roomNumText.top = (9.5 * 72) - 36;
        roomNumText.left = ((8.0 * 72) - roomNumText.width) / 2;
        
        // Create placeholder text for Room Name
        var roomNameText = docB.textFrames.add();
        roomNameText.contents = "ROOM NAME";  // Placeholder for room name
        roomNameText.textRange.characterAttributes.size = 24;
        roomNameText.textRange.characterAttributes.fillColor = createCMYKColor(0, 0, 0, 100);
        roomNameText.textRange.paragraphAttributes.justification = Justification.CENTER;
        roomNameText.name = "RoomName";
        
        // Position room name at center
        roomNameText.top = (9.5 * 72) / 2;
        roomNameText.left = ((8.0 * 72) - roomNameText.width) / 2;
        
        // Add a guide note layer
        var noteLayer = docB.layers.add();
        noteLayer.name = "Notes (Delete Before Production)";
        docB.activeLayer = noteLayer;
        
        var noteText = docB.textFrames.add();
        noteText.contents = "Type B Template - 8.0\" x 9.5\"\n\nVariable Layers:\n- RoomNumber\n- RoomName\n\nDelete this notes layer before production.";
        noteText.textRange.characterAttributes.size = 10;
        noteText.textRange.characterAttributes.fillColor = createCMYKColor(100, 0, 100, 0); // Magenta
        noteText.name = "TemplateNotes";
        noteText.top = 20;
        noteText.left = 10;
        
        // Save the file
        var saveFile = new File(outputFolder + "/SignType_B_Template.ai");
        docB.saveAs(saveFile);
        docB.close();
        
        createdFiles.push("SignType_B_Template.ai");
        
    } catch (e) {
        alert("Error creating Type B template: " + e);
    }

    // ========================================
    // Create Template for Sign Type C
    // ========================================
    try {
        // Create new document - 8.0" x 9.5"
        var docC = app.documents.add(
            DocumentColorSpace.CMYK,
            8.0 * 72,  // width in points
            9.5 * 72   // height in points
        );
        
        docC.rulerOrigin = [0, 0];
        
        // Create layers with proper naming for Variables
        var bgLayer = docC.layers.add();
        bgLayer.name = "Background";
        
        var contentLayer = docC.layers.add();
        contentLayer.name = "Content";
        
        var textLayer = docC.layers.add();
        textLayer.name = "Variable Text";
        
        // Set text layer as active
        docC.activeLayer = textLayer;
        
        // Create background rectangle (sign outline)
        docC.activeLayer = bgLayer;
        var bgRect = docC.pathItems.rectangle(
            9.5 * 72,      // top
            0,                  // left
            8.0 * 72,      // width
            9.5 * 72       // height
        );
        bgRect.filled = true;
        bgRect.fillColor = createCMYKColor(0, 0, 0, 10); // Light gray
        bgRect.stroked = true;
        bgRect.strokeColor = createCMYKColor(0, 0, 0, 100); // Black stroke
        bgRect.strokeWidth = 1;
        bgRect.name = "SignOutline";
        
        // Create placeholder text for Room Number
        docC.activeLayer = textLayer;
        var roomNumText = docC.textFrames.add();
        roomNumText.contents = "###";  // Placeholder for room number
        roomNumText.textRange.characterAttributes.size = 48;
        roomNumText.textRange.characterAttributes.fillColor = createCMYKColor(0, 0, 0, 100);
        roomNumText.textRange.paragraphAttributes.justification = Justification.CENTER;
        roomNumText.name = "RoomNumber";
        
        // Position room number at top center
        roomNumText.top = (9.5 * 72) - 36;
        roomNumText.left = ((8.0 * 72) - roomNumText.width) / 2;
        
        // Create placeholder text for Room Name
        var roomNameText = docC.textFrames.add();
        roomNameText.contents = "ROOM NAME";  // Placeholder for room name
        roomNameText.textRange.characterAttributes.size = 24;
        roomNameText.textRange.characterAttributes.fillColor = createCMYKColor(0, 0, 0, 100);
        roomNameText.textRange.paragraphAttributes.justification = Justification.CENTER;
        roomNameText.name = "RoomName";
        
        // Position room name at center
        roomNameText.top = (9.5 * 72) / 2;
        roomNameText.left = ((8.0 * 72) - roomNameText.width) / 2;
        
        // Add a guide note layer
        var noteLayer = docC.layers.add();
        noteLayer.name = "Notes (Delete Before Production)";
        docC.activeLayer = noteLayer;
        
        var noteText = docC.textFrames.add();
        noteText.contents = "Type C Template - 8.0\" x 9.5\"\n\nVariable Layers:\n- RoomNumber\n- RoomName\n\nDelete this notes layer before production.";
        noteText.textRange.characterAttributes.size = 10;
        noteText.textRange.characterAttributes.fillColor = createCMYKColor(100, 0, 100, 0); // Magenta
        noteText.name = "TemplateNotes";
        noteText.top = 20;
        noteText.left = 10;
        
        // Save the file
        var saveFile = new File(outputFolder + "/SignType_C_Template.ai");
        docC.saveAs(saveFile);
        docC.close();
        
        createdFiles.push("SignType_C_Template.ai");
        
    } catch (e) {
        alert("Error creating Type C template: " + e);
    }

    // Show completion message
    if (createdFiles.length > 0) {
        alert("Template files created successfully!\n\n" + 
              "Files created: " + createdFiles.length + "\n\n" +
              createdFiles.join("\n") + "\n\n" +
              "Location: " + outputFolder.fsName);
    } else {
        alert("No template files were created.");
    }
}

// Helper function to create CMYK color
function createCMYKColor(c, m, y, k) {
    var color = new CMYKColor();
    color.cyan = c;
    color.magenta = m;
    color.yellow = y;
    color.black = k;
    return color;
}

// Run the script
main();
