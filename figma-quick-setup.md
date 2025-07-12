# Figma Quick Setup Guide for Gulf Jobs Portal

## 🚀 30-Minute Figma Setup

### Step 1: Create New File (2 minutes)
1. Open Figma → Create new file
2. Name it "Gulf Jobs Portal"
3. Create 2 frames:
   - Desktop: 1440px × 4000px
   - Mobile: 375px × 3000px

### Step 2: Setup Design System (5 minutes)
1. **Colors** (Create color styles):
   ```
   Primary Blue: #2563eb
   Secondary Amber: #fbbf24
   Gray 900: #1f2937
   Gray 100: #f9fafb
   White: #ffffff
   ```

2. **Typography** (Create text styles):
   ```
   Hero Title: Inter, 56px, Bold
   Section Title: Inter, 40px, Bold
   Card Title: Inter, 24px, SemiBold
   Body Text: Inter, 16px, Regular
   Button Text: Inter, 16px, SemiBold
   ```

3. **Effects** (Create effect styles):
   ```
   Card Shadow: 0 4px 6px rgba(0,0,0,0.05)
   Button Shadow: 0 8px 16px rgba(37,99,235,0.3)
   ```

### Step 3: Create Master Components (10 minutes)

#### 3.1 Button Component
```
Primary Button:
- Size: 160px × 48px
- Background: #2563eb
- Text: White, 16px, SemiBold
- Border-radius: 8px
- Padding: 16px 32px

Secondary Button:
- Size: 160px × 48px  
- Background: Transparent
- Border: 2px solid #2563eb
- Text: #2563eb, 16px, SemiBold
- Border-radius: 8px
```

#### 3.2 Input Field Component
```
Input Field:
- Size: 280px × 56px
- Background: #f8fafc
- Border: 2px solid #e2e8f0
- Border-radius: 8px
- Padding: 16px
- Icon: 16px, #64748b
- Placeholder: 16px, #9ca3af
```

#### 3.3 Category Card Component
```
Category Card:
- Size: 280px × 200px
- Background: White
- Border-radius: 16px
- Shadow: Card Shadow
- Padding: 32px
- Icon: 60px × 60px colored square
- Title: 24px, SemiBold, #1f2937
- Description: 16px, Regular, #6b7280
```

#### 3.4 Testimonial Card Component
```
Testimonial Card:
- Size: 350px × 250px
- Background: White
- Border-radius: 16px
- Shadow: Card Shadow
- Padding: 32px
- Stars: 5 × 16px golden stars
- Quote: 16px, Italic, #4b5563
- Avatar: 50px × 50px circle
- Name: 16px, SemiBold, #1f2937
- Title: 14px, Regular, #6b7280
```

### Step 4: Build Sections (13 minutes)

#### 4.1 Header Section (2 minutes)
```
Header:
- Size: 1440px × 80px
- Background: rgba(255,255,255,0.95)
- Logo: "Gulf Jobs" with briefcase icon
- Navigation: Home, Jobs, Employers, About, Contact
- Auth: Sign In (secondary), Sign Up (primary)
- Position: Fixed top
```

#### 4.2 Hero Section (5 minutes)
```
Hero:
- Size: 1440px × 800px
- Background: Linear gradient (135deg, #667eea 0%, #764ba2 100%)
- Layout: 2-column grid (1fr 1fr)
- Left column:
  - Hero title: "Find Your Dream Job in the Gulf Region"
  - Subtitle: Description text
  - Search bar: 4-column grid with inputs and button
  - Popular keywords: Clickable tags
  - CTA buttons: Find Jobs, Post a Job
- Right column:
  - 3 floating cards with statistics
  - Animated background elements
```

#### 4.3 Categories Section (3 minutes)
```
Categories:
- Size: 1440px × 600px
- Background: #f8fafc
- Header: "Browse by Category"
- Grid: 4 columns × 2 rows
- Cards: Construction, Healthcare, Hospitality, Admin, Engineering, Finance, Education, Retail
- Each card: Icon + title + job count
```

#### 4.4 Employers Section (2 minutes)
```
Employers:
- Size: 1440px × 400px
- Background: White
- Header: "Trusted by Leading Companies"
- Grid: 4 columns × 2 rows
- Logo placeholders: 200px × 80px
- Company names: Aramco, ADNOC, SABIC, Qatar Airways, etc.
```

#### 4.5 Testimonials Section (1 minute)
```
Testimonials:
- Size: 1440px × 500px
- Background: #f8fafc
- Header: "Success Stories"
- Grid: 3 columns × 1 row
- Cards: 3 testimonial cards with quotes and author info
```

### Step 5: Create Mobile Version (Optional)

#### Mobile Adaptations:
1. **Header**: Logo + hamburger menu
2. **Hero**: Single column, stacked search fields
3. **Categories**: Single column grid
4. **Employers**: 2-column grid
5. **Testimonials**: Single column

### Step 6: Add Interactions (Optional)
1. Create hover states for buttons and cards
2. Add mobile menu animation
3. Create smooth transitions
4. Add prototype flows

## 🎨 Color Palette (Copy-paste ready)

```
Primary Colors:
#2563eb - Primary Blue
#1d4ed8 - Primary Blue Hover
#fbbf24 - Secondary Amber
#f59e0b - Secondary Amber Hover

Category Colors:
#ef4444 - Construction (Red)
#10b981 - Healthcare (Green)
#f59e0b - Hospitality (Orange)
#8b5cf6 - Administration (Purple)
#06b6d4 - Engineering (Cyan)
#84cc16 - Finance (Lime)
#f97316 - Education (Orange)
#ec4899 - Retail (Pink)

Neutral Colors:
#1f2937 - Gray 900
#374151 - Gray 800
#4b5563 - Gray 700
#6b7280 - Gray 600
#9ca3af - Gray 500
#d1d5db - Gray 400
#e5e7eb - Gray 300
#f3f4f6 - Gray 200
#f9fafb - Gray 100
#f8fafc - Gray 50
#ffffff - White
```

## 📐 Spacing Values (8px grid)

```
4px - XS spacing
8px - SM spacing
12px - MD spacing
16px - LG spacing
24px - XL spacing
32px - 2XL spacing
48px - 3XL spacing
64px - 4XL spacing
96px - 6XL spacing
```

## 🔤 Typography Scale

```
56px - Hero titles
40px - Section titles
24px - Card titles
20px - Large body text
16px - Regular body text
14px - Small text
12px - Tiny text
```

## 📱 Responsive Breakpoints

```
320px - Small mobile
375px - Mobile
768px - Tablet
1024px - Desktop
1440px - Large desktop
```

## 🎯 Quick Tips

1. **Use Auto Layout**: Enable auto layout for components to make them responsive
2. **Create Variants**: Make button, card, and input variants for different states
3. **Use Grids**: Set up 12-column grid for desktop, 4-column for mobile
4. **Consistent Spacing**: Use 8px spacing system throughout
5. **Component Library**: Keep all components in a separate page for reuse

## 🚀 Time-Saving Shortcuts

1. **Duplicate Elements**: Cmd/Ctrl + D to duplicate
2. **Create Component**: Cmd/Ctrl + Alt + K
3. **Create Instance**: Cmd/Ctrl + Alt + B
4. **Auto Layout**: Shift + A
5. **Resize**: Cmd/Ctrl + drag corner

This guide will help you recreate the Gulf Jobs portal design in Figma efficiently and accurately!