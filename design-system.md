# Gulf Jobs Portal - Design System

## 🎨 Color Palette

### Primary Colors
- **Primary Blue**: #2563eb (rgb(37, 99, 235))
- **Primary Blue Hover**: #1d4ed8 (rgb(29, 78, 216))
- **Secondary Amber**: #fbbf24 (rgb(251, 191, 36))
- **Secondary Amber Hover**: #f59e0b (rgb(245, 158, 11))

### Category Colors
- **Construction**: #ef4444 (rgb(239, 68, 68))
- **Healthcare**: #10b981 (rgb(16, 185, 129))
- **Hospitality**: #f59e0b (rgb(245, 158, 11))
- **Administration**: #8b5cf6 (rgb(139, 92, 246))
- **Engineering**: #06b6d4 (rgb(6, 182, 212))
- **Finance**: #84cc16 (rgb(132, 204, 22))
- **Education**: #f97316 (rgb(249, 115, 22))
- **Retail**: #ec4899 (rgb(236, 72, 153))

### Neutral Colors
- **Gray 900**: #1f2937 (rgb(31, 41, 55))
- **Gray 800**: #374151 (rgb(55, 65, 81))
- **Gray 700**: #4b5563 (rgb(75, 85, 99))
- **Gray 600**: #6b7280 (rgb(107, 114, 128))
- **Gray 500**: #9ca3af (rgb(156, 163, 175))
- **Gray 400**: #d1d5db (rgb(209, 213, 219))
- **Gray 300**: #e5e7eb (rgb(229, 231, 235))
- **Gray 200**: #f3f4f6 (rgb(243, 244, 246))
- **Gray 100**: #f9fafb (rgb(249, 250, 251))
- **Gray 50**: #f8fafc (rgb(248, 250, 252))

### Gradient Colors
- **Hero Background**: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- **Button Gradient**: linear-gradient(45deg, #fbbf24, #f59e0b)

## 📝 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Font Sizes & Weights
- **Hero Title**: 56px (3.5rem), Font Weight: 700
- **Section Titles**: 40px (2.5rem), Font Weight: 700
- **Card Titles**: 24px (1.5rem), Font Weight: 600
- **Body Large**: 20px (1.25rem), Font Weight: 400
- **Body Regular**: 16px (1rem), Font Weight: 400
- **Body Small**: 14px (0.875rem), Font Weight: 400
- **Button Text**: 16px (1rem), Font Weight: 600
- **Navigation**: 16px (1rem), Font Weight: 500

### Line Heights
- **Headings**: 1.2
- **Body Text**: 1.6
- **Button Text**: 1.4

## 📐 Spacing System

### Base Unit: 4px

### Spacing Scale
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 12px (0.75rem)
- **lg**: 16px (1rem)
- **xl**: 24px (1.5rem)
- **2xl**: 32px (2rem)
- **3xl**: 48px (3rem)
- **4xl**: 64px (4rem)
- **5xl**: 80px (5rem)
- **6xl**: 96px (6rem)

### Component Spacing
- **Card Padding**: 32px (2rem)
- **Button Padding**: 16px 32px (1rem 2rem)
- **Input Padding**: 16px (1rem)
- **Section Padding**: 96px 0 (6rem 0)

## 🔲 Border Radius

- **Small**: 8px (0.5rem)
- **Medium**: 12px (0.75rem)
- **Large**: 16px (1rem)
- **Circle**: 50%

## 📱 Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Max Width**: 1200px

## 🧩 Component Specifications

### Header/Navigation
- **Height**: 80px
- **Background**: rgba(255, 255, 255, 0.95) with backdrop-filter: blur(10px)
- **Logo Size**: 24px font-size with 28px icon
- **Nav Links**: 16px font-size, 500 weight
- **Buttons**: 12px 24px padding

### Hero Section
- **Min Height**: 100vh
- **Background**: Linear gradient with pattern overlay
- **Content Grid**: 1fr 1fr on desktop, 1fr on mobile
- **Gap**: 64px (4rem)

### Search Bar
- **Container**: White background, 32px padding, 16px border-radius
- **Grid**: 2fr 1fr 1fr auto columns
- **Input Height**: 56px
- **Border**: 2px solid #e2e8f0
- **Focus Border**: 2px solid #2563eb

### Category Cards
- **Grid**: repeat(auto-fit, minmax(280px, 1fr))
- **Padding**: 32px (2rem)
- **Border Radius**: 16px
- **Icon Size**: 60x60px with 24px font-size
- **Hover Transform**: translateY(-8px)

### Testimonial Cards
- **Grid**: repeat(auto-fit, minmax(350px, 1fr))
- **Padding**: 32px (2rem)
- **Border Radius**: 16px
- **Avatar Size**: 50x50px

### Floating Cards (Hero)
- **Padding**: 24px (1.5rem)
- **Border Radius**: 12px
- **Icon Size**: 32px (2rem)
- **Shadow**: 0 10px 30px rgba(0, 0, 0, 0.15)

## 🎯 Interactive States

### Buttons
- **Default**: Primary color background
- **Hover**: Darker shade + translateY(-2px) + shadow
- **Focus**: 2px outline with primary color
- **Active**: Slightly darker + translateY(0)

### Cards
- **Default**: Subtle shadow
- **Hover**: Elevated shadow + translateY(-4px or -8px)
- **Focus**: Outline for accessibility

### Links
- **Default**: Gray-800 color
- **Hover**: Primary blue + underline animation
- **Focus**: Outline for accessibility

## 📋 Component Library

### 1. Buttons
- **Primary Button**: Blue background, white text
- **Secondary Button**: Transparent background, blue border and text
- **Large Button**: Increased padding and font size
- **Icon Button**: Circular button with icon

### 2. Form Elements
- **Input Field**: Gray background, border, icon support
- **Select Dropdown**: Custom styled dropdown
- **Search Bar**: Multi-field search component

### 3. Cards
- **Category Card**: Icon, title, description, hover effects
- **Testimonial Card**: Stars, quote, author info
- **Floating Card**: Statistics with icon and animation
- **Employer Logo Card**: Company logo with hover effects

### 4. Navigation
- **Header Navigation**: Logo, menu items, auth buttons
- **Mobile Menu**: Hamburger menu with slide animation

### 5. Sections
- **Hero Section**: Title, subtitle, search, CTA buttons
- **Category Grid**: Responsive grid of category cards
- **Testimonials**: Grid of testimonial cards
- **Employer Showcase**: Logo grid with hover effects

## 🎨 Design Tokens for Figma

### Create these as Figma Variables:

#### Colors
```
Primary/Blue/500: #2563eb
Primary/Blue/600: #1d4ed8
Secondary/Amber/400: #fbbf24
Secondary/Amber/500: #f59e0b
```

#### Typography
```
Font/Family/Primary: Inter
Font/Size/Hero: 56px
Font/Size/H2: 40px
Font/Size/H3: 24px
Font/Size/Body: 16px
Font/Weight/Bold: 700
Font/Weight/Semibold: 600
Font/Weight/Medium: 500
Font/Weight/Regular: 400
```

#### Spacing
```
Space/XS: 4px
Space/SM: 8px
Space/MD: 12px
Space/LG: 16px
Space/XL: 24px
Space/2XL: 32px
Space/3XL: 48px
Space/4XL: 64px
Space/5XL: 80px
Space/6XL: 96px
```

#### Border Radius
```
Radius/SM: 8px
Radius/MD: 12px
Radius/LG: 16px
Radius/Full: 50%
```

## 📐 Layout Grid

### Desktop (1200px max-width)
- **Columns**: 12
- **Gutter**: 24px
- **Margins**: 24px

### Tablet (768px - 1024px)
- **Columns**: 8
- **Gutter**: 20px
- **Margins**: 20px

### Mobile (320px - 768px)
- **Columns**: 4
- **Gutter**: 16px
- **Margins**: 16px

## 🎭 Animation Guidelines

### Timing Functions
- **Ease**: cubic-bezier(0.4, 0, 0.2, 1)
- **Ease-in**: cubic-bezier(0.4, 0, 1, 1)
- **Ease-out**: cubic-bezier(0, 0, 0.2, 1)

### Durations
- **Fast**: 150ms
- **Normal**: 300ms
- **Slow**: 500ms

### Transforms
- **Hover Lift**: translateY(-4px) or translateY(-8px)
- **Button Press**: translateY(0)
- **Scale**: scale(1.05) for subtle emphasis

## 🔧 Implementation Notes

### Figma Setup Process:
1. Create a new Figma file
2. Set up the color palette using the hex values above
3. Import Inter font family
4. Create text styles for each typography scale
5. Build components for buttons, cards, and form elements
6. Use the layout grid specifications
7. Create frames for each section (Hero, Categories, Testimonials, etc.)
8. Apply the spacing system consistently

### Asset Requirements:
- Company logos (200x80px recommended)
- User avatars (50x50px, circular)
- Category icons (use Font Awesome or similar)
- Background patterns (optional SVG overlays)

This design system provides all the specifications needed to recreate the Gulf Jobs portal design in Figma with pixel-perfect accuracy.