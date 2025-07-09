import React from 'react';

interface XPBarProps {
  current: number;
  max: number;
  className?: string;
}

const XPBar: React.FC<XPBarProps> = ({ current, max, className = '' }) => {
  const percentage = (current / max) * 100;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
        <span>XP</span>
        <span>{current}/{max}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-yellow-400 to-red-400 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default XPBar;