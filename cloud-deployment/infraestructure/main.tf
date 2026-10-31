resource "aws_key_pair" "deployer" {
  key_name   = "my-ssh-key"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_security_group" "external_access" {
  name        = "allow_external_access"
  description = "Allow external traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = var.frontend_external_port
    to_port     = var.frontend_external_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = var.backend_external_port
    to_port     = var.backend_external_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = var.db_external_port
    to_port     = var.db_external_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "vm" {
  ami           = var.ami_id
  instance_type = var.instance_type
  security_groups = [aws_security_group.external_access.name]
  key_name        = aws_key_pair.deployer.key_name

  tags = {
    Name = var.instance_name
  }
}