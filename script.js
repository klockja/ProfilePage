console.log("page loaded...");

var userName = document.querySelector("div.card-body h1");
connectionRequestsAmount = document.querySelector(".badge");
connectionRequests = document.querySelectorAll("#connectionRequest");

function removeConnectionRequest(connectionNum)
{
    console.log(connectionNum);
    connectionRequests[connectionNum].remove();
    var amount = parseInt(connectionRequestsAmount.innerHTML);
    amount--;
    connectionRequestsAmount.innerHTML = amount;
}

function changeName()
{
    userName.innerHTML = "Kesha";
}