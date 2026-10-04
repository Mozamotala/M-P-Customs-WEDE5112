# M&P Customs — Website Project (WEDE5020)

## Student Information
- **Name:** Mohamed Zaeem Motala
- **Student Number:** ST10515004
- **Module:** WEDE5020 — Web Development (Introduction)
- **Campus:** IIE Emeris Sandton
- **Lecturer:** Jessel Sookha

## Project Overview
M&P Customs is a metal fabrication and 3D printing business that makes advanced manufacturing accessible to anyone, with or without experience. This company specialises in 3D printing in metal and plastic, CNC machining, welding, and CAD designing services.

## Website Goals and Objectives
1. Make users aware of our services.
2. Encourage users to fill out the contact or enquiry form.

## Key Features and Functionality
1. This site contains 5 pages: Home, About, Enquiry, Contact, and Services.
2. Each page has a navigation menu that excludes the current page you are on, and each page has a "back to top" function.

## Timeline and Milestones
- Week 1–2: Proposal approved, planning of HTML structure
- Week 3–6: CSS styling and responsive design
- Week 7–10: JavaScript functionality
- Week 11–12: Testing, refining, and final submission

## Part 1 Details

### Content Research and Sourcing
- **Text Content:** Written specifically for M&P Customs based on the approved proposal, covering all 5 pages.
- **Images:** Sourced from Pexels (free stock photos) for workshop, welding, 3D printing, and CNC-related visuals. The team member photos were generated with xAI Grok and the M&P Customs logo was generated with Google Gemini (see References and the AI usage disclosure).
- **Team Member Photos:** The team member photos are AI-generated images of fictional people, not real staff.
- **Icons:** Sourced from SVGRepo with appropriate CC0, CC Attribution, and PD licenses.
- **Team Member Names:** Generated using a South African name generator for realistic fictional team members.

### Website Structure and Planning
The website was planned using a sitemap created in Figma to understand site hierarchy and how the navigation would be handled.

### Sitemap
![Sitemap](images/Sitemap.png)

Figma link: https://www.figma.com/design/IAVM6PVkYBK4r712gqPqUC/Untitled?node-id=2-42&t=T79HgJ503JorCNSK-1

### File and Folder Structure
```
root/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── styles/
│   └── styles.css
├── fonts/
│   ├── Montserrat-Regular.ttf
│   └── Montserrat-Bold.ttf
├── js/
│   └── .gitkeep
└── images/
    ├── 3D-Printing-1.jpg
    ├── 3D-Printing-2.jpg
    ├── CAD2.jpg
    ├── cad.jpg
    ├── CNC1.jpg
    ├── CNC2.jpg
    ├── welding.jpg
    ├── welding2.jpg
    ├── Jacobus-van-der-Walt.jpg
    ├── Ruth-Matlala.jpg
    ├── John-Smith.jpg
    ├── M&P-logo.jpg
    ├── Sitemap.png
    ├── screenshots/
    │   ├── home-320px.png
    │   ├── home-700px.png
    │   ├── home-768px.png
    │   └── home-1400px.png
    └── svg/
        ├── instagram-svgrepo-com.svg
        ├── phone-svgrepo-com.svg
        ├── mail-alt-svgrepo-com.svg
        ├── tools-svgrepo-com.svg
        ├── profile-round-1342-svgrepo-com.svg
        └── whatsapp.svg
```

### HTML Structure and Basic Content
Home (index.html)
├── About (about.html)
├── Services (services.html)
├── Enquiry (enquiry.html)
└── Contact (contact.html)

## Part 2 Details

### CSS Approach
I went desktop-first. I wrote the main styles for big screens (inline nav, centred gallery row, logo positioned on top in the header), and then used max-width media queries at 992px and 600px to strip styles away for smaller viewports.

### Breakpoints
* **992px (Tablet):** This is where the full-size layout starts feeling too big. Text and images look fine on desktop, but under about 1000px they get too large, so I shrink them here.
* **600px (Mobile):** Below this the nav bar doesn't fit properly and the header needs to change, so this is where I switch to the stacked layout.

### Responsive Changes
* **At 992px:**
  * Body font drops from 1.25rem down to 1.125rem.
  * `<main>` gets 1rem side padding and 1.5rem bottom padding.
  * Header `h1` goes up a bit to 1.6rem to make up for the smaller body text.
  * `h2` goes down to 1.4rem.
  * Gallery images max out at 14rem instead of 18.75rem.
  * Form container shrinks to 90% max-width.
  * Gap between contact icons drops from 1.875rem to 1.25rem.
  * Team photos max out at 80% width.
* **At 600px:**
  * Body font drops down to 1rem.
  * Nav links stack on top of each other with a 0.5rem gap, and each link is a block with padding so it's easier to tap.
  * Logo goes from `position: absolute` to `position: static` and is centred with `margin: 0 auto 0.5rem auto`.
  * `h2` goes down to 1.2rem.
  * Header `h1` padding goes down to 1rem, and `min-height: auto` removes the forced gap.
  * Sections get 1rem padding and a smaller 0.5rem border radius.

### Accessibility
* **Focus States:** Nav links, CTAs, form inputs and contact links all show when you focus on them. Nav and inputs get a `#2F99C6` outline, and contact links change colour and get an underline.
* **Semantic HTML:** I used `<header>`, `<nav>`, `<main>`, `<section>` and `<footer>`. Each page has one `<h1>`, then `<h2>` down to `<h4>` in order.
* **Alt Text & Labels:** Every image has alt text that describes it (the logo's alt is "M&P Customs Logo"). Every form input has a `<label>`, and I didn't use placeholders as the only label.
* **Colour Contrast:** The body text (`#333` on `#f4f4f4`) and the blue on black (`#2F99C6` on `#000`) both pass WCAG AA. The blue links and CTAs on the light `#f4f4f4` background sit at about 2.9:1, which fails AA for normal text. If I had more time, I'd make the blue darker for the light background.

### Testing
* I used Chrome DevTools responsive mode at 320px, 700px, 768px and 1400px. Screenshots of the home page at all four sizes are in the README.
* I tabbed through the contact and enquiry forms to check the focus order made sense and the focus rings were easy to see.
* I checked the gallery, form and nav at each breakpoint.

#### Responsive Design Testing
The home page was tested in the browser developer tools (responsive mode) at four widths.

| Width | Screenshot |
|-------|------------|
| 320px (mobile) | ![Home page at 320px](images/screenshots/home-320px.png) |
| 700px | ![Home page at 700px](images/screenshots/home-700px.png) |
| 768px (tablet) | ![Home page at 768px](images/screenshots/home-768px.png) |
| 1400px (desktop) | ![Home page at 1400px](images/screenshots/home-1400px.png) |

### Performance
* I added preconnect hints for google.com and maps.googleapis.com on the Contact page.
* The map iframe uses `loading="lazy"`.
* The logo, team photos and contact icons all have a set width and height so the page doesn't jump around while images load.
* I haven't made smaller copies of the images or used `srcset` yet; the images load at full size and CSS scales them down.

### Challenges & Solutions
* **iframe hover:** The map iframe was blocking the hover styles on its container. I put the hover effect straight on `.map-container iframe` using outline and box-shadow, so the glow shows on the map itself.
* **Invisible white text:** In one section the text was getting white from a dark parent and disappearing on the light background. I set the colour directly instead of letting it inherit.
* **Replacing `<br>` spacers:** The old markup used `<br>` tags for spacing, and they broke when the layout changed. I swapped them for proper margins.
* **Doubled up class and id on CTAs:** The CTA links had both a class and an id doing the same job, with two CSS blocks. I removed the id and kept the class.
* **Duplicate team member image rules:** `.team-member img` was in my CSS twice, once near the top and again further down. I merged all the extra `.team-member img` CSS into one CSS block for simplicity.

### Wins
* Hover glow works on the gallery images, team photos, contact icons and the map using outline and box-shadow, so nothing jumps around when you hover.
* Changing the logo from absolute to static at 600px and centring it stops it from covering the title on mobile screens.
* Changing every px value to `rem` (base 16) made the whole stylesheet scale properly.

## Part 1 Feedback

Part 1 was graded at 100% with no written feedback provided. As a result, no changes were required in response to Part 1 feedback.

## Changelog

| Date | Change | Section |
|------|--------|---------|
| 23 Aug 2026 | First commit | Repository setup |
| 23 Aug 2026 | Added images and pages folders | File/Folder Structure |
| 23 Aug 2026 | Small changes to page naming scheme | File/Folder Structure |
| 23 Aug 2026 | Added java and css folders | File/Folder Structure |
| 23 Aug 2026 | Updated README with project details and structure rough draft | Documentation |
| 25 Aug 2026 | Removed `pages` folder following brief; renamed root folder to a web-safe handle; renamed `java` folder to `js` | File/Folder Structure |
| 25 Aug 2026 | Merged remote repository history with local project | Repository setup |
| 26 Aug 2026 | Added code for contact, index, and enquiry pages | HTML Structure |
| 26 Aug 2026 | Added bones (semantic structure) to all pages; started adding wording to main page | HTML Structure |
| 26 Aug 2026 | Finished index page and started about page | HTML Structure |
| 26 Aug 2026 | Added content to about page; slight modifications to other pages | HTML Structure / Content |
| 27 Aug 2026 | About page finished; started enquiry page | HTML Structure |
| 28 Aug 2026 | Finished contact page | HTML Structure |
| 30 Aug 2026 | Finished services page (gallery, service descriptions, alt text added); updated README with Project Overview, Goals, Features, Timeline, File/Folder Structure, and Sitemap content | HTML Structure / Documentation |
| 30 Aug 2026 | Final push Readme complete and comments added final test tomorrow 31 AUG 2026 | Documentation |
| 31 Aug 2026 | Added WhatsApp SVG; small changes to README file structure (WhatsApp and sitemap) | Documentation / Images |
| 21 Sep 2026 | Added fonts | Typography |
| 21 Sep 2026 | Added note that I had been working on this project before the repository was assigned to us | Documentation |
| 21 Sep 2026 | Added new CSS rule, fixed bugs with outlines and added focus | CSS Styling |
| 21 Sep 2026 | Converted all px to rem using a base of 16 | CSS Styling / Typography |
| 25 Sep 2026 | Updated with CSS and a new README; minor changes to HTML | CSS Styling / Documentation |
| 3 Oct 2026 | Added hover effects to multiple elements and to photos to make the web page look more alive; updated media queries with what I learned from testing | CSS Styling / Responsive Design |
| 3 Oct 2026 | Fixed media query | Responsive Design |
| 3 Oct 2026 | Cleaned up CSS, fixed hover effects, removed duplicates and added transitions | CSS Styling |
| 3 Oct 2026 | Fixed CSS | CSS Styling |
| 3 Oct 2026 | Fixed redundant code: had a class and an id for the call-to-action using two separate CSS structures; removed the id and stuck to the class | CSS Styling |
| 3 Oct 2026 | Added real images, removed `<br>` spacers and improved the responsive layout | Images / Responsive Design |
| 4 Oct 2026 | Added images and some small updates | Images |
| 4 Oct 2026 | Updated README with Part 2 details and AI links | Documentation |
| 4 Oct 2026 | Reorganised the CSS into labelled sections and replaced the remaining `<br>` spacers on the About page with CSS | CSS Styling |

## References

### Images

Pexels, n.d. Photo of a man welding. [Photograph]. Available at: https://www.pexels.com/photo/photo-of-a-man-welding-27102112/ [Accessed: 18 August 2026].

Pexels, n.d. Welding-related photograph. [Photograph]. Available at: https://www.pexels.com/search/welding/ [Accessed: 25 August 2026].

Pexels, n.d. 3D printing-related photograph. [Photograph]. Available at: https://www.pexels.com/search/3d%20printing/ [Accessed: 25 August 2026].

Pexels, n.d. CAD-related photograph. [Photograph]. Available at: https://www.pexels.com/search/cad/ [Accessed: 25 August 2026].

Pexels, n.d. CNC-related photograph. [Photograph]. Available at: https://www.pexels.com/search/cnc/ [Accessed: 25 August 2026].

*(Note: several images were sourced via mobile share links that returned Pexels category search pages rather than individual photo permalinks. These are cited at the category level per the disclaimer below. Original image set sourced 18 August 2026; additional images sourced 25 August 2026.)*

### Icons (SVG)

SVG Repo, n.d. Tools. [SVG icon]. CC0 License. Available at: https://www.svgrepo.com/svg/476487/tools [Accessed: 18 August 2026].

Filatov, K., n.d. Instagram. [SVG icon]. Gentlecons Interface Icons collection. CC Attribution License. Available at: https://www.svgrepo.com/svg/521711/instagram [Accessed: 18 August 2026].

Filatov, K., n.d. WhatsApp. [SVG icon]. Gentlecons Interface Icons collection. CC Attribution License. Available at: https://www.svgrepo.com/svg/521923/whatsapp [Accessed: 4 October 2026].

Dazzle UI, n.d. Phone. [SVG icon]. Dazzle Line Icons collection. CC Attribution License. Available at: https://www.svgrepo.com/svg/533285/phone [Accessed: 18 August 2026].

Dazzle UI, n.d. Mail Alt. [SVG icon]. Dazzle Line Icons collection. CC Attribution License. Available at: https://www.svgrepo.com/svg/533194/mail-alt [Accessed: 18 August 2026].

bypeople, n.d. Profile Round 1342. [SVG icon]. Minimal UI Icons collection. PD License. Available at: https://www.svgrepo.com/svg/512729/profile-round-1342 [Accessed: 18 August 2026].

### Tools & Resources

NamesNerd, n.d. South African Name Generator. [Online tool]. Available at: https://www.namesnerd.com/people/south-african-name-generator/ — used to generate fictional team member names for the About Us page.

Phone Number Extractor, n.d. Number Generator. [Online tool]. Available at: https://phonenumberextractor.com/numbergenerator/extractionresult.aspx — used to generate a fictional South African contact number for the Contact page.

Google My Maps, n.d. [Online tool]. Available at: https://www.google.com/maps/d/u/0/edit?mid=1pia3fwbkqTUZsUVl3d2pEByEDmAcc-8 — used to create the embedded map on the Contact page.

W3Schools, n.d. [Online resource]. Available at: https://www.w3schools.com/ — reference resource for HTML syntax, semantic elements, and general web development guidance throughout the build.

MDN Web Docs, n.d. rel="preconnect". [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preconnect [Accessed: 3 October 2026] — used to understand the preconnect hint added to the Contact page.

Google Fonts, n.d. Montserrat. [Font]. Available at: https://fonts.google.com/specimen/Montserrat [Accessed: 4 October 2026] — used for the site's typography (Montserrat Regular and Bold).

### Referencing & Institutional Sources

The Independent Institute of Education (IIE), 2026. Harvard-Anglia style reference guide — adapted for The IIE. [pdf] The Independent Institute of Education. Available at: [IIE internal resource] [Accessed: 4 October 2026].

The Independent Institute of Education (IIE), 2026. Guidelines for responsible AI use at The IIE (PDIIE023). [pdf] The Independent Institute of Education. Available at: [IIE internal resource] [Accessed: 4 October 2026].

The Independent Institute of Education (IIE), 2025. Policy on the Integration of Artificial Intelligence (AI) in Teaching and Learning Practices (IIE033). [pdf] The Independent Institute of Education. Available at: https://irp.cdn-website.com/3f7b6868/files/uploaded/IIE033+Policy+on+the+Integration+of+Artificial+Intelligence+%28AI%29+in+Teaching+and+Learning+Practices+2026.pdf [Accessed: 3 October 2026].

Anthropic. 2026a. Claude (claude-sonnet-4-6). [Large language model]. Available at: [https://claude.ai/share/4b129e95-cd00-4497-86d3-9ca3cd2af4b1] [Accessed: 4 October 2026].

Anthropic. 2026b. Claude (claude-sonnet-5-5). [Large language model]. Part 2 chat. Available at: https://claude.ai/share/2adf8373-a471-4ca3-9f37-c39362904478 [Accessed: 4 October 2026].

Google. 2026a. Gemini. [Large language model]. Prompt: logo image generation for M&P Customs. Available at: https://gemini.google.com/app/d4053b8a2a8efb6f [Accessed: 3 October 2026].

Google. 2026b. Gemini. [Large language model]. Prompt: logo image generation for M&P Customs. Available at: https://gemini.google.com/app/794f559145096723 [Accessed: 3 October 2026].

xAI. 2026. Grok. [Large language model]. Prompt: image generation of people for the M&P Customs website. Available at: https://grok.com/project/c86a9fe4-1160-4165-b951-d566927d2154?tab=conversations [Accessed: 3 October 2026].

⚠️ **Disclaimer:** All references above must be verified by the student before submission. Claude may make errors in referencing. It is the student's responsibility to ensure all references are accurate and comply with the IIE Harvard-Anglia Style Guide (2026).

## Disclosure of AI Usage in my Assessment

**Part 2 – Designing the Visuals (M&P Customs website)**

| Section within the assessment | AI tool used | Purpose | Date | Link to chat |
| --- | --- | --- | --- | --- |
| Logo image (shown in the header on every page) | Google Gemini | Generating the M&P Customs logo image | 3 October 2026 | https://gemini.google.com/app/d4053b8a2a8efb6f and https://gemini.google.com/app/794f559145096723 |
| Team member images (About page) | xAI Grok | Generating images of the three team members, as the royalty-free images of people I found were not professional enough | 3 October 2026 | https://grok.com/project/c86a9fe4-1160-4165-b951-d566927d2154?tab=conversations |
| Part 2 README and references | Claude (claude-sonnet-5-5) | Formatting, spelling and grammar in the README, reference formatting, and feedback on my CSS and write-up, all content and code are my own (Anthropic, 2026b) | 3 and 4 October 2026 | https://claude.ai/share/2adf8373-a471-4ca3-9f37-c39362904478 |

## AI Interaction Disclosure
*(per PDIIE023 — see also annexure in Website Project Proposal document)*

Google Gemini was used to generate the M&P Customs logo image for Part 2 (Google, 2026a; Google, 2026b). The chats are listed in the References section.

xAI Grok was used to generate the images of the team members on the website (xAI, 2026). I found some royalty-free images of people, but they were not professional enough for my liking. Grok has no image-generation limit or a wider limit than most other companies, and the AI-generated images came out perfectly the first time, so I used them instead. The chat is listed in the References section.

Anthropic Claude was used for Part 2 to format the README and its references, fix spelling and grammar, and give feedback on my CSS and write-up (Anthropic, 2026b). All content and code are my own. Claude was also used for Part 1 (Anthropic, 2026a). The chats are listed in the References section.

**Workflow note:** I did most of the Part 2 work on 3 October 2026, sitting the whole day and taking minimum breaks. My workflow is to sit down and work until I can't use AI for assistance, so that by the time I am almost done I have a spare day. It works well for me. I did not use AI for Part 2 before 3 October 2026; the earlier Part 2 work (21 and 25 September) was done without AI. I only used AI for Part 1 and on 3 October 2026.

---

## AI Interaction Rules — Claude

1. **Hints Only — No Doing the Work.** Claude may only assist through hints, guidance, and feedback. Claude must never complete assignment questions, write pseudocode, draw flowcharts, or produce any academic content on the student's behalf, under any circumstance.
2. **Attempt First Policy.** The student must always attempt every task first before Claude provides assistance. If the student has genuinely attempted a task more than once and is still stuck, Claude may provide a more detailed hint.
3. **Document Summaries.** Claude is permitted to summarise uploaded documents or study material to help the student understand the content.
4. **Helpful Links.** Claude may provide links to relevant websites or resources that support the student's learning.
5. **Formatting & Presentation.** The student may ask Claude to format and present completed work. Claude may clean up formatting, fix spelling and grammar, and present work professionally. Claude must never add new content, change answers, or alter any logic. All academic content remains the student's own. Claude must remind the student to disclose AI formatting use in their "Disclosure of AI Usage in my Assessment" annexure per PDIIE023.
6. **Claude Reference — Every Document.** Every completed document must include a correctly formatted Harvard-Anglia IIE reference to Claude, including the chat link from that specific conversation.
7. **Referencing Disclaimer.** Whenever Claude assists with or produces a reference, a disclaimer must be included noting that all references must be verified by the student before submission.
8. **Permanent Reference List.** Every completed document must include references to the IIE Harvard-Anglia style guide and the PDIIE023 guidelines.
9. **Rules Appendix.** When completing any document, Claude must include these rules in full at the end of the document as an appendix titled "AI Interaction Rules — Claude."