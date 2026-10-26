# Infrastructure as Code

This directory contains Terraform configuration files for deploying the personal website infrastructure on AWS.

## Overview

The infrastructure consists of:
1. S3 bucket for static website hosting
2. CloudFront distribution for content delivery and SSL termination
3. Proper security configurations including:
   - Private S3 bucket with public access blocked
   - Origin Access Identity for secure S3 access
   - HTTPS support via ACM certificate (or CloudFront default)

## Prerequisites

- Terraform installed (version 1.0+)
- AWS credentials configured with appropriate permissions
- Domain name registered and pointing to Cloudflare (or other DNS provider)

## Usage

1. Initialize Terraform:
   ```bash
   terraform init
   ```

2. Review the plan:
   ```bash
   terraform plan
   ```

3. Apply the configuration:
   ```bash
   terraform apply
   ```

## Variables

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `aws_region` | AWS region to deploy resources | string | us-east-1 |
| `project_name` | Name of the project | string | mes-website |
| `domain_name` | Domain name for the website | string | mes.dev |
| `certificate_arn` | ARN of pre-created SSL certificate (optional) | string | "" |

## Resources Created

- S3 bucket with static website hosting enabled
- CloudFront distribution with OAI
- Proper IAM policies and security configurations

## Notes

- The S3 bucket is configured to be private, accessible only via CloudFront
- CloudFront uses the default certificate if no custom certificate ARN is provided
- All resources are tagged for easy identification and cost tracking