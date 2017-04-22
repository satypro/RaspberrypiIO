var express = require('express');
var router = express.Router();
var gpio = require('rpi-gpio');
 
router.get('/left/:port', (req, res, next) =>
{
    let port = req.params.port;
    gpio.setup(7, gpio.DIR_HIGH,()=>{
        gpio.write(port, false, function(err) {
        if (err) throw err;
        console.log('Written to pin');
        });
    });

    res.send('done');
});

router.get('/right/:port', (req, res, next) =>
{
   let port = req.params.port;
    gpio.setup(7, gpio.DIR_HIGH,()=>{
        gpio.write(port, false, function(err) {
        if (err) throw err;
        console.log('Written to pin');
        });
    });

    res.send('done');
});

module.exports = router;