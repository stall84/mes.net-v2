# ADR 0004: AWS S3 Bucket Configuration

DATE: 2024-05-21
STATUS: Accepted
TARGET MODULES: infra/s3/

--------------------------------------------------------------------------------
1. CONTEXT & PROBLEM STATEMENT
--------------------------------------------------------------------------------
We need to configure an S3 bucket for our static website hosting. The bucket must be secure, accessible only to our CloudFront distribution, and properly configured for static website hosting.

--------------------------------------------------------------------------------
2. DECISION
--------------------------------------------------------------------------------
We will create a private S3 bucket with the following configuration:
- Static website hosting enabled
- Block public access (strict)
- Default encryption using AES256
- Bucket policy allowing CloudFront distribution to read objects
- Versioning enabled

--------------------------------------------------------------------------------
3. RATIONALE & ALTERNATIVES CONSIDERED
--------------------------------------------------------------------------------
Why was this choice made over alternatives?
- Choice A: Public bucket with ACLs - This is insecure and violates security best practices.
- Choice B: No encryption - This does not meet security requirements for data at rest.

--------------------------------------------------------------------------------
4. CONSEQUENCES
--------------------------------------------------------------------------------
Positive:
- Secure configuration that prevents unauthorized access
- Properly configured for CloudFront integration
- Versioning allows for recovery from accidental deletions

Negative / Trade-offs:
- Bucket policy requires careful management to ensure CloudFront can access content
- Additional complexity in Terraform configuration