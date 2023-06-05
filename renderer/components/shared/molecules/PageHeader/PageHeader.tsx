import { ReactNode } from 'react';

import { LeftControls, RightControls, Wrapper } from './styled';

export type TPageHeader = {
  leftControls?: ReactNode;
  rightControls?: ReactNode;
};

const PageHeader = ({ leftControls, rightControls }: TPageHeader) => {
  return (
    <Wrapper>
      {leftControls && <LeftControls>{leftControls}</LeftControls>}
      {rightControls && <RightControls>{rightControls}</RightControls>}
    </Wrapper>
  );
};

export default PageHeader;
