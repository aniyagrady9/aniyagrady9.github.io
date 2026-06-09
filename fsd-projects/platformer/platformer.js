$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(800, 400, 200, 20, "purple");
    createPlatform(300, 350, 80, 20, "red");
    createPlatform(450, 280, 80, 20, "red");
    createPlatform(600, 210, 120, 90, "orange");
    createPlatform(150, 500, 100, 15, "green");
    createPlatform(350, 420, 100, 15, "green");
    createPlatform(50, 550, 200, 20, "gray");
    createPlatform(550, 550, 200, 20, "gray");
    createPlatform(350, 580, 50, 10, "crimson");
    createPlatform(100, 600, 200, 60, "purple");
    createPlatform(200, 330, 700, 20, "red");
    createPlatform(500, 250, 180, 20, "blue");
    createPlatform(150, 330, 292, 10, "navy");
    createPlatform(600, 480, 150, 20,"dark green");//sloping right 
    createPlatform(50, 280, 112, 20, "yellow");
    createPlatform(300, 200, 130, 20,"pink");
    createPlatform(100, 500,120,15, "gold");
    createPlatform(700, 500, 1100, 10, "purple");
    createPlatform(40,1300,29,203,"yellow");
    // TODO 3 - Create Collectables
    createCollectable("diamond",200, 100);
    createCollectable("kennedi",150, 120);
    createCollectable("grace", 100, 400);
    createCollectable("max",300,300);
    createCollectable("steve",720,500);
    createCollectable("kennedi",1200,120);
    createCollectable("grace",500,100);
    createCollectable("database",300,900); 
    createCollectable("grace", 300, 1100);
    // TODO 4 - Create Cannons
    createCannon("bottom",1100, 70);//slowly fires every 2 minutes
    createCannon( "bottom",400, 700);//slowly fires every 2 minutes
    createCannon( "left",400, 700);//slowly fires every 2 minutes 
    createCannon( "left",300, 2000);//slowly fires every 2 minutes 
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  registerSetup(setup);
});
