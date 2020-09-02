import React from 'react';
import Logo from '../../assets/img/logo-2.png'
import './Index.css'

export default props => (
    <footer className='color container-fluid text-center text-white p-3'>
        <img className='logo-ft' src={Logo} alt="Governo de Mogi Mirim, repeito e amor ao cidadão"/>
        <p>Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.

Rua Doutor José Alves, 129 - Centro - 13800-900 <br/> Mogi Mirim - SP - Brasil.
 Tel.19 3814.1000</p>
    </footer>
)