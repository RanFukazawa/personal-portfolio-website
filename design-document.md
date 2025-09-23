# Project 1: Personal Homepage — Design Document

**Author:** Nakul Shivaraj  
**Class:** CS 5010 — MSCS, Northeastern University, Oakland  
**Date:** Sept 2025  

---

## 1. Project Description
This project implements a personal homepage for Nakul Shivaraj, an MSCS student at Northeastern University and a Software Developer.

The site is a static frontend-only project built using HTML5, CSS3, and ES6 modules (no frameworks, no jQuery). It provides a professional, user-friendly platform to showcase background, skills, projects, achievements, and contact information.

The homepage will serve three primary goals:
-Present academic and professional achievements.
-Highlight software projects through an interactive gallery.
-Provide recruiters and peers with quick access to resume and contact info

Key Features:
-Hero section with background image and overlay.
-About + Achievements cards side by side.
-Interactive timeline (expandable milestones).
-Projects page with flip cards (front: title, back: details).
-Contact section with links (email, LinkedIn, phone).
-Responsive layout (Bootstrap grid + custom CSS).
-Deployment on GitHub Pages.

---

## 2. User Personas
- Persona 1: Recruiter: 
Works at a tech company, looking for interns/junior developers.
Needs a quick overview of Nakul’s skills, resume, and achievements.
Expects a clean, professional homepage.

- Persona 2: Classmate:
-Fellow MSCS student collaborating on coursework.
-Wants to check Nakul’s past projects for inspiration.
-Uses the homepage to explore project ideas or find contact info.

- Persona 3: Faculty Member:
-Professor evaluating student portfolios.
-Needs to see professionalism, project diversity, and technical details.
-Will appreciate good structure, accessibility, and documentation.

---

## 3. User Stories
- As a recruiter, I want to download Nakul’s resume directly from the homepage so I can quickly evaluate his background. 
- As a classmate, I want to view his achievements in one glance so I can gauge his leadership and academic recognition.  
- As a professor, I want to I want to check the site on different devices and see that it’s responsive and accessible.  
- As a visitor, I want a simple way to contact Nakul (email, LinkedIn, phone) without scrolling endlessly.

---

## 4. Design Mockups

--Homepage (index.html)
- Header/Nav → Logo/name left, links right (Home | Projects | Contact).
- Hero Section → Background image, overlay text: “Hi, I’m Nakul Shivaraj” + Resume button.
- About & Achievements → Two cards side by side.
- Timeline → Vertical line with interactive milestones.
- Contact → Icons + links (email, LinkedIn, phone).
- Footer → Copyright.

--Projects Page (projects.html)
- Grid of flip cards.
- Front → Project name.
- Back → Project details (tech stack, description, link).

-- Future Page (optional third page, e.g. Blog or Gallery)
- Placeholder for future personal blog or research papers.

---