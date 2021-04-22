module.exports = (client, swears, callback) => {
    if(typeof swears === 'string') {
        swears = [swears];
    }

    client.on('message', (message) => {
        const {content} = message;
        
        swears.forEach((swear) => {
            const swearWord = `${swear}`

            if(content.toLowerCase().startsWith(swearWord)) {
                console.log(`Kullanıcı küfür etti: ${message.author.tag}`);
                callback(message);
            }
        });
    })
}