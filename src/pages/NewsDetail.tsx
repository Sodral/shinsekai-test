import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, User, Share2, Heart, MessageCircle } from 'lucide-react';

const NewsDetail = () => {
  const { slug } = useParams();

  // Mock news data
  const news = {
    id: 1,
    title: "Oda revela novos detalhes sobre o Gear 5 em entrevista exclusiva",
    content: `
      <p>Em uma entrevista exclusiva concedida à Weekly Shonen Jump, Eiichiro Oda compartilhou informações inéditas sobre o desenvolvimento do Gear 5 e seus planos futuros para Monkey D. Luffy.</p>
      
      <p>O mangaká revelou que a ideia para o Gear 5 surgiu há mais de 10 anos, quando ele estava desenvolvendo os conceitos básicos para o despertar das Akuma no Mi. "Eu sempre soube que Luffy teria algo especial guardado para o final da série", comentou Oda.</p>
      
      <p>Durante a entrevista, Oda também falou sobre a importância da risada no Gear 5, explicando que ela representa a liberdade absoluta que Luffy sempre buscou desde o início de sua jornada.</p>
      
      <p>Além disso, o autor confirmou que ainda há mais segredos sobre o Gear 5 que serão revelados nos próximos capítulos, incluindo novas técnicas e uma possível evolução da forma.</p>
    `,
    image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Entrevista",
    date: "2024-01-15",
    author: "RedakteurOP",
    readTime: "5 min",
    tags: ["Gear 5", "Oda", "Entrevista", "Luffy", "Despertar"]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          {/* Header Image */}
          <div className="relative">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-2">
                {news.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {news.title}
              </h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{new Date(news.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <span>{news.readTime} de leitura</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6">
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>

          {/* Tags */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2 mb-4">
              {news.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-200">
                  <Heart className="w-5 h-5" />
                  <span>Curtir</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5" />
                  <span>Comentar</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Share2 className="w-5 h-5" />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Comentários
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Usuário"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-gray-900 dark:text-white">MonkeyDLuffy</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 horas atrás</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Incrível! Mal posso esperar para ver o que mais o Oda tem guardado para nós sobre o Gear 5!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;