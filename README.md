
# React Invoices App
**Status: In Progress**

Project designed to simplify the process of generating and emailing invoices. Web application developed with React, implements a responsive design using NextUI components, styled with Tailwind CSS and integrates a custom API. This is a migration for a previous Django project [source code](https://github.com/aalexmrt/django-invoices-generator/) to implement good practices and better user experience.

## Project Features
**Invoice Generation:** Create professional invoices effortlessly.
**Email Integration:** Send invoices via email directly from the application.
**User-Friendly Interface:** Intuitive design based on NextUI for a smooth user experience.
**Custom API Connectivity:** Connects to a custom API to extend functionality.
**Migration from Django:** This project is a migration from a previous Django-based system, enabling the implementation of best practices and improved user interactions.

## Installation
Clone the repository:
`git clone git@github.com:aalexmrt/react-invoices-app.git`

Install dependencies: 
`npm install`

Start the development server: `npm run dev`

## How to Contribute
Community contributions are encouraged! To contribute to the React Invoices App, follow these steps:

## Fork the repository
Create a new branch: git checkout -b feature/your-feature-name
Commit your changes: git commit -m 'Add your feature'
Push to the branch: git push origin feature/your-feature-name
Submit a pull request

## On going tasks

- [X] Create invoices table component
- [X] Develop a form for generating new invoices
- [X] Integrate with the API to save invoices
- [X] Implement the ability to delete invoices
- [X] Establish a relation between customers and invoices 
- [X] Resolve issues related to editing and creating invoices on the same component
- [X] Add real-time calculation for invoice totals
- [ ] Address the default selected option issue on the invoice form
- [ ] Resolve problems with updating edited invoices in the state; ensure proper rendering on the list
- [ ] Implement proper redirection; ensure new invoices appear instantly on the table

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
