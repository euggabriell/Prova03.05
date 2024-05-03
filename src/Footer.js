import './Footer.css';

function Footer (){
    return (
        <div className='footer'>
            <p className='texto1'>&copy; Todos os direitos reservados GPs do 3ºN!. Contato: japodesematar@cabacos.cabare.com</p>
            <img className='sesilogo' src={require('./SESI.png')} width={100}></img>
        </div>
    )
}
export default Footer;