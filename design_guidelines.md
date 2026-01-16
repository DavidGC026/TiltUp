# TiltUp Learning Platform - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern e-learning platforms like Coursera and Udemy, combined with the clean, structured aesthetics of construction industry tools. The design emphasizes clarity, accessibility, and professional appeal suitable for construction education.

## Color Palette
**Primary Colors:**
- Navy Blue: #003366 (primary actions, headers)
- Deep Navy: #1e3a5f (secondary elements, hover states)
- Gray: #6c757d (body text, secondary information)
- Light Gray: #e9ecef (backgrounds, dividers)
- White: #ffffff (cards, content backgrounds)
- Success Green: #28a745 (completed modules)

## Typography System
**Font Families:**
- Primary: 'Inter' (Google Fonts) - headings, UI elements
- Secondary: 'Open Sans' (Google Fonts) - body text, descriptions

**Hierarchy:**
- Platform Title: 3xl-4xl, font-bold, navy blue
- Module Titles: xl-2xl, font-semibold
- Section Headers: lg-xl, font-medium
- Body Text: base-lg, font-normal
- Metadata/Status: sm-base, font-medium

## Layout System
**Spacing Units**: Tailwind classes using 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-12 to py-20
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8

**Container Widths:**
- Main container: max-w-7xl mx-auto
- Content sections: max-w-6xl
- Module cards: responsive grid

## Core Components

### Navigation Header
- Fixed top navigation with TiltUp logo (left)
- Clean horizontal layout with minimal items
- Search bar (center-right)
- User profile/settings icon (far right)
- Height: 16-20 units with subtle bottom border
- Background: white with light shadow

### Module Grid System
**Primary Layout:**
- Responsive grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Card-based design showcasing construction modules
- Equal height cards for visual consistency

**Module Cards:**
- White background with subtle shadow and border radius
- Module image at top (16:9 aspect ratio, 200-250px height)
- Module number badge (top-left overlay on image)
- Module title below image (font-semibold, navy)
- Brief description (2-3 lines, gray text)
- Progress indicator bar at bottom
- Completion status icon/badge
- Hover effect: subtle lift (transform scale) and deeper shadow

### Module Detail View
**Hero Section:**
- Full-width module image (construction-related)
- Gradient overlay (navy to transparent) for text readability
- Module title and number overlaid (white text)
- Breadcrumb navigation above title
- Height: 40vh to 50vh

**Content Layout:**
- Two-column layout on desktop (70/30 split)
- Main content area: lesson materials, videos, resources
- Sidebar: module navigation, progress tracker, related modules
- Stack to single column on mobile

### Progress Tracking System
- Visual progress bars showing completion percentage
- Checkmark icons for completed modules
- Lock icons for locked/unavailable modules
- Sequential unlocking visual indicators
- Overall course progress dashboard

### Content Cards
- Lesson cards within modules
- Video thumbnail with play overlay
- Reading material cards with document icons
- Quiz/assessment cards with distinct styling
- Time estimates for each lesson component

## Images
**Module Images:**
- Each module card requires a representative construction image
- Examples: concrete pouring, steel framing, wall construction, equipment
- Images should be professional, high-quality photographs
- Consistent aspect ratio (16:9) across all cards
- Overlay gradient on cards to ensure text readability

**Hero Image:**
- Large hero image on main dashboard showing construction site
- Professional, inspiring construction scene
- Height: 40vh with navy gradient overlay
- Title "CONSTRUCCIÓN DE TILT-UP" overlaid on hero

**Lesson Content Images:**
- Instructional diagrams and photos within lessons
- Before/after comparisons for techniques
- Equipment close-ups and safety illustrations

## Component Library

### Buttons
- Primary: Navy blue background, white text, medium padding, rounded corners
- Secondary: White background, navy border and text
- Disabled: Light gray with reduced opacity
- All buttons: font-semibold, px-6 py-3, smooth transitions

### Status Badges
- Completed: Green background, white checkmark icon
- In Progress: Blue background with percentage
- Locked: Gray background with lock icon
- Small, rounded-full design with icon + text

### Search & Filters
- Prominent search bar in header
- Filter dropdown for module categories
- Sort options (newest, progress, difficulty)
- Clean, minimal design matching overall aesthetic

### Forms (if needed)
- Labeled inputs with navy blue labels
- Clean, bordered input fields
- Proper spacing and alignment
- Validation states with colored borders

## Accessibility Features
- High contrast between navy and white backgrounds
- ARIA labels for all interactive elements
- Keyboard navigation support for all modules
- Focus states clearly visible (navy outline)
- Screen reader friendly progress indicators
- Alt text for all module images

## Interaction Patterns
- Smooth transitions (200-300ms) on hover states
- Card elevation changes on interaction
- Progressive disclosure for module content
- Clear visual feedback for completed actions
- Loading states for async content

## Responsive Behavior
**Desktop (lg+):** 3-4 column grid, full sidebar visible
**Tablet (md):** 2 column grid, collapsible sidebar
**Mobile (base):** Single column, hamburger menu, stacked content

## Key Design Principles
1. **Clarity First**: Construction education requires clear, unambiguous presentation
2. **Progress Visibility**: Always show learner progress and next steps
3. **Professional Aesthetic**: Match the serious nature of construction training
4. **Accessibility**: Ensure all learners can access content easily
5. **Minimal Distractions**: Focus on learning content, avoid unnecessary animations