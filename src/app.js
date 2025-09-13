const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.json());



// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "..","public")));

// Rutas API

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"..", "public", "index.html"));
});

// Temperatura

//celsius
app.get("/convert/celsius-to-fahrenheit/:value",(req, res) => {

    const conversion = ((req.params.value * 9/5) + 32).toFixed(3);
    res.json({ 
        "celsius": req.params.value, 
        "fahrenheit": conversion,
        "message": req.params.value + " grados Celsius son " + conversion + " grados Fahrenheit"
    });
});

app.get("/convert/celsius-to-kelvin/:value",(req, res) => {
    const conversion = req.params.value + 273.15;
    res.json({
        "celsius": req.params.value,
        "kelvin": conversion,
        "message": req.params.value + " grados Celsius son " + conversion + " grados Kelvin"
    });
})


//fahrenheit
app.get("/convert/fahrenheit-to-celsius/:value", (req, res) => {

    const conversion = ((req.params.value - 32) * 5/9).toFixed(3);
    res.json({
        "fahrenheit": req.params.value,
        "celsius": conversion,
        "message": req.params.value + " grados Fahrenheit son " + conversion + " grados Celsius"
    });
});

app.get("/convert/fahrenheit-to-kelvin/:value",(req, res) => {

    const conversion = (((req.params.value - 32)*(5/9))+273.15).toFixed(3);
    res.json({
        "celsius": req.params.value,
        "kelvin": conversion,
        "message": req.params.value + " grados Celsius son " + conversion + " grados Kelvin"
    });
});

//kelvin
app.get("/convert/kelvin-to-celsius/:value",(req, res) => {
    const conversion = (req.params.value - 273.15).toFixed(3);
    res.json({
        "kelvin": req.params.value,
        "celsius": conversion,
        "message": req.params.value + " grados Kelvin son " + conversion + " grados Celsius"
    });
});


app.get("/convert/kelvin-to-fahrenheit/:value",(req, res) => {
    const conversion = (((req.params.value - 273.15) * (9/5)) + 32).toFixed(3);
    res.json({
        "kelvin": req.params.value,
        "fahrenheit": conversion,
        "message": req.params.value + " grados Kelvin son " + conversion + " grados Fahrenheit"
    });
})


// Longitud

// Centímetros
app.get("/convert/centimeters-to-meters/:value",(req, res) => {
    const conversion = (req.params.value / 100);
    res.json({
        "centimeters": req.params.value,
        "meters": conversion,
        "message": req.params.value + " centímetros son " + conversion + " metros"
    });
});

app.get("/convert/centimeters-to-kilometers/:value",(req, res) => {
    const conversion = (req.params.value / 100000);
    res.json({
        "centimeters": req.params.value,
        "kilometers": conversion,
        "message": req.params.value + " centímetros son " + conversion + " kilómetros"
    });
});

app.get("/convert/centimeters-to-inches/:value",(req, res) => {
    const conversion = (req.params.value / 2.54).toFixed(3);
    res.json({
        "centimeters": req.params.value,
        "inches": conversion,
        "message": req.params.value + " centímetros son " + conversion + " pulgadas"
    });
});

app.get("/convert/centimeters-to-feet/:value",(req, res) => {
    const conversion = (req.params.value / 30.48).toFixed(3);
    res.json({
        "centimeters": req.params.value,
        "feet": conversion,
        "message": req.params.value + " centímetros son " + conversion + " pies"
    });
});

app.get("/convert/centimeters-to-miles/:value",(req, res) => {
    const conversion = (req.params.value / 160934).toFixed(6);
    res.json({
        "centimeters": req.params.value,
        "miles": conversion,
        "message": req.params.value + " centímetros son " + conversion + " millas"
    });
});


//metros
app.get("/convert/meters-to-centimeters/:value",(req, res) => {
    const conversion = (req.params.value * 100);
    res.json({
        "meters": req.params.value,
        "centimeters": conversion,
        "message": req.params.value + " metros son " + conversion + " centímetros"   
    });
});

app.get("/convert/meters-to-kilometers/:value",(req, res) => {
    const conversion = (req.params.value / 1000);
    res.json({
        "meters": req.params.value,
        "kilometers": conversion,
        "message": req.params.value + " metros son " + conversion + " kilómetros"
    });
});

app.get("/convert/meters-to-inches/:value",(req, res) => {
    const conversion = (req.params.value * 39.3701).toFixed(3);
    res.json({
        "meters": req.params.value,
        "inches": conversion,
        "message": req.params.value + " metros son " + conversion + " pulgadas"
    });
});

app.get("/convert/meters-to-feet/:value",(req, res) => {
    const conversion = (req.params.value * 3.28084).toFixed(3);
    res.json({
        "meters": req.params.value,
        "feet": conversion,
        "message": req.params.value + " metros son " + conversion + " pies" 
    });
});

app.get("/convert/meters-to-miles/:value",(req, res) => {
    const conversion = (req.params.value / 1609.34).toFixed(3);
    res.json({
        "meters": req.params.value,
        "miles": conversion,
        "message": req.params.value + " metros son " + conversion + " millas"
    });
});

//kilómetros
app.get("/convert/kilometers-to-meters/:value",(req, res) => {
    const conversion = (req.params.value * 1000);
    res.json({
        "kilometers": req.params.value,
        "meters": conversion,
        "message": req.params.value + " kilómetros son " + conversion + " metros"    
    });
});

app.get("/convert/kilometers-to-centimeters/:value",(req, res) => {
    const conversion = (req.params.value * 100000);
    res.json({
        "kilometers": req.params.value,
        "centimeters": conversion,
        "message": req.params.value + " kilómetros son " + conversion + " centímetros"
    });
});

app.get("/convert/kilometers-to-inches/:value",(req, res) => {
    const conversion = (req.params.value * 39370.1).toFixed(3);
    res.json({
        "kilometers": req.params.value,
        "inches": conversion,
        "message": req.params.value + " kilómetros son " + conversion + " pulgadas"
    });
});

app.get("/convert/kilometers-to-feet/:value",(req, res) => {
    const conversion = (req.params.value * 3280.84).toFixed(3);
    res.json({
        "kilometers": req.params.value,
        "feet": conversion,
        "message": req.params.value + " kilómetros son " + conversion + " pies"
    });
});


app.get("/convert/kilometers-to-miles/:value",(req, res) => {
    const conversion = (req.params.value / 1.60934).toFixed(3);
    res.json({
        "kilometers": req.params.value,
        "miles": conversion,
        "message": req.params.value + " kilómetros son " + conversion + " millas"
    });
});

// Pulgadas
app.get("/convert/inches-to-meters/:value",(req, res) => {
    const conversion = (req.params.value * 0.0254).toFixed(3);
    res.json({
        "inches": req.params.value,
        "meters": conversion,
        "message": req.params.value + " pulgadas son " + conversion + " metros"
    });
});

app.get("/convert/inches-to-centimeters/:value",(req, res) => {
    const conversion = (req.params.value * 2.54).toFixed(3);
    res.json({
        "inches": req.params.value,
        "centimeters": conversion,
        "message": req.params.value + " pulgadas son " + conversion + " centímetros"
    });
});

app.get("/convert/inches-to-kilometers/:value",(req, res) => {
    const conversion = (req.params.value * 0.0000254).toFixed(6);
    res.json({
        "inches": req.params.value,
        "kilometers": conversion,
        "message": req.params.value + " pulgadas son " + conversion + " kilómetros"
    });
});

app.get("/convert/inches-to-feet/:value",(req, res) => {
    const conversion = (req.params.value / 12).toFixed(3);
    res.json({
        "inches": req.params.value,
        "feet": conversion,
        "message": req.params.value + " pulgadas son " + conversion + " pies"
    });
});

app.get("/convert/inches-to-miles/:value",(req, res) => {
    const conversion = (req.params.value / 63360).toFixed(6);
    res.json({
        "inches": req.params.value,
        "miles": conversion,
        "message": req.params.value + " pulgadas son " + conversion + " millas"
    });
});


// Pies
app.get("/convert/feet-to-meters/:value",(req, res) => {
    const conversion = (req.params.value * 0.3048).toFixed(3);
    res.json({
        "feet": req.params.value,
        "meters": conversion,
        "message": req.params.value + " pies son " + conversion + " metros"
    });
});

app.get("/convert/feet-to-centimeters/:value",(req, res) => {
    const conversion = (req.params.value * 30.48).toFixed(3);
    res.json({
        "feet": req.params.value,
        "centimeters": conversion,
        "message": req.params.value + " pies son " + conversion + " centímetros"
    });
});

app.get("/convert/feet-to-kilometers/:value",(req, res) => {
    const conversion = (req.params.value * 0.0003048).toFixed(6);
    res.json({
        "feet": req.params.value,
        "kilometers": conversion,
        "message": req.params.value + " pies son " + conversion + " kilómetros"
    });
});

app.get("/convert/feet-to-inches/:value",(req, res) => {
    const conversion = (req.params.value * 12).toFixed(3);
    res.json({
        "feet": req.params.value,
        "inches": conversion,
        "message": req.params.value + " pies son " + conversion + " pulgadas"
    });
});

app.get("/convert/feet-to-miles/:value",(req, res) => {
    const conversion = (req.params.value / 5280).toFixed(6);
    res.json({
        "feet": req.params.value,
        "miles": conversion,
        "message": req.params.value + " pies son " + conversion + " millas"
    });
});


// Millas
app.get("/convert/miles-to-meters/:value",(req, res) => {
    const conversion = (req.params.value * 1609.34).toFixed(3);
    res.json({
        "miles": req.params.value,
        "meters": conversion,
        "message": req.params.value + " millas son " + conversion + " metros"
    });
});

app.get("/convert/miles-to-centimeters/:value",(req, res) => {
    const conversion = (req.params.value * 160934).toFixed(3);
    res.json({
        "miles": req.params.value,
        "centimeters": conversion,
        "message": req.params.value + " millas son " + conversion + " centímetros"
    });
});

app.get("/convert/miles-to-kilometers/:value",(req, res) => {
    const conversion = (req.params.value * 1.60934).toFixed(3);
    res.json({
        "miles": req.params.value,
        "kilometers": conversion,
        "message": req.params.value + " millas son " + conversion + " kilómetros"
    });
});

app.get("/convert/miles-to-inches/:value",(req, res) => {
    const conversion = (req.params.value * 63360).toFixed(3);
    res.json({
        "miles": req.params.value,
        "inches": conversion,
        "message": req.params.value + " millas son " + conversion + " pulgadas"
    });
});

app.get("/convert/miles-to-feet/:value",(req, res) => {
    const conversion = (req.params.value * 5280).toFixed(3);
    res.json({
        "miles": req.params.value,
        "feet": conversion,
        "message": req.params.value + " millas son " + conversion + " pies"
    });
});


// Manejo de rutas no encontradas 
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

//inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
