import React, { useState } from 'react';
import { Search, BookOpen, Volume2, Calendar, Tag } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const resourceTypes = [
    { id: 'all', name: 'Todos', icon: BookOpen },
    { id: 'sbs', name: 'SBS', icon: Volume2 },
    { id: 'databook', name: 'Data Book', icon: BookOpen },
    { id: 'magazine', name: 'One Piece Magazine', icon: Calendar },
    { id: 'vivre', name: 'Vivre Card', icon: Tag }
  ];

  const resources = [
    {
      id: 1,
      title: "SBS Volume 105 - Perguntas e Respostas",
      type: "sbs",
      source: "Volume 105",
      page: "176-180",
      content: "Oda responde sobre o despertar das Akuma no Mi e revela detalhes sobre o Gear 5...",
      tags: ["Gear 5", "Akuma no Mi", "Despertar"],
      date: "2023-11-15"
    },
    {
      id: 2,
      title: "Data Book Blue Deep - Poderes dos Yonko",
      type: "databook",
      source: "Blue Deep",
      page: "89-94",
      content: "Análise completa dos poderes e habilidades dos Quatro Imperadores...",
      tags: ["Yonko", "Poderes", "Análise"],
      date: "2023-10-20"
    },
    {
      id: 3,
      title: "One Piece Magazine Vol. 17 - Entrevista com Oda",
      type: "magazine",
      source: "OP Magazine 17",
      page: "12-18",
      content: "Entrevista exclusiva onde Oda fala sobre o futuro de One Piece...",
      tags: ["Entrevista", "Oda", "Futuro"],
      date: "2023-12-01"
    },
    {
      id: 4,
      title: "Vivre Card - Monkey D. Luffy",
      type: "vivre",
      source: "Starter Set Vol. 1",
      page: "001",
      content: "Informações oficiais sobre Luffy, incluindo estatísticas e curiosidades...",
      tags: ["Luffy", "Estatísticas", "Protagonista"],
      date: "2023-09-10"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Recursos
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Biblioteca completa de SBS, Data Books, One Piece Magazine e Vivre Cards
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar recursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Type Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {resourceTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <type.icon className="w-4 h-4" />
              <span>{type.name}</span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {resourceTypes.find(t => t.id === resource.type)?.icon && (
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                        {React.createElement(resourceTypes.find(t => t.id === resource.type)!.icon, {
                          className: "w-5 h-5 text-blue-600 dark:text-blue-400"
                        })}
                      </div>
                    )}
                    <div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {resourceTypes.find(t => t.id === resource.type)?.name}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <p><strong>Fonte:</strong> {resource.source}</p>
                  <p><strong>Página:</strong> {resource.page}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {resource.content}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(resource.date).toLocaleDateString('pt-BR')}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Nenhum recurso encontrado
              </p>
            </div>
          )}
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

export default Resources;