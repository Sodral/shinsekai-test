import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CardNews from '../components/cards/CardNews';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'manga', name: 'Mangá' },
    { id: 'anime', name: 'Anime' },
    { id: 'interview', name: 'Entrevista' },
    { id: 'games', name: 'Jogos' },
    { id: 'merchandise', name: 'Produtos' }
  ];

  const newsData = [
    {
      id: 1,
      title: "Oda revela novos detalhes sobre o Gear 5 em entrevista",
      excerpt: "O mangaká compartilhou informações inéditas sobre o desenvolvimento do Gear 5 e seus planos futuros para Luffy.",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Entrevista",
      date: "2 horas atrás",
      author: "RedakteurOP"
    },
    {
      id: 2,
      title: "Novo trailer do episódio 1000 mostra animação espetacular",
      excerpt: "A Toei Animation divulgou um trailer impressionante do episódio milestone da série.",
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Anime",
      date: "5 horas atrás",
      author: "AnimeNews"
    },
    {
      id: 3,
      title: "Capítulo 1100 do mangá quebra recordes de vendas",
      excerpt: "O capítulo mais recente se tornou o mais vendido da história da Weekly Shonen Jump.",
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mangá",
      date: "1 dia atrás",
      author: "MangaUpdates"
    },
    {
      id: 4,
      title: "One Piece Odyssey recebe nova DLC com personagens inéditos",
      excerpt: "A expansão adiciona novos personagens jogáveis e uma história completamente nova.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Jogos",
      date: "2 dias atrás",
      author: "GameNews"
    }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Notícias
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fique por dentro das últimas novidades do mundo de One Piece
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar notícias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="space-y-6">
          {filteredNews.length > 0 ? (
            filteredNews.map(news => (
              <CardNews key={news.id} news={news} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Nenhuma notícia encontrada
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;