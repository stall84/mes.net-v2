# Terraform variables

variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-west-1"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "mes-website"
}

variable "domain_name" {
  description = "Domain name for the website"
  type        = string
  default     = "michaelstallings.net"
}

variable "certificate_arn" {
  description = "ARN of the SSL certificate (if pre-created)"
  type        = string
  default     = ""
}