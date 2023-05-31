import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  overflow: hidden;

  font-size: 0;

  border-radius: 50%;
`;

export const Image = styled.img`
  position: absolute;
  inset: -9999px;

  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: auto;
`;
