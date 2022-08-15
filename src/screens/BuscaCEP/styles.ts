import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
`;
export const BoxTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  border-bottom-width: 2px;
  /* border-bottom-color: ${theme.colors.gray300}; */
`;

export const Title = styled.Text`
  /* font-family: ${theme.fonts.Lexend700}; */
  /* color: ${theme.colors.blueGray700}; */
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const BoxInput = styled.View`
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 200px;
  font-family: ${theme.fonts.Lexend700};
  font-size: 16px;
  color: ${theme.colors.blueGray700};
  margin-top: 20px;
  /* border: 2px solid ${theme.colors.gray300}; */
  border-radius: 8px;
`;

export const BoxInfoCep = styled.View`
  margin-top: 20px;
  padding: 5px;
`;

export const InfoCep = styled.View`
  flex-direction: column;
  margin: 10px 0 10px 0;
`;

export const Label = styled.Text`
  /* color: ${theme.colors.blueGray700}; */
  font-size: 16px;
`;

export const Info = styled.Text`
  /* color: ${theme.colors.blueGray800}; */
  font-size: 14px;
`;

export const BoxButton = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`;
