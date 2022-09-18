import styled from '@emotion/styled';

export const FilterLabel = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const FilterInput = styled.input`
  font-size: inherit;
  font-family: inherit;
  padding: ${({ theme }) => theme.space[2]}px;
  width: 200px;
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  border-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;
