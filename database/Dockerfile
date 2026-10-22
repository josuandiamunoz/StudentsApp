FROM mcr.microsoft.com/mssql/server:2022-latest

ENV ACCEPT_EULA=Y

WORKDIR /app

# Copiar la carpeta de scripts y el entrypoint
COPY create.sql /app/create.sql
COPY entrypoint.sh /app/entrypoint.sh

# Dar permisos de ejecución al script
USER root
RUN chmod +x /app/entrypoint.sh
USER mssql

EXPOSE 1433
ENTRYPOINT ["./entrypoint.sh"]