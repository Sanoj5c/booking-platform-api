# EN2H Booking Platform API

A REST API built with NestJS, TypeScript, PostgreSQL, and Prisma for managing services and customer bookings.

## Features

- User registration and login
- JWT authentication
- Password hashing with bcrypt
- Protected service management
- Public booking creation
- Protected booking management
- Booking status updates
- Booking cancellation
- Request validation
- Swagger API documentation
- PostgreSQL database with Prisma migrations

## Technology Stack

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT
- Passport
- bcrypt
- Swagger
- class-validator

## Project Structure

```text
src/
├── auth/
├── bookings/
├── prisma/
├── services/
├── users/
├── app.module.ts
└── main.ts