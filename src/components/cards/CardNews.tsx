import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

interface CardNewsProps {
  news: NewsItem;
}

const CardNews: React.FC<CardNewsProps> = ({ news }) => {
  return (
    <Link
      to={`/news/${news.id}`}
      className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-2/5">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 text-sm font-medium rounded-full">
              {news.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {news.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {news.excerpt}
          </p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{news.author}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardNews;