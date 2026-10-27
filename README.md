This is a sample students application that allows to perform basic operations (read, create, delete) over a list of students.

Backend API is built with Node JS.
Frontend is built with react.
Data is stored in a database managed by Microsoft SQL Server.

A continuous integration (CI) pipeline is also implemented using Jenkins.
This pipeline uses Docker to build three separated images (for backend, frontend and database), which are then deployed locally in separated containers using Docker Compose.

In order to deploy the application also in the cloud, infraestructure is aprovisionated with Terraform.

Each feature is coded in a separated branch, and then merged into develop. Master branch is still not updated.
