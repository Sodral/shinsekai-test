import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, TrendingUp, Clock, User } from 'lucide-react';
import CardTheory from '../components/cards/CardTheory';

const Theories = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const tabs = [
    { id: 'trending', name: 'Mais Votadas', icon: TrendingUp },
    { id: 'recent', name: 'Recentes', icon: Clock },
    { id: 'mine', name: 'Minhas', icon: User }
  ];

  const theoriesData = [
    {
      id: 1,
      title: "Shanks e a verdadeira natureza do Haki do Rei",
      author: "TheoryKing",
      votes: 847,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      tag: "Haki",
      excerpt: "Uma análise profunda sobre como Shanks desenvolveu seu Haki do Rei e por que ele é tão especial. Baseado em evidências dos capítulos mais recentes e declarações do próprio Oda...",
      timeAgo: "3 dias atrás"
    },
    {
      id: 2,
      title: "O verdadeiro poder da Gomu Gomu no Mi",
      author: "DevilFruitExpert",
      votes: 692,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      tag: "Akuma no Mi",
      excerpt: "Evidências de que a fruta do Luffy possui segredos ainda não revelados. A conexão com Joy Boy e o verdadeiro nome da fruta...",
      timeAgo: "1 semana atrás"
    },
    {
      id: 3,
      title: "Im-sama: A origem dos Tenryuubito",
      author: "HistorianOP",
      votes: 534,
      avatar: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400",
      tag: "História",
      excerpt: "Uma teoria sobre a verdadeira identidade de Im-sama e como ele se relaciona com o Século Perdido e a criação do Governo Mundial...",
      timeAgo: "4 dias atrás"
    },
    {
      id: 4,
      title: "Zoro e a lenda de Ryuma",
      author: "SwordMaster",
      votes: 423,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      tag: "Personagem",
      excerpt: "A conexão entre Zoro e o lendário samurai Ryuma vai além do que imaginamos. Evidências de Wano sugerem uma ligação ancestral...",
      timeAgo: "2 dias atrás"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Teorias
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Compartilhe e discuta as mais intrigantes teorias sobre One Piece
            </p>
          </div>
          
          <Link
            to="/theories/new"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-400 text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>Nova Teoria</span>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Theories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {theoriesData.map(theory => (
            <CardTheory key={theory.id} theory={theory} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            Carregar Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theories;