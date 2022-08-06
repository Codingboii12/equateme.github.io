    console.log("Hello world")

    function conversion(){
        var input = document.getElementById("conversionInput").valueAsNumber;
        var result = input * (5/18);
        document.getElementById('result').innerHTML = "Meter/Second: " + result; 
    }       

    function accFinder(){
        var u = document.getElementById("ivacc").valueAsNumber
        var v = document.getElementById("fvacc").valueAsNumber
        var t = document.getElementById("tiacc").valueAsNumber
        var a = (v - u) / t
        document.getElementById("acc").innerHTML = "Acceleration = " + a + "m/s<sup>2</sup>"
        console.log(a)
    }

    function frst(){
        var u = document.getElementById("ivf").valueAsNumber;
        var a = document.getElementById("accf").valueAsNumber;
        var t = document.getElementById("tif").valueAsNumber;
        var v = u + a*t;
        document.getElementById("answer").innerHTML = "v = " + v + "m/s";
        console.log("Its working Epico" + v)
    }
    function scnd(){
        var u = document.getElementById("ivs").valueAsNumber
        var a = document.getElementById("accs").valueAsNumber
        var t = document.getElementById("tis").valueAsNumber
        var s = u*t + 0.5*a*t*t
        document.getElementById("answer").innerHTML = "s = " + s + "m";
        console.log(s)
    }

    function thrd(){
        var u = document.getElementById("ivt").valueAsNumber
        var a = document.getElementById("acct").valueAsNumber
        var s = document.getElementById("dist").valueAsNumber
        var v = u*u + 2*a*s;
        document.getElementById("answer1").innerHTML = "v<sup>2</sup>= " + v;
        document.getElementById("answer2").innerHTML = "v = " + Math.sqrt(v) + "m/s";
        console.log(v)
        console.log(Math.sqrt(v))   
    }