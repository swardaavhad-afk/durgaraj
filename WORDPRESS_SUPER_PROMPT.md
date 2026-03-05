# WORDPRESS SUPER PROMPT FOR DURGARAJ ADVENTURES WEBSITE

## 🎯 PROJECT OVERVIEW

Build a **fully functional WordPress website** for **Sahyadri Mitra Foundation – Durgaraj Adventures**, an official multi-event adventure organization based on the complete React/Tailwind prototype provided below. This is a premium, professional website that must replicate ALL features, interactions, and design elements from the prototype.

---

## 🎨 DESIGN SPECIFICATIONS

### Brand Identity
- **Organization**: Sahyadri Mitra Foundation - Durgaraj Nisargmayee
- **Tagline**: "A Joyful Adventure"
- **Institute**: Mountaineering Institute, Nashik, Maharashtra

### Color Palette (Official Durgaraj Logo Colors)
```css
Primary Green: #2F5233
Secondary Red: #C8102E
Accent Green: #8B9D6D
Cream Background: #FDFBF7
Foreground Text: #1A1A1A
Muted Background: #F5F3EE
Card White: #FFFFFF
Border: rgba(0, 0, 0, 0.08)
```

### Typography System
- **Headings (H1-H6)**: Playfair Display (serif) - Bold, elegant
- **Body Text**: Inter (sans-serif) - Clean, readable
- **Marathi Content**: Tiro Devanagari Marathi
- **Accent/Alternative**: Poppins (optional)

**Import these Google Fonts:**
```html
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap
https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:ital@0;1&display=swap
https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap
```

### Logo
- Official Durgaraj logo (circular badge style)
- Size: 64px x 64px in header
- Displays alongside brand name "DURGARAJ" + tagline

---

## 📱 WEBSITE STRUCTURE

### NAVIGATION MENU (All Pages Must Be Created)
1. **Home** - `/`
2. **Sahyadri Treks** - `/sahyadri-treks` (Featured treks with filtering)
3. **All Events** - `/events` (Complete event listing)
4. **Training** - `/training` (Training programs page)
5. **Blog** - `/blog` (Blog listing)
6. **Gallery** - `/gallery` (Photo gallery with lightbox)
7. **About** - `/about` (About organization)
8. **Contact** - `/contact` (Contact form + map)

### Additional Pages
- **Login** - `/login`
- **Signup** - `/signup`
- **Single Event Detail** - `/events/{event-slug}`
- **404 Not Found Page**

---

## 🏠 HOMEPAGE - 10 SECTIONS (EXACT WIREFRAME)

### SECTION 1: Top Info Bar
- Green background (#2F5233) with white text
- Left: Phone number (Keshav: 94227-69242 or Jyoti: 94227-09943) with icon
- Left: Email (durgarajoffice@gmail.com) with icon
- Right: "Mountaineering Institute, Nashik"
- Hidden on mobile

### SECTION 2: Hero Section
- **Full-screen hero** (min-height: 90vh)
- Background: Dramatic mountain image with dark gradient overlay
- Logo at top center (animated scale-in)
- Main heading: "Conquer the Sahyadris with Discipline & Courage" (Playfair Display, 5xl/7xl)
- Subheading: "Guided Weekend Treks by Durgaraj Adventure" (accent color highlight)
- Two CTA buttons:
  - "View Upcoming Treks" (Red button, links to /sahyadri-treks)
  - "Join WhatsApp Trek Group" (Green #25D366, opens WhatsApp group link)
- Trust badges below: "Certified Trek Leaders" | "Safety First Protocol" | "25+ Years Experience (Since 1999)"

### SECTION 3: About Sahyadri Treks
- Two-column layout (image left, content right)
- Left: Large image with "25+ Years Experience" badge overlay (red, bottom-right)
- Right: 
  - Heading: "About Sahyadri Treks" (secondary red color on "Sahyadri Treks")
  - Paragraph about organization
  - 4 feature boxes with icons (Community, Safety, Expert Guides, Certification)
  - "Learn More About Us" button (links to /about)
  - WhatsApp CTA: "Chat with us for trek queries"

### SECTION 4: Featured Upcoming Treks
- Heading: "Featured Upcoming Treks"
- Display 3 featured trek cards in grid
- Each card shows:
  - Trek image
  - Category badge (e.g., "Trek", "Camping")
  - Difficulty badge (Easy/Moderate/Hard with color coding)
  - Trek title (English + Marathi)
  - Location with icon
  - Duration with icon
  - Price "From ₹1,200"
  - Two action buttons:
    - "View Details" (primary)
    - WhatsApp "Quick Inquiry" (green, opens pre-filled message)
- "View All Sahyadri Treks" button at bottom

### SECTION 5: Why Choose Durgaraj Adventures
- Full-width section with accent background
- Heading: "Why Choose Durgaraj Adventures"
- 6 feature cards in 3-column grid:
  1. **Expert Trek Leaders** - Certified mountaineering professionals
  2. **Safety First** - Comprehensive safety protocols
  3. **Affordable Pricing** - Best rates guaranteed
  4. **WhatsApp Support** - 24/7 quick assistance
  5. **Small Groups** - Personalized attention
  6. **Eco-Friendly** - Leave no trace principles
- Each with icon, heading, description
- WhatsApp CTA at bottom: "Have questions? Chat with our trek coordinator"

### SECTION 6: Statistics Counter (Animated)
- Full-width dark section (primary green background)
- 4 animated counters in row:
  - **1,800+** Successful Camps & Treks
  - **19,000+** Mountaineers & Nature Lovers
  - **45+** Destinations
  - **25+** Years Experience (Since 1999)
- Numbers animate on scroll into view

### SECTION 7: Testimonials
- Heading: "What Trekkers Say About Us"
- Carousel/slider with 3 testimonial cards
- Each testimonial:
  - 5-star rating
  - Quote text
  - Trekker name
  - Trek attended
  - Profile image (circular)
- Auto-play carousel with navigation dots

### SECTION 8: Instagram Gallery / Recent Adventures
- Heading: "Recent Adventures Gallery"
- 6-image grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- Hover effect: Image darkens, "View Gallery" text appears
- Click opens image in lightbox modal
- "View Full Gallery" button (links to /gallery)

### SECTION 9: Monthly Trek Calendar
- Heading: "Upcoming Trek Calendar by Month"
- Display upcoming treks organized by month
- Month tabs: "March 2026" | "April 2026" | "May 2026" etc.
- Each trek shows: Date | Name | Difficulty | Price | "Book Now" button
- WhatsApp CTA: "Get trek calendar on WhatsApp"

### SECTION 10: Newsletter Signup + Final CTA
- Two-column section
- Left: "Join Our Trek Community"
  - Email signup form for newsletter
  - "Subscribe" button
  - Benefits: "Get exclusive trek offers, early bird discounts"
- Right: WhatsApp Community CTA
  - "Join 2000+ Trekkers on WhatsApp"
  - Large WhatsApp button
  - Social proof text
- Full-width bottom CTA: "Ready for Your Next Adventure? Contact Us Today"

---

## 📄 SAHYADRI TREKS PAGE (`/sahyadri-treks`)

### Introduction Section
**"SAHYADRI TREKS"**

Sahyadri is the only mountain range in the world, where geographical existence integrates with a glorious history. More than 300 hill forts proudly prance the historic footsteps.

From last 25 years Durgaraj has been organizing season wise treks and camps in Sahyadri. Along with the history, to experience the thrill of trekking through hill forts, evergreen jungles rich in biodiversity, soaring rifts, perennial waterfalls, uplands, 1 to 4 days treks are conducted which involves various activities, theme base camping in entirely remote jungle areas.

Night treks are altogether a mesmerizing experience. Trambakeshwar Range, Kalsubai Range, Satmala Range consist of most beautiful and adventurous treks in The Sahyadri.

**Every weekend we organise Treks.**

**Trek Seasons:**
- **Monsoon Treks:** July to September
- **Winter Treks:** October to February

### Layout
- **Hero Banner**: "Explore Sahyadri Treks" with background image
- **Introduction Text**: Display the Sahyadri treks description above (in elegant typography)
- **Filter System** (Sticky sidebar on desktop, top filters on mobile):
  - Search by trek name
  - Filter by Difficulty: Easy | Moderate | Hard
  - Filter by Category: Trek | Camping | Heritage | Nature | Himalayan
  - Filter by Price Range (slider)
  - Filter by Duration
  - "Reset Filters" button
  
### Trek Listing
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each trek card identical to homepage featured cards
- Pagination at bottom (10 treks per page)
- WhatsApp sticky button: "Need help choosing? Chat now"

---

## 📄 SINGLE EVENT DETAIL PAGE (`/events/{event-slug}`)

### Layout with Sticky Sidebar

**Main Content Area (Left 70%)**:
1. **Hero Image** - Full-width trek image
2. **Event Header**:
   - Category badge + Difficulty badge
   - Trek title (English + Marathi)
   - Location | Duration | Date
   - 5-star rating + reviews count
3. **Quick Info Icons Row**: Duration | Difficulty | Group Size | Age Limit
4. **Tabs Section** (Tabbed Navigation):
   - **Overview Tab**: Detailed description, what makes it special
   - **Itinerary Tab**: Day-by-day breakdown with timeline
   - **What's Included Tab**: Bulleted list of inclusions
   - **What to Bring Tab**: Packing list
   - **Prerequisites Tab**: Fitness level, age limit, experience required, safety guidelines
   - **Gallery Tab**: Image gallery with lightbox
   - **FAQ Tab**: Accordion-style questions/answers
5. **Reviews Section**: Display user reviews with ratings

**Sticky Sidebar (Right 30%)**:
- **Booking Card** (sticks to top on scroll):
  - Price display: "From ₹1,200"
  - Date selector dropdown
  - Number of people counter
  - Total price calculation
  - "Book Now" button (primary red)
  - WhatsApp "Quick Inquiry" button (green)
  - "Share Trek" social buttons
- **Contact Card**:
  - "Have Questions?"
  - Phone number with click-to-call
  - Email
  - WhatsApp chat button
- **Related Treks**: 3 similar trek suggestions

---

## 📄 CONTACT PAGE (`/contact`)

### Layout
1. **Hero Section**: "Get in Touch" heading with background
2. **Contact Information Cards** (4 cards in grid):
   - **Phone** (with icon, clickable):
     - **KESHAV**: 94227-69242
     - **JYOTI**: 94227-09943
     - **OM**: 72767-87383
     - **VRUSHALI**: 70288-27548
   - **Email** (with icon, clickable):
     - durgarajoffice@gmail.com
   - **Address** (with icon):
     - 'Shakuntal' Hindashakti nagar, panchak shiwar, pawarwadi, Nashik road, Nashik-422101
   - **WhatsApp** (with icon, large CTA button)
3. **Contact Form**:
   - Name (required)
   - Email (required)
   - Phone (required)
   - Trek Interest (dropdown)
   - Message (textarea)
   - Submit button
   - Form validation
4. **Google Map Embed**: Location of institute
5. **Office Hours**: Display timing info
6. **Alternative Contact**: Large WhatsApp CTA - "Prefer instant response? Message us on WhatsApp"

---

## 📄 OTHER PAGES

### About Page (`/about`)

**ABOUT US**

**Hero Section**: "About Durgaraj" with background image

**Main Content**:

Durgaraj is one of the pioneer mountaineering institutes based in Nashik, Maharashtra.

**"घेतला आनंद वाटला आनंद यापरि आनंद तो कोणता ?"**  
*(Display in Marathi font - Tiro Devanagari Marathi)*

With this motto in 1999, the mountaineer couple **Keshav and Jyoti Ugale** laid the foundation of Durgaraj. It is amongst few well known organizations in India. Today the asset of Durgaraj is a family of more than **19000 mountaineers and nature lovers** across the country.

**Why Choose Durgaraj:**

- ✓ Durgaraj is a legally registered organization
- ✓ Our organization fulfills the terms and conditions of Government
- ✓ The organization consists of trained volunteers who have completed adventure courses through institutions registered by Central Government of India
- ✓ The organization has internationally trained Instructors in the adventure field
- ✓ The organization has been working in this field since **1999** (25+ years of experience)
- ✓ Our organization has a reputation as an experienced organization having successfully organized more than **1800 camps & treks**
- ✓ The institute is well equipped with approved Adventure equipment and trained manpower required to conduct such camps both in **Sahyadri and Himalayas**
- ✓ It is an organization with a perfect blend of economic and social sectors, playing its leading role in the field of **nature conservation, preservation of environment and cultivation of human values**

**Statistics Section** (with icons/counters):
- 25+ Years Experience (Since 1999)
- 19,000+ Mountaineers Family
- 1,800+ Successful Camps & Treks
- Sahyadri & Himalayan Expeditions

**Team Section**: Founder couple Keshav and Jyoti Ugale with photos

**Certifications Section**: Government registered, Internationally trained instructors

**Gallery**: Past treks and camps photos

**WhatsApp CTA**: "Have questions about our organization? Chat with us"

### Training Programs Page (`/training`)
- List of training courses offered
- Course cards with details
- Certification information
- Schedule calendar
- Registration CTA with WhatsApp option

### Blog Page (`/blog`)
- Blog post grid (2 columns)
- Featured image, title, excerpt, date, author
- Categories sidebar
- Recent posts widget
- Pagination

### Gallery Page (`/gallery`)
- Masonry grid layout
- Categories filter (All | Treks | Camping | Heritage)
- Lightbox on click
- Load more button

### Login/Signup Pages
- Clean form design
- Social login options
- Forgot password link
- Or divider
- WhatsApp support contact

---

## 💬 WHATSAPP INTEGRATION (CRITICAL FEATURE)

### Multiple WhatsApp Touchpoints Required:

1. **Floating WhatsApp Button** (Bottom-right on all pages):
   - Green circular button with WhatsApp icon
   - Hover shows "Chat with us"
   - Opens WhatsApp chat with pre-filled message: "Hi, I'm interested in Durgaraj Adventures treks"
   - Phone: +91 98765 43210

2. **Mobile Sticky Bottom Bar** (Mobile only, visible on all pages):
   - Fixed to bottom on mobile devices
   - Two buttons side-by-side:
     - "Call Now" (phone icon, tel: link)
     - "WhatsApp Chat" (WhatsApp icon, opens WhatsApp)
   - Padding bottom to account for bar (pb-24)

3. **WhatsApp Group Join Button**:
   - Used in hero section, footer, and strategic locations
   - Opens WhatsApp group invite link
   - Text: "Join WhatsApp Trek Group"
   - Different styling: Sometimes inline in footer, sometimes as CTA

4. **Event-Specific WhatsApp Inquiry**:
   - On trek cards: "Quick Inquiry" button
   - Pre-fills message: "Hi, I want to know more about [Trek Name] scheduled on [Date]"
   - On detail page: "Inquire via WhatsApp" button

5. **Contact Page WhatsApp**:
   - Large prominent WhatsApp card
   - "Get Instant Response on WhatsApp"
   - Opens direct chat

6. **Strategic CTAs Throughout**:
   - "Chat with us for trek queries" (Section 3)
   - "Have questions? Chat with our trek coordinator" (Section 5)
   - "Get trek calendar on WhatsApp" (Section 9)
   - "Need help choosing? Chat now" (Treks page)

### WhatsApp Configuration
- **Primary Contact Numbers**: 
  - Keshav: 94227-69242
  - Jyoti: 94227-09943
  - Om: 72767-87383
  - Vrushali: 70288-27548
- **Main WhatsApp Number**: 94227-69242 (Keshav - use for floating button)
- **Group Link**: https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t
- **Pre-filled Message Template**: "Hi, I'm interested in Durgaraj Adventures treks. Can you help me with [specific query]?"

---

## 🎯 INTERACTIVE FEATURES & FUNCTIONALITY

### 1. Authentication System
- User registration/login
- Password recovery
- User dashboard (for logged-in users)
- Booking history

### 2. Event Filtering & Search
- Real-time filter updates (no page reload)
- Multiple filter combinations
- Search by trek name
- URL parameters for sharing filtered results

### 3. Booking Modal/System
- Date selection
- Number of participants
- Total price calculation
- Add to cart functionality
- Or direct WhatsApp inquiry option

### 4. Gallery Lightbox
- Click image to open full-screen lightbox
- Navigation arrows (prev/next)
- Close button
- Image counter (1/12)
- Zoom functionality

### 5. Accordion Interactions
- FAQ sections with smooth expand/collapse
- Prerequisites sections
- Only one item open at a time

### 6. Animations (Smooth & Professional)
- Scroll-triggered animations (fade-in, slide-up)
- Counter animations (numbers count up)
- Hover effects on cards
- Smooth page transitions
- Loading animations

### 7. Testimonial Carousel
- Auto-play slider
- Navigation dots
- Pause on hover
- Touch/swipe on mobile

### 8. Sticky Elements
- Sticky header on scroll (with shrink effect)
- Sticky sidebar on event detail page
- Sticky filter sidebar on treks page
- Mobile sticky bottom bar

### 9. Form Validation
- Real-time validation
- Error messages
- Success confirmation
- Email validation
- Phone number validation

### 10. Responsive Design
- Mobile-first approach
- Breakpoints: 
  - Mobile: <768px
  - Tablet: 768px-1024px
  - Desktop: >1024px
- Touch-friendly tap targets on mobile
- Hamburger menu on mobile

---

## 🔌 WORDPRESS TECHNICAL REQUIREMENTS

### Theme Development
- **Custom WordPress Theme** (not pre-made theme)
- Or use **Elementor Page Builder** for exact wireframe replication
- Or use **Oxygen Builder** / **Bricks Builder** for advanced control

### Recommended Plugins
1. **Elementor Pro** - For custom layouts matching prototype
2. **Advanced Custom Fields (ACF)** - For event custom fields
3. **Contact Form 7** or **WPForms** - For contact forms
4. **Yoast SEO** - SEO optimization
5. **WP Rocket** - Caching and performance
6. **Smush** - Image optimization
7. **Custom Post Type UI** - For Events post type
8. **FacetWP** or **Ajax Search & Filter** - For event filtering
9. **Fancybox** or **GLightbox** - For gallery lightbox
10. **WhatsApp Chat Plugin** - For WhatsApp integration
11. **WooCommerce** (optional) - If implementing full booking/payment
12. **Slider Revolution** or **Swiper** - For testimonial carousel
13. **CountUp.js** - For statistics counter animation

### Custom Post Types Required

#### 1. Events (Custom Post Type: `events`)
**Custom Fields (ACF)**:
- Event Title (English)
- Event Title (Marathi)
- Category (Taxonomy: Camping, Trek, Heritage, Nature, Himalayan, Training)
- Difficulty (Taxonomy: Easy, Moderate, Hard)
- Location (Text)
- Duration (Text)
- Event Date (Date Picker)
- Price (Number)
- Short Description (Textarea)
- Detailed Description (WYSIWYG)
- Featured Image (Image)
- Terrain Type (Text)
- What's Included (Repeater Field - List items)
- What to Bring (Repeater Field - List items)
- Prerequisites Group:
  - Fitness Level (Text)
  - Age Limit (Text)
  - Experience Required (Text)
  - Safety Guidelines (Repeater)
- Itinerary (Repeater Field):
  - Day Number
  - Day Title
  - Activities (Repeater)
- Gallery (Gallery Field - Multiple images)
- FAQ (Repeater Field):
  - Question
  - Answer
- Is Featured (True/False)
- Month (Text/Date)

#### 2. Testimonials (Custom Post Type: `testimonials`)
**Custom Fields**:
- Trekker Name
- Trek Attended
- Rating (Number 1-5)
- Testimonial Text
- Profile Image
- Date

#### 3. Blog Posts (Use default WordPress Posts)
- Standard blog functionality
- Categories
- Featured images
- Author

### Homepage Setup
- Create custom homepage template
- Set as static front page in Settings > Reading
- Use Elementor to build 10 sections exactly as specified

### Navigation Menu
- Create primary navigation menu
- Assign to header location
- Mobile responsive hamburger menu

### WhatsApp Integration
**Method 1: Custom Code**
```php
// WhatsApp floating button
function add_whatsapp_button() {
    $phone = '+919876543210';
    $message = 'Hi, I am interested in Durgaraj Adventures treks';
    $url = 'https://wa.me/' . $phone . '?text=' . urlencode($message);
    ?>
    <a href="<?php echo $url; ?>" target="_blank" class="whatsapp-float">
        <i class="fab fa-whatsapp"></i>
    </a>
    <?php
}
add_action('wp_footer', 'add_whatsapp_button');
```

**Method 2: Plugin**
- Use "Click to Chat" or "WhatsApp Chat" plugin
- Configure phone number, position, custom messages

### Event Filtering Implementation
**Option 1: Custom AJAX**
- Create custom AJAX handlers
- Filter events by category, difficulty, price
- Update results without page reload

**Option 2: FacetWP Plugin**
- Create facets for each filter
- Configure layout
- Style to match design

### Lightbox Gallery
- Use GLightbox or Fancybox
- Initialize on gallery images
- Responsive and touch-enabled

### Custom CSS (Critical Styles)
```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:ital@0;1&display=swap');

:root {
  --primary: #2F5233;
  --secondary: #C8102E;
  --accent: #8B9D6D;
  --background: #FDFBF7;
  --foreground: #1A1A1A;
  --card: #FFFFFF;
  --muted: #F5F3EE;
  --border: rgba(0, 0, 0, 0.08);
  --radius: 0.75rem;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}

.marathi-text {
  font-family: 'Tiro Devanagari Marathi', serif;
}

/* WhatsApp Float Button */
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

/* Mobile Sticky Bar */
@media (max-width: 768px) {
  .mobile-sticky-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 12px;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    z-index: 999;
    display: flex;
    gap: 10px;
  }
  
  .mobile-sticky-bar button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
  }
}

/* Sticky Header */
.site-header.scrolled {
  position: sticky;
  top: 0;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 100;
}

/* Button Styles */
.btn-primary {
  background-color: var(--primary);
  color: white;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary:hover {
  background-color: #234018;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(47, 82, 51, 0.3);
}

.btn-secondary {
  background-color: var(--secondary);
  color: white;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background-color: #a00d24;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 16, 46, 0.3);
}

/* Card Styles */
.event-card {
  background: var(--card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s;
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

/* Difficulty Badges */
.difficulty-easy {
  background-color: #10B981;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.difficulty-moderate {
  background-color: #F59E0B;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.difficulty-hard {
  background-color: #EF4444;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}
```

---

## 📊 SAMPLE EVENT DATA (Create 10+ Events)

### Event 1: Fireflies Camping at Bhandardara
- **Category**: Camping
- **Difficulty**: Easy
- **Location**: Bhandardara, Maharashtra
- **Duration**: 2 Days / 1 Night
- **Date**: June 15-16, 2026
- **Price**: ₹2,500
- **Short Description**: Experience the magic of thousands of fireflies lighting up the night sky. A perfect weekend getaway with nature.
- **What's Included**: Transportation, Camping tents, All meals, Bonfire, Guided nature walk, First aid
- **What to Bring**: Personal medicines, Flashlight, Trekking shoes, Light jacket, Water bottle
- **Prerequisites**: Basic fitness, Age 8+, No experience required
- **Itinerary**: Day 1 (Arrival, Setup, Bonfire, Firefly watch) | Day 2 (Sunrise, Nature walk, Departure)
- **FAQ**: Best time to see fireflies? Are children allowed? What if it rains?

### Event 2: Kalsubai Peak Trek
- **Category**: Trek
- **Difficulty**: Moderate
- **Location**: Kalsubai, Ahmednagar
- **Duration**: 1 Day
- **Date**: Every Weekend
- **Price**: ₹1,200
- **Short Description**: Conquer the highest peak of Maharashtra. Challenge yourself with this moderate difficulty trek.
- **Details**: Summit at 5,400 feet, Iron ladders, Ancient temples
- **What's Included**: Expert trek leader, First aid, Breakfast & lunch, Forest permits, Certificate
- **Prerequisites**: Moderate fitness, Age 12+, Basic trekking experience recommended

### Event 3: Rajmachi Fort Heritage Trek
- **Category**: Heritage
- **Difficulty**: Easy
- **Location**: Rajmachi, Lonavala
- **Duration**: 2 Days / 1 Night
- **Price**: ₹1,800
- **Short Description**: Explore historic Rajmachi Fort with overnight camping. Perfect blend of history and nature.

### Event 4: Sandhan Valley Rappelling
- **Category**: Trek
- **Difficulty**: Hard
- **Location**: Sandhan Valley, Nashik
- **Duration**: 2 Days / 1 Night
- **Price**: ₹3,200
- **Short Description**: The Valley of Shadows - extreme adventure with rappelling and rock climbing.

### Event 5: Konkan Coastal Camping
- **Category**: Nature
- **Difficulty**: Easy
- **Location**: Kashid Beach, Raigad
- **Duration**: 2 Days / 1 Night
- **Price**: ₹2,200
- **Short Description**: Relax by pristine beaches. Beach camping with water sports and bonfire.

*(Add 5+ more similar events with variations)*

### Sample Testimonials
1. **Priya Sharma** - "Absolutely loved the Harishchandragad night trek! The guides were professional and the experience unforgettable. Highly recommend Durgaraj Adventures!" - ⭐⭐⭐⭐⭐
2. **Rahul Deshmukh** - "Family-friendly camping at Bhandardara was magical. Kids loved the fireflies. Thank you team Durgaraj!" - ⭐⭐⭐⭐⭐
3. **Anjali Patil** - "Conquered Kalsubai peak with confidence thanks to excellent trek leaders. Safety was top priority. Will definitely join more treks!" - ⭐⭐⭐⭐⭐

---

## 📱 MOBILE RESPONSIVENESS CHECKLIST

- [ ] Hamburger menu on mobile (<768px)
- [ ] Mobile sticky bottom bar with Call + WhatsApp
- [ ] Touch-friendly tap targets (minimum 44px)
- [ ] Readable font sizes on small screens
- [ ] Images optimized and responsive
- [ ] Forms easy to fill on mobile
- [ ] Filters collapsible on mobile
- [ ] Gallery swipeable on touch devices
- [ ] No horizontal scrolling
- [ ] Fast loading on mobile networks

---

## ⚡ PERFORMANCE OPTIMIZATION

1. **Image Optimization**:
   - Use WebP format
   - Lazy loading for images
   - Responsive images (srcset)
   - Compress all images

2. **Caching**:
   - Browser caching
   - WP Rocket or W3 Total Cache
   - CDN for static assets

3. **Minification**:
   - Minify CSS/JS
   - Combine files where possible
   - Defer non-critical JS

4. **Database**:
   - Optimize database regularly
   - Use object caching
   - Limit post revisions

**Target Performance**:
- Google PageSpeed: 85+ (Mobile), 90+ (Desktop)
- Load time: <3 seconds
- Time to Interactive: <5 seconds

---

## 🔒 SECURITY REQUIREMENTS

- Use SSL certificate (HTTPS)
- Regular WordPress core/plugin updates
- Strong admin passwords
- Limit login attempts
- Regular backups (UpdraftPlus)
- Security plugin (Wordfence or Sucuri)
- Hide WordPress version
- Disable XML-RPC if not needed

---

## 🎨 DESIGN CONSISTENCY CHECKLIST

- [ ] All colors match brand palette
- [ ] Typography hierarchy consistent
- [ ] Button styles uniform across site
- [ ] Icon style consistent (Lucide icons recommended)
- [ ] Card shadows and borders uniform
- [ ] Spacing system consistent (8px grid)
- [ ] Border radius consistent (12px default)
- [ ] Hover effects smooth and predictable
- [ ] Animations subtle and professional
- [ ] Logo displayed correctly everywhere

---

## 📝 CONTENT MANAGEMENT

### Easy Admin Experience
- Use ACF for custom fields with intuitive labels
- Group related fields
- Provide field instructions
- Use conditional logic where appropriate
- Create custom admin columns for events (show category, difficulty, price)

### Editor Guidelines Document
Create documentation for client explaining:
- How to add new trek/event
- How to edit homepage sections
- How to manage WhatsApp links
- How to update testimonials
- How to add blog posts

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] All pages created and tested
- [ ] All links working (no 404s)
- [ ] Forms tested and receiving submissions
- [ ] WhatsApp integration tested on mobile
- [ ] Booking system functional
- [ ] Responsive design tested on all devices
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] SEO setup (meta titles, descriptions)
- [ ] Google Analytics installed
- [ ] Favicon and app icons added
- [ ] 404 page customized
- [ ] Contact info updated throughout
- [ ] Legal pages (Privacy Policy, Terms)
- [ ] SSL certificate installed
- [ ] Performance optimized
- [ ] Backup system in place

---

## 📞 CONTACT INFORMATION TO USE

**Contact Persons & Phone Numbers**:
- **KESHAV**: 94227-69242 (Primary Contact)
- **JYOTI**: 94227-09943
- **OM**: 72767-87383
- **VRUSHALI**: 70288-27548

**Email**: durgarajoffice@gmail.com

**Address**: 'Shakuntal' Hindashakti nagar, panchak shiwar, pawarwadi, Nashik road, Nashik-422101

**WhatsApp**: 94227-69242 (Keshav - use for floating button & quick contacts)

**WhatsApp Group**: https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t

**Social Media**:
- Facebook: [Link]
- Instagram: [Link]
- YouTube: [Link]

---

## 🎯 SUCCESS CRITERIA

This WordPress website is complete when:

1. ✅ All 10 homepage sections match the wireframe exactly
2. ✅ All navigation pages are functional and designed
3. ✅ Event filtering works in real-time without page reload
4. ✅ Single event detail page has sticky sidebar
5. ✅ WhatsApp integration works at ALL touchpoints
6. ✅ Mobile sticky bar appears and functions
7. ✅ Floating WhatsApp button is always visible
8. ✅ Gallery lightbox works smoothly
9. ✅ Forms validate and submit correctly
10. ✅ Testimonial carousel auto-plays
11. ✅ Statistics counter animates on scroll
12. ✅ Animations are smooth and professional
13. ✅ Site is fully responsive on all devices
14. ✅ Performance meets targets (PageSpeed 85+)
15. ✅ All colors match brand guidelines
16. ✅ Typography is consistent throughout
17. ✅ Admin panel is user-friendly
18. ✅ Site loads fast and is secure

---

## 🎨 ADDITIONAL DESIGN NOTES

### Hero Section Background Image Suggestions
- Dramatic mountain landscape (Sahyadri range)
- Trekkers on mountain peak
- Sunrise/sunset over Western Ghats
- Use dark gradient overlay for text readability

### Icon Library
- Use **Font Awesome** or **Lucide Icons** (consistent with prototype)
- Phone, Email, Location, Calendar, Clock, Users, Star, Check icons

### Hover Effects
- Cards: Lift up 8px, increase shadow
- Buttons: Darken slightly, lift 2px
- Links: Change to secondary color
- Images: Slight zoom (1.05x scale)

### Animations
- Fade in on scroll
- Slide up on scroll
- Counter animation (numbers counting up)
- Carousel slide transition
- Smooth page load transitions

---

## 📦 DELIVERABLES

1. **Fully functional WordPress website** matching all specifications
2. **Custom theme** or Elementor templates
3. **All plugins** configured and documented
4. **Sample content** (10+ events, testimonials, blog posts)
5. **Admin documentation** for client
6. **Backup file** of complete website
7. **Performance report** (PageSpeed scores)
8. **Testing report** (browsers, devices, functionality)

---

## 💡 IMPLEMENTATION TIPS FOR COPILOT

1. **Start with setup**:
   - Fresh WordPress installation
   - Install Elementor Pro + recommended plugins
   - Set up custom post types first

2. **Build in order**:
   - Configure theme colors and fonts
   - Create header and footer
   - Build homepage section by section
   - Create event detail page template
   - Build other pages
   - Implement filtering functionality
   - Add WhatsApp integration last
   - Test and optimize

3. **Use Elementor effectively**:
   - Create reusable templates for event cards
   - Use global colors and fonts
   - Build responsive from mobile-up
   - Save sections as templates for reuse

4. **Test continuously**:
   - Test on mobile after each section
   - Check WhatsApp links regularly
   - Validate forms as you build
   - Check page load speed

5. **Focus on WhatsApp**:
   - This is a critical feature
   - Test on actual mobile devices
   - Ensure pre-filled messages work
   - Check group links

---

## 🎓 WORDPRESS BEST PRACTICES TO FOLLOW

- Use child theme for customizations
- Never edit plugin files directly
- Use wp_enqueue for scripts/styles
- Sanitize all inputs
- Escape all outputs
- Use WordPress coding standards
- Comment your code
- Use translation-ready text
- Optimize database queries
- Use WordPress hooks and filters

---

## 📚 RESOURCES & DOCUMENTATION LINKS

**WordPress**:
- https://developer.wordpress.org/
- https://codex.wordpress.org/

**Elementor**:
- https://elementor.com/help/
- https://developers.elementor.com/

**ACF**:
- https://www.advancedcustomfields.com/resources/

**Performance**:
- https://developers.google.com/speed/pagespeed/insights/

---

## ✨ FINAL NOTES

This is a **premium adventure tourism website** that requires:
- Pixel-perfect design matching the prototype
- Professional animations and interactions
- Mobile-first responsive design
- Heavy WhatsApp integration (critical!)
- Fast performance
- Easy content management
- SEO optimization

The website should feel:
- **Professional** - Trustworthy adventure organization
- **Inspiring** - Makes users want to trek
- **Easy** - Simple booking and inquiry process
- **Connected** - Multiple ways to reach via WhatsApp
- **Safe** - Emphasizes safety and certification

**Remember**: WhatsApp integration is THE MOST IMPORTANT feature. It should be omnipresent throughout the site with multiple entry points and clear CTAs.

---

## 🎯 QUICK START COMMAND FOR COPILOT

```
Build a complete WordPress website for Durgaraj Adventures following the exact specifications in this document. Use Elementor Pro for visual design matching the prototype. Create custom post types for Events with all specified ACF fields. Implement heavy WhatsApp integration with floating button, mobile sticky bar, and strategic CTAs throughout. Build all 10 homepage sections exactly as wireframed, Sahyadri Treks page with filtering, single event detail page with sticky sidebar, and all navigation pages. Ensure mobile responsiveness, smooth animations, professional design matching brand colors (#2F5233, #C8102E, #8B9D6D), and fast performance. This is a premium adventure tourism website requiring pixel-perfect execution.
```

---

**END OF SUPER PROMPT**

Use this document as your complete blueprint for WordPress development. Every feature, every section, every interaction has been specified. Follow it precisely for best results.

Good luck with your WordPress build! 🚀🏔️
