IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'StudentsApp')
BEGIN
    CREATE DATABASE [StudentsApp];
END
GO

USE [StudentsApp];
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Students' and xtype='U')
BEGIN

    CREATE TABLE [dbo].[Students] (
        [Email] [nvarchar](50) NOT NULL,
        [Password] [nvarchar](50) NOT NULL,
        [Identifier] [bigint] IDENTITY(1,1) NOT NULL
    ) ON [PRIMARY]

END
GO

IF NOT EXISTS (SELECT * FROM Students)
BEGIN
    INSERT INTO Students (Email, Password) VALUES ('admin@studentsapp.com', '123212');
    INSERT INTO Students (Email, Password) VALUES ('ana.smith@studentsapp.com', '987123');
END
GO