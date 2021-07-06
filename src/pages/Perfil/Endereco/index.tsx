import React from 'react';
import Profile from 'templates/Profile';
import MyAddressForm from 'components/FormsProfile/MyAddressForm';

const Endereco: React.FC = () => {
  return (
    <Profile>
      <MyAddressForm />
    </Profile>
  );
};

export default Endereco;
