const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://simas2275:smarthome@smarthome-p5rsu.mongodb.net/test?retryWrites=true&w=majority";

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true, useFindAndModify: false}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB connected");
    })

const userRouter = require('./Routes/User');
const temperatureRouter = require('./Routes/Kitchen/Temperature');
const curtainsRouter = require('./Routes/Kitchen/Curtains');
const lightRouter = require('./Routes/Kitchen/Light');
const plantRouter = require('./Routes/Kitchen/Plant');
const coffeeRouter = require('./Routes/Kitchen/Coffee');
const petRouter = require('./Routes/Kitchen/Pet');

app.use('/user', userRouter);
app.use('/temperature', temperatureRouter);
app.use('/curtains', curtainsRouter);
app.use('/light', lightRouter);
app.use('/plants', plantRouter);
app.use('/coffee', coffeeRouter);
app.use('/petFood', petRouter);


const garageLightRouter = require('./Routes/Garage/Light');
const garageTemperatureRouter = require('./Routes/Garage/Temperature');
const garageGatesRouter = require('./Routes/Garage/Gates');

app.use('/garageLight', garageLightRouter);
app.use('/garageTemperature', garageTemperatureRouter);
app.use('/garage', garageGatesRouter);

const bedroomTemperatureRouter = require('./Routes/BedRoom/Temperature');
const bedroomCurtainsRouter = require('./Routes/BedRoom/Curtains');
const bedroomLightRouter = require('./Routes/BedRoom/Light');
const bedroomPlantRouter = require('./Routes/BedRoom/Plant');

app.use('/bedroomTemperature', bedroomTemperatureRouter);
app.use('/bedroomCurtains', bedroomCurtainsRouter);
app.use('/bedroomLight', bedroomLightRouter);
app.use('/bedroomPlants', bedroomPlantRouter);



const bathroomTemperatureRouter = require('./Routes/Bathroom/Temperature');
const bathroomCurtainsRouter = require('./Routes/Bathroom/Curtains');
const bathroomLightRouter = require('./Routes/Bathroom/Light');


app.use('/bathroomTemperature', bathroomTemperatureRouter);
app.use('/bathroomCurtains', bathroomCurtainsRouter);
app.use('/bathroomLight', bathroomLightRouter);


const securityRouter = require('./Routes/Security/Security');
app.use('/security', securityRouter);


const energyRouter = require('./Routes/Electricity/Energy');
const solarRouter = require('./Routes/Electricity/solarPanel');
app.use('/energy', energyRouter);
app.use('/solar', solarRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});