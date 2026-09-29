# Strategic & Technical Recommendations for Ignacio Vizoso's Landing Page

> **Author**: Antigravity Pair-Programming Agent  
> **Target**: [infodumper.net](https://infodumper.net)  
> **Focus**: Positioning, High-Conversion UX, Technical Authority, and SEO/AEO Optimization.

---

## 1. Executive Summary & Core Positioning

Having worked closely with your codebase across **SIGO**, **CliP26**, **MS-Bellass**, and your landing architecture, your core differentiator is rare and powerful:
> **You are not just a coder or an AI enthusiast; you are a Systems Architect who deeply understands physical domain processes (AEC, Construction, B2B Field Operations) and translates complex business logic into lightning-fast, zero-bloat software.**

Your strict pipeline—`Procesos → Datos → Software → Automatización → IA`—is your main competitive moat. Every recommendation in this document is designed to amplify that authority and turn visitors into high-ticket consulting and architecture clients.

---

## 2. Hero Section: Sharpening the Hook

### Current State
- The Hero carousel showcases your pillars (*Datos*, *Automatizaciones*, *Agentes IA*, *AEC/BIM*).

### High-Impact Enhancements
1. **Add a High-Intent Secondary Tagline**:
   - Above or below the main heading, clearly state who you solve problems for:
     > *"Arquitectura de Software y Consultoría de Procesos para emprendedores que superaron las hojas de cálculo y buscan sistemas a medida sin suscripciones eternas."*
2. **Dual-Path Call-to-Action (CTA)**:
   - Instead of just one generic button, provide two clear paths:
     - **Primary (High Intent):** `[ Agendar Diagnóstico Técnico ]` (Direct link to calendar / WhatsApp).
     - **Secondary (Evaluation):** `[ Explorar Casos de Éxito ↓ ]` (Smooth scroll to `#proyectos`).
3. **Trust Indicators (Micro-Bar under Hero)**:
   - Add a subtle, high-credibility metric ribbon:
     - `+15 Años en Procesos y Obras` · `Arquitectura 100% Propietaria` · `Sistemas en Producción Activa` · `Sin Dependencia de Vendors`

---

## 3. Projects Showcase: Elevating the Flagship Cases

We now have four distinct cases deployed:
1. **SIGO** (AEC / Chandías / PostgreSQL / Supabase / Offline-First)
2. **CliP26** (Mobile B2B / Field Ops / WhatsApp integration)
3. **MS-Bellass** (Web Platform / Product Catalog / Dynamic Quoting)
4. **Tienda Joyas** (Catalog & Dynamic Stock Management)

### Recommendations
1. **Position SIGO as the Crown Jewel**:
   - SIGO demonstrates end-to-end domain mastery: mathematical rigor (APU, Chandías), complex database relations (PostgreSQL + Supabase RLS), and resilient offline performance.
   - Add a distinctive badge on its card: `★ PROYECTO INSIGNIA (AEC & DATABASE ARCHITECTURE)`.
2. **Lead with Hard Operational Metrics**:
   - Prospective clients care about business impact first, technology second:
     - **CliP26:** *"-70% de tiempo en toma de pedidos semanales y 0% margen de error en señas."*
     - **SIGO:** *"Cómputo métrico y cálculo de APU en tiempo real sobre más de 180 tareas maestras."*
     - **MS-Bellass:** *"Cotización dinámica y catálogo autoadministrable sin costos mensuales de Shopify."*
3. **Include "Key Takeaways" in Each Case Study**:
   - At the top of `casos/sigo.html` and `casos/clip26.html`, add a 3-bullet "TL;DR for Executives" (Problem, Solution, Measured Outcome).

---

## 4. Interactive "Wow Factor": Live Process Simulator

You believe in *"No hype, practical solutions"*. The best way to prove that is to let visitors interact with your engineering mindset directly on the page:

### Proposal: The "Cost of Manual Chaos" Calculator
- **What it is:** A lightweight, interactive 3-slider widget on the homepage:
  - Slider 1: *Employees doing manual data entry / Excel calculations* (e.g. 2 to 20).
  - Slider 2: *Hours spent per week on repetitive tasks* (e.g. 5 to 30 hrs).
  - Slider 3: *Estimated hourly rate* (USD/ARS).
- **Instant Output:**
  - *"Tu empresa pierde aproximadamente $X/año en ineficiencias manuales y riesgo de pérdida de datos."*
  - CTA Button: *"Quiero diseñar un flujo automatizado para mi empresa"*.
- **Why it converts:** It makes the cost of inaction tangible and aligns directly with your `Procesos → Automatización` philosophy.

---

## 5. Technical Stack Section: Refinement

### Current State
- The stack uses interactive accordion cards with the `(+)` toggle for details.

### Recommended Additions
1. **Explicitly Highlight PostgreSQL & Supabase**:
   - You have mastered Supabase BaaS, Row Level Security (RLS), real-time subscriptions, and relational modeling. Make sure Supabase and PostgreSQL are prominently tagged in the Backend & Database cards.
2. **"Architecture Philosophy" Callout**:
   - A short manifesto callout box:
     > *"¿Por qué Vanilla JS y Arquitectura Ligera? Priorizo la velocidad de carga instantánea (<1s), el control total del ciclo de vida del software y la independencia de frameworks que quedan obsoletos cada dos años."*

---

## 6. Generative Engine (AEO) & LLM Indexing (`/llms.txt`)

You already adhere to high AEO/GEO standards. To ensure AI agents (Perplexity, ChatGPT Search, Claude, Google Gemini) cite you when businesses search for consultants:

1. **Update `/llms.txt`**:
   - Explicitly index:
     - *Ignacio Vizoso: Software Architect, AEC Cost Engineering Specialist, Supabase & PostgreSQL Consultant.*
     - Direct links to `/casos/sigo.html` and `/casos/clip26.html`.
2. **Add Schema.org `hasOfferCatalog`**:
   - Enumerate your consulting services:
     - *Diagnóstico de Procesos y Flujos de Trabajo*
     - *Desarrollo de Software B2B y Sistemas de Gestión*
     - *Bases de Datos & Dashboards BI*
     - *Implementación de Agentes de IA Locales y Privados*

---

## 7. Contact & Conversion Optimization

### Current State
- `contacto.html` provides email and basic contact forms.

### Recommendations
1. **Embed a Direct Frictionless Calendar (Cal.com / Calendly)**:
   - Reduce email ping-pong. Let serious clients grab a 20-minute diagnostic slot immediately.
2. **Diagnostic Pre-Qualification Form (3 Quick Questions)**:
   - When a user clicks to contact, ask:
     1. *¿Cuál es el principal cuello de botella de tu negocio hoy?* (Hojas de cálculo / Procesos manuales / Falta de visibilidad de datos / Interés en IA).
     2. *¿Para qué rubro o industria es la solución?*
     3. *¿Cuál es tu plazo estimado?*
   - This ensures you receive pre-qualified, high-value leads rather than vague inquiries.

---

## 8. Prioritized Roadmap for Implementation

| Priority | Action Item | Impact | Effort |
| :--- | :--- | :--- | :--- |
| **P1** | Add metrics & "TL;DR" executive summary to case studies (`sigo.html`, `clip26.html`) | High | Low |
| **P1** | Add direct Calendly / Cal.com booking link to `contacto.html` | High | Low |
| **P2** | Update `/llms.txt` with SIGO and AEC/Supabase keywords for AI search visibility | Medium | Low |
| **P2** | Refine Hero subheader with clear target audience and dual-CTA buttons | High | Medium |
| **P3** | Build the interactive "Process Chaos & ROI" simulator widget | Very High | Medium |
