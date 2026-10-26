# ADR 0005: CloudFront Distribution Setup

DATE: 2024-05-21
STATUS: Accepted
TARGET MODULES: infra/cloudfront/

--------------------------------------------------------------------------------
1. CONTEXT & PROBLEM STATEMENT
--------------------------------------------------------------------------------
We need to set up a CloudFront distribution to serve our static website content from the S3 bucket. The distribution should be configured for optimal performance and security.

--------------------------------------------------------------------------------
2. DECISION
--------------------------------------------------------------------------------
We will create a CloudFront distribution with:
- Custom domain (using Cloudflare DNS)
- HTTPS enabled with ACM certificate
- Origin access identity (OAI) to restrict S3 bucket access
- Default cache behavior with appropriate TTLs
- Viewer protocol policy set to redirect HTTP to HTTPS
- Compression enabled

--------------------------------------------------------------------------------
3. RATIONALE & ALTERNATIVES CONSIDERED
--------------------------------------------------------------------------------
Why was this choice made over alternatives?
- Choice A: No CDN - This would result in poor performance and higher latency for users.
- Choice B: Using S3 website endpoint directly - This bypasses the benefits of CloudFront (caching, global edge locations, etc.)

--------------------------------------------------------------------------------
4. CONSEQUENCES
--------------------------------------------------------------------------------
Positive:
- Global content delivery with low latency
- Improved security through OAI
- HTTPS support with automatic certificate management
- Caching reduces origin load

Negative / Trade-offs:
- Additional cost for CDN usage
- More complex configuration with multiple components