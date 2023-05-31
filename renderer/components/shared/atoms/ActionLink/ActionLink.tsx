import { FC } from 'react';

import { StyledLink, StyledNextLink } from './styled';
import { TActionLink } from './types';

const ActionLink: FC<TActionLink> = ({
  onClick,
  label,
  $size = 14,
  $weight,
  children,
  $color = 'primary',
  href,
  ...props
}) => {
  if (href)
    return (
      <StyledNextLink
        $color={$color}
        onClick={onClick}
        $size={$size}
        $weight={$weight}
        href={href}
        passHref
        {...props}
      >
        {label}
        {children}
      </StyledNextLink>
    );
  return (
    <StyledLink $color={$color} onClick={onClick} $size={$size} $weight={$weight} {...props}>
      {label} {children}
    </StyledLink>
  );
};

export default ActionLink;
