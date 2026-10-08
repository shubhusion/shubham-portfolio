# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:
- **Hiring managers / recruiters** evaluating Shubham Sharma for full-time Full Stack, AI, or Founding Engineer roles (remote-first, India + global).
- **Prospective consulting/advisory clients** — primarily early-stage startups — considering him for project-based technical work or architecture advisory.

Both audiences are doing the same job: quickly verifying that his production experience and claimed impact are real before reaching out.

## Product Purpose

A personal portfolio site that converts a skim into a contact. It exists to prove — not just claim — that Shubham ships production systems (AI and otherwise) as a single engineer operating at small-team output, and to drive the visitor to email him, view his resume, or check GitHub/LinkedIn.

## Positioning

AI-native engineering with production-grade backend depth: a full-stack/backend engineer who uses AI-assisted development daily as a force multiplier (not a shortcut) and has founding-engineer ownership experience at two early-stage startups, evidenced by live systems with real usage numbers (10K+ orders/month, 99.95% uptime) rather than tutorial-scale side projects.

## Operating Context

- Currently freelancing independently (Oct 2025–present) across four concurrent early-stage startup clients (Transportvibes, Reclevo, KEEL) while open to full-time offers.
- Prior full-time roles: S2T AI (Full Stack Engineer, OSINT platform), Platelink.ai (Founding Full Stack Engineer).
- 7 live, production products across 4 clients are the core proof points (Client Work section).
- Resume is served as a static PDF at `/Shubham_Sharma_Resume.pdf`; content across sections (Projects, Experience, Client Work, Achievements) is maintained as hardcoded data arrays per component, not a CMS.

## Capabilities and Constraints

- Static multi-page site (two Vite HTML entries — no router): `/` (home) and `/prentline` (Prentline case study; also reachable at `/prentline.html` without Vercel clean URLs). React + TypeScript + Vite + Tailwind CSS + Framer Motion, deployed as a static build (README targets Vercel).
- No backend, CMS, or forms on the site itself — contact is via `mailto:` and external links (LinkedIn, GitHub).
- Content updates mean editing the data arrays directly in `src/components/*.tsx` (Projects, Experience, ClientWork, Achievements, About).

## Brand Commitments

- Name: Shubham Sharma. Title: "Full Stack & AI Engineer."
- Existing dark, terminal/mono-accented visual identity (violet/blue gradient accents, `font-mono` labels, particle field hero) is the incumbent design language — durable unless a redesign is explicitly requested.
- Voice: direct, metrics-forward, no false modesty but no invented claims either.

## Evidence on Hand

All metrics currently on the site are real and confirmed by the user as fixed facts — preserve verbatim, never alter or invent similar-sounding numbers:
- 10K+ orders/month at 99.95% uptime (Platelink.ai)
- ~66% duplicate LLM token reduction, 50 backend tests passing (KEEL)
- 10K+ records/search, 40% wait-time reduction (S2T AI / GoldenSpear)
- 30% API response time reduction (AarthikSetu)
- 40% teacher productivity increase (Lumenslate)
- 7 live products across 4 clients; Google GenAI Hackathon 1st place (Fintech Track, 100+ teams, 2024)

Real assets in repo: headshot at `/images/shubham-headshot.png`, resume PDF path, verified client URLs (safeedsautotransport.com, transportvibe.com, broadwayautotransport.com, trustlinecarriers.com, reclevo.in, usekeel.in, s2t.ai, roothscale-web.azurewebsites.net).

Future work must not fabricate new metrics, testimonials, client names, or claims — only add facts the user confirms.

## Product Principles

1. Every claim on the page must be a real, verifiable fact — proof over persuasion copy.
2. Serve both audiences (recruiters and consulting clients) without forcing a visitor to pick a lane.
3. Preserve the existing dark/terminal visual identity as the incumbent system unless a redesign is explicitly requested.
4. New project/client entries follow the established data-array pattern per section rather than introducing a new content model.

## Accessibility & Inclusion

No specific standard has been mandated by the user; treat as best-effort (semantic structure, link `rel`/`target` hygiene, sufficient contrast against the dark theme) rather than a hard WCAG requirement.
