1. Working Prototype:
A working Angular-based drag-and-drop website builder that allows users to:

Drag UI elements (text, image, button, etc.)

Drop them into a layout area

Adjust their properties via a form panel

Export the final structure for deployment or saving

You can access the application using this website link: https://chandana147.github.io/InstaWeb/

📝 2. Brief Documentation
📌 Project Overview
This project is a drag-and-drop website builder built with Angular. The purpose is to transform a traditional form-based UI into an intuitive drag-and-drop interface,
allowing users to visually design a web layout and configure each component's properties (like text, image source, size, etc.).

🧰 Tools and Packages Used
Tool/Package	Purpose
Angular 16+	Frontend framework
@angular/cdk/drag-drop	Provides drag-and-drop functionality
angular-cli-ghpages	For deploying the Angular app to GitHub Pages
GitHub Pages	Hosting the deployed site
Git	Version control and deployment
VS Code	Code editor
Node.js + npm	JS runtime and package management

⚙️ Core Functionality
🔹 Drag-and-Drop
Implemented using @angular/cdk/drag-drop

Allows users to drag UI elements (like text, image, button) into the builder canvas

Each dropped element is dynamically rendered and can be selected

🔹 Property Editor Panel
When an element is selected, a property panel opens

Users can customize text content, image URLs, font size, colors, etc.

Changes reflect immediately in the UI

🔹 Exporting
The app structure is saved in a structured format (likely as a JSON or HTML-like export)

Prepares for either saving, deploying, or converting to actual HTML templates

💡 Rationale Behind the Approach
Requirement	              Approach & Why
Visual builder	          Used Angular + CDK drag-drop for responsive UI handling
Customization panel	      Property binding with Angular makes real-time updates simple and clean
Deployment	              Used GitHub Pages for free, static hosting with simple angular-cli-ghpages
Version control	          Git + GitHub ensures easy collaboration and tracking

Steps to Run the Project Locally
Follow the steps below to set up and run the project on your local machine:

✅ Prerequisites
Make sure the following are installed on your system:

Node.js (v16+ recommended)
Angular CLI (v15+ recommended)
Git

Step 1: 
Create an angular project and Clone the Project Repository
git clone https://github.com/Chandana147/InstaWeb.git
Step 2: Navigate to the Project Folder
cd InstaWeb
Step 3: Install Dependencies
npm install 
Step 4: Run the Angular Project
ng serve

After compilation, the app will be available at: http://localhost:4200
Now you can see the application live in your local system.

# DragDropWebsiteBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
