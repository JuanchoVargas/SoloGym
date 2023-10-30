<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
          </svg>

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Nuestras Instalaciones.</h1>
              <p>
                ¡Descubre un paraíso de bienestar en nuestro gimnasio de
                vanguardia! En nuestras instalaciones, encontrarás equipos de
                última generación, un ambiente motivador y entrenadores expertos
                listos para ayudarte a alcanzar tus objetivos fitness..
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">INSCRIBETE</a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
          </svg>

          <div class="container">
            <div class="carousel-caption">
              <h1>Planes de entrenamiento completamente personalizados.</h1>
              <p>
                ¿Quieres resultados reales y a medida? ¡Eleva tu fitness al
                siguiente nivel con nuestros planes personalizados en el
                gimnasio! Nuestros entrenadores expertos diseñarán un programa
                exclusivo, adaptado a tus metas y necesidades.
              </p>
              <p><a class="btn btn-lg btn-primary" href="#">Aprende mas</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
          </svg>

          <div class="container">
            <div class="carousel-caption text-end">
              <h1>Nuestro Personal.</h1>
              <p>
                En nuestro gimnasio, los entrenadores son la chispa que enciende
                tu fuego interior. Ellos están aquí para motivarte, guiarte y
                desafiarte en cada paso de tu viaje hacia la mejor versión de ti
                mismo.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Ver Galeria</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Marketing messaging and featurettes
  ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Clases Grupales</h2>
          <p>
            En nuestras clases grupales, la fuerza no solo viene de tus
            músculos, sino de la unidad y la energía compartida.
          </p>
          <p>
            <a class="btn btn-secondary" href="#">Ver al detalle &raquo;</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>MMA y Box</h2>
          <p>
            ¡Potencia tu fuerza y agilidad en nuestras clases de MMA y Box! Para
            que empieces con todo
          </p>
          <p>
            <a class="btn btn-secondary" href="#">Ver al detalle &raquo;</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Nuestros convenios</h2>
          <p>
            Únete a nuestro gimnasio y disfruta de beneficios exclusivos gracias
            a nuestros convenios con marcas de renombre! Obtén descuentos en
            ropa deportiva, suplementos, y más. ¡Entrena con estilo y ahorra al
            mismo tiempo!
          </p>
          <p>
            <a class="btn btn-secondary" href="#">Ver al detalle &raquo;</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Primer Encabezado.
            <span class="text-muted">Listo para ser modificado</span>
          </h2>
          <p class="lead">
            Espacio de texto para infomacion Extra que queramos anadir
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Mas Informacion
            <span class="text-muted">Que podamos poner en negrilla</span>
          </h2>
          <p class="lead">
            Espacio de texto para infomacion Extra que queramos anadir
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Tercer y ultimo espacio
            <span class="text-muted">Listo para ser modificado</span>
          </h2>
          <p class="lead">Ultimo bloque para anadir informacion que queramos</p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->

    <!-- FOOTER -->
    <footer class="container">
      <p class="float-end"><a href="#">Devuelta arriba</a></p>
      <p>
        &copy; 2023–202etc SoloGym, marca Registrada. &middot;
        <a href="#">Privacidad</a> &middot;
        <a href="#">Terminos</a>
      </p>
    </footer>
  </main>
</template>
