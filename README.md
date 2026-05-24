# Flashcard Study App

## Overview

A simple flashcard study web application where users can create, save, and review flashcards. This project is focused on learning full stack development fundamentals using a real-world application structure.

The goal of this project is to better understand:

- Frontend development
- API communication
- Database integration
- Authentication systems
- Full stack workflow
- Git and version control

---

# Tech Stack

## Frontend

- HTML
- CSS
- JavaScript

## Backend

- Java Spring Boot

## Database / Authentication

- Supabase

## Deployment / Version Control

- GitHub

---

# Current Features

- User authentication
- Create flashcards
- Save flashcards to database
- Load user flashcards
- Delete flashcards
- Responsive UI

---

# Database Structure

## Users

Managed by Supabase Authentication.

## Flashcards Table

Fields:

- id
- user_id
- question
- answer
- created_at

Each flashcard belongs to a specific authenticated user.

---

# API Routes

## Flashcards

### Create Flashcard

POST /flashcards

### Get User Flashcards

GET /flashcards

### Delete Flashcard

DELETE /flashcards/{id}

---

# Development Process

This project is being built primarily as a learning experience. The frontend structure and styling are being developed manually to improve understanding of JavaScript and application flow.

The project uses:

- Git branching
- Incremental feature development
- Documentation throughout development
- Research-based problem solving

---

# Goals

- Understand CRUD operations
- Learn API architecture
- Connect frontend to backend systems
- Understand authentication flow
- Learn database relationships
- Improve debugging skills

---

# Future Improvements

- Flashcard folders
- Flashcard editing
- Study modes
- Search functionality
- Spaced repetition
- AI-generated flashcards
- Better analytics

---

# What I Learned

- How frontend and backend systems communicate
- How APIs process requests
- How databases store user-specific data
- How authentication systems work
- How to structure a full stack project
- How to debug full stack applications

---

# Status

Currently in active development.



