import { ReactNode } from 'react';

import { Controls, Title, Wrapper } from './styled';

export type TPageHeader = {
  title: string;
  children?: ReactNode;
};

const PageHeader = ({ title, children }: TPageHeader) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children && <Controls>{children}</Controls>}
    </Wrapper>
  );
};

export default PageHeader;
