# How to Add New Blog Posts

This guide explains how to easily add new blog posts to your portfolio.

## Quick Start

1. Open `src/data/blogs.tsx`
2. Add a new object to the `blogs` array
3. Save the file - your new blog will appear automatically!

## Blog Structure

Each blog post needs these fields:

```typescript
{
  id: "unique-url-slug",           // Used in URL: /blog/your-slug
  title: "Your Blog Title",        // Main heading
  excerpt: "Short preview...",     // Shows on blog cards
  thumbnail: "image-url",          // Card thumbnail image
  date: "Month DD, YYYY",          // Publication date
  category: "Category Name",       // e.g., "Finance", "Technology"
  readTime: "X min read",          // Estimated reading time
  content: (
    // Your blog content goes here (see below)
  ),
}
```

## Adding Blog Content

The `content` field uses JSX, so you can add rich formatting:

### Basic Example:
```typescript
content: (
  <>
    <h2 className="text-3xl font-display font-bold mb-4">Main Heading</h2>
    <p className="mb-6">
      Your first paragraph goes here.
    </p>
    
    <h3 className="text-2xl font-semibold mb-3 mt-8">Subheading</h3>
    <p className="mb-6">
      Another paragraph with more details.
    </p>
    
    <ul className="list-disc list-inside mb-6 space-y-2">
      <li>First bullet point</li>
      <li>Second bullet point</li>
      <li>Third bullet point</li>
    </ul>
  </>
),
```

### Adding Images in Content:
```typescript
<img 
  src="https://your-image-url.com/image.jpg" 
  alt="Description" 
  className="w-full rounded-lg mb-6"
/>
```

### Adding Quotes:
```typescript
<blockquote className="border-l-4 border-accent pl-4 italic my-6">
  "Your quote text here"
</blockquote>
```

### Code Blocks:
```typescript
<pre className="bg-muted p-4 rounded-lg mb-6 overflow-x-auto">
  <code>
    {`Your code here`}
  </code>
</pre>
```

## Finding Thumbnail Images

Use free stock photo websites:
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://www.pexels.com/
- **Pixabay**: https://pixabay.com/

Example Unsplash URL format:
```
https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80
```

## Complete Example

```typescript
{
  id: "my-new-blog-post",
  title: "My Amazing Journey in Tech",
  excerpt: "Learn about my experience building scalable applications and what I learned along the way.",
  thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  date: "January 15, 2025",
  category: "Technology",
  readTime: "5 min read",
  content: (
    <>
      <h2 className="text-3xl font-display font-bold mb-4">Getting Started</h2>
      <p className="mb-6">
        This is my introduction paragraph where I explain what the blog post is about.
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
        alt="Technology workspace"
        className="w-full rounded-lg mb-6"
      />
      
      <h3 className="text-2xl font-semibold mb-3 mt-8">Key Takeaways</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>First important point I learned</li>
        <li>Second valuable lesson</li>
        <li>Third insight to share</li>
      </ul>
      
      <p className="mb-6">
        Conclusion paragraph wrapping everything up.
      </p>
    </>
  ),
},
```

## Tips

- Keep excerpts under 150 characters for best display
- Use descriptive IDs (they become part of the URL)
- Categories help readers find related content
- Include images to break up long text
- Use consistent heading hierarchy (h2 → h3)
- Test your blog post after adding it

## Styling Classes Available

- Headings: `text-3xl`, `text-2xl`, `text-xl`
- Font weight: `font-bold`, `font-semibold`, `font-medium`
- Spacing: `mb-4`, `mb-6`, `mt-8` (adjust numbers as needed)
- Lists: `list-disc list-inside space-y-2`
- Images: `w-full rounded-lg`
- Quotes: `border-l-4 border-accent pl-4 italic`

That's it! Your new blog post will automatically appear on the main page and be accessible at `/blog/your-id`.
