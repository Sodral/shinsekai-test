import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  username: string;
  avatar: string;
  level: string;
  xp: number;
  badges: string[];
  role: 'visitor' | 'user' | 'artist' | 'curator' | 'moderator' | 'owner';
}

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateXP: (points: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    username: 'MonkeyDLuffy',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    level: 'Capitão',
    xp: 750,
    badges: ['Teoricista', 'Explorador'],
    role: 'user'
  });

  const login = (newUser: User) => {
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateXP = (points: number) => {
    if (user) {
      setUser({ ...user, xp: user.xp + points });
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateXP }}>
      {children}
    </UserContext.Provider>
  );
};