# Flashcard Study App

## Overview

A simple full stack flashcard study web application where users can create, save, view, and delete flashcards. This project was built to help me understand how a frontend, backend API, and database work together in a real application structure.

The goal of this project is to better understand:

- Frontend development
- Angular application structure
- API communication
- Java Spring Boot backend development
- Database integration
- CRUD operations
- Git and version control
- Full stack debugging

---

## Tech Stack

### Frontend

- Angular
- TypeScript
- HTML
- CSS

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA

### Database

- Supabase PostgreSQL

### Version Control

- Git
- GitHub

---

## Current Features

- Basic user login using a `user_id`
- Create flashcards
- Save flashcards to the database
- Load saved flashcards from the database
- Display flashcards on the dashboard
- Delete flashcards
- Separate frontend and backend structure
- Angular routing between login and dashboard pages

---

## Database Structure

### Flashcards Table

The project uses one main table in Supabase called `flashcards`.

Fields:

- `id`
- `user_id`
- `question`
- `answer`
- `created_at`

### Field Purpose

#### `id`

The unique ID for each flashcard.

#### `user_id`

The user identifier connected to the flashcard.

#### `question`

The front side or question part of the flashcard.

#### `answer`

The back side or answer part of the flashcard.

#### `created_at`

The timestamp for when the flashcard was created.

---

## API Routes

### Get All Flashcards

`GET /api/flashcards`

Returns all saved flashcards from the database.

### Get One Flashcard

`GET /api/flashcards/{id}`

Returns one flashcard by its ID.

### Create Flashcard

`POST /api/flashcards`

Creates and saves a new flashcard.

Expected JSON example:

```json
{
  "user_id": "roy",
  "question": "What is Java?",
  "answer": "A programming language"
}
```

### Delete Flashcard

`DELETE /api/flashcards/{id}`

Deletes a flashcard by its ID.

---

## How the App Works

The frontend is built with Angular. The user enters a `user_id`, which is stored locally in the browser and used when creating flashcards.

When a user creates a flashcard, Angular sends the flashcard data as JSON to the Spring Boot backend.

The Spring Boot backend receives the request through a REST controller. Spring Boot then converts the JSON data into a Java `Flashcard` object using `@RequestBody`.

The backend uses a `FlashcardRepository` interface that extends `JpaRepository`. This allows Spring Boot to automatically handle database operations such as saving, finding, and deleting flashcards without manually writing SQL queries.

The data is then saved into the Supabase PostgreSQL database.

After a flashcard is saved or deleted, the Angular frontend reloads the flashcard list and displays the updated data.

---

## Project Structure

```txt
StudyLocalSite
│
├── frontend
│   └── Angular frontend application
│
├── flashcard-app
│   └── Spring Boot backend API
│
└── README.md
    └── Project documentation
```

---

## Development Process

This project was built as a learning-focused full stack application. The backend was created with Java Spring Boot and connected to a Supabase PostgreSQL database.

The backend includes:

- REST controller methods
- A `Flashcard` Java entity
- A `FlashcardRepository` interface
- Supabase database connection through `application.properties`
- Spring Data JPA for database operations

The frontend was built with Angular and connects to the backend through HTTP requests.

The project uses:

- Git branching
- Incremental feature development
- Testing with localhost
- Debugging through browser console errors and Spring Boot terminal logs
- Documentation throughout development

---

## What I Learned

Through this project, I learned how a full stack application moves data through multiple layers.

The main full stack flow is:

```txt
Angular frontend
↓
JSON request
↓
Spring Boot REST API
↓
Java Flashcard object
↓
FlashcardRepository
↓
Supabase PostgreSQL database
↓
Response back to Angular
```

I learned that the frontend and backend must agree on:

- API route names
- JSON field names
- Database column names
- Java entity mappings
- Table names

One of the biggest debugging lessons was that small naming mismatches can break the full stack connection. For example, if the Supabase table name does not match the table name in the Java entity, the backend cannot correctly save data.

I also learned that Spring Boot simplifies a lot of backend work. Instead of manually creating a server, parsing requests, and writing every SQL query, Spring Boot and Spring Data JPA handle much of that structure automatically.

---

## Goals

The goals of this project were to:

- Understand CRUD operations
- Learn how REST APIs work
- Connect a frontend to a backend
- Connect a backend to a database
- Understand Java objects and database entities
- Learn how repositories communicate with databases
- Practice debugging full stack errors
- Build a working project from start to finish

---

## Future Improvements

Possible future improvements include:

- Real Supabase authentication
- Flashcard editing
- Flashcard folders
- Flashcard flipping animation
- Study mode
- Search functionality
- Spaced repetition
- User-specific filtering
- Better dashboard statistics
- AI-generated flashcards
- Deployment to a live website

---

## Status

The project is currently functional as a local full stack application.

The Angular frontend can create and display flashcards, the Spring Boot backend handles API requests, and the Supabase PostgreSQL database stores the flashcard data.
