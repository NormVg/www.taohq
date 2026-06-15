export interface Blog {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  date: string
  author: string
  readTime: string
  bannerImage: string
  content: string
}

export const blogs: Blog[] = [
  {
    slug: 'the-art-of-minimalist-software',
    title: 'The Art of Minimalist Software',
    subtitle: 'Designing systems that feel calm under pressure',
    excerpt: 'How we build digital products that get out of the way, focusing on clarity and intentional friction.',
    date: '2026-06-10',
    author: 'TheAlphaOnes',
    readTime: '4 min read',
    bannerImage: '/figma/stone-product.png',
    content: `
# Designing Calm Systems

At TheAlphaOnes, we believe that software should not demand your attention; it should earn it. In an age of infinite notifications and aggressive growth hacking, building systems that feel **calm under pressure** is an act of rebellion.

## 1. Intentional Friction

Friction is usually seen as the enemy of UX. But what if we used friction to prevent users from making destructive actions? 

Consider this code snippet for a resilient deletion prompt:

\`\`\`javascript
async function deleteResource(id) {
  const confirmed = await promptUser({
    message: "Type the name of the resource to delete it.",
    expected: "production-database"
  });
  
  if (confirmed) {
    return await api.delete(\`/resources/\${id}\`);
  }
}
\`\`\`

By adding a deliberate pause, we save the user from themselves.

## 2. Visual Silence

Whitespace isn't empty space; it's the structure that holds everything else together. When designing our interfaces, we prioritize high-contrast typography over complex borders and dropshadows.

* Keep layouts single-column where possible.
* Use pure blacks and muted grays.
* Let the content breathe.

### Conclusion

Software should be a tool, not a casino. By prioritizing minimalism, we build tools that empower rather than exploit.
    `
  },
  {
    slug: 'introducing-fold-tao',
    title: 'Introducing Fold.tao',
    subtitle: 'A structured notes and workflow system',
    excerpt: 'An inside look at our new low-friction capture and operational clarity tool.',
    date: '2026-06-05',
    author: 'TheAlphaOnes',
    readTime: '6 min read',
    bannerImage: '/figma/hero-mask-image.png',
    content: `
# Building Fold.tao

We wanted a notes app that didn't feel like a chore to use. Most note-taking tools either force you into a rigid hierarchy or leave you drowning in a sea of disconnected markdown files.

## The Architecture

We built Fold.tao using a simple, local-first architecture. 

1. **Capture first**: The UI opens instantly to a blank slate.
2. **Organize later**: Background workers categorize notes using lightweight LLMs.
3. **Sync silently**: Data is encrypted and synced without loading spinners.

### The Stack

\`\`\`typescript
interface Note {
  id: string;
  content: string;
  vector: number[];
  createdAt: number;
}
\`\`\`

We rely heavily on vector embeddings for search. It allows the system to find what you mean, not just what you type.

More updates coming soon!
    `
  }
]
