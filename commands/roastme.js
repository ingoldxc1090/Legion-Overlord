exports.run = (client, message) =>
//just add any new roasts into the array in quotes please
{
    let roastArray = ["Fuck you", "Your mother was a whore and your father smelled of elderberries!","Do your parents even realize they’re living proof that two wrongs don’t make a right?",
        "Do you ever wonder what life would be like if you’d gotten enough oxygen at birth?","You always bring me so much joy—as soon as you leave the room."
        ,"The only way you’ll ever get laid is if you crawl up a chicken’s ass and wait.","I’d tell you to go fuck yourself, but that would be cruel and unusual punishment.",
        "If I threw a stick, you’d leave, right?","If I wanted a bitch, I'd have bought a dog.","Someday you'll go far... and I hope you stay there.","Save your breath - you'll need it to blow up your date."
        ,"I thought of you today. It reminded me to take the garbage out."];
    var i = Math.floor(Math.random()*roastArray.length);
    message.reply(roastArray[i])
}