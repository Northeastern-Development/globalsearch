<?php
  // this will redirect the page to include a query param in case none is provided at first
  if(!isset($_GET['query']) || $_GET['query'] == ''){
    header('location:https://search.northeastern.edu/?query=northeastern university');
    exit();
  }

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Northeastern University Search</title>
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Search Northeastern University">
    <meta name="author" content="Northeastern University, https://www.northeastern.edu" />
    <meta name="copyright" content="<?php echo date("Y"); ?>" />
    <meta name="language" content="english" />
    <meta name="zipcode" content="02115" />
    <meta name="city" content="Boston" />
    <meta name="state" content="MA" />
    <link rel='stylesheet' id='headerfooter-search-addons-css'  href='https://search.northeastern.edu/css/headerfooter-addons.css' media='all' />
    <link rel='stylesheet' id='utilitynav-css'  href='https://www.northeastern.edu/nuglobalutils/common/css/headerfooter.css' media='all' />
    <link rel="apple-touch-icon" sizes="57x57"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-57x57.png?v=2" />
    <link rel="apple-touch-icon" sizes="60x60"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-60x60.png?v=2" />
    <link rel="apple-touch-icon" sizes="72x72"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-72x72.png?v=2" />
    <link rel="apple-touch-icon" sizes="76x76"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-76x76.png?v=2" />
    <link rel="apple-touch-icon" sizes="114x114"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-114x114.png?v=2" />
    <link rel="apple-touch-icon" sizes="120x120"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-120x120.png?v=2" />
    <link rel="apple-touch-icon" sizes="144x144"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-144x144.png?v=2" />
    <link rel="apple-touch-icon" sizes="152x152"  href="https://brand.northeastern.edu/global/assets/favicon/apple-touch-152x152.png?v=2" />
    <link rel="icon" sizes="144x144" type="image/png" href="https://brand.northeastern.edu/global/assets/favicon/android-chrome-144x144.png?v=2" />
    <link rel="icon" sizes="32x32" type="image/png" href="https://brand.northeastern.edu/global/assets/favicon/favicon-32x32.png?v=2" />
    <link rel="icon" sizes="16x16" type="image/png" href="https://brand.northeastern.edu/global/assets/favicon/favicon-16x16.png?v=2" />
    <link rel="manifest" href="https://brand.northeastern.edu/global/assets/favicon/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="https://brand.northeastern.edu/global/assets/favicon/mstile-144x144.png?v=2" />
    <meta name="theme-color" content="#ffffff" />
  </head>
  <body>
    <article>
      <div id="nu__globalheader">
        <?php
          $proxy = 'www.proxy.neu.edu:3128';
          $url = 'https://www.northeastern.edu/resources/components/?return=main-menu&cache=no';
          $curl = curl_init($url);
          curl_setopt($curl, CURLOPT_PROXY, $proxy);
          curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
//           curl_setopt($curl, CURLOPT_HEADER, 1);
          echo curl_exec($curl);
          curl_close($curl);
        ?>
      </div>


      <script>
        // if you wish to search a specific site, please edit the following variables
        // to perform a search of all Northeastern, please delete the following variables
        //var NUGS_specificsite = 'northeastern.edu';  // specifc site to search
        //var NUGS_title ='Northeastern University'; // title override to be used in the saerch field label
      </script>
      <script src="https://search.northeastern.edu/nuglobalutils/requests/js/globalsearch.js"></script>


      <div id="nu__global-footer">
        <?php
          $proxy = 'www.proxy.neu.edu:3128';
          $url = 'https://www.northeastern.edu/resources/includes/?r=footer&cache=no';
          $curl = curl_init($url);
          curl_setopt($curl, CURLOPT_PROXY, $proxy);
          curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
//           curl_setopt($curl, CURLOPT_HEADER, 1);
          echo curl_exec($curl);
          curl_close($curl);
        ?>
      </div>
    </article>
  </body>



  <script type="text/javascript" src="https://www.northeastern.edu/nuglobalutils/common/js/navigation-min.js"></script>
</html>
