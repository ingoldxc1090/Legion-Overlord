const https = require('https');
exports.run = (client, message, args) => {
    if(args.length == 1){
        message.channel.send('You must some enter text to be translated.');
        return;
    }

    var lang = args[0];
    delete args[0];
    var text = args.join(' ');

    const langAr = [
        ['azerbaijan',	'az'], ['malayalam',	'ml'],
        ['albanian',	'sq'], ['maltese',	    'mt'],
        ['amharic',	    'am'], ['macedonian',	'mk'],
        ['english',	    'en'], ['maori',	    'mi'],
        ['arabic',  	'ar'], ['marathi',   	'mr'],
        ['armenian',	'hy'], ['mari', 	    'mhr'],
        ['afrikaans',	'af'], ['mongolian',	'mn'],
        ['basque',	    'eu'], ['german',    	'de'],
        ['bashkir',	    'ba'], ['nepali',	    'ne'],
        ['belarusian',	'be'], ['norwegian',	'no'],
        ['bengali',	    'bn'], ['punjabi',	    'pa'],
        ['burmese',	    'my'], ['papiamento',	'pap'],
        ['bulgarian',	'bg'], ['persian',	    'fa'],
        ['bosnian',	    'bs'], ['polish',	    'pl'],
        ['welsh',	    'cy'], ['portuguese',	'pt'],
        ['hungarian',	'hu'], ['romanian',	    'ro'],
        ['vietnamese',	'vi'], ['russian',	    'ru'],
        ['haitian',     'ht'], ['cebuano',  	'ceb'],
        ['galician',	'gl'], ['serbian',	    'sr'],
        ['dutch',	    'nl'], ['sinhala',	    'si'],
        ['hill_mari',	'mrj'], ['slovakian',	'sk'],
        ['greek',	    'el'], ['slovenian',	'sl'],
        ['georgian',	'ka'], ['swahili',	    'sw'],
        ['gujarati',	'gu'], ['sundanese',	'su'],
        ['danish',	    'da'], ['tajik',	    'tg'],
        ['hebrew',	    'he'], ['thai',	        'th'],
        ['yiddish',	    'yi'], ['tagalog',	    'tl'],
        ['indonesian',	'id'], ['tamil',	    'ta'],
        ['irish',	    'ga'], ['tatar',	    'tt'],
        ['italian',	    'it'], ['telugu',	    'te'],
        ['icelandic',	'is'], ['turkish',	    'tr'],
        ['spanish',	    'es'], ['udmurt',	    'udm'],
        ['kazakh',	    'kk'], ['uzbek',	    'uz'],
        ['kannada',	    'kn'], ['ukrainian',	'uk'],
        ['catalan',	    'ca'], ['urdu',	        'ur'],
        ['kyrgyz',	    'ky'], ['finnish',	    'fi'],
        ['chinese',	    'zh'], ['french',	    'fr'],
        ['korean',	    'ko'], ['hindi',	    'hi'],
        ['xhosa',	    'xh'], ['croatian',	    'hr'],
        ['khmer',	    'km'], ['czech',	    'cs'],
        ['laotian',	    'lo'], ['swedish',	    'sv'],
        ['latin',	    'la'], ['scottish',	    'gd'],
        ['latvian',	    'lv'], ['sstonian',	    'et'],
        ['lithuanian',	'lt'], ['esperanto',	'eo'],
        ['luxembourgish',	'lb'], ['javanese',	'jv'],
        ['malagasy',	'mg'], ['japanese',     'ja'],
        ['malay',	    'ms']];
    var langFound = false;
    for(i = 0; i < langAr.length; i++) {
        if(lang.toLowerCase() === langAr[i][0]){
            lang = langAr[i][1];
            langFound = true;
        }
    }
    if(!langFound){
        message.channel.send("I cannot find that language.");
        return;
    }

    https.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171116T201140Z.f7742bdd6d2f074e.f661f004f492b08a58d31ba571264bce583fab17&text=' + text + '&lang=' + lang, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            message.channel.send(JSON.parse(data).text);
        });

    }).on("error", (err) => {
        console.error(err);
    });
}