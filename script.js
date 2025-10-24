<!DOCTYPE html>

<html>

<head>

  <title>Interactive Resume Builder</title>

  <style>

    body { font-family: Arial; padding: 20px; }

    input, textarea { width: 100%; margin-bottom: 10px; padding: 8px; }

    #resume { border: 1px solid #000; padding: 20px; margin-top: 20px; }

  </style>

</head>

<body>

  <h2>Resume Builder</h2>

  <input type="text" id="name" placeholder="Your Name">

  <input type="email" id="email" placeholder="Your Email">

  <textarea id="summary" placeholder="Write a short summary"></textarea>

  <button onclick="generateResume()">Generate Resume</button>

  <div id="resume" style="display:none;">

    <h3 id="resName"></h3>

    <p id="resEmail"></p>

    <p id="resSummary"></p>

  </div>

  <script>

    function generateResume() {

      document.getElementById("resName").innerText = document.getElementById("name").value;

      document.getElementById("resEmail").innerText = document.getElementById("email").value;

      document.getElementById("resSummary").innerText = document.getElementById("summary").value;
      document.getElementById("resume").style.display = "block";

    }

  </script>

</body>

</html>