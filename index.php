<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>TODO | Nádasy Bendegúz</title>
        <link href="stilus.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>
        <script src="feldolgoz.js" type="text/javascript"></script>
    </head>
    <body>
        <main>
            <header>
                <h1>Teendők</h1>
            </header>
            <article>
                <h2>TODO lista</h2>
                <form class="urlap">
                    <input type="text" id="inTodo" name="todo" required="">
                    <input type="date" id="inDatum" name="datum" required="">
                    <input type="button" id="btnAdd" name="add" value="Add">
                    
                </form>

                <ul id="adatok">

                </ul>
                
                <hr>
                
                <div id="valaszt">
                    <label for="rend">Rendezés:</label>

                    <select name="rend" id="cars">
                        <option class="rendez" id="todorend">Teendő szerint</option>
                        <option class="rendez" id="datumrend">Dátum szerint</option>
                    </select>
                    <input type="button" id="btnBetolt" name="betolt" value="Betölt">
                </div>
                <div id="tabla">

                </div>
            </article>
            <footer>
                <p>Nádasy Bendegúz</p>
            </footer>
        </main>
    </body>
</html>
