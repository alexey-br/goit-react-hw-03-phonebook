import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const InputItem = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const InputLabel = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const Input = styled(Field)`
  font-size: inherit;
  font-family: inherit;
  padding: ${({ theme }) => theme.space[2]}px;
  margin-right: ${({ theme }) => theme.space[3]}px;
  width: 200px;
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  border-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

export const SubmitBtn = styled.button`
  padding: ${({ theme }) => theme.space[2]}px;
  font-size: inherit;
  font-family: inherit;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.normal};

  transition: transform, 250ms;

  :active {
    transform: translateY(2px);
  }
`;

export const ValidationError = styled(ErrorMessage)`
  color: red;
`;
