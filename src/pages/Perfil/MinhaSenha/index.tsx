import React from 'react';
import Profile from 'templates/Profile';
import MyPasswordForm from 'components/FormsProfile/MyPasswordForm';

const MinhaSenha: React.FC = () => {
  return (
    <Profile>
      <MyPasswordForm />
    </Profile>
  );
};

export default MinhaSenha;
