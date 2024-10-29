import React from 'react';
import { Clock, Tag } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: (id: string) => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(article.id)}
    >
      <img 
        src={article.coverImage} 
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img 
            src={article.author.avatar} 
            alt={article.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">{article.author.name}</h3>
            <p className="text-sm text-gray-500">{article.publishedAt}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-500">
            <Clock size={16} />
            <span className="text-sm">{article.readTime} min read</span>
          </div>
          <div className="flex items-center space-x-2">
            <Tag size={16} className="text-gray-500" />
            <span className="text-sm text-gray-500">{article.tags[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}