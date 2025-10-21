# Admin Blog Dashboard

A modern, professional admin dashboard for creating and managing blog posts on the Blai frontend.

## Features

- ✅ Create new blog posts with rich content
- ✅ Edit existing blog posts
- ✅ Delete blog posts with confirmation
- ✅ Upload featured images and author avatars
- ✅ Organize posts with categories and tags
- ✅ Modern, clean UI with responsive design
- ✅ LocalStorage persistence (can be connected to backend API)

## Access the Dashboard

Navigate to: `/admin/blogs`

Example: `http://localhost:3000/admin/blogs`

## Blog Post Structure

Each blog post includes:

- **Title** - Main heading of the blog post
- **Description** - Brief summary (optional)
- **Content** - Full blog post content
- **Category** - Blog category (e.g., Technology, Marketing)
- **Featured Image** - Main image for the blog post
- **Author Name** - Post author's name
- **Job Title** - Author's position
- **Author Image** - Author's profile picture
- **Tags** - Comma-separated tags for organization
- **Color Theme** - Visual theme selector (1-3)
- **Date** - Auto-generated on creation

## Usage

### Creating a New Post

1. Click "Create New Post" button
2. Fill in all required fields (marked with *)
3. Upload images for featured image and author avatar
4. Add optional tags separated by commas
5. Click "Create Post" to save

### Editing a Post

1. Click "Edit" button on any blog card
2. Modify the desired fields
3. Click "Update Post" to save changes

### Deleting a Post

1. Click "Delete" button on any blog card
2. Confirm deletion in the popup dialog

## Data Storage

Currently, blog posts are stored in **localStorage** under the key `blai_blogs`. This allows for:
- Persistent data across browser sessions
- No backend required for testing
- Easy migration to backend API later

### Connecting to Backend API

To connect to a backend API (FastAPI), update these functions in `blog-manager.jsx`:

```javascript
// Replace localStorage with API calls
const handleCreateBlog = async (blogData) => {
    const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
    });
    const newBlog = await response.json();
    setBlogs([...blogs, newBlog]);
};
```

## Design Principles

Following the project's design preferences:
- Clean, white background for professional appearance
- Modern, organized layout
- Minimal color usage (prioritizing white)
- Professional typography and spacing
- Responsive grid system
- Smooth transitions and hover effects

## File Structure

```
client/src/
├── pages/
│   └── admin/
│       └── blogs.jsx              # Admin page entry point
└── components/
    └── admin/
        ├── blog-manager.jsx       # Main admin component with state management
        ├── blog-form.jsx          # Create/Edit form component
        ├── blog-list.jsx          # Blog list with cards
        ├── index.js               # Export barrel
        └── README.md              # This file
```

## Future Enhancements

Potential improvements:
- Rich text editor (e.g., TinyMCE, Quill)
- Draft/Published status
- Search and filter functionality
- Pagination for large blog lists
- Image upload to cloud storage
- SEO metadata fields
- Scheduled publishing
- Multi-author support
- Analytics integration

