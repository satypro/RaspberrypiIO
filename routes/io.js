var express = require('express');
var router = express.Router();
var gpio = require('rpi-gpio');
 
router.get('/left/:port', (req, res, next) =>
{
    let port = req.params.port;
    gpio.setup(port, gpio.DIR_OUT,()=>{
	setTimeout(function() {
            gpio.write(port,true, (err)=>{
		if (err) throw err;
                console.log('SWITCH ON');
                setTimeout(function(){
	        gpio.write(port,false,(err) => {
		if (err) throw err;
                console.log('SEWITCH OFF');
	        });
               },3000);
	   });
    	},50);
    });

    res.send('done');
});

router.get('/right/:port', (req, res, next) =>
{
   let port = req.params.port;
    gpio.setup(port, gpio.DIR_OUT,()=>{
        gpio.write(port, false, function(err) {
        if (err) throw err;
        console.log('Written to pin');
        });
    });

    res.send('done');
});

module.exports = router;
