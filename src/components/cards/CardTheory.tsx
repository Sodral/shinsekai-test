import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Clock } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

interface Theory {
  id: number;
  title: string;
  author: string;
  votes: number;
  avatar: string;
  tag: string;
  excerpt: string;
  timeAgo: string;
}

interface CardTheoryProps {
  theory: Theory;
  compact?: boolean;
}

const CardTheory: React.FC<CardTheoryProps> = ({ theory, compact = false }) => {
  const { user, updateXP } = useUser();

  const handleVote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (user) {
      updateXP(1);
      // Add vote animation logic here
    }
  };

  if (compact) {
    return (
      <Link
        to={`/theories/${theory.id}`}
        className="block bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="flex items-start space-x-3">
          <button
            onClick={handleVote}
            className="flex flex-col items-center space-y-1 min-w-0 group"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {theory.votes}
            </span>
          </button>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 line-clamp-2">
              {theory.title}
            </h4>
            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{theory.author}</span>
              <span>•</span>
              <span>{theory.timeAgo}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/theories/${theory.id}`}
      className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
    >
      <div className="flex items-start space-x-4">
        <button
          onClick={handleVote}
          className="flex flex-col items-center space-y-1 min-w-0 group"
        >
          <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {theory.votes}
          </span>
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-3">
            <img
              src={theory.avatar}
              alt={theory.author}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{theory.author}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{theory.timeAgo}</span>
              </div>
            </div>
          </div>
          
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 text-sm font-medium rounded-full mb-3">
            {theory.tag}
          </span>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {theory.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {theory.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardTheory;