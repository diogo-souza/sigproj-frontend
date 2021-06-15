import React from 'react';
import Button from 'components/Button';
import Logo from 'components/Logo';
import { FaUser } from 'react-icons/fa';

const Main: React.FC = () => {
  return (
    <>
      <h1>Main</h1>
      <Logo />
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
      <Button fullWidth>Full Width</Button>

      <Button size="small" icon={<FaUser />}>
        Small
      </Button>
      <Button icon={<FaUser />}>Medium</Button>
      <Button size="large" icon={<FaUser />}>
        Large
      </Button>
      <Button fullWidth icon={<FaUser />}>
        Full Width
      </Button>

      <Button size="small" icon={<FaUser />} />
      <Button icon={<FaUser />} />
      <Button size="large" icon={<FaUser />} />
      <Button fullWidth icon={<FaUser />} />
    </>
  );
};

export default Main;
