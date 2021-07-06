import React from 'react';
import Profile from 'templates/Profile';
import MyProfileForm from 'components/FormsProfile/MyProfileForm';

const MeuPerfil: React.FC = () => {
  return (
    <Profile>
      <MyProfileForm />
    </Profile>
  );
};

export default MeuPerfil;
