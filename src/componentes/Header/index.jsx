import "./Header.css"

export const Header = ({acting, expTime, curriculo}) => {
  return (
    <header>
      <div className="apresentation">
        <h3>Oi, eu sou o André</h3>
        <div className="links">
          <h1>{acting}</h1>
          <div className="image">
            <a href="https://github.com/andrebrandassi" target="_blank">
              <img src="img/icon-github.png" alt="link para o github" />
            </a>
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-brandassi-guedes-3a6444274/"
              target="_blank"
            >
              <img src="img/icon-In.png" alt="link para o meu linkedin" />
            </a>
            <a href={curriculo} download target="_blank">
              <img
                src="img/icon-pdf.png"
                alt="link para download do meu curriculo"
              />
            </a>
          </div>
        </div>
        <h2>Developer</h2>
        <p>
          Sou um Desenvolvedor Frontend com {expTime} de experiência trabalhando
          como freelancer.
        </p>
      </div>
    </header>
  );
};
