function openNav() {
  document.getElementById("myLeftnav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("myLeftnav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 

let data;

async function getGist() {
  const response = await fetch('https://gist.githubusercontent.com/strepera/92787e502ca6a3babe43c3a20ff9a4ec/raw/1e2fa35f296e3b8a420686b7a130024e18bb6dab/player_data.json');
  const gistData = await response.json();
  return gistData;
}

const sortBy = async (type) => {
    if (!data) {
        data = await getGist();
        data = Object.values(data);
    }
    switch (type) {
        case "messages":
            data.sort((a, b) => Object.values(b.messages).reduce((a2,b2)=>a2+b2) - Object.values(a.messages).reduce((a2,b2)=>a2+b2));
            break;
        case "alphabetical":
            data.sort((a, b) => a.username.localeCompare(b.username));
            break;
        case "coins":
            data.sort((a ,b) => b.coins - a.coins);
            break;
        default:
            return;
    }
    let lines = [`<input type="button" value="Sort by alphabetical" onclick="sortBy('alphabetical')">`, `<input type="button" value="Sort by coins" onclick="sortBy('coins')">`, `<input type="button" value="Sort by messages" onclick="sortBy('messages')">`];
    for (const entry in data) {
      let line = [];
      line.push('<strong>' + data[entry].username + '</strong> | ' + '<div class="dcuser">Coins: ' + data[entry].coins + ' </div>| <div class="uuid">Messages: ' + Object.values(data[entry].messages).reduce((a,b) => a+b, 0) + '</div>');
      lines.push(line.join(' '));
    }
    document.getElementById("playerData").innerHTML = lines.join('<br><br>');
}

window.onload = async () => {
    await sortBy("coins");
}
