# Sign Shop Automated Workflow

This repository contains scripts to automate the sign production workflow for large-scale projects.

## Overview

The workflow consists of three main steps:

1. **Generate Template Files** - Create base Illustrator templates for each sign type from an Excel schedule
2. **Customize Templates** - Manually add design details, materials, braille, etc., and set up Variables
3. **Batch Layout** - Use the existing layout script to arrange multiple signs on large format print sheets

## Scripts in This Repository

### 1. `generate_sign_templates.py`

**Purpose:** Reads an Excel sign schedule and generates a JSX script to create Illustrator template files.

**Requirements:**
- Python 3
- openpyxl library (`pip3 install openpyxl`)

**Usage:**
```bash
python3 generate_sign_templates.py
```

**What it does:**
- Reads the sign schedule Excel file
- Identifies unique sign types (A, B, C, E, etc.)
- Generates a JSX script (`create_sign_templates.jsx`) with code to create template files

**Sign Type Dimensions:**
- Type A: 8.0" × 9.5"
- Type B: 8.0" × 9.5"
- Type C: 8.0" × 9.5"
- Type E: 10.0" × 8.0"

### 2. `create_sign_templates.jsx`

**Purpose:** Creates actual Illustrator (.ai) template files for each sign type.

**Usage:**
1. Open Adobe Illustrator
2. Go to: **File → Scripts → Other Script...**
3. Select: `create_sign_templates.jsx`
4. Choose output folder when prompted
5. Template files will be created automatically

**Each template includes:**
- Correct artboard dimensions for the sign type
- **Background layer** - Sign outline and base graphics
- **Content layer** - Additional design elements (empty)
- **Variable Text layer** - Placeholder text objects:
  - `RoomNumber` - Named text frame for room numbers
  - `RoomName` - Named text frame for room names
- **Notes layer** - Instructions (delete before production)

### 3. `file_merger_claude.jsx`

**Purpose:** Arranges multiple sign files in a grid layout across large format documents (225" × 225").

**Usage:**
1. Open Adobe Illustrator
2. Go to: **File → Scripts → Other Script...**
3. Select: `file_merger_claude.jsx`
4. Enter layout parameters:
   - Sign dimensions
   - Number of columns/rows
   - Spacing between signs
   - Starting file number (optional)
5. Select folder containing your completed .ai sign files
6. Script creates multiple documents with signs arranged in grids

**Features:**
- Automatically creates multiple documents as needed
- Places signs in precise grid layouts
- Maintains sign dimensions
- Customizable spacing

## Complete Workflow

### Step 1: Generate Templates

```bash
# Run the Python script to generate JSX
python3 generate_sign_templates.py

# This creates: create_sign_templates.jsx
```

### Step 2: Create Template Files

1. Open Illustrator
2. Run `create_sign_templates.jsx` (File → Scripts → Other Script...)
3. Choose save location
4. Result: `SignType_A_Template.ai`, `SignType_B_Template.ai`, etc.

### Step 3: Customize Each Template

For each template file:
1. Open the template in Illustrator
2. Add design elements (graphics, colors, braille, materials, etc.)
3. Ensure text layers `RoomNumber` and `RoomName` are preserved
4. Delete the "Notes" layer
5. Set up Variables:
   - Window → Variables
   - Bind `RoomNumber` text frame to a variable
   - Bind `RoomName` text frame to a variable
6. Save the template

### Step 4: Generate All Sign Variations

Use Illustrator's built-in Variables feature:
1. Prepare a CSV with all room numbers and names from the schedule
2. File → Variables → Data Sets...
3. Import CSV
4. Batch process to create individual .ai files for each sign

### Step 5: Layout for Printing

1. Open Illustrator
2. Run `file_merger_claude.jsx`
3. Enter layout specifications
4. Select folder with completed sign files
5. Script creates large format documents with signs arranged for printing

## File Structure

```
illustrator-scripts-1/
├── generate_sign_templates.py      # Python script (Step 1)
├── create_sign_templates.jsx       # Auto-generated JSX (Step 2)
├── file_merger_claude.jsx          # Layout script (Step 5)
├── SIGN_WORKFLOW_README.md         # This file
└── README.md                       # General readme
```

## Excel Schedule Format

The Python script expects an Excel file with an "ADA Schedule" sheet containing:
- Column E: SIGN TYPE (A, B, C, E, etc.)
- Additional columns for sign messages, room numbers, etc.

Example path:
```
/Users/sadmin/Documents/2025 EBCO projects/Rockdale ISD Rockdale Career Academy/
Project Management - Rockdale CA/Sign Schedule - Rockdale Career Academy.xlsx
```

## Tips and Best Practices

### Template Customization
- Keep the "Variable Text" layer for dynamic content
- Use "Background" layer for static elements
- Use "Content" layer for design elements that vary by type
- Name all text frames that need variables

### Variables Setup
- Use consistent naming: `RoomNumber`, `RoomName`, etc.
- Test with a small CSV first
- Export all variations to a dedicated folder

### Batch Layout
- Organize sign files by type or project
- Use consistent naming for sorting
- Test layout parameters with a few files first
- Remember to save each generated document manually

## Troubleshooting

### Python script errors
- **"No module named 'openpyxl'"**: Run `pip3 install openpyxl`
- **Excel file not found**: Verify the path in the Python script

### JSX script errors
- **No Illustrator**: Ensure Adobe Illustrator is installed
- **Permission errors**: Check folder write permissions
- **Empty folder**: Verify Excel file has data in "ADA Schedule" sheet

### Layout script issues
- **Files not placing**: Ensure .ai files are in the selected folder
- **Wrong dimensions**: Double-check input parameters
- **Memory issues**: Process fewer files per document

## Future Enhancements

Potential additions to the workflow:
- Auto-generate CSV from Excel schedule
- Batch export PDFs for each sign type
- Automatic barcode/QR code generation
- Integration with print vendor specifications

## Notes

- The Excel schedule is project-specific (Rockdale Career Academy example)
- Modify `SIGN_DIMENSIONS` in Python script for different projects
- All dimensions are in inches (converted to points for Illustrator)
- Scripts use CMYK color space for print production

## Support

For issues or questions:
1. Check this README
2. Review script comments
3. Test with sample data first
4. Verify Illustrator version compatibility
