<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tecnisistema Lanwork Place, C.A</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/estilos.css">
        <link rel="stylesheet" href="css/estilos-mobile.css">
        <link rel="stylesheet" href="fontawesome-free-5.15.1-web/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="js/waypoints-1.js"></script>
        <script src="js/Counter-Up-master/jquery.counterup.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/popper.min.js"></script>        
        <script src="js/contador.js"></script>
        <script src="js/enlaces.js"></script>
        

</head>
<body>
    <header>
        <div class="row menu-logo">
            <div class="col-md-6">
                <img class="logo" src="img/logo.png" alt="">
            </div>

            <div class="col-md-6 redes-sociales-header">
                <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
            </div>
        </div>        
        
        <div class="row">
            <div class="col-md-12">
                <nav class="menu navbar navbar-expand-lg">
                    <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav navbar-center mx-auto">
                            <li class="nav-item">
                                <a href="index.php" class="actual nav-link">Inicio</a>
                            </li>
                       
                            <li class="nav-item active">
                                <a class="nav-link" href="nosotros.html" id="btn-nosotros">Nosotros<span class="sr-only">(current)</span></a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="btn-areas">Áreas de Negocio</a>
                            </li>

                            <li class="nav-item">
                                <a href="proyectos.html" class="nav-link">Proyectos</a>
                            </li>

                            <li class="nav-item">
                                <a href="eventos.html" class="nav-link">Eventos</a>
                            </li>
                            
                            <li class="nav-item">
                                <a href="#" class="nav-link" id="btn-contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>          


        </div>

        <div class="row">
            <div class="col-md-12">
                <div id="carrusel" class="carousel slide carrusel" data-ride="carrusel">
                    <ol class="carousel-indicators"> 
                        <!--Indicadores-->
                        <li data-target="#carrusel" data-slide-to="0" class="active"></li>
                            <li data-target="#carrusel" data-slide-to="1"></li>
                            <li data-target="#carrusel" data-slide-to="2"></li>
                            <li data-target="#carrusel" data-slide-to="3"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block imagen-carrusel" src="img/Fondos/carrusel4.jpg" alt="First slide">
                                <div class="carousel-caption">
                                    <h2 class="texto-carrusel-1">Innovamos para evolucionar</h2>
                                </div>
                            </div>
                                                                    
                            <div class="carousel-item">
                                <img class="d-block imagen-carrusel" src="img/Fondos/carrusel2.jpg" alt="Third slide">
                                <div class="carousel-caption">
                                    <h2 class="texto-carrusel-2">Tu mejor opción en Telecomunicaciones</h2>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <img class="d-block imagen-carrusel" src="img/Fondos/security.png" alt="Second slide">
                                <div class="carousel-caption">
                                    <h2 class="texto-carrusel-3">Manten tus bienes a salvo con nosotros</h2>
                                </div>                                
                            </div>

                            <div class="carousel-item">
                                <img class="d-block imagen-carrusel" src="img/Fondos/carrusel5.jpg" alt="Second slide">
                                <div class="carousel-caption">
                                    <h2 class="texto-carrusel-4">Tenemos la solución que se adapta a tus necesidades</h2>
                                </div>
                            </div>
                        </div>
                        
                        <a class="carousel-control-prev" href="#carrusel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>

                        <a class="carousel-control-next" href="#carrusel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
        </div>
    </header>

    <section class="main">
        <section class="areas-de-negocio" id="areas">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="titulo">Áreas de Negocio</h3>
                    </div>
                </div>

                <div class="row iconos">
                    <div class="col-md-4 primera-fila">
                        <a href="areas-de-negocio.html">
                            <img class="img-iconos" src="img/Iconos/laptop-con-flecha.png" alt="">  
                            <p class="titulo-icono">Computación</p>
                        </a>
                    </div>

                    <div class="col-md-4 primera-fila">
                        <a href="areas-de-negocio.html">
                            <img class="img-iconos" src="img/Iconos/antena.png" alt="">
                            <p class="titulo-icono">Telecomunicaciones</p>
                        </a>
                    </div>

                    <div class="col-md-4 primera-fila">
                        <a href="areas-de-negocio.html">
                            <img class="img-iconos" src="img/Iconos/desarrollo-web.png" alt="">
                            <p class="titulo-icono">Desarrollo Web</p>
                        </a>
                    </div>
                </div>

                <div class="row iconos">
                    <div class="col-md-6 segunda-fila">
                        <a href="areas-de-negocio.html">
                            <img class="img-iconos" src="img/Iconos/seguridad-informatica (1).png" alt="">
                            <p class="titulo-icono">Seguridad</p>
                        </a>
                    </div>

                    <div class="col md-6 segunda-fila">
                        <a href="areas-de-negocio.html">
                            <img class="img-iconos" src="img/Iconos/rayo-relampago.png" alt="">
                            <p class="titulo-icono">Energía</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="numeros">
            <div class="container">
                <div class="row">
                   <div class="col-md-4">
                        <h3 class="numero">20</h3>
                        <h5 class="palabra">Clientes</h5>
                    </div>

                    <div class="col-md-4">
                        <h3 class="numero">25</h3>
                        <h5 class="palabra">Años de experiencia</h5>
                    </div>

                    <div class="col-md-4">
                        <h3 class="numero">100</h3>
                        <h5 class="palabra">Proyectos</h5>
                    </div>
                </div>
            </div>
        </section>

        <section class="contacto" id="contacto">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="titulo">Contacto</h3>
                    </div>
                </div>

                <div class="horarios">
                    <div class="row">
                        <div class="col-md-6 direccion">
                            <h5 class="subtitulo-ciudad">Caracas</h5>
                            <h5>Avenida San Ignacio de Loyola, </h5>
                            <h5>Res. San Ignacio. Piso 4, Oficina A4D</h5>
                            <h5>Chacao, Caracas.</h5>
                        </div>

                        <div class="col-md-6">
                            <h5 class="subtitulo-ciudad">Puerto Ordaz</h5>
                            
                        </div>
                    </div>

                    <div class="row segundo-bloque">
                        <div class="col-md-6 telefonos">
                            <h5>Teléfonos:</h5>
                            <h5>+58 (212) 264 11 20 </h5>
                            <h5>+58 (212) 264 05 22</h5>
                        </div>

                        <div class="col-md-6">
                        </div>
                    </div>

                    <div class="row tercer-bloque">
                        <div class="col-md-6">
                            <h5>Horarios:</h5>
                            <h5>Lunes a Viernes</h5>
                            <h5>8:00 am - 4:00 pm</h5>
                        </div>
                    </div>

                    <div class="row correo">
                        <div class="col-md-12">
                            <h5>tecnisistema@tecnisistema.com</h5>
                        </div>
                    </div>
                </div>

                <div class="formulario">
                    <form method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-nombre form-control input-lg form-control-lg" 
                                    required id="name" name="nombre" type="text" placeholder="Nombre" required>
                                </div>

                                <div class="col-md-6">
                                    <input class="form-control form-control-lg" 
                                    required id="email" name="correo" type="email" placeholder="Correo Electrónico" required>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <textarea class="form-control contacto-mensaje" 
                                    required id="message" name="mensaje" placeholder="Mensaje" required></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-md-12 text-center clase-boton">
                                    <button type="submit" name="enviar" class="boton-enviar btn btn-primary btn-lg">Enviar</button>
                                </div>
                            </div>
                        
                    </form>
                </div>
            </div>
        </section>

        <section class="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1138.0792863778631!2d-66.85570889581489!3d10.493040863416178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfde9420bae6dcfd3!2sResidencias%20San%20Ignacio!5e0!3m2!1ses-419!2sve!4v1604348187102!5m2!1ses-419!2sve" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </section>
    </section>

    <footer>
        <section class="redes-sociales">
            <div class="container">
                <div class="row mx-auto">
                    <div class="r-sociales col-md-4">
                        <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                    </div>

                    <div class="r-sociales col-md-4">
                        <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                    </div>

                    <div class="r-sociales col-md-4">
                        <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section class="creditos">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a class="referencia" target="_blank" href="http://www.tecnisistema.com/"><p>Sitio Web desarrollado por Tecnisistema Lanwork Place, C.A</p></a>
                    </div>
                </div>
            </div>
        </section>
    </footer>

    <?php 
        include('correo.php');
    ?>
</body>

</html>