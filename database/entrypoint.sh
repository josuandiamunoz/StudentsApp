#!/bin/bash

/opt/mssql/bin/sqlservr &

echo "Waiting for SQL Server to start..."
flag=1
while [ $flag -ne 0 ]
do
    sleep 2
    /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "$SA_PASSWORD" -Q "SELECT 1" -C &> /dev/null
    flag=$?
done

echo "SQL Server is up and running."

/opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "$SA_PASSWORD" -C -i /app/create.sql

echo "Database and tables created successfully."

wait