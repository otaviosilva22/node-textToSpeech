const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const CommentsDescriptions = require('../models/Comments');


class TextToSpeech{
    async generatesSound(request, response){

        

        var {idmessage} = request.body;
        const description = await CommentsDescriptions.findByPk(idmessage);
        
        if (!description){
            return response.status(404).json({
                "Error" : "404 - Not found!",
                "Regarding": "id"
            })
        }
        
        
        //autenticação
        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                 apikey: '<key>' 
                }),
            serviceUrl: '<url>'
        });
        
        //parametros utilizados
        const params = {
            text: description.message,
            voice: 'pt-BR_IsabelaVoice', // Optional voice
            accept: 'audio/wav'
        };

        textToSpeech
            .synthesize(params)
            .then(response => {
                //converte para audio
                const audio = response.result;
                return textToSpeech.repairWavHeaderStream(audio);
            })
            .then(repairedAudio => {
                fs.writeFileSync('src/public/sound/audio.wav', repairedAudio);
                return response.status(201).json({
                    "message": "Audio created!",
                    "url": "../sound/audio.wav"
                });                

            })
            .catch(err => {
                return response.status(406).json({
                    "Error": "406 - Not acceptable!"
                });
            });

    }
}

module.exports = TextToSpeech;

