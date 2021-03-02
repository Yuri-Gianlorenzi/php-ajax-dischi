<?php

  include 'db.php';

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- link fontawesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
  <!-- link google fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <!-- link foglio di stile -->
  <link rel="stylesheet" href="dist/app.css?v=<?php echo time(); ?>">
  <title>Dischi PHP</title>
</head>
<body>


  <header>
      <div class="container">
          <img src="img/logo.png" alt="logo">
      </div>
  </header>

  <div class="cds-container container">
      <!-- Disco ad esempio -->
      <label for="genre">Scegli il genere</label>
      <div class="options">
        <select name="genre" id="genre">
          <!-- <option value="">All</option> -->
          <option>ciao</option>
          <option>ciao</option>
          <option>ciao</option>
        </select>

      </div>

      <?php foreach ($discs as $disc) {?>

      <div class="cd">
        <img src="<?php echo $disc['poster']; ?>" alt="<?php echo $disc['title']; ?>">
        <h3><?php echo $disc['title']; ?></h3>
        <span class="author"><?php echo $disc['author']; ?></span>
        <span class="year"><?php echo $disc['year']; ?></span>
      </div>

    <?php } ?>




  </div>

</body>
</html>
