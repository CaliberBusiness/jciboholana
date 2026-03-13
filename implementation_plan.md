# Magazine Format Website Plan

This plan aims to refactor the JCI Boholana Kisses website into an editorial/magazine format, enhancing the storytelling and presenting the organization's impact effectively.

## Proposed Changes

### Global Styling and Typography (`globals.css`)
- Review and update font families to ensure a modern, premium look (e.g., using 'Inter', 'Outfit', or similar Google Fonts).
- Adjust color palettes and CSS variables to fit the magazine aesthetic (more whitespace, high contrast, elegant typography).

### Hero Component (`src/components/Hero.jsx` & `Hero.module.css`)
- Redesign the Hero component to resemble a magazine front cover.
- Use a full-screen, high-quality background image or slider.
- Add bold typography for titles like "ISSUE NO. 12 / MARCH 2026".
- Strong, well-designed Call-To-Action (CTA) buttons.

### Navbar Component (`src/components/Navbar.jsx` & `Navbar.module.css`)
- Give the Navbar an editorial touch (e.g., transparent background until scrolled, crisp logo, minimal links).
- Make sure navigation aligns with the new section names (e.g., The Cover, Voices, Impact, Partners).

### About Component (`src/components/About.jsx` & `About.module.css`)
- Format the About section as an editorial manifesto.
- Use a split-screen or alternating block layout.
- Emphasize the text-pull quotes.

### Leadership / Voices Component (`src/components/Leadership.jsx` & `Leadership.module.css`)
- Redesign the Board of Directors into an elegant editorial portrait grid.
- Integrate the incoming messages (NP, NSG, Sister Chapters) as a slider/carousel of quotes integrated into the Leadership section.

### Impact Component (`src/components/Programs.jsx` & `Programs.module.css`)
- Redesign the "Programs" section into an "Impact Portfolio" (Pages 16-22).
- Use an alternating asymmetrical layout (left image/right text, then right image/left text) to mimic feature articles.
- Include projects like "Bags to School", "Maayung Panglawas", and "Tabula Rasa".

### Partners Component (`src/components/Partners.jsx` & `Partners.module.css`)
- Create an "Our Partners" editorial grid (Pages 23-31).
- Showcase sponsors like Medhance, Nuat Thai, PJ Farm, etc., in a clean, masonry or cascading grid format.

## Verification Plan
### Automated Tests
- Build test using `npm run build` to ensure there are no compilation errors.

### Manual Verification
- View the updated website locally via `npm run dev` and ensure the Hero and Navbar correspond to the editorial design.
