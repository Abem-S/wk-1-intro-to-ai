# Mini E-Learning Platform – LearnHub

[Live Demo](https://learnhub-vibecode.vercel.app/)

## Overview

LearnHub is a **mini e-learning platform prototype** built with **HTML, CSS, and JavaScript**. It simulates a real course platform experience while remaining fully front-end.  

This project was created for the **VibeCoding Week 1 Assignment** and demonstrates:

- Course listing and details
- Progress tracking
- Simulated login/signup system

The focus is on building a **functional, clean, and beginner-friendly prototype**.

---
## Prompts used in v0.app
1. Hi AI, I want you to create a complete, working mini e-learning platform prototype using only HTML, CSS, and JavaScript. The platform should look and feel like a real online course platform, but it can be simple. I want to be able to copy the code and run it directly in a browser. 

Here’s exactly what I need:

1. **Home Page / Course List**
   - Display a list of at least 3 courses.
   - Each course should show:
       - Course title
       - Short description (1–2 sentences)
       - Optional small icon or image
   - Completed courses should be visually marked (e.g., gray text or strikethrough).
   - Add hover effects for course items.
   - Clicking on a course opens its **Course Detail Page**.

2. **Course Detail Page**
   - Show course title prominently.
   - Show full description and list of lessons (at least 3 lessons per course).
   - Show completion status (Completed ✅ or Not Completed ❌).
   - Include a button to mark the course as “Completed”. When clicked:
       - Update course status immediately.
       - Reflect completed status on both the course detail page and the home page.
   - Include a “Back to Courses” button.

3. **Course Data**
   - Store courses in a JavaScript array or JSON object.
   - Each course should have:
       - `id`
       - `title`
       - `description`
       - `lessons` (array of lesson titles)
       - `completed` status (boolean)

4. **Styling**
   - Clean, modern, simple, visually appealing.
   - Use a readable font and proper spacing.
   - Add hover effects for buttons and course items.
   - Completed courses should look visually different (grayed out, strikethrough, or lighter opacity).
   - Buttons should have smooth hover color change.

5. **Functionality**
   - Clicking a course opens the detail page.
   - “Mark as Completed” updates status immediately.
   - “Back to Courses” returns to the home page.
   - Changes should persist in the JavaScript array while the page is open (no backend needed).

6. **Deliverables**
   - Provide three separate files:
       - `index.html`
       - `style.css`
       - `script.js`
   - Ensure the code is fully functional in a browser with no server required.
   - Make the code clean, readable, and beginner-friendly with proper indentation and comments.

7. **Extra Features (Optional but appreciated)**
   - Add small progress indicators for each course (e.g., “0/3 lessons completed”).
   - Style the lessons list in the course detail page so it looks like a real learning module.

The goal is to make it **look like a real mini e-learning platform**, meet the assignment requirements, and be fully functional using only front-end technologies.

2. Hi AI, I want you to extend the previous mini e-learning platform by adding a **simulated login and signup system**. 

Requirements:

1. **Login Page**
   - Users can enter an email/username and password to log in.
   - If the credentials match a registered user in the JavaScript array, allow access to the course list.
   - If credentials are wrong, display an error message.

2. **Signup Page**
   - Users can create a new account by entering a username/email and password.
   - Store the new account in a JavaScript array of users (simulate database).
   - After successful signup, redirect the user to the login page.

3. **Front-end Simulation**
   - All user data should be stored in a JavaScript array (no backend required).
   - While the page is open, users can log in and see their course list.
   - Once the page reloads, the data can reset (no need for persistent storage).

4. **Navigation**
   - Add buttons or links to switch between Login and Signup forms.
   - Only show the course list when the user is “logged in”.
   - Include a “Logout” button to return to the login page.

5. **Styling**
   - Keep the style consistent with the existing platform.
   - Make the login and signup forms clean and user-friendly.
   - Add hover effects for buttons and inputs.

6. **Deliverables**
   - Update the existing `index.html`, `style.css`, and `script.js` to include this functionality.
   - Make sure the code is fully functional in the browser without a server.
   - Include comments explaining how the simulated login/signup works.

The goal is to **simulate a real login/signup experience**, integrate it into the mini e-learning platform, and keep it fully front-end with clean, readable code.

---

## Features

### Course Platform
- **Home Page / Course List**
  - Displays at least 3 courses with title and short description.
  - Completed courses are visually marked (gray text or strikethrough).
  - Hover effects for interactive feedback.
- **Course Detail Page**
  - Shows full course details and a list of lessons.
  - Displays completion status (Completed ✅ / Not Completed ❌).
  - "Mark as Completed" button updates status instantly.
  - "Back to Courses" button returns to home page.
- **Progress Tracking**
  - Courses visually indicate completion.
  - Optional progress indicators per course.

### Simulated Login/Signup
- **Login Page**
  - Users can log in using username/email and password stored in a JavaScript array.
  - Shows error messages for invalid credentials.
- **Signup Page**
  - Users can create an account; data stored in a JavaScript array.
  - Redirects to login page after signup.
- **Navigation**
  - Switch between login and signup forms.
  - Course list only accessible after login.
  - Logout button returns to login page.
- **Front-End Simulation**
  - No backend required; data persists while the page is open.

---

## Tech Stack

- **HTML** – Page structure and content
- **CSS** – Styling, layout, hover effects
- **JavaScript** – Dynamic content, course data, simulated login/signup

---

## Project Structure
```
/wk-1-intro-to-ai
│
├── index.html <-- Main HTML file with login, signup, and course pages
├── style.css <-- Styles for the platform
└── script.js <-- JavaScript for courses and user functionality
```
---

## How to Use

1. Open the project in a web browser.
2. **Signup / Login**
   - New users: Create an account on the Signup page.
   - Returning users: Log in with existing credentials.
3. **Browse Courses**
   - Click a course to view lessons and details.
   - Use the "Mark as Completed" button to track progress.
4. **Logout**
   - Click "Logout" to return to the login page.

[Try the live version here](https://learnhub-vibecode.vercel.app/)

---
