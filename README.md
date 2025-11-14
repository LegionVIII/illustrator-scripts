# Illustrator Sign Shop Automation Scripts

Batch import and layout tools for Adobe Illustrator. Built for sign shops working with data-merged signs.

## What's Included

- **file_merger_claude.jsx** - Imports multiple .ai files and arranges them in a grid
- **MergeData.aia** - Illustrator Action for batch exporting data sets
- **Screenshots/** - Visual guides showing each step:
  - `screenshot_variables_panel.png` - Where to import CSV
  - `screenshot_data_mapping_example.png` - How to map data to text fields
  - `screenshot_actions_batch.png` - Batch action settings

---

## Complete Workflow

### 1. Create Your CSV File

Your CSV file is the master data source. Example structure:
```csv
RoomNumber,RoomName,SignType
101,OFFICE,A
102,CONFERENCE,B
103,RESTROOM,C
```

**CRITICAL CSV RULES:**

**❌ NO SPACES in header names!**
- ✅ `RoomNumber` - WORKS
- ❌ `Room Number` - FAILS (will throw error in Illustrator)
- ✅ `SignType` - WORKS  
- ❌ `Sign Type` - FAILS

**❌ DON'T use Excel, Numbers, or Google Sheets to save!**
- These apps add extra encoding (UTF-8 BOM, etc.)
- Illustrator is MUCH stricter than other data merge programs
- That extra encoding will cause errors when loading into Illustrator

**✅ USE VS CODE to save your CSV:**
1. Create your CSV in Excel/Numbers/Sheets if you want
2. Copy the data
3. Open VS Code
4. Paste into a new file
5. Save as `yourfile.csv`
6. This strips out all the extra encoding junk

**Result:** Clean CSV that Illustrator actually accepts.

**Why this matters:** Illustrator's Variables feature is pickier than most data merge systems. Following these rules = no headaches.

### 2. Set Up Variables in Illustrator

**Import Your CSV:**
1. Create your sign template in Illustrator
2. **Open Variables panel:** Window → Variables
3. Click the **"Import"** button (see `screenshot_variables_panel.png`)
4. Browse to and select your CSV file

**Map Your Data to Text:**
1. **Select a text field** in your design
2. In the Variables panel, **select the matching variable name** (e.g., "RoomNumber")
3. Click the **"Make text dynamic"** icon at the bottom of the panel (circled in `screenshot_data_mapping_example.png`)
4. The text field now appears in your Variables panel - it's linked!
5. Repeat for all text fields you want to populate
<img width="806" height="601" alt="screenshot_data_mapping_example" src="https://github.com/user-attachments/assets/15acac07-edaf-4ac0-bdd0-241a36780e7b" />

**CRITICAL - Before Running Batch:**
1. In the Variables panel, click the **"Data Set"** dropdown at the top
2. **Select "Data Set 1"** - this is essential!
3. If you don't do this, the batch action will fail or create one single file instead of individual files

### 3. Run the Batch Action

**Load the Action:**
1. Window → Actions
2. Click menu (☰) → Load Actions
3. Select `MergeData.aia` from this repository

**Run the Batch:**
1. In the Actions panel, **select your action** (MergeData)
2. Click the menu icon (☰) and scroll down to **"Batch...<img width="406" height="555" alt="screenshot_actions_batch" src="https://github.com/user-attachments/assets/8083dc76-72b1-4508-bc2e-6b62f168730a" />

3. **Use these settings:**
   - **Set:** MergeData
   - **Action:** MakeBatch
   - **Source:** Data Sets
   - **Destination:** Choose... → **Browse to where you want files SAVED**
   - **☑ Override Action "Save" Commands**
   - **File Name:** File + Number
   - **Errors:** Stop for Errors
   - For the file name, you want to choose the first one, file + Number. This automatically adds the numbers needed for the script to keep files in order.
4. Click **OK**
<img width="498" height="615" alt="Screenshot 2025-11-14 at 5 07 26 AM" src="https://github.com/user-attachments/assets/a5edefad-a508-4d02-a6f3-037472ad3b9e" />

**What happens:** Illustrator will cycle through all your data sets and export each one as a separate .ai file to your chosen folder, in sequential order matching your CSV.

### 4. Layout the Signs

**CRITICAL FIRST STEP:**
1. Create New Document in Illustrator
2. **Set Artboard to 225" × 225"**
   - This ensures signs don't fall off the canvas
   - You can resize artboards later

**Run the Script:**
1. File → Scripts → Other Script...
2. Select `file_merger_claude.jsx`
3. **Enter settings:**
   - Sign Width/Height (inches)
   - Columns across / Rows down
   - Spacing between signs
   - Start file number (leave blank for first batch)
4. Select folder with your exported .ai files
5. Script places them in a perfect grid, starting at top-left

**For large batches:** Script automatically creates multiple documents as needed.

---

## Quick Tips
- 
**File Naming:**
- Script sorts alphabetically
- Use leading zeros: `Sign001.ai` not `Sign1.ai`
- **Tip:** The batch action (with our settings) adds leading zeros automatically - no manual renaming needed!

**Common Layouts:**
- 64 signs = 8 columns × 8 rows
- 60 signs = 6 columns × 10 rows

**Why 225" Artboard?**
- Prevents signs from falling off canvas
- Script uses it to find the top-left corner
- Resize later if needed

**Making Changes:**
- Update your CSV file
- Re-run the batch action
- Re-run the layout script
- Faster than manual edits!

---

## Troubleshooting

**Script doesn't start at top-left?**
→ Check artboard is 225" × 225"

**Files in wrong order?**
→ Use leading zeros in filenames (001 not 1)

**Signs overlapping?**
→ Increase spacing in dialog

**Action won't export?**
→ Make sure Variables are set up first
→ Make sure you selected "Data Set 1" before running batch

**CSV won't load?**
→ Check for spaces in header names
→ Re-save using VS Code to strip encoding

---

## For Sign Shops

**Client Proofs:**
- Export the whole artboard as PDF
- Shows all signs at once with measurements

**Production:**
- Files go straight to router/printer/laser
- Already sized and positioned

**Revisions:**
- Update CSV → Re-export → Re-layout
- Way faster than manual edits

---

**Built for sign shops who are tired of doing this shit manually.**
