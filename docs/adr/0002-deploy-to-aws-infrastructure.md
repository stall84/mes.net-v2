# Deploy to AWS Infrastructure

## Status

Proposed

## Context

We are building a personal website that needs to be deployed to cloud infrastructure. The site is built with React, TypeScript, and Vite. We have a domain registered with Cloudflare and want to use AWS for hosting. The deployment should be:
- Scalable and reliable
- Cost-effective
- Secure
- Easy to maintain and update
- Support HTTPS with automatic certificate management
- Provide good performance and global availability

## Decision

We will deploy the personal website using AWS infrastructure with the following components:
1. S3 bucket for static file hosting
2. CloudFront distribution for content delivery and SSL termination
3. Route 53 for DNS management (if needed) or continue using Cloudflare
4. ACM for SSL certificate management
5. Terraform for Infrastructure as Code

## Rationale & Alternatives Considered

### Why AWS?
- Strong global infrastructure with edge locations
- Mature and reliable services
- Cost-effective for static hosting
- Integration with other AWS services if needed in the future
- Well-documented and widely supported

### Why S3 + CloudFront over EC2?
- S3 is perfect for static content hosting
- CloudFront provides global CDN with automatic SSL termination
- No server management required (serverless approach)
- More cost-effective for static sites
- Better performance and scalability out of the box

### Why Terraform?
- Infrastructure as Code ensures reproducible deployments
- Version control of infrastructure changes
- Enables collaboration and review processes
- Supports multiple environments (dev, staging, prod)
- Idempotent deployments reduce risk of errors

### Why not Route 53?
- We're already using Cloudflare for DNS management
- Cloudflare provides excellent global CDN and security features
- No need to manage DNS in AWS if we're already using Cloudflare
- We can keep the current setup and just point the domain to CloudFront distribution

### Why not use a different hosting provider?
- AWS is chosen for its reliability, global reach, and integration with other services
- We want to avoid vendor lock-in but AWS provides good flexibility
- The stack is already familiar to us (we're using AWS for infrastructure)

## Consequences

### Positive
- Serverless architecture reduces operational overhead
- Global CDN improves performance for users worldwide
- Cost-effective for static content hosting
- Easy to scale with traffic
- Terraform ensures consistent deployments
- SSL certificates managed automatically via ACM
- Cloudflare integration provides security and caching benefits

### Negative / Trade-offs
- Additional complexity in the deployment pipeline
- Need to manage Terraform state (though this is standard practice)
- Slight delay in updates due to CDN cache invalidation
- Requires understanding of AWS services and Terraform
- Need to ensure proper IAM permissions for deployments
- Cloudflare and AWS configurations need to be kept in sync

## Implementation Plan

1. Set up Terraform project structure with required modules
2. Create S3 bucket for static website hosting
3. Configure CloudFront distribution pointing to S3 bucket
4. Request SSL certificate via ACM (for custom domain)
5. Configure DNS routing (if needed) - likely keep using Cloudflare
6. Set up CI/CD pipeline that builds and deploys to AWS
7. Implement cache invalidation strategy for updates
8. Test deployment and verify site is accessible

## Required AWS Services

1. **S3 Bucket** - For static file hosting with website configuration
2. **CloudFront** - CDN for global content delivery and SSL termination
3. **ACM** - SSL certificate management for custom domain
4. **Route 53** (optional) - If we need to manage DNS in AWS, but likely not since Cloudflare is used

## Deployment Workflow

1. Build site with Vite (production build)
2. Upload built files to S3 bucket
3. Invalidate CloudFront cache to ensure updates are visible
4. Terraform manages infrastructure provisioning and configuration
5. CI/CD pipeline automates the entire process

## Security Considerations

- S3 bucket permissions configured properly (no public write access)
- CloudFront distribution with SSL termination
- ACM certificate for HTTPS
- Proper IAM roles for Terraform deployment
- Cloudflare integration maintains security features

## Cost Considerations

- S3 storage costs are minimal for static sites
- CloudFront pricing based on data transfer and requests
- ACM is free for certificates (though renewal may be needed)
- Overall cost should be very low for a personal site