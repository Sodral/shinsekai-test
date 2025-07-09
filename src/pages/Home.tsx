import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { TrendingUp, Users, Image, BookOpen, ArrowRight } from 'lucide-react';
import CardNews from '../components/cards/CardNews';
import CardTheory from '../components/cards/CardTheory';
import XPBar from '../components/ui/XPBar';

const Home = () => {
  const { user } = useUser();

  const latestNews = [
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
    }
  ];

  const topTheories = [
    {
      id: 1,
      title: "Shanks e a verdadeira natureza do Haki do Rei",
      author: "TheoryKing",
      votes: 847,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      tag: "Haki",
      excerpt: "Uma análise profunda sobre como Shanks desenvolveu seu Haki do Rei e por que ele é tão especial...",
      timeAgo: "3 dias atrás"
    },
    {
      id: 2,
      title: "O verdadeiro poder da Gomu Gomu no Mi",
      author: "DevilFruitExpert",
      votes: 692,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      tag: "Akuma no Mi",
      excerpt: "Evidências de que a fruta do Luffy possui segredos ainda não revelados...",
      timeAgo: "1 semana atrás"
    }
  ];

  const stats = [
    { icon: TrendingUp, label: "Teorias", value: "2.847", color: "text-blue-600" },
    { icon: Users, label: "Usuários", value: "15.2k", color: "text-green-600" },
    { icon: Image, label: "Fan-Arts", value: "8.934", color: "text-purple-600" },
    { icon: BookOpen, label: "Recursos", value: "1.256", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bem-vindo ao <span className="text-yellow-400">Shinsekai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              O novo mundo dos fãs de One Piece
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-200">
              Descubra as últimas notícias, compartilhe teorias épicas, explore fan-arts incríveis 
              e mergulhe no vasto universo de recursos sobre One Piece.
            </p>
            
            {user && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-sm text-blue-200">{user.level}</p>
                  </div>
                </div>
                <XPBar current={user.xp} max={1000} />
              </div>
            )}
          </div>
        </div>
        
        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="rgb(249 250 251)"
              className="dark:fill-gray-900"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Últimas Notícias
                </h2>
                <Link
                  to="/news"
                  className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Ver todas
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {latestNews.map((news) => (
                  <CardNews key={news.id} news={news} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Top Theories */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Teorias em Alta
                  </h2>
                  <Link
                    to="/theories"
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                  >
                    Ver todas
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {topTheories.map((theory) => (
                    <CardTheory key={theory.id} theory={theory} compact />
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Ações Rápidas
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/theories/new"
                    className="block w-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-400 text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-200 text-center"
                  >
                    Criar Teoria
                  </Link>
                  <Link
                    to="/fan-art/upload"
                    className="block w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 text-center"
                  >
                    Upload Fan-Art
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;