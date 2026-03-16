
## Michael Anticoli – Interactive Resume

A dark-studio themed, single-page scrolling resume with music/tech visual language.

### Visual Design
- **Background**: Deep black (`#0a0a0a`) with subtle grid or noise texture
- **Accents**: Electric cyan (`#00f5ff`) with soft glow/bloom effects
- **Typography**: Monospace/code-style for labels, clean sans-serif for content
- **Dividers**: Animated waveform/EQ bar style separators between sections

### Sections & Structure

**1. Hero Header**
- Name in large, bold lettering with a subtle glow animation
- Title + specialties as animated typewriter or fade-in text
- Animated **waveform visualizer** (SVG, looping sine wave) beneath the name
- Contact links (email, phone, LinkedIn, Portfolio) as glowing icon-buttons

**2. Summary**
- Scrolls in with fade-up animation
- Left border in cyan, styled like a studio console note

**3. Skills Sections**
- "Audio & Music Technology Skills" rendered as animated **EQ bars** — each skill has a bar that fills on scroll-into-view
- "Tools & Software" shown as glowing pill/chip tags in a flowing grid

**4. Experience**
- Each role on a vertical timeline with a glowing dot connector
- Role titles in cyan, companies/dates in muted gray
- Bullet points fade in staggered when the section enters the viewport

**5. Education & Certification**
- Clean card-style blocks at the bottom
- Subtle pulsing glow on the certification badge

### Animations
- **Entrance animations**: All sections use Intersection Observer to fade/slide in as user scrolls
- **Waveform**: Looping animated SVG sine wave in the hero
- **EQ bars**: Fill animation triggered on scroll
- **Hover effects**: Glow intensifies on skill chips, links pulse cyan
- **Section dividers**: Subtle animated horizontal line/waveform

### Interactivity
- Hover effects on all skill tags and links
- Contact links are functional (mailto, tel, URLs)
- Smooth scroll navigation between sections

### Color System Update
- Update `index.css` CSS variables to dark studio palette
- Background: near-black, primary accent: electric cyan, muted: dark gray
