output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.vm.id
}

output "instance_arn" {
  description = "EC2 instance ARN"
  value       = aws_instance.vm.arn
}