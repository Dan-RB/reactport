import Image from "next/image";
import Head from 'next/head';
import Script  from 'next/script';

export default function Home() {
  return (<>
    <meta charSet="utf-8" />
    <title>Portafolio de Traducciones</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta
      content="Portafolio de trabajos de traducción de Daniel Adame."
      name="description"
    />
    <meta content="FairTech & Adame" name="author" />
    <link
      href="http://fonts.googleapis.com/css?family=Hind:300,400,500,600,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
      rel="stylesheet"
    />
    <link
      href="vendor/simple-line-icons/simple-line-icons.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="vendor/bootstrap/css/bootstrap.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link href="css/animate.css" rel="stylesheet" />
    <link
      href="vendor/swiper/css/swiper.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link href="css/layout.min.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="favicon.ico" />

    <body id="body" data-spy="scroll" data-target=".header">
    <header className="header navbar-fixed-top">
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="menu-container js_nav-item">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="toggle-icon" />
            </button>
            <div className="logo">
              <a className="logo-wrap" href="#body">
                <img
                  className="logo-img logo-img-main"
                  src="img/logo.png"
                  alt="Portafolio Logo"
                />
                <img
                  className="logo-img logo-img-active"
                  src="img/logo-dark.png"
                  alt="Portafolio Dark Logo"
                />
              </a>
            </div>
          </div>
          <div className="collapse navbar-collapse nav-collapse">
            <div className="menu-container">
              <ul className="nav navbar-nav navbar-nav-right">
                <li className="js_nav-item nav-item">
                  <a className="nav-item-child nav-item-hover" href="#body">
                    Inicio
                  </a>
                </li>
                <li className="js_nav-item nav-item">
                  <a className="nav-item-child nav-item-hover" href="#about">
                    Acerca de mi
                  </a>
                </li>
                <li className="js_nav-item nav-item">
                  <a className="nav-item-child nav-item-hover" href="#products">
                    VideoJuegos
                  </a>
                </li>
                <li className="js_nav-item nav-item">
                  <a className="nav-item-child nav-item-hover" href="#youtube">
                    YouTube
                  </a>
                </li>
                <li className="js_nav-item nav-item">
                  <a className="nav-item-child nav-item-hover" href="#lost">
                    Proyectos perdidos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div
      id="carousel-example-generic"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="container">
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carousel-example-generic" data-slide-to={1} />
        </ol>
      </div>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img
            className="img-responsive"
            src="img/1920x1080/01.jpg"
            alt="Slider Image"
          />
          <div className="container">
            <div className="carousel-centered">
              <div className="margin-b-40">
                <h1 className="carousel-title">Trabajos Personales</h1>
                <p className="color-white">
                  Suelo trabajar solo, pero frecuentemente recibo ayuda de <br />{" "}
                  familiares y amigos.
                </p>
              </div>
              <a
                href="#products"
                className="btn-theme btn-theme-sm btn-white-brd text-uppercase"
              >
                Ver Trabajos
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            className="img-responsive"
            src="img/1920x1080/02.jpg"
            alt="Slider Image"
          />
          <div className="container">
            <div className="carousel-centered">
              <div className="margin-b-40">
                <h2 className="carousel-title">Gran Alcance</h2>
                <p className="color-white">
                  Publico todos mis proyectos en los lugares reelevantes.
                </p>
              </div>
              <a
                href="#products"
                className="btn-theme btn-theme-sm btn-white-brd text-uppercase"
              >
                Ver Trabajos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*========== SLIDER ==========*/}
    {/*========== PAGE LAYOUT ==========*/}
    {/* About */}
    <div id="about">
      <div className="content-lg container">
        {/* Masonry Grid */}
        <div className="masonry-grid row">
          <div className="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1" />
          <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4 sm-margin-b-30">
            <div className="margin-b-60">
              <h2>Identidad</h2>
              <p>
                Soy un estudiante mexicano de Ingeniería en Computación, a pesar
                del ángulo técnico siempre me han interesado las artes.{" "}
              </p>
            </div>
            <img
              className="full-width img-responsive wow fadeInUp"
              src="img/500x500/01.jpg"
              alt="Portfolio Image"
              data-wow-duration=".3"
              data-wow-delay=".2s"
            />
          </div>
          <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
            <div className="margin-b-60">
              <h2>Objetivo</h2>
              <p>
                Localizo cosas por gusto, siempre con la intención de permitir que
                personas que no conozcan el idioma puedan disfrutar del contenido.
              </p>
            </div>
            <img
              className="full-width img-responsive wow fadeInUp"
              src="img/500x500/02.jpg"
              alt="Portfolio Image"
              data-wow-duration=".3"
              data-wow-delay=".3s"
            />
          </div>
          <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
            <div className="margin-t-60 margin-b-60">
              <h2>Futuro</h2>
              <p>
                Aunque siempre lo he hecho de manera gratuita, no estoy en contra
                de algún día traducir por dinero, especialmente si fuera un
                proyecto pequeño.
              </p>
            </div>
            <img
              className="full-width img-responsive wow fadeInUp"
              src="img/500x500/03.jpg"
              alt="Portfolio Image"
              data-wow-duration=".3"
              data-wow-delay=".4s"
            />
          </div>
        </div>
        {/* End Masonry Grid */}
      </div>
      {/* Latest Products */}
      <div id="products">
        <div className="content-lg container">
          <div className="row margin-b-40">
            <div className="col-sm-6">
              <h2>VideoJuegos</h2>
              <p>He colaborado en dos proyectos de traducción de videojuegos.</p>
            </div>
          </div>
          {/*// end row */}
          <div className="row">
            {/* Latest Products */}
            <div className="col-sm-4 sm-margin-b-50">
              <div className="margin-b-20">
                <img
                  className="img-responsive"
                  src="img/970x647/01.jpg"
                  alt="Latest Products Image"
                />
              </div>
              <h4>
                <a href="http://www.mediafire.com/file/hcppci8mx5exh57/Espa%F1olLat.rar">
                  Another Metroid 2 Remake
                </a>{" "}
                <span className="text-uppercase margin-l-20">Parche</span>
              </h4>
              <p>
                Un parche creado para la última versión oficial de AM2R. En la
                actualidad existen traducciones más populares.
              </p>
              <a
                className="link"
                href="http://www.mediafire.com/file/hcppci8mx5exh57/Espa%F1olLat.rar"
              >
                Link
              </a>
            </div>
            {/* End Latest Products */}
            {/* Latest Products */}
            <div className="col-sm-4 sm-margin-b-50">
              <div className="margin-b-20">
                <img
                  className="img-responsive"
                  src="img/970x647/02.jpg"
                  alt="Latest Products Image"
                />
              </div>
              <h4>
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1241514514&searchtext=spanish">
                  A Hat in Time
                </a>{" "}
                <span className="text-uppercase margin-l-20">Mod</span>
              </h4>
              <p>
                Esta es la única vez que he participado oficialmente en un equipo
                hasta ahora. Por un largo tiempo se puso en pausa el proyecto y
                abandoné el grupo; desconozco si utilizaron mis aportaciones al
                final.
              </p>
              <a
                className="link"
                href="https://steamcommunity.com/sharedfiles/filedetails/?id=1241514514&searchtext=spanish"
              >
                Link
              </a>
            </div>
            {/* End Latest Products */}
          </div>
          {/* End Latest Products */}
        </div>
        {/*// end row */}
      </div>
    </div>
    {/* End Latest Products */}
    {/* Latest Products */}
    <div id="youtube">
      <div className="content-lg container">
        <div className="row margin-b-40">
          <div className="col-sm-6">
            <h2>YouTube</h2>
            <p>
              Mi mayor cantidad de aportaciones se encuentran en Youtube. Yo no
              subo ediciones subtituladas, si no que prefiero crearlas en la misma
              plataforma para que puedan ser disfrutadas en el video original.
            </p>
            <h4>U M A M I</h4>
            <p>
              Animador canadiense conocido por su arte surrealista y humor
              absurdo. Lo conozco desde sus inicios y he localizado al español
              latino casi todos sus videos, por eso esta lista no es absoluta.
            </p>
          </div>
        </div>
        {/*// end row */}
        <div className="row">
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/03.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtube.com/playlist?list=PLPnjato8iGXLQbppBPhOny8XLSRl7S5pM&si=altLuCLYQcjLu4t3">
                Interface
              </a>{" "}
              <span className="text-uppercase margin-l-20">Serie</span>
            </h4>
            <p>
              Un hombre se encuentra con un extraño ser. Esta serie la traduje por
              completo, y también adapté mi trabajo a las compilaciones.
            </p>
            <a
              className="link"
              href="https://youtube.com/playlist?list=PLPnjato8iGXLQbppBPhOny8XLSRl7S5pM&si=altLuCLYQcjLu4t3"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/04.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtube.com/playlist?list=PLPnjato8iGXLx0oYSK_GO4EfbSjFdD_i-&si=-zeIhHbbg-TDI2AC">
                Safe Mode
              </a>{" "}
              <span className="text-uppercase margin-l-20">Serie</span>
            </h4>
            <p>
              La simulación en la que la humanidad ahora vive es fozada a entrar
              en el Modo Seguro. He localizado esta serie hasta el episodio 5.
            </p>
            <a
              className="link"
              href="https://youtube.com/playlist?list=PLPnjato8iGXLx0oYSK_GO4EfbSjFdD_i-&si=-zeIhHbbg-TDI2AC"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/05.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/Cu6wlaaf-ck?si=WRQhYqvbmuP9FZtk">Pong</a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>Pensamientos de la pelota en Pong.</p>
            <a
              className="link"
              href="https://youtu.be/Cu6wlaaf-ck?si=WRQhYqvbmuP9FZtk"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
        </div>
        {/* End Latest Products */}
        <div className="row">
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/06.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/5HvrySwhZrQ?si=c00VVuBXEqYdG9_7">
                The End of an Era
              </a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>Exageración del efecto mariposa.</p>
            <a
              className="link"
              href="https://youtu.be/5HvrySwhZrQ?si=c00VVuBXEqYdG9_7"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/07.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/rqeWKuwy6XM?si=p34tZS-mL98_C-lG">
                Stranger Danger
              </a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>Un encuentro familiar.</p>
            <a
              className="link"
              href="https://youtu.be/rqeWKuwy6XM?si=p34tZS-mL98_C-lG"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/08.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/uraG-z0grkc?si=oVjnaK5NLA3X0G5f">
                The Cycle of Life
              </a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>La sopa regresa con otra premonición.</p>
            <a
              className="link"
              href="https://youtu.be/uraG-z0grkc?si=oVjnaK5NLA3X0G5f"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
        </div>
        {/* End Latest Products */}
        <div className="row">
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/09.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/FdmkApuUfu8?si=mpI6q8d8cN7DPaMk">
                A Striking Ball
              </a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>Una bola de bolos curiosa.</p>
            <a
              className="link"
              href="https://youtu.be/FdmkApuUfu8?si=mpI6q8d8cN7DPaMk"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/10.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/w4FK85SuwDo?si=vl7wRe0p9PyfOegj">
                Chimney Alfonzo
              </a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>Un pobrecillo se atoró en su chimenea, ¡ayúdalo!.</p>
            <a
              className="link"
              href="https://youtu.be/w4FK85SuwDo?si=vl7wRe0p9PyfOegj"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/11.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/-mrVtRgbpAY?si=7JkJpjwRei6wT_dS">
                Just Transition
              </a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>Un robot comete un asalto.</p>
            <a
              className="link"
              href="https://youtu.be/-mrVtRgbpAY?si=7JkJpjwRei6wT_dS"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
        </div>
        {/* End Latest Products */}
        <div className="row margin-b-40">
          <div className="col-sm-6">
            <h4>
              <br />
              Misceláneo
            </h4>
            <p>
              A decir verdad, ya casi no recuerdo nada de lo que hice en la época
              que YouTube te permitía modificar subtítulos sin permiso. Para más
              detalles leer el apartado de <a href="#lost">Proyectos Perdidos.</a>
            </p>
          </div>
        </div>
        <div className="row">
          {/* Latest Products */}
          <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
              <img
                className="img-responsive"
                src="img/970x647/12.jpg"
                alt="Latest Products Image"
              />
            </div>
            <h4>
              <a href="https://youtu.be/zzTEMWceK28?si=oEN2K9XywSE1-Irn">
                {" "}
                Beta64 - Rhythm Tengoku / Rhythm Heaven GBA{" "}
              </a>{" "}
              <span className="text-uppercase margin-l-20">Video</span>
            </h4>
            <p>Historia del juego que originó a la franquicia Rhythm Heaven.</p>
            <a
              className="link"
              href="https://youtu.be/zzTEMWceK28?si=oEN2K9XywSE1-Irn"
            >
              Link
            </a>
          </div>
          {/* End Latest Products */}
        </div>
        {/*// end row */}
      </div>
    </div>
    {/* End Latest Products */}
    {/* Contact */}
    <div id="lost">
      {/* Contact List */}
      <div className="section-seperator">
        <div className="content-lg container">
          <h2>Proyectos y Oportunidades Perdidas</h2>
          <p>
            A lo largo de los años he tenido la oportunidad de trabajar en varios
            proyectos satisfactorios, pero lo que quiero resaltar es que los
            trabajos en este portafolio posiblemente no son todos los que he hecho
            a lo largo de los años.
            <br />
            Hace años YouTube permitía a la comunidad trabajar en los subtítulos
            de básicamente cualquier video en la plataforma, esta función te daba
            una lista comprensiva de todas tus aportaciones; tal lista ha sido
            eliminada, u ofuscada pues no la encontré, al igual que la función de
            aportaciones libres. Es por esto que no puedo saber con certeza todo
            lo que he hecho.
          </p>
          <p>
            En ocaciones tuve la intención de trabajar en algún video pero al
            final no hacía nada, o simplemente no obtuve acceso. Menciono esto
            pues hay una posibilidad no nula que haya localizado algún video de
            los siguientes creadores (pueden ver la siguiente lista como
            recomendaciones de creadores interesantes también); Ejemplos de tales
            casos son: Jack Stauber, Worthykids, Team FourStar, Beta64, LEMMiNO,
            Vsauce &amp; Vsauce3.
          </p>
        </div>
        {/*// end row */}
      </div>
    </div>
    {/* End Contact List */}
    {/* End Contact */}
    {/*========== END PAGE LAYOUT ==========*/}
    {/*========== FOOTER ==========*/}
    <footer className="footer">
      {/* Links */}
      {/* Copyright */}
      <div className="content container">
        <div className="row">
          <div className="col-xs-6">
            <img
              className="footer-logo"
              src="img/logo-dark.png"
              alt="Portafolio Logo"
            />
          </div>
          <div className="col-xs-6 text-right">
            <p className="margin-b-0">
              <a className="fweight-700" href="#">
                Portafolio de Traducciones
              </a>{" "}
              Plantilla por:{" "}
              <a className="fweight-700" href="#">
                FairTech Studio
              </a>
            </p>
          </div>
        </div>
        {/*// end row */}
      </div>
      {/* End Copyright */}
    </footer>
    {/*========== END FOOTER ==========*/}
    {/* Back To Top */}
    <a href="javascript:void(0);" className="js-back-to-top back-to-top">
      Top
    </a>
    {/* JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) */}
    {/* CORE PLUGINS */}
        <Script src="vendor/jquery.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/jquery-migrate.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/bootstrap/js/bootstrap.min.js" type="text/javascript" strategy="beforeInteractive"></Script>

        <Script src="vendor/jquery.easing.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/jquery.back-to-top.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/jquery.smooth-scroll.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/jquery.wow.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/swiper/js/swiper.jquery.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript" strategy="beforeInteractive"></Script>

        <Script src="js/layout.min.js" type="text/javascript" ></Script>
        <Script src="js/components/wow.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="js/components/swiper.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="js/components/masonry.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
    {/* PAGE LEVEL PLUGINS */}
    {/* PAGE LEVEL SCRIPTS */}
    </body>
    {/* END BODY */}
  </>
  );
}
