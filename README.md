# Internship Applicant Management API

Backend Internship Practical Challenge for **INFNOVA Technologies**.

A NestJS REST API that allows administrators to manage internship applications with authentication, filtering, pagination, soft deletion, and dashboard statistics.

---

# Tech Stack

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL (Neon Database)
- JWT Authentication
- Passport.js
- Swagger / OpenAPI
- Jest Testing

---

# Features

## Authentication

- Admin login using JWT Bearer Authentication
- Protected routes using JWT Guards
- Password hashing with bcrypt
- Current authenticated admin information endpoint

---

## Applicant Management

Administrators can:

- Create applicants
- View all applicants
- View a single applicant
- Update applicant information
- Soft delete applicants
- Restore/manage applicant status

---

## Applicant Search and Filtering

Supports:

- Search by applicant name
- Search by email
- Filter by internship track
- Filter by application status
- Sorting
- Pagination with metadata

---

## Applicant Status Management

Supported application statuses:

- Pending
- Shortlisted
- Accepted
- Rejected

### Business Rules

- Applicant emails must be unique
- Notes cannot exceed 1000 characters
- Rejected applicants cannot directly become Accepted

---

# Dashboard

Provides application statistics:

- Total applicants
- Applicants grouped by status
- Applicants grouped by internship track

Deleted applicants are excluded from statistics.

---

# Project Structure

```
src
│
├── auth
│   ├── controllers
│   ├── services
│   ├── strategies
│   └── guards
│
├── applicants
│   ├── controllers
│   ├── services
│   └── DTOs
│
├── dashboard
│
├── prisma
│
└── common
```

---

# Installation

## 1. Clone Repository

```bash
git clone <repository-url>

cd Internship-Applicant-Management-API
```

---

## 2. Install Dependencies

```bash
npm install
```

---

# Environment Setup

Create your environment file:

```bash
cp .env.example .env
```

Update `.env` with your own configuration.

Example:

```env
DATABASE_URL="your_postgresql_connection_string"

JWT_SECRET="your_secret"

JWT_EXPIRES_IN="1d"

PORT=3000
```

---

# Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Seed database:

```bash
npx prisma db seed
```

The seed creates an admin account:

```
Email:
admin@infnova.com

Password:
admin123
```

---

# Running the Application

## Development

```bash
npm run start:dev
```

## Production

Build:

```bash
npm run build
```

Start:

```bash
npm run start:prod
```

---

# Authentication

## Login

Endpoint:

```
POST /api/auth/login
```

Request:

```json
{
  "email": "admin@infnova.com",
  "password": "admin123"
}
```

Response:

```json
{
  "access_token": "JWT_TOKEN"
}
```

---

## Protected Routes

Add the JWT token in the request header:

```
Authorization: Bearer JWT_TOKEN
```

---

# API Documentation

Swagger documentation is available at:

```
http://localhost:3000/api/docs
```

---

# API Endpoints

## Authentication

### Login

```
POST /api/auth/login
```

### Get Current Admin

```
GET /api/auth/me
```

---

# Applicants

### Create Applicant

```
POST /api/applicants
```

---

### Get Applicants

```
GET /api/applicants
```

Supports:

- Pagination
- Search
- Filtering
- Sorting

Example:

```
GET /api/applicants?page=1&limit=10&status=Pending
```

---

### Get Single Applicant

```
GET /api/applicants/:id
```

---

### Update Applicant

```
PATCH /api/applicants/:id
```

---

### Soft Delete Applicant

```
DELETE /api/applicants/:id
```

---

### Update Applicant Status

```
PATCH /api/applicants/:id/status
```

---

### Update Applicant Notes

```
PATCH /api/applicants/:id/notes
```

---

# Dashboard

Get application statistics:

```
GET /api/dashboard/summary
```

Returns:

- Total applicants
- Status distribution
- Internship track distribution

---

# Testing

Run unit tests:

```bash
npm run test
```

Run test coverage:

```bash
npm run test:cov
```

---

# Author

Backend Internship Challenge Submission  
INFNOVA Technologies

Built with NestJS, Prisma, PostgreSQL, and JWT Authentication.
