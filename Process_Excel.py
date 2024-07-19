import openpyxl

# Load the existing Excel file
wb = openpyxl.load_workbook('path/to/your/excel_file.xlsx')

# Example: modify the Excel file
sheet = wb.active
sheet['A1'] = 'Updated by GitHub Action'

# Save the changes
wb.save('path/to/your/excel_file.xlsx')
