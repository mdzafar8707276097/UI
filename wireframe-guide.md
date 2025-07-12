# Gulf Jobs Portal - Wireframe Guide

## 📐 Page Structure Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        HEADER (Fixed)                           │
│  [Logo] [Home] [Jobs] [Employers] [About] [Contact] [Sign In] [Sign Up] │
├─────────────────────────────────────────────────────────────────┤
│                        HERO SECTION                             │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐│
│  │         TEXT CONTENT        │  │      VISUAL GRAPHICS        ││
│  │  • Hero Title               │  │  • Floating Cards           ││
│  │  • Subtitle                 │  │  • Animated Elements        ││
│  │  • Search Bar               │  │  • Statistics Display       ││
│  │  • Popular Keywords         │  │                             ││
│  │  • CTA Buttons              │  │                             ││
│  └─────────────────────────────┘  └─────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                     CATEGORIES SECTION                          │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Section Header                           ││
│  │              "Browse by Category"                           ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │ [Icon]  │ │ [Icon]  │ │ [Icon]  │ │ [Icon]  │              │
│  │Category1│ │Category2│ │Category3│ │Category4│              │
│  │JobCount │ │JobCount │ │JobCount │ │JobCount │              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │ [Icon]  │ │ [Icon]  │ │ [Icon]  │ │ [Icon]  │              │
│  │Category5│ │Category6│ │Category7│ │Category8│              │
│  │JobCount │ │JobCount │ │JobCount │ │JobCount │              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
├─────────────────────────────────────────────────────────────────┤
│                     EMPLOYERS SECTION                           │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Section Header                           ││
│  │           "Trusted by Leading Companies"                    ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │ [LOGO]  │ │ [LOGO]  │ │ [LOGO]  │ │ [LOGO]  │              │
│  │COMPANY1 │ │COMPANY2 │ │COMPANY3 │ │COMPANY4 │              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │ [LOGO]  │ │ [LOGO]  │ │ [LOGO]  │ │ [LOGO]  │              │
│  │COMPANY5 │ │COMPANY6 │ │COMPANY7 │ │COMPANY8 │              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
├─────────────────────────────────────────────────────────────────┤
│                   TESTIMONIALS SECTION                          │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Section Header                           ││
│  │                 "Success Stories"                           ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐  │
│  │ ★★★★★          │ │ ★★★★★          │ │ ★★★★★          │  │
│  │ "Testimonial   │ │ "Testimonial   │ │ "Testimonial   │  │
│  │  text here..."  │ │  text here..."  │ │  text here..."  │  │
│  │                 │ │                 │ │                 │  │
│  │ [Avatar] Name   │ │ [Avatar] Name   │ │ [Avatar] Name   │  │
│  │         Title   │ │         Title   │ │         Title   │  │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                         FOOTER                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ [Logo & Description] [Job Seekers] [Employers] [Company]    ││
│  │ • About Text         • Browse Jobs  • Post Jobs  • About Us ││
│  │ • Social Links       • Resume       • Find Talent• Contact  ││
│  │                      • Career Advice• Pricing   • Privacy  ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              © 2024 Gulf Jobs. All rights reserved.        ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

## 🎨 Component Breakdown

### 1. Header Component (1200px max-width)
```
┌─────────────────────────────────────────────────────────────────┐
│ [🏢] Gulf Jobs    [Home] [Jobs] [Employers] [About] [Contact]   │
│                                          [Sign In] [Sign Up]    │
└─────────────────────────────────────────────────────────────────┘
Height: 80px
Background: Semi-transparent white with blur
Position: Fixed top
```

### 2. Hero Section (Full viewport height)
```
┌─────────────────────────────────────────────────────────────────┐
│ GRADIENT BACKGROUND WITH PATTERN                                │
│                                                                 │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐│
│  │ Find Your Dream Job         │  │    ┌─────────────────────┐   ││
│  │ in the Gulf Region          │  │    │  [💼] 50,000+      │   ││
│  │                             │  │    │     Active Jobs    │   ││
│  │ Connect with top employers  │  │    └─────────────────────┘   ││
│  │ across Saudi Arabia...      │  │                             │
│  │                             │  │    ┌─────────────────────┐   ││
│  │ ┌─────────────────────────┐ │  │    │  [👥] 100,000+     │   ││
│  │ │ [🔍] Keywords | Cat | Loc│ │  │    │    Job Seekers     │   ││
│  │ │              [Search]   │ │  │    └─────────────────────┘   ││
│  │ └─────────────────────────┘ │  │                             │
│  │                             │  │    ┌─────────────────────┐   ││
│  │ Popular: [Engineer] [Nurse] │  │    │  [🏢] 5,000+       │   ││
│  │                             │  │    │    Companies       │   ││
│  │ [Find Jobs] [Post a Job]    │  │    └─────────────────────┘   ││
│  └─────────────────────────────┘  └─────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 3. Search Bar Component (Inside Hero)
```
┌─────────────────────────────────────────────────────────────────┐
│ WHITE CONTAINER WITH SHADOW                                     │
│ ┌─────────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐│
│ │ [🔍] Keywords   │ │ [📋] Category│ │ [📍] Location│ │ Search  ││
│ │ Job title...    │ │ All Categories│ │ All Locations│ │ Jobs    ││
│ └─────────────────┘ └─────────────┘ └─────────────┘ └─────────┘│
└─────────────────────────────────────────────────────────────────┘
Padding: 32px
Border-radius: 16px
Grid: 2fr 1fr 1fr auto
```

### 4. Category Card Component
```
┌─────────────────────────────────────────┐
│ WHITE CARD WITH SHADOW                  │
│                                    [→]  │
│  ┌─────────┐                           │
│  │  [🔨]   │  Construction              │
│  │ ICON    │  12,450 jobs available     │
│  └─────────┘                           │
│                                         │
└─────────────────────────────────────────┘
Size: 280px minimum width
Padding: 32px
Border-radius: 16px
Icon: 60x60px colored background
```

### 5. Testimonial Card Component
```
┌─────────────────────────────────────────────────────────┐
│ WHITE CARD WITH SHADOW                                  │
│                                                         │
│  ★★★★★                                                 │
│                                                         │
│  "I found my dream job as a Software Engineer in       │
│   Dubai within 2 weeks of signing up. The platform     │
│   made the entire process seamless and professional."   │
│                                                         │
│  ┌─────────┐  Ahmed Hassan                              │
│  │ [AVATAR]│  Software Engineer at TechCorp             │
│  └─────────┘                                           │
└─────────────────────────────────────────────────────────┘
Size: 350px minimum width
Padding: 32px
Border-radius: 16px
Avatar: 50x50px circular
```

### 6. Floating Statistics Cards (Hero)
```
┌─────────────────────────────────┐
│ WHITE CARD WITH SHADOW          │
│                                 │
│  [💼]  50,000+                  │
│        Active Jobs              │
│                                 │
└─────────────────────────────────┘
Size: Auto-width
Padding: 24px
Border-radius: 12px
Animation: Floating up/down
```

## 📱 Mobile Layout Changes

### Header (Mobile)
```
┌─────────────────────────────────────────┐
│ [🏢] Gulf Jobs              [☰]        │
└─────────────────────────────────────────┘
Navigation collapses to hamburger menu
```

### Hero (Mobile)
```
┌─────────────────────────────────────────┐
│ GRADIENT BACKGROUND                     │
│                                         │
│  Find Your Dream Job                    │
│  in the Gulf Region                     │
│                                         │
│  Connect with top employers across...   │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ [🔍] Keywords                      ││
│  │ Job title, keywords...             ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ [📋] All Categories                ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ [📍] All Locations                 ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │           Search Jobs               ││
│  └─────────────────────────────────────┘│
│                                         │
│  Popular: [Engineer] [Nurse] [Teacher]  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │           Find Jobs                 ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │           Post a Job                ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
Search bar stacks vertically
Graphics section hidden
```

### Categories (Mobile)
```
┌─────────────────────────────────────────┐
│              Section Header             │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ Category Card 1                     ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ Category Card 2                     ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ Category Card 3                     ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │ Category Card 4                     ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
Single column layout
```

## 🎯 Figma Frame Sizes

### Desktop Frames
- **Full Page**: 1440px width (standard desktop)
- **Content Container**: 1200px max-width
- **Hero Section**: 1440px × 1024px
- **Category Cards**: 280px × 200px
- **Testimonial Cards**: 350px × 250px

### Mobile Frames
- **Mobile Page**: 375px width (iPhone X/11/12)
- **Small Mobile**: 320px width (iPhone 5/SE)
- **Mobile Hero**: 375px × 600px
- **Mobile Cards**: 335px width (full width minus margins)

## 🔧 Figma Implementation Steps

### Step 1: Setup
1. Create new Figma file: "Gulf Jobs Portal"
2. Set up artboards: 1440px (Desktop) and 375px (Mobile)
3. Import Inter font family
4. Create color palette with exact hex values
5. Set up layout grids (12-column desktop, 4-column mobile)

### Step 2: Components
1. Create master components for buttons, cards, and form elements
2. Build the header component with navigation
3. Design the search bar component
4. Create category card variants
5. Build testimonial card component
6. Design floating statistics cards

### Step 3: Layouts
1. Build hero section with gradient background
2. Create category grid section
3. Design employer showcase grid
4. Build testimonials section
5. Create footer with multiple columns

### Step 4: Responsive Design
1. Create mobile variants of all components
2. Adjust layouts for different screen sizes
3. Test navigation and interaction flows
4. Ensure proper spacing and typography scales

### Step 5: Prototyping
1. Add hover states and interactions
2. Create smooth transitions between states
3. Add mobile menu animations
4. Test user flow from search to results

This wireframe guide provides the exact layout structure and component hierarchy needed to recreate the Gulf Jobs portal design in Figma with precision.