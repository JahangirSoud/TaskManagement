<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('public/css/app.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="public/css/font-awesome.min.css">
  	<link rel="stylesheet" href="public/css/font-awesome.min.css">
  	<link rel="stylesheet" href="public/css/bootstrap.css">
  	<link rel="stylesheet" href="public/css/navbar-fixed.css">
  	<link rel="stylesheet" href="public/css/style.css">
  	<script src="public/js/jquery.min.js"></script>
  	<script src="public/js/popper.min.js"></script>
  	<script src="public/js/bootstrap.min.js"></script>
  	<script src="public/js/navbar-fixed.js"></script>
    </head>
    <body class="antialiased">

        <div class="container text-primary">
            <div id="example"></div>
        </div>
     
    <script src="{{ asset('public/js/app.js') }}" defer></script>
    </body>
</html>
