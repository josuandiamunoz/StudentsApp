variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID"
  type        = string
  default     = "ami-0c55b159cbfafe1f0"
}

variable "instance_name" {
  description = "EC2 instance name"
  type        = string
  default     = "Virtual Machine for StudentsApp"
}

variable "frontend_external_port" {
  type    = number
  default = 3000
}

variable "backend_external_port" {
  type    = number
  default = 3006
}

variable "db_external_port" {
  type    = number
  default = 1435
}