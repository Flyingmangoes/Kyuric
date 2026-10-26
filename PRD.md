# Product Requirement Document (PRD)

> **Document Status:** Draft   
> **Product Name:** Flomm  
> **Author:** [Flyingmangoes / Fullstack Engineer]  
> **Date:** [2026-09-21]  
> **Target Release:** 2026-12-30, Version 1.0

---

## 1. Executive Summary
This project is made for solving a brand issue for having no website

---

## 2. Problem Statement & Background
* **Context / Background:** E-Commerce website i made for my portofolio project

---

## 3. Goals & Success Metrics

### 3.1 Business & Product Goals
* Project Deployed successfully on vercel
* Project Complete as planned

---

## 4. User Personas & User Stories

### 4.1 Target Personas
* **Primary Persona:** Flyingmangoes sad because he doesn't have portofolio worth project.
* **Secondary Persona:** Flyingmangoes learn how to make website that follow world standard.

---

## 5. Scope & Requirements

### 5.1 In-Scope
* Frontend

### 5.2 Out-of-Scope (Non-Goals)
* Backend

---

## 6. Functional Requirements

| ID | Requirement Description | Priority (P0/P1/P2) | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **FR-01** | User authentication via OAuth | **P0** | Users can sign in using Google or GitHub accounts. |
| **FR-02** | Product, Order, Auth, User, Cart, Main pages | **P1** | All the listed pages should complete within the deadline. |
| **FR-03** | Dark mode toggle | **P2** | Theme updates across all views dynamically without page refresh. |

> **Priority Definitions:**
> * **P0:** Critical / Must-have for launch.
> * **P1:** High priority / Important, but launch can proceed without it if necessary.
> * **P2:** Nice-to-have / Low priority for future iterations.

---

## 7. Non-Functional Requirements (NFRs)

* **Performance:** Not really minded for now
* **Security & Privacy:** Data must be encrypted at rest (AES-256) and in transit (TLS 1.3).
* **Scalability:** System must support up to 50,000 concurrent active users.
* **Accessibility:** UI must comply with WCAG 2.1 AA standards.

---

## 8. Design & User Experience (UX)
* **Figma Links:** ([https://www.figma.com/design/o1BXPZauUxPh2GESojOrtm/Flomm-Website?node-id=2-2050&t=FDMC0dhvU9vZ4cbf-0])
* **User Flow Overview:** In Progress.

---

## 9. Dependencies & Technical Constraints
* **Dependencies:** 
    * **Frontend:**
      - "@tailwindcss/postcss": "^4.3.3",
      - "animejs": "^4.5.0",
      - "gsap": "^3.15.0",
      - "lucide-vue-next": "^1.0.0",
      - "postcss": "^8.5.28",
      - "tailwindcss": "^4.3.3",
      - "vue": "^3.5.40"
    * **Backend:**

* **Technical Constraints:** 
    - Must support legacy browsers, 
    - Mobile web responsive only

---

## 10. Open Questions & Risks

### 10.1 Key Risks & Mitigations
| Risk | Impact | Mitigation Plan |
| :--- | :--- | :--- |
| SQL Injection | High | Sentralized query. |
| Cross Site Scripting | High | Sanitized header and request (frontend and backend). |
| DDOS | High | Implement load balancer. |

### 10.2 Open Questions
* [ ] *Question 1: Do we need multi-language support for launch? (Owner: @Product)*
* [ ] *Question 2: What are the data retention requirements? (Owner: @Legal)*

---

## 11. Timeline & Milestones

| Milestone / Phase | Description | Estimated Target Date |
| :--- | :--- | :--- |
| **Frontend Mainpage** | Mainpage | 2026-09-28 |
| **Frontend Authpage** | Authpage | 2026-09-30 |
| **Update Database Model** | Update backend model following frontend | 2026-10-02 |
| **Beta Launch** | Internal testing phase | 2026-11-09 |