import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowUp, ArrowDown, MessageCircle, Share2, Clock, Eye } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const TheoryDetail = () => {
  const { id } = useParams();
  const { user, updateXP } = useUser();
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  // Mock theory data
  const theory = {
    id: 1,
    title: "Shanks e a verdadeira natureza do Haki do Rei",
    content: `
      <p>Desde o início da série, Shanks tem sido retratado como um dos personagens mais misteriosos e poderosos de One Piece. Sua demonstração de Haki do Rei no capítulo 1 foi apenas um vislumbre do que estava por vir.</p>
      
      <h3>A Teoria Principal</h3>
      <p>Acredito que Shanks possui uma forma única de Haki do Rei que transcende o que conhecemos. Evidências recentes sugerem que ele pode não apenas dominar a vontade de outros, mas também manipular a própria realidade ao seu redor.</p>
      
      <h3>Evidências dos Mangás</h3>
      <p>No capítulo 1054, vimos Shanks parar uma guerra inteira apenas com sua presença. Isso não é apenas intimidação - é uma demonstração de controle absoluto sobre o ambiente.</p>
      
      <p>Além disso, sua capacidade de "anular" ataques futuros, como mostrado contra Kid, sugere que seu Haki opera em um nível temporal diferente.</p>
      
      <h3>Conexão com Joy Boy</h3>
      <p>É possível que Shanks tenha herdado não apenas a vontade de Roger, mas também fragmentos da consciência de Joy Boy. Isso explicaria por que ele conseguiu despertar o Gear 5 de Luffy indiretamente.</p>
    `,
    author: {
      username: "TheoryKing",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Primeiro-Oficial",
      badge: "Teoricista"
    },
    votes: 847,
    comments: 156,
    views: 2453,
    createdAt: "2024-01-12",
    tags: ["Haki", "Shanks", "Joy Boy", "Teoria"],
    isUpvoted: false,
    isDownvoted: false
  };

  const handleVote = (voteType: 'up' | 'down') => {
    if (user) {
      setUserVote(userVote === voteType ? null : voteType);
      updateXP(1);
    }
  };

  const comments = [
    {
      id: 1,
      author: {
        username: "MonkeyDLuffy",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
        level: "Capitão"
      },
      content: "Teoria muito bem elaborada! A conexão com Joy Boy faz muito sentido considerando os eventos recentes.",
      createdAt: "2024-01-13",
      votes: 23
    },
    {
      id: 2,
      author: {
        username: "HakiMaster",
        avatar: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400",
        level: "Corsário"
      },
      content: "Interessante perspectiva sobre o Haki temporal. Nunca pensei nessa possibilidade!",
      createdAt: "2024-01-13",
      votes: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={theory.author.avatar}
                alt={theory.author.username}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {theory.author.username}
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-400 text-xs rounded-full">
                    {theory.author.level}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 text-xs rounded-full">
                    {theory.author.badge}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(theory.createdAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{theory.views} visualizações</span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {theory.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {theory.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Voting and Stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleVote('up')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    userVote === 'up'
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
                <span className="font-medium text-gray-900 dark:text-white">
                  {theory.votes}
                </span>
                <button
                  onClick={() => handleVote('down')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    userVote === 'down'
                      ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  <ArrowDown className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                <MessageCircle className="w-5 h-5" />
                <span>{theory.comments} comentários</span>
              </div>

              <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Share2 className="w-5 h-5" />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: theory.content }}
            />
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Comentários ({theory.comments})
          </h3>

          {/* Add Comment */}
          {user && (
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-start space-x-3">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    placeholder="Adicione um comentário..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                      Comentar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Comments List */}
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="flex items-start space-x-4">
                <img
                  src={comment.author.avatar}
                  alt={comment.author.username}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {comment.author.username}
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-400 text-xs rounded-full">
                      {comment.author.level}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(comment.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {comment.content}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                      <ArrowUp className="w-4 h-4" />
                      <span className="text-sm">{comment.votes}</span>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm">
                      Responder
                    </button>
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

export default TheoryDetail;