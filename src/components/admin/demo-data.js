// Sample blog posts for testing the admin dashboard
// You can import these and seed your localStorage for testing

export const demoBlogs = [
    {
        id: 1,
        title: "Getting Started with Modern Web Development",
        category: "Technology",
        color: "1",
        date: "October 20, 2024",
        description: "A comprehensive guide to starting your journey in modern web development with the latest tools and frameworks.",
        content: `Web development has evolved significantly over the past decade. Today's developers have access to powerful frameworks, tools, and libraries that make building sophisticated web applications easier than ever.

In this guide, we'll explore the fundamental technologies you need to know: HTML, CSS, and JavaScript form the foundation. Modern frameworks like React, Vue, and Angular build on top of these basics to provide powerful development experiences.

Getting started can seem overwhelming, but with the right approach and resources, anyone can become a proficient web developer. Start with the basics, practice consistently, and build real projects to solidify your learning.`,
        author_name: "Sarah Johnson",
        job_title: "Senior Web Developer",
        tags: ["web development", "programming", "technology"],
        img: "/assets/img/blog/blog-1.jpg",
        author_img: "/assets/img/blog/blog-avata-1.png"
    },
    {
        id: 2,
        title: "The Future of Artificial Intelligence in Business",
        category: "AI & Machine Learning",
        color: "2",
        date: "October 18, 2024",
        description: "Explore how artificial intelligence is transforming business operations and creating new opportunities for growth.",
        content: `Artificial Intelligence is no longer a futuristic concept—it's here and transforming how businesses operate. From automating routine tasks to providing deep insights from data, AI is revolutionizing every industry.

Companies that embrace AI early gain significant competitive advantages. Machine learning algorithms can predict customer behavior, optimize supply chains, and personalize user experiences at scale.

The key to successful AI implementation is starting small, measuring results, and scaling gradually. Begin with well-defined problems where AI can provide clear value, and build from there.`,
        author_name: "Michael Chen",
        job_title: "AI Research Lead",
        tags: ["artificial intelligence", "machine learning", "business"],
        img: "/assets/img/blog/blog-2.jpg",
        author_img: "/assets/img/blog/blog-avata-2.png"
    },
    {
        id: 3,
        title: "Building Scalable Cloud Infrastructure",
        category: "Cloud Computing",
        color: "3",
        date: "October 15, 2024",
        description: "Learn best practices for designing and implementing scalable cloud infrastructure for modern applications.",
        content: `Cloud infrastructure forms the backbone of modern applications. Understanding how to build scalable, reliable, and cost-effective cloud systems is crucial for any developer or architect.

Key considerations include choosing the right cloud provider, implementing proper security measures, optimizing costs, and ensuring high availability. Modern tools like Kubernetes, Docker, and serverless computing have made cloud deployment more accessible.

Success in cloud infrastructure requires continuous learning and adaptation. The cloud landscape evolves rapidly, with new services and best practices emerging regularly. Stay informed and experiment with new technologies to stay ahead.`,
        author_name: "Emily Rodriguez",
        job_title: "Cloud Solutions Architect",
        tags: ["cloud computing", "infrastructure", "devops"],
        img: "/assets/img/blog/blog-3.jpg",
        author_img: "/assets/img/blog/blog-avata-3.png"
    }
];

// Function to load demo data into localStorage
export const loadDemoData = () => {
    localStorage.setItem('blai_blogs', JSON.stringify(demoBlogs));
    console.log('Demo blog data loaded successfully!');
};

// Function to clear all blog data
export const clearBlogData = () => {
    localStorage.removeItem('blai_blogs');
    console.log('Blog data cleared!');
};

// Function to export current blogs as JSON
export const exportBlogs = () => {
    const blogs = localStorage.getItem('blai_blogs');
    if (blogs) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(blogs);
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "blai_blogs_export.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
};

