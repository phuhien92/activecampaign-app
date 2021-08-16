import React from "react";
import StyledAvatar from "./Avatar.style";
import md5 from 'md5';

const Avatar = ({ email, name, size = 26 }) => {
  const src = `https://www.gravatar.com/avatar/${md5(email)}?s=${size}&d=blank`;
  const initials = getInitials(name);

  return (
    <StyledAvatar size={size}>
      <div aria-hidden="true" className="swatch">
        {initials}
      </div>
      <img src={src} alt={`${name}'s avatar`} />
    </StyledAvatar>
  );
};

const getInitials = (name) => {
  name = name.trim();

  if (name.length <= 3) return name;

  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 3)
    .join("");
};
export default Avatar;
