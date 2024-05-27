function addChannel() {
  var name = document.getElementById("channelName").value;
  var link = document.getElementById("channelLink").value;
  var table = document.getElementById("channelTable");
  var row = table.insertRow(-1);
  var cell = row.insertCell(0);
  cell.innerHTML = "<a href='#' onclick='displayChannel(\"" + link + "\")'>" + name + "</a>";
}

function displayChannel(link) {
  document.getElementById("channelFrame").src = link;
}

function saveData() {
  // Your code to save data to XML file
  alert("تم حفظ البيانات بنجاح!");
}

function loadData() {
  // Your code to load data from XML file
  alert("تم استدعاء البيانات المحفوظة بنجاح!");
}

function changeTheme() {
  var body = document.body;
  body.classList.toggle("dark");
}