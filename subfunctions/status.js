exports.run = (client) => {
    const status = ["with your heart",
                    "with myself",
                    "with fire"];
    rand = Math.floor(Math.random() * status.length);
    statusSet = status[rand];
    client.user.setGame(statusSet);
}