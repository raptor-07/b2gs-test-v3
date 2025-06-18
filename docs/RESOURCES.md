# Resources Section Documentation

## Overview
The resources section provides a knowledge hub featuring blogs, news, and case studies. It uses a responsive design with category-based navigation and related content suggestions.

## Key Features
- Category-based content organization (blogs/news/case-studies)
- Responsive grid layout for content previews
- Individual article pages with black & white theme
- Related content carousel
- Google Analytics integration
- Markdown content support

## Directory Structure
```
src/ui/components/resources/
├── tabs/               # Navigation tabs
├── preview/           # Grid layout and cards
├── content/           # Main content wrapper
├── header/           # Individual page header
└── related/          # Related content section

_resources/          # Content directory
├── blogs/
├── news/
├── case-studies/
└── assets/
    └── images/
```

## Content Management
### Adding New Content
1. Create a new .md file in the appropriate category folder
2. Include required frontmatter:
```yaml
---
title: "Article Title"
excerpt: "Brief description"
coverImage: "/assets/resources/[category]/[slug]/cover.jpg"
date: "YYYY-MM-DDTHH:mm:ss.SSSZ"
category: "blogs|news|case-studies"
googlePageId: "G-XXXXXX"
ogImage:
  url: "/assets/resources/[category]/[slug]/og.jpg"
---
```
3. Add cover (800x400) and OG (1200x630) images
4. Content uses standard markdown syntax

### Categories
- blogs: Long-form educational content
- news: Company and industry updates
- case-studies: Client success stories

## Analytics Integration
- Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local
- Each article can have its own googlePageId
- Analytics is integrated using @next/third-parties

## Development Notes

### Key Components
- ResourcesTabs: Category navigation
- PreviewCard: Content card with hover effects
- EmptyState: Displays when category has no content
- RelatedSection: Shows related articles and CTA

### Empty State Messages
Custom messages for each category when no content is available:
- blogs: Crafting articles on sustainability
- news: Updates coming soon
- case-studies: Real-world impact stories in preparation

### Related Content
- Shows up to 3 related articles from same category
- Responsive carousel on desktop and mobile
- Falls back to CTA only if no related content

## Testing
1. Add test content in each category
2. Verify responsive layouts
3. Test category navigation
4. Check analytics integration
5. Validate markdown rendering
6. Test related content carousel

## Image Requirements
- Cover images: 800x400px, jpg format
- OG images: 1200x630px, jpg format
- Place in: public/assets/resources/[category]/[slug]/

## Future Improvements
- Search functionality
- Content filtering by tags
- Author profiles
- Reading time estimation
- Social sharing buttons
