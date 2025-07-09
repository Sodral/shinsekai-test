import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Heart, Eye, Grid, List } from 'lucide-react';

const FanArt = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Todas' },
    { id: 'digital', name: 'Digital' },
    { id: 'traditional', name: 'Tradicional' },
    { id: 'fanart', name: 'Fan-Art' },
    { id: 'oc', name: 'OC' }
  ];

  const artworks = [
    {
      id: 1,
      title: "Luffy Gear 5 - Nika Form",
      artist: "ArtistaNinja",
      image: "https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 324,
      views: 1205,
      type: "digital",
      tags: ["Luffy", "Gear 5", "Nika"]
    },
    {
      id: 2,
      title: "Zoro - Três Espadas",
      artist: "SamuraiArt",
      image: "https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 256,
      views: 892,
      type: "traditional",
      tags: ["Zoro", "Santoryu", "Wano"]
    },
    {
      id: 3,
      title: "Nami - Navigator",
      artist: "OceanDrawer",
      image: "https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 189,
      views: 634,
      type: "digital",
      tags: ["Nami", "Navigator", "Clima-Tact"]
    },
    {
      id: 4,
      title: "Ace - Mera Mera no Mi",
      artist: "FlameArtist",
      image: "https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 412,
      views: 1543,
      type: "digital",
      tags: ["Ace", "Fire", "Mera Mera"]
    },
    {
      id: 5,
      title: "Sanji - Black Leg",
      artist: "CookArtisan",
      image: "https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 198,
      views: 756,
      type: "traditional",
      tags: ["Sanji", "Black Leg", "Cook"]
    },
    {
      id: 6,
      title: "Robin - Hana Hana no Mi",
      artist: "ArcheoArt",
      image: "https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 167,
      views: 523,
      type: "digital",
      tags: ["Robin", "Hana Hana", "Archaeologist"]
    }
  ];

  const filteredArtworks = selectedFilter === 'all' 
    ? artworks 
    : artworks.filter(art => art.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Fan-Art
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Explore e compartilhe arte incrível criada pela comunidade
            </p>
          </div>
          
          <Link
            to="/fan-art/upload"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-400 text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>Upload</span>
          </Link>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Artworks Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map(artwork => (
              <div key={artwork.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
                <div className="relative">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                      <Heart className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    por {artwork.artist}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{artwork.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{artwork.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArtworks.map(artwork => (
              <div key={artwork.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      por {artwork.artist}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{artwork.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{artwork.views}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {artwork.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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

export default FanArt;