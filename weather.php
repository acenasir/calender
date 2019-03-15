<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>
        <meta charset="utf-8">
        <title>Weather</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
    </head>


        <body  style="background-image:url('https://images.unsplash.com/photo-1514527893004-f77d3d773644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80');">

        <header style="text-align: center;">
            Weather
        </header>

        <div class="container">
            <main class="main">
                <br />
                <div class="text-center">
                    <button class="btn btn-primary" id="getWeatherButton">Get Weather!</button>
                </div>

                <br /><br />

                <form>
                    <strong>Get weather by city</strong>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" name="city" id="city-input" />
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-primary" id="getWeatherByCityButton">Get Weather!</button>
                        </div>
                    </div>
                </form>

                <br /><br /><br /><br />
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div id="weather-main">
                            <table class="table table-bordered">
                                <tr>
                                    <td>
                                        City
                                    </td>
                                    <td>
                                        <div id="city-display">

                                        </div>
                                    </td>
                                </tr>
                                    <tr>
                                        <td>
                                            Temperature
                                        </td>
                                        <td>
                                            <div id="temperature-display">

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Humidity
                                        </td>
                                        <td>
                                            <div id="humidity-display">

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Description
                                        </td>
                                        <td>
                                            <div id="description-display">

                                            </div>
                                        </td>
                                    </tr>
                            </table>
                        </div>
                    </div>

                    <div class="col-xs-12 col-md-6">
                        <div class="map">
                            <iframe id="map-iframe" src=""
                                width="100%" height="400"
                                frameborder="0" style="border:0">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div id="buttons">

                </div>
            </main>
        </div>

        <br /><br />

        <footer>
            &copy <?=date('Y');?> Weather
        </footer>
        <script src="js/weather.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>
