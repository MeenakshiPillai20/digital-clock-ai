  function setAlarm() {
     var wake = document.getElementById("wake-time").value;
     document.getElementById("wake").innerHTML = wake;
     var lunch = document.getElementById("lunch-time").value;
     document.getElementById("lunch").innerHTML = lunch;
     var nap = document.getElementById("nap-time").value;
     document.getElementById("nap").innerHTML = nap;
     var night = document.getElementById("night-time").value;
     document.getElementById("night").innerHTML = night;
     
  }
  function getTime(){
    var date = new Date();
    var HH = date.getHours();
    var MM = date.getMinutes();
    let SS = String(date.getSeconds()).padStart(2, '0');

    var newformat = HH >= 12 ? 'PM' : 'AM'; 
    document.getElementById("format").innerHTML = newformat;

    if (newformat=="AM"){
      document.getElementById("msg").innerHTML = "GOOD MORNING!! WAKE UP !!";
      document.getElementById("right-msg").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
      document.getElementById("img").src = "./images/Component.png";
    }
    
    if (HH>=1 && HH<=3 && newformat=="PM"){
      document.getElementById("msg").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
      document.getElementById("right-msg").innerHTML = "LET'S HAVE SOME LUNCH !!";
      document.getElementById("img").src = "./images/nap.svg";
    }
  
    if (HH>=4 || HH<=7 && newformat=="PM"){
      document.getElementById("msg").innerHTML = "GOOD EVENING !!";
      document.getElementById("right-msg").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
      document.getElementById("img").src = "./images/lunch_image.png";
    }
  
    if (HH>=8 && newformat=="PM"){
      document.getElementById("msg").innerHTML = "GOOD NIGHT !!";
      document.getElementById("right-msg").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
      document.getElementById("img").src = "./images/nightImg.jpg";
    }
    HH = HH % 12; 
    HH = HH ? HH : 12; 
    MM = MM < 10 ? '0' + MM : MM;

    if (HH < 10)
       HH = "0" + HH
    

    document.getElementById("HH").innerText = HH;
    document.getElementById("MM").innerText = MM;
    document.getElementById("SS").innerText = SS;
    
    
      
    
    setTimeout(getTime, 1000);
  }
  getTime();