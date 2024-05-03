import './Home.css';
import './Nav';
import { Link } from 'react-router-dom';


function Home (){
    return (
        <div className='homePage'>
            <div className='header'>
            <ul>
                <li className='item1'>
                    <Link className='item1-link' to='/'>Home</Link>
                </li>

                <li className='item1'>
                    <Link className='item1-link' to='/'>Contato</Link>
                </li>

                <li className='item1'>
                    <Link className='item1-link' to='/'>Quem Somos</Link>
                </li>

            </ul>
            </div>
            <h1>Bem-Vinde a página da AV2!</h1>
                <h4>Conheça os melhores cosplays do sesi</h4>
                <img className='foto2' src={require('./FOTO2.jpg')} width={200}></img> 
                    <div className='texto1'>Turma da Mônica</div>

                <img className='foto3' src={require('./FOTO3.jpg')} width={200}></img>
                    <div className='texto2'>Belle e Gabi feat. professor my little poney</div>

                <img className='foto3' src={require('./FOTO4.jpg')} width={200}></img>
                    <div className='texto3'>Operadores TIM e CLARO e franelinhas</div>

                <img className='foto3' src={require('./FOTO5.jpg')} width={300}></img>
                    <div className='texto4'>Olha o tigrinho</div>

                <img className='foto3' src={require('./FOTO6.jpg')} width={300}></img>
                    <div className='texto5'>Dollynho e guarana jesus</div>

                <img className='foto3' src={require('./FOTO7.jpg')} width={300}></img>
                    <div className='texto6'>Turma mais cabaco do sesi senai</div>
        </div>
    )
}
export default Home;