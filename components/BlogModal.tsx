
import React, { useEffect } from 'react';
import useTranslations from '../hooks/useTranslations';
// Fix: The `getBlogContent` function has been refactored to correctly handle translations.
import { getBlogContent } from '../data/blogContent';

interface BlogModalProps {
  postId: string;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ postId, onClose }) => {
    const { t } = useTranslations();
    // Fix: This call is now correct, as getBlogContent expects the translation function `t`.
    // The returned `blogPosts` will be fully translated and merged with static data like images.
    const blogPosts = getBlogContent(t);
    const post = blogPosts.find(p => p.id === postId);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
          <h2 className="text-xl font-bold text-white truncate pr-4">{post.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none flex-shrink-0">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 text-gray-300">
            <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-400 mb-6 space-x-4 border-b border-gray-700 pb-4">
                <span>{post.author}</span>
                <span>{post.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
            {/* Fix: The `post` object now correctly includes the `content` property, resolving the error. */}
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="p-4 border-t border-gray-700 flex justify-end gap-4 flex-shrink-0">
          <button onClick={onClose} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
