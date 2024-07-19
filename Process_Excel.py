import openpyxl

# Load the existing Excel file
wb = openpyxl.load_workbook('excel_file.xlsx')

# Example: modify the Excel file
sheet = wb.active
sheet['A1'] = 'Updated by GitHub Action'

# Save the changes
wb.save('excel_file.xlsx')
