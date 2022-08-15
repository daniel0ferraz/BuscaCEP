import CEP from '../../services/CEP';
import React, {useState} from 'react';

import IconLocation from '../../assets/icon-maplocation.svg';
import Button from '../../components/Button';
import * as Styled from './styles';
import {Alert} from 'react-native';

type CepProps = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;

  error: boolean;
};

export default function BuscaCEP() {
  const [infoCep, setInfoCep] = useState<CepProps>({} as CepProps);
  const [searchCep, setSearchCep] = useState('');

  const getCep = async () => {
    const {data} = await CEP.get(`${searchCep}/json/`);

    try {
      if (!data || data.erro) {
        setInfoCep({} as CepProps);

        return;
      } else if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado');
        return;
      } else {
        setInfoCep(data);
      }
    } catch (error) {
      //Axios erro
      Alert.alert('Erro', 'Erro ao buscar o CEP');
      throw new Error('Erro ao buscar o CEP');
    }
  };

  // clear cep
  const clearCep = () => {
    setSearchCep('');
    setInfoCep({} as CepProps);
  };

  return (
    <>
      <Styled.Header>
        <Styled.BoxTitle>
          <IconLocation width={180} height={80} />
          <Styled.Title>Busca CEP</Styled.Title>
        </Styled.BoxTitle>
      </Styled.Header>

      <Styled.BoxInput>
        <Styled.Input
          placeholder="Digite o CEP"
          value={searchCep}
          onChangeText={text => setSearchCep(text)}
          keyboardAppearance="dark"
          keyboardType="numeric"
          textAlign="center"
        />
      </Styled.BoxInput>

      <Styled.BoxInfoCep>
        <Styled.InfoCep>
          <Styled.Label>Rua: </Styled.Label>
          <Styled.Info>{infoCep?.logradouro}</Styled.Info>
        </Styled.InfoCep>

        <Styled.InfoCep>
          <Styled.Label>Bairro: </Styled.Label>
          <Styled.Info>{infoCep?.bairro}</Styled.Info>
        </Styled.InfoCep>

        <Styled.InfoCep>
          <Styled.Label>Cidade: </Styled.Label>
          <Styled.Info>{infoCep?.localidade}</Styled.Info>
        </Styled.InfoCep>

        <Styled.InfoCep>
          <Styled.Label>Estado: </Styled.Label>
          <Styled.Info>{infoCep?.uf}</Styled.Info>
        </Styled.InfoCep>

        <Styled.InfoCep>
          <Styled.Label>CEP: </Styled.Label>
          <Styled.Info>{infoCep?.cep}</Styled.Info>
        </Styled.InfoCep>

        <Styled.InfoCep>
          <Styled.Label>DDD:</Styled.Label>
          <Styled.Info>{infoCep?.ddd}</Styled.Info>
        </Styled.InfoCep>
      </Styled.BoxInfoCep>

      <Styled.BoxButton>
        {/* <Button onPress={getCep}>Buscar</Button>
        <Button onPress={clearCep} color="Blue100" textColor="Bluetxt">
          Limpar
        </Button> */}
      </Styled.BoxButton>
    </>
  );
}
