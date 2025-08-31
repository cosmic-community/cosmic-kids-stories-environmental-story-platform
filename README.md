# Cosmic Kids Stories - Environmental Story Platform 🌍✨

![App Preview](https://imgix.cosmicjs.com/bade9f30-8646-11f0-b89d-a3ec0a58ec20-photo-1559827260-dc66d52bef19-1756629876187.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful, child-friendly website showcasing eco-conscious stories designed to educate and inspire young readers about environmental responsibility. Built with Astro for lightning-fast performance and powered by Cosmic CMS for easy content management.

## ✨ Features

- 📚 **Age-Appropriate Story Filtering** - Browse stories by age groups (3-5, 6-8, 9-12 years)
- 🌱 **Environmental Theme Categories** - Explore stories about wildlife conservation, clean energy, and recycling
- 📖 **Interactive Story Reading** - Rich HTML content with engaging formatting and illustrations
- 📱 **Responsive Design** - Perfect experience across desktop, tablet, and mobile devices
- ⚡ **Fast Static Site Generation** - Lightning-fast loading with Astro's optimized build system
- 🔍 **SEO Optimized** - Complete meta tags and structured data for better discoverability
- 🎨 **Child-Friendly Interface** - Colorful, engaging design optimized for young readers

## Clone this Project

<!-- CLONE_PROJECT_BUTTON -->

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "You are building a SaaS platform called Cosmic Kids Stories 🌍✨.
The SaaS is a children-friendly, eco-conscious story generator designed for kids and parents."

### Code Generation Prompt

> Set up an Astro website powered by my existing content

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- [Astro](https://astro.build) - Modern static site generator
- [TypeScript](https://www.typescriptlang.org) - Type safety and better development experience
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Cosmic CMS](https://www.cosmicjs.com) - Headless CMS for content management
- [Cosmic SDK](https://www.cosmicjs.com/docs/sdk) - Official Cosmic JavaScript SDK

## 📋 Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- Cosmic CMS account with your existing bucket setup

## 🛠️ Getting Started

### Installation

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

3. **Add your Cosmic credentials to `.env`:**
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Start the development server:**
   ```bash
   bun run dev
   ```

5. **Open your browser:**
   Visit [http://localhost:4321](http://localhost:4321)

### Build for Production

```bash
bun run build
bun run preview
```

## 📚 Cosmic SDK Examples

### Fetching Stories with Connected Objects

```typescript
// Get all stories with related age groups and eco themes
const response = await cosmic.objects.find({
  type: 'stories'
}).props([
  'id', 'title', 'slug', 'metadata'
]).depth(1);

const stories = response.objects;
```

### Filtering by Age Group

```typescript
// Get stories for a specific age group
const response = await cosmic.objects.find({
  type: 'stories',
  'metadata.age_group': ageGroupId
}).depth(1);
```

### Getting Individual Story

```typescript
// Get a single story by slug with full content
const response = await cosmic.objects.findOne({
  type: 'stories',
  slug: storySlug
}).depth(1);

const story = response.object;
```

## 🌟 Cosmic CMS Integration

This application leverages three main content types in your Cosmic bucket:

### Stories
- **story_title**: The main title of the story
- **story_content**: Rich HTML content with formatting
- **age_group**: Connected to Age Groups object type
- **eco_theme**: Connected to Eco Themes object type
- **featured_illustration**: Hero image for each story
- **reading_time**: Estimated reading duration
- **moral_lesson**: Key takeaway message

### Age Groups
- **age_range**: Age range (e.g., "3-5 years")
- **reading_level**: Beginner, Intermediate, or Advanced
- **description**: Characteristics of the age group

### Eco Themes
- **theme_name**: Name of the environmental theme
- **description**: Educational content about the theme
- **theme_icon**: Visual icon representing the theme

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command to `bun run build`
3. Set publish directory to `dist`
4. Add environment variables in Netlify dashboard

### Other Static Hosts
The built files in the `dist` directory can be deployed to any static hosting service.

---

Built with 💚 using [Cosmic](https://www.cosmicjs.com) - The Content Cloud for modern applications.
