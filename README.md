# ECommerce13
# Employee Tracker

## Description
Employee Tracker is a command-line application built with Node.js, Express.js, MySQL, and Inquirer. It allows business owners to view and manage departments, roles, and employees in their company. This application provides a user-friendly interface for organizing and planning business operations.

## Features
- View all departments: Displays a formatted table showing department names and IDs.
- View all roles: Presents job titles, role IDs, associated departments, and salaries in a formatted table.
- View all employees: Shows employee data including IDs, first names, last names, job titles, departments, salaries, and managers in a formatted table.
- Add a department: Prompts the user to enter the name of a new department, which is then added to the database.
- Add a role: Asks for the name, salary, and department of a new role, which is then added to the database.
- Add an employee: Collects the first name, last name, role, and manager of a new employee, and adds them to the database.
- Update an employee role: Allows the user to select an employee to update and their new role, updating the information in the database.

## Installation
1. Clone the repository: `git clone https://github.com/jmartincampos/ECommerce13.git'
2. Navigate to the project directory: `cd employee-tracker`
3. Install dependencies: `npm install`
4. Set up MySQL database:
   - Create a database named `employee_tracker`.
   - Execute the schema and seed files to create and populate tables.
5. Update `.env` file with your MySQL credentials.
6. Start the application: `npm start`

## Usage
1. Run the application: `npm start`
2. Follow the on-screen prompts to navigate and interact with the application.
3. Use the arrow keys, Enter key, and keyboard input to select options and enter data as prompted.
4. View, add, update, or delete departments, roles, and employees as needed.

## Technologies Used
- Node.js
- Express.js
- MySQL
- Inquirer

## Contributing
Contributions are welcome! Please submit any bug fixes or feature enhancements as pull requests.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
