<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Feira • {{ $title }}</title>

        <link rel="stylesheet" href="{{ asset('css/global/reset.css') }}">
        <link rel="stylesheet" href="{{ asset('css/global/layout.css') }}">
        
        <!-- LOCAL SCOPE CSS -->
        @isset($css)
            <link rel="stylesheet" href="{{ $css }}">
        @endisset
        
        <link rel="stylesheet" href="{{ asset('css/global/utils.css') }}">

        <style>
            body,
            body *{
                font-family: system-ui;
            }
        </style>
    </head>

    <body>
        {{ $slot }}
    </body>
</html>