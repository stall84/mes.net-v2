# ADR 0006: Cloudflare Integration for DNS and SSL

DATE: 2024-05-21
STATUS: Accepted
TARGET MODULES: infra/cloudflare/

--------------------------------------------------------------------------------
1. CONTEXT & PROBLEM STATEMENT
--------------------------------------------------------------------------------
We want to use Cloudflare for both DNS management and SSL certificate handling to simplify our infrastructure setup and improve security.

--------------------------------------------------------------------------------
2. DECISION
--------------------------------------------------------------------------------
We will:
- Use Cloudflare for DNS management of our domain
- Request SSL certificates through Cloudflare's free SSL service
- Configure DNS records (CNAME, A, etc.) to point to CloudFront distribution
- Let Cloudflare handle TLS termination and SSL offloading

--------------------------------------------------------------------------------
3. RATIONALE & ALTERNATIVES CONSIDERED
--------------------------------------------------------------------------------
Why was this choice made over alternatives?
- Choice A: AWS Certificate Manager (ACM) - While ACM is free, it requires the domain to be managed within AWS or have proper DNS validation, which complicates integration with Cloudflare.
- Choice B: Manual SSL certificate management - This is error-prone and time-consuming.

--------------------------------------------------------------------------------
4. CONSEQUENCES
--------------------------------------------------------------------------------
Positive:
- Simplified certificate management through Cloudflare
- Centralized DNS and security management
- Free SSL certificates with automatic renewal
- Additional security features provided by Cloudflare

Negative / Trade-offs:
- Dependency on Cloudflare for DNS and SSL
- Potential single point of failure if Cloudflare experiences issues