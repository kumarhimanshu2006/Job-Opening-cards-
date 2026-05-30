# Job Cards UI using React

A simple React project that displays multiple job opening cards from MNC companies using reusable components, props, and object arrays.

## Features

* Reusable React Components
* Dynamic rendering using Props
* Object Array based data management
* Multiple Job Opening Cards
* Responsive Card Layout
* Clean UI Design

## Technologies Used

* React JS
* JavaScript (ES6)
* CSS
* JSX

## Project Structure
src/
│
├── components/
│   └── Card.jsx
│
├── App.jsx
├── data.js
└── index.js

## How It Works

* Job data is stored inside an object array.
* Data is passed to components using props.
* Cards are dynamically rendered using the map() function.

Example:

```javascript
jobs.map((job)=>{
   return <Card data={job}/>
})
```

## Installation

Clone the repository:

```bash
git clone repository-link
```

Install dependencies:

```bash
npm install
```

Run project:

```bash
npm run dev
```

## Learning Outcomes

Through this project I learned:

* Creating reusable React components
* Using Props effectively
* Rendering data dynamically
* Working with object arrays
* Component based UI development

## Future Improvements

* Add Search Functionality
* Add Filters
* Backend Integration
* Database Support
* Apply Button Functionality

## Author
Himanshu Kumar
