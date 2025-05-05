function openNav() {
  document.getElementById("myLeftnav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("myLeftnav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 

async function getGist() {
  const response = await fetch('https://gist.githubusercontent.com/strepera/92787e502ca6a3babe43c3a20ff9a4ec/raw/e2848bcefd007c9e2f67cd39ec404d5db75f91bb/player_data.json');
  const gistData = await response.json();
  return gistData;
}

window.onload = async () => {
  const data = await getGist();
  if (data == 'You are being rate limited. (Limit: 60 requests/h)') {
    document.getElementById("playerData").innerHTML = data;
    return;
  }
  data.sort((a, b) => a.username.localeCompare(b.username));

  let lines = [];
  for (const entry in data) {
    let line = [];
    line.push('<strong>' + data[entry].username + '</strong> | ' + '<div class="dcuser">Coins: ' + data[entry].coins + ' </div>| <div class="uuid">Messages: ' + Object.values(data[entry].messages).reduce((a,b) => a+b, 0) + '</div>');
    lines.push(line.join(' '));
  }
  document.getElementById("playerData").innerHTML = lines.join('<br><br>');
}