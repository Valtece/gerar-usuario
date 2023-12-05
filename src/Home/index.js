import './style.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [dados, setDados] = useState({});
  const [infoSelecionada, setInfoSelecionada] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        
        // Desestruturação dos dados recebidos diretamente no axios.get
        const { data } = response;

        // Como sua resposta tem um array 'results', pegamos o primeiro item do array
        const primeiroResultado = data.results[0];

        // Extrai os campos de 'nome' e 'email' do primeiro resultado
        const { picture, name, email, dob, location, phone, login } = primeiroResultado;

        // Atualiza o estado com os dados de 'nome' e 'email'
        setDados({picture: `${picture.large}`, nome: `${name.first} ${name.last}`, email, idade: `${dob.age}`, 
        location: `${location.street.number} ${location.street.name}`, phone, password: `${login.password}` });
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }

    fetchData();
  }, []);

  const handleClick = (tipoInfo) => {
    setInfoSelecionada(tipoInfo);
  };

  return (
    <div className="container-principal">
      
      <div className='quadro'>
      <div className='title'>
        <h1 className='titulo'>
          Gerador Aleatório de Usuários
        </h1>
        <h3 className='description'>
        Aplicação para gerar dados aleatórios de usuários. Como Lorem Ipsum, mas para informações pessoais.
        </h3>
        </div>
        <div className='circulo'>
          <img className='img-perfil' src={dados.picture}/>
        </div>
          <div className='informações'>
            {infoSelecionada === 'name' && (
              <p className='classe'>Meu nome é: <br/> <span className='dados'>{`${dados.nome}`}</span></p>
            )}
            {infoSelecionada === 'email' && (
              <p className='classe'>Meu email é: <br/> <span className='dados'>{`${dados.email}`}</span></p>
            )}
            {infoSelecionada === 'age' && (
              <p className='classe'>Eu tenho: <br/> <span className='dados'>{`${dados.idade}`} anos</span></p>
            )}
             {infoSelecionada === 'location' && (
              <p className='classe'>Meu endereço: <br/> <span className='dados'>{`${dados.location}`}</span></p>
            )}
            {infoSelecionada === 'phone' && (
              <p className='classe'>Meu telefone é: <br/> <span className='dados'>{`${dados.phone}`}</span></p>
            )}
            {infoSelecionada === 'password' && (
              <p className='classe'>Minha senha é: <br/> <span className='dados'>{`${dados.password}`}</span></p>
            )}
          </div>
        <ul className='icons'>
          <li><FontAwesomeIcon 
          icon={faCircleUser} 
          className="icone-customizado" 
          onClick={() => handleClick('name')} />
          </li>
          <li><FontAwesomeIcon 
          icon={faEnvelope} 
          className="icone-customizado" 
          onClick={() => handleClick('email')} />
          </li>
          <li><FontAwesomeIcon 
          icon={faCalendarDays} 
          className="icone-customizado"
          onClick={() => handleClick('age')} />
          </li>
          <li><FontAwesomeIcon 
          icon={faLocationDot} 
          className="icone-customizado"
          onClick={() => handleClick('location')} />
          </li>
          <li><FontAwesomeIcon 
          icon={faPhone} 
          className="icone-customizado"
          onClick={() => handleClick('phone')} />
          </li>
          <li><FontAwesomeIcon 
          icon={faLock} 
          className="icone-customizado"
          onClick={() => handleClick('password')} />
          </li>
        </ul>
      </div>
    </div>
  );
}