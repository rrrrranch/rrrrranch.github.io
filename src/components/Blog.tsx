import React from 'react';
import './Blog.css'; // Import the CSS file for styling

interface BlogPost {
    title: string;
    date: string;
    content: string;
}

const blogPosts: BlogPost[] = [
    {
        title: "Understanding AI and Its Impact",
        date: "October 1, 2023",
        content: "Artificial Intelligence (AI) is transforming industries and reshaping our daily lives. In this post, we explore its implications and future."
    },
    {
        title: "The Rise of Quantum Computing",
        date: "September 15, 2023",
        content: "Quantum computing promises to revolutionize problem-solving capabilities. This article delves into its potential and challenges."
    },
    {
        title: "Web Development Trends in 2023",
        date: "August 30, 2023",
        content: "Stay ahead of the curve with the latest trends in web development, including frameworks, tools, and best practices."
    }
];

const Blog: React.FC = () => {
    const latestPost = blogPosts[0];

    return (
        <div className="blog-container">
            <p className="blog-title">LATEST</p>
            <div className="blog-post">
                <h2 className="post-title">{latestPost.title}</h2>
                <p className="post-date">{latestPost.date}</p>
                <p className="post-content">{latestPost.content}</p>
            </div>
        </div>
    );
};

export default Blog;
