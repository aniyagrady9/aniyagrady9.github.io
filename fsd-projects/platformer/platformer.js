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
    createPlatform(150, 340, 100, 15, "green");
    createPlatform(50, 550, 200, 20, "gray");
    createPlatform(550, 550, 200, 20, "gray");
    createPlatform(350, 580, 50, 10, "crimson");
    createPlatform(100, 600, 200, 60, "purple");
    createPlatform(350, 420, 150, 20, "purple");
    createPlatform(200, 330, 120, 20, "red");
    createPlatform(500, 250, 180, 20, "blue");
    createPlatform(150, 160, 100, 20, "navy");
    createPlatform(600, 480, 150, 20);
    createPlatform(50, 280, 110, 20, "yellow");
    createPlatform(300, 200, 130, 20);
    createPlatform(200, 19, 120, 20, "navy");
    createPlatform(1100, 420, 150, 200, "purple");
    createPlatform(100, 500, "gold");
    createPlatform(700, 500, 1100, 10, "purple");
    // TODO 3 - Create Collectables
    createCollectables("diamond", 100, 400, 600, 10);
    createCollectables("money", 570, 170);
    createCollectables("money", 300, 310);
    createCollectables("money", 450, 240);
    createCollectables("money", 500, 240);
    createCollectables("chest", 600, 160, 0.7, 1);
    createCollectibles(150, 120, "star");
    createCollectibles(350, 380, "coin");
    createCollectibles(500, 210, "heart");
    // TODO 4 - Create Cannons
    createCannons("bottom", 100, 300);
    createCannons("bottom", 1100, 70);
    createCannons("bottom", 400, 700);
    createCannons("bottom", 200, 700);
    createCannons("left", 300, 2000);
    createCannons("right", 200, 1500);
    createCannons("top", 400, 3000);
    createCannons("right", 450, 2500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  registerSetup(setup);
});
