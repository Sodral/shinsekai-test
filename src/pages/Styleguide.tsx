import React from 'react';
import { Heart, ArrowUp, User, BookOpen, Star, Plus } from 'lucide-react';
import XPBar from '../components/ui/XPBar';

const Styleguide = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Guia de Estilo - Shinsekai
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Biblioteca de componentes e elementos de design do sistema
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Paleta de Cores
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="w-full h-20 bg-blue-800 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Azul Profundo</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">#1E3A8A</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="w-full h-20 bg-blue-300 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Azul Claro</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">#93C5FD</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="w-full h-20 bg-yellow-400 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Dourado CTA</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">#FBBF24</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="w-full h-20 bg-red-400 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Vermelho Destaque</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">#F87171</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Botões
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-400 text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-200">
                Botão Primário
              </button>
              <button className="px-6 py-3 border-2 border-blue-800 text-blue-800 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                Botão Secundário
              </button>
              <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                Botão Neutro
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Card Base
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Card padrão com título e descrição
              </p>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">Autor</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Card com imagem"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Card com Imagem
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Card com thumbnail e conteúdo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tags and Pills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Tags e Pills
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium">
                Tag Azul
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 rounded-full text-sm font-medium">
                Tag Verde
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-400 rounded-full text-sm font-medium">
                Tag Roxa
              </span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-400 rounded-full text-sm font-medium">
                Tag Amarela
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Elementos Interativos
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-6 mb-6">
              <button className="flex flex-col items-center space-y-1 group">
                <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">847</span>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Heart className="w-5 h-5" />
                <span className="text-sm">324</span>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                <Star className="w-5 h-5" />
                <span className="text-sm">Favoritar</span>
              </button>
            </div>
            
            <div className="mb-6">
              <XPBar current={750} max={1000} />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">MonkeyDLuffy</span>
              </div>
              
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-400 rounded-full text-sm font-medium">
                Capitão
              </span>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Elementos de Formulário
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Input Padrão
              </label>
              <input
                type="text"
                placeholder="Digite aqui..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Textarea
              </label>
              <textarea
                placeholder="Escreva sua mensagem..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
              </select>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Tipografia
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Heading 1 - 4xl Bold
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Heading 2 - 3xl Bold
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Heading 3 - 2xl Bold
            </h3>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Heading 4 - xl Bold
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Parágrafo padrão com texto regular. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Texto pequeno usado para metadados e informações secundárias.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Styleguide;