# ADR 0003: Use Terraform for Infrastructure as Code

DATE: 2024-05-21
STATUS: Accepted
TARGET MODULES: infra/

--------------------------------------------------------------------------------
1. CONTEXT & PROBLEM STATEMENT
--------------------------------------------------------------------------------
We need to define and manage our AWS infrastructure (S3, CloudFront) in a reproducible, version-controlled way. We want to avoid manual configuration in the AWS console and ensure that our infrastructure can be consistently recreated.

--------------------------------------------------------------------------------
2. DECISION
--------------------------------------------------------------------------------
We will use Terraform as our Infrastructure as Code (IaC) tool to define and manage our AWS resources including S3 buckets and CloudFront distributions.

--------------------------------------------------------------------------------
3. RATIONALE & ALTERNATIVES CONSIDERED
--------------------------------------------------------------------------------
Why was this choice made over alternatives?
- Choice A: AWS CloudFormation - While CloudFormation is native to AWS, Terraform offers better portability across cloud providers and has a more intuitive syntax for complex configurations.
- Choice B: AWS CDK - CDK allows for code-based infrastructure but requires a programming language (TypeScript/Python/etc) which adds complexity. Terraform's HCL is simpler for declarative infrastructure definitions.

--------------------------------------------------------------------------------
4. CONSEQUENCES
--------------------------------------------------------------------------------
Positive:
- Infrastructure is version-controlled and reproducible
- Easier to collaborate and review changes
- Can be automated in CI/CD pipelines
- Supports multiple environments (dev, staging, prod)

Negative / Trade-offs:
- Additional learning curve for Terraform
- Requires managing Terraform state files