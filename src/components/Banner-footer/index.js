import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-conteiner'>
            <div className='footer'>
                <div className='redes'>
                    <a href='https://www.instagram.com/davidandraded.a/'><img src="/imagens/fb.png" alt='image' /></a>
                    <a href='https://www.instagram.com/davidandraded.a/'><img src="/imagens/tw.png" /></a>
                    <a href='https://www.instagram.com/davidandraded.a/'><img src="/imagens/ig.png" /></a>
                </div>
                <div>
                    <img src='/imagens/logo.png' />
                </div>
                <div>
                    <h3>Desenvolvido por David Andrade © 2024</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer