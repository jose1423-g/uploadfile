<?php

include('./process/conexion.php');
$mysql = mysqli_query($link, "SELECT * FROM categoria");
?>
<nav class="navbar bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="main.php"><img class="logo" src="./img/logo-tecnm.png" alt="logo_tecnm"></a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <strong class="me-3">Subir nuevo archivo</strong>
                <a class="btn btn-primary" href="?v=<?php echo "views/file.php"; ?>">New</a>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item"><a class="nav-link" href="main.php">Inicio</a></li>
                    <?php while ($row = mysqli_fetch_assoc($mysql)) { ?>
                        <li class="nav-item"><a class="nav-link" href="?p=<?php echo $row['ID']; ?>"><?php echo $row['tipo']; ?></a></li>
                    <?php  } ?>
                </ul>
                <div class="dropdown mt-2">
                    <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <?php echo $_SESSION['user'];?>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./process/logout.php">Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="btn-group dropstart d-none d-lg-block">
            <button type="button" class="btn btn-secondary btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <?php echo $_SESSION["user"];?>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./process/logout.php">Cerrar sesión</a></li>
            </ul>
        </div>
    </div>
</nav>