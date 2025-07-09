import React from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Trophy, Star, Heart, MessageCircle, Calendar, Award } from 'lucide-react';
import XPBar from '../components/ui/XPBar';

const Profile = () => {
  const { user: username } = useParams();
  const { user } = useUser();

  // Mock profile data
  const profileData = {
    id: '1',
    username: 'MonkeyDLuffy',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'Capitão',
    xp: 750,
    maxXp: 1000,
    badges: ['Teoricista', 'Explorador', 'Artista'],
    joinDate: '2023-01-15',
    bio: 'Futuro Rei dos Piratas! Sempre em busca de aventuras no mundo de One Piece.',
    stats: {
      theories: 23,
      fanArts: 12,
      likes: 456,
      comments: 89
    },
    recentActivity: [
      {
        id: 1,
        type: 'theory',
        title: 'Nova teoria sobre o One Piece',
        date: '2 horas atrás',
        votes: 45
      },
      {
        id: 2,
        type: 'fanart',
        title: 'Luffy Gear 5 Fan Art',
        date: '1 dia atrás',
        likes: 78
      }
    ]
  };

  const badgeColors = {
    'Teoricista': 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400',
    'Explorador': 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400',
    'Artista': 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-400'
  };

  const levelInfo = {
    'Grumete': { color: 'text-gray-600', bgColor: 'bg-gray-100' },
    'Corsário': { color: 'text-blue-600', bgColor: 'bg-blue-100' },
    'Primeiro-Oficial': { color: 'text-green-600', bgColor: 'bg-green-100' },
    'Capitão': { color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    'Imperador dos Mares': { color: 'text-red-600', bgColor: 'bg-red-100' }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={profileData.avatar}
              alt={profileData.username}
              className="w-24 h-24 rounded-full"
            />
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {profileData.username}
              </h1>
              
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelInfo[profileData.level as keyof typeof levelInfo].bgColor} ${levelInfo[profileData.level as keyof typeof levelInfo].color}`}>
                  {profileData.level}
                </span>
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    Desde {new Date(profileData.joinDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {profileData.bio}
              </p>
              
              <div className="mb-4">
                <XPBar current={profileData.xp} max={profileData.maxXp} />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {profileData.badges.map(badge => (
                  <span
                    key={badge}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${badgeColors[badge as keyof typeof badgeColors]}`}
                  >
                    <Award className="w-4 h-4" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{profileData.stats.theories}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Teorias</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{profileData.stats.fanArts}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fan-Arts</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{profileData.stats.likes}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Curtidas</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{profileData.stats.comments}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Comentários</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Atividade Recente
          </h2>
          
          <div className="space-y-4">
            {profileData.recentActivity.map(activity => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  {activity.type === 'theory' ? (
                    <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {activity.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{activity.date}</span>
                    <span>
                      {activity.type === 'theory' ? `${activity.votes} votos` : `${activity.likes} curtidas`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;