const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a la calculadora de Avelina del noveno a. ¿Qué operación quieres realizar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const numUno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numUno.value);
        const numDos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numDos.value);
        
        if (!isNaN(numUno) && !isNaN(numDos)) {
            const resultado = numUno + numDos;
            const speakOutput = `El resultado de sumar ${numUno} más ${numDos} es ${resultado}. ¿Qué más quieres hacer?`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Puedes pedirme que sume, reste, multiplique, divida o calcule la raíz cuadrada de números.')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const numUno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numUno.value);
        const numDos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numDos.value);
        
        if (!isNaN(numUno) && !isNaN(numDos)) {
            const resultado = numUno - numDos;
            const speakOutput = `El resultado de restar ${numUno} menos ${numDos} es ${resultado}. ¿Qué más quieres hacer?`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Puedes pedirme que sume, reste, multiplique, divida o calcule la raíz cuadrada de números.')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const numUno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numUno.value);
        const numDos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numDos.value);
        
        if (!isNaN(numUno) && !isNaN(numDos)) {
            const resultado = numUno * numDos;
            const speakOutput = `El resultado de multiplicar ${numUno} por ${numDos} es ${resultado}. ¿Qué más quieres hacer?`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Puedes pedirme que sume, reste, multiplique, divida o calcule la raíz cuadrada de números.')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const numUno = parseInt(handlerInput.requestEnvelope.request.intent.slots.numUno.value);
        const numDos = parseInt(handlerInput.requestEnvelope.request.intent.slots.numDos.value);
        
        if (!isNaN(numUno) && !isNaN(numDos)) {
            if (numDos !== 0) {
                const resultado = numUno / numDos;
                const speakOutput = `El resultado de dividir ${numUno} entre ${numDos} es ${resultado}. ¿Qué más quieres hacer?`;

                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt('Puedes pedirme que sume, reste, multiplique, divida o calcule la raíz cuadrada de números.')
                    .getResponse();
            } else {
                const speakOutput = 'No se puede dividir entre cero. Por favor, elige otro divisor.';
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            }
        } else {
            const speakOutput = 'Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const RaizCuadradaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RaizCuadradaIntent';
    },
    handle(handlerInput) {
        const num = parseInt(handlerInput.requestEnvelope.request.intent.slots.numero.value);
        
        if (!isNaN(num)) {
            if (num >= 0) {
                const resultado = Math.sqrt(num);
                const speakOutput = `La raíz cuadrada de ${num} es ${resultado}. ¿Qué más quieres hacer?`;

                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt('Puedes pedirme que sume, reste, multiplique, divida o calcule la raíz cuadrada de números.')
                    .getResponse();
            } else {
                const speakOutput = 'No se puede calcular la raíz cuadrada de un número negativo.';
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    .reprompt(speakOutput)
                    .getResponse();
            }
        } else {
            const speakOutput = 'Lo siento, no pude entender el número. Por favor, inténtalo de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const LogaritmoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LogaritmoIntent';
    },
    handle(handlerInput) {
        const num = parseInt(handlerInput.requestEnvelope.request.intent.slots.numero.value);
        
        if (!isNaN(num) && num > 0) {
            const resultado = Math.log(num);
            const speakOutput = `El logaritmo natural de ${num} es ${resultado}. ¿Qué más quieres hacer?`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('Puedes pedirme que sume, reste, multiplique, divida o calcule la raíz cuadrada de números.')
                .getResponse();
        } else {
            const speakOutput = 'Lo siento, no pude entender el número. Debe ser mayor que cero. Por favor, inténtalo de nuevo.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Hola Mundo!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes pedirme que sume, reste, multiplique, divida o calcule la raíz cuadrada de números. ¿Cómo puedo ayudarte?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entendí eso. Por favor, inténtalo de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`La sesión ha finalizado por: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Has activado ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error: ${error.message}`);

        const speakOutput = 'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        RaizCuadradaIntentHandler,
        LogaritmoIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
