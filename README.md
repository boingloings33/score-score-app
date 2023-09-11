# Setup Instructions

## Prerequisites
1. Install VS Code https://code.visualstudio.com/download
2. Install MySQL Community Server https://dev.mysql.com/downloads/mysql/
3. Install MySQL Workbench https://dev.mysql.com/downloads/workbench/
4. Install Node JS https://nodejs.org/en/download

5. Install pnpm and nodemon.  
   Open a new terminal in any directory and execute the following command:

```
npm i -g pnpm nodemon
```
>this will install `pnpm` and `nodemon` globably (-g) to your computer

## One Time Setup

1. Initialize your database schema. Open the MySQL Workbench app and create a connection to your local machine (default settings.) If this is your first time, take note of the root user name and password that you pick. You will need these later.  
>We recommend this:  
>username: `root`  
>password: `Password123!`

2. Create a new schema and name it `score-score`

3. Clone the repository from Git using your favorite method

4. Open a new terminal in the project's root directory and execute the following command: 

```bash
pnpm i
```
>this will install all of the required modules for your apps

5. Create a new file in the `apps/web` directory named `.env` with the following content:

```
VITE_PUBLIC_API_ENDPOINT=http://localhost:5000

NEXT_PUBLIC_SHOW_QUERY_DEVTOOLS=true
```

6. Create a new file in the `apps/api` directory named `.env` with the following content:

```
# Core
NODE_ENV=local
PORT=5000

# Auth
JWT_SECRET=<>
JWT_REFRESH_SECRET=<>
JWT_EXPIRATION=60m
COOKIE_MAX_AGE=60m
```

>Replace all instances of `<>` with values found in the secret sharing vault.

7. Create a new file in the `packages/database` directory named `.env` with the following content:

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

# local variables
SQL_USERNAME=<>
SQL_PASSWORD=<>
SQL_LOCAL_SCHEMA_NAME=score-score
DATABASE_URL="mysql://${SQL_USERNAME}:${SQL_PASSWORD}@localhost:3306/${SQL_LOCAL_SCHEMA_NAME}"
```

>Replace all instances of `<>` with values found in the secret sharing vault.  

9. Open a new terminal in the project's root directory and execute the following command:

```
pnpm db:reset:local
```
>This will populate your local database with the schema defined in the projects `schema.prisma` file along with filling the tables with any seed data (predefined data)


## Running the project for development

Whenever you checkout a new branch with Git, it is common to have a different set of dependencies in your project and/or a different schema definition for your database.

To resolve these issues, you must run the install script and the database generate script.

1. Execute the following command in the terminal in the project's root directory:

```
pnpm i
```

> This will install all dependencies for all apps in the mono-repo

2. Execute the following command in the terminal in the project's root directory:

```
pnpm db:reset:local
```

> This will update your local database to match the schema definition of the `schema.prisma` file. This will also update the Prisma Client with new Prisma generate types. Finally, it will also reseed you database.

3. Execute the following command in the terminal in the project's root directory:

```
pnpm dev
```

> This will run both the app and the api in development mode on your local machine. This will fail if you do not have all dependencies installed and/or have not generated the Prisma types.

