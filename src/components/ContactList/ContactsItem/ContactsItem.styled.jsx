import styled from '@emotion/styled';
import { IoIosContact } from 'react-icons/io';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  list-style: none;

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
`;

export const ContactIcon = styled(IoIosContact)`
  color: ${({ theme }) => theme.colors.accent};
`;

export const ContactName = styled.span`
  display: inline-block;
  min-width: 150px;
  margin-left: ${({ theme }) => theme.space[2]}px;
`;

export const ContactNumber = styled.span`
  display: inline-block;
  min-width: 150px;
  margin-left: ${({ theme }) => theme.space[2]}px;
`;

export const DeleteBtn = styled.button`
  font-family: inherit;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  opacity: 0.3;

  transition: transform, 250ms;
  transition: opacity, 250ms ease-in-out;

  :hover {
    opacity: 1;
  }

  :active {
    transform: translateY(2px);
  }
`;
