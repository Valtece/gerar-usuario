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
  const [users, setUsers] = useState([]);
    const [infoSelecionada, setInfoSelecionada] = useState('');
  
  const UserInfo = () => {

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get ('https://randomuser.me/api/');
          setUsers(response.data);
    
        } catch (error) {
          console.error('Erro ao buscar Usuário:', error);
        } 
      };
  
        fetchUsers();
    }, []);
  }

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
          <img/>
        </div>
        <div>
          <div className='informações'>
            <p className='is'>Meu endereço é</p>
            <p className='dados'>2061 Paddock Way</p>
          </div>
        </div>
        <ul className='icons'>
          <li><FontAwesomeIcon 
          icon={faCircleUser} 
          className="icone-customizado" 
          onClick={() => handleClick('title.first.last')} />
          </li>
          <li><FontAwesomeIcon 
          icon={faEnvelope} 
          className="icone-customizado" 
          onClick={() => handleClick('email')} />
          </li>
          <li><FontAwesomeIcon 
          icon={faCalendarDays} 
          className="icone-customizado"
          onClick={() => handleClick('date')} />
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