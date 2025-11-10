import React, { useState } from 'react';
import useTranslations from '../hooks/useTranslations';
import { getBlogContent } from '../data/blogContent';
import BlogModal from './BlogModal';

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);

const BlogCard: React.FC<{ post: Post; onReadMore: () => void; readMoreText: string }> = ({ post, onReadMore, readMoreText }) => (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
        <div className="relative h-56 overflow-hidden bg-gray-700">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                    const target = e.currentTarget;
                    console.error(`Failed to load image: ${post.image}`);
                    target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%234A5568" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E`;
                }}
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow text-sm">{post.description}</p>
            <button onClick={onReadMore} className="mt-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors self-start">
                {readMoreText}
            </button>
        </div>
    </div>
);

const Blog: React.FC = () => {
    const { t } = useTranslations();
    const blogPosts = getBlogContent(t);
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('blog.title')} subtitle={t('blog.subtitle')} />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {blogPosts.map((post) => (
                    <BlogCard 
                        key={post.id} 
                        post={post}
                        onReadMore={() => setSelectedPostId(post.id)}
                        readMoreText={t('blog.readMore')}
                    />
                ))}
            </div>

            {selectedPostId && (
                <BlogModal 
                    postId={selectedPostId} 
                    onClose={() => setSelectedPostId(null)}
                />
            )}
        </div>
    );
};

export default Blog;