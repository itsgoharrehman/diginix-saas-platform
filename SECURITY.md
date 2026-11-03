# Security Policy

## Supported Versions

| Version | Supported | Security Maintenance |
| :--- | :--- | :--- |
| 1.0.x | Yes | Active vulnerability patches |
| < 1.0.0 | No | Deprecated |

---

## Vulnerability Disclosure Protocol

If you discover a security vulnerability, authorization bypass, credential exposure, or data leak within this platform, please disclose it privately via email:

* **Security Contact**: goharrehmanfsd260@gmail.com
* **Repository Owner**: Gohar Rehman (@itsgoharrehman)
* **Response SLA**: Initial triage within 48 hours; resolution plan provided within 5 business days.

Do not report vulnerabilities via public issues or social channels.

---

## Security Architecture and Invariants

### 1. Client Data Isolation
* Client portal records, project deliverables, and invoices must never be accessible across client boundaries.
* PostgreSQL Row-Level Security (RLS) is strictly enforced on all client tables. Every query executed via the Supabase client operates within the authenticated JWT identity (`auth.uid()`).

### 2. Credential Isolation
* **Supabase Anon Key**: The `SUPABASE_ANON_KEY` in `js/supabase.js` is public by design and restricted to RLS-enforced queries.
* **Service Role Key Invariant**: The `service_role` secret key must **NEVER** be committed to the repository, included in static bundles, or transmitted to client browsers.
* Cloudflare Worker API secret tokens must be stored exclusively in Cloudflare Worker environment variables / secrets.

### 3. Serverless API Endpoint Protection
* Cloudflare Worker endpoints (`worker.js`) enforce input validation on all inbound POST requests.
* Cross-Origin Resource Sharing (CORS) headers are explicitly locked to authorized domain origins.

### 4. DOM XSS Prevention
* All dynamic DOM injections must utilize safe setters (`textContent`, `setAttribute`) or sanitized document fragments. Raw unescaped `innerHTML` injections of user input or API parameters are strictly prohibited.
