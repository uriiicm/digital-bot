const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowPlantillaBoda1 = addKeyword(['1', 'boda1','1️⃣']).addAnswer(
    ['Te comparto el link de pago 😃 cuando termines de realizar el pago,automáticamente se te compartira el link de descarga de tu plantilla  ⚡️',
    'https://buy.stripe.com/dR68zL04M1escy48wz']).
    addAnswer('De antemano muchas gracias por adquirir una de nuestras plantillas, esperemos te sean de mucha utilidad. Saludos 🤗 ✨', {delay: 5000},
    null,
    []).addAnswer('si quieres volver al menú, escribe la palabra "menú" 😊');
const flowPlantillaBoda2 = addKeyword(['2', 'boda2','2️⃣']).addAnswer(
    ['Te comparto el link de pago 😃 cuando termines de realizar el pago, automáticamente se te compartira el link de descarga de tu plantilla ⚡️',
    'https://buy.stripe.com/cN22bn4l22iwfKgbIK']).
    addAnswer('De antemano muchas gracias por adquirir una de nuestras plantillas, esperemos te sean de mucha utilidad. Saludos 🤗 ✨', {delay: 5000},
    null,
    []).addAnswer('si quieres volver al menú, escribe la palabra "menú" 😊');
const flowPlantillaBoda3 = addKeyword(['3', 'boda3','3️⃣']).addAnswer(
    ['Te comparto el link de pago 😃 cuando termines de realizar el pago, automáticamente se te compartira el link de descarga de las 2 plantillas ⚡️',
    'https://buy.stripe.com/bIY7vH04Mg9m2XudQU']).
    addAnswer('De antemano muchas gracias por adquirir nuestras plantillas, esperemos te sean de mucha utilidad. Saludos 🤗 ✨', {delay: 5000},
    null,
    []).addAnswer('si quieres volver al menú, escribe la palabra "menú" 😊');


const flowPlantillasBodaTodoEnUno = addKeyword(['1', 'boda']).addAnswer(
    ['Te facilitamos la organización de tu boda 😃 con las plantillas más completas que encontrarás 🤩 incluye:',
    '1.- Una guía de 22 hojas para elegir el estilo de tu boda por estación del año, lugar, paleta de colores, menú, cortejo, proveedores y más.💒',
    '2.- 5 diferentes plantillas entre ellas la calculadora de alcohol, Checklist del día tu boda con horarios, proveedores y más .🕣',
    '3.- Una plantilla de invitación y tutorial de links de ubicación y formulario de confirmación de asistencia 📊',
    '4.- Además viene de regalo la plantilla en Excel de invitados y organización de mesas 😊 (la plantilla más vendida)',
    '*Por todo esto el costo es de $850 MXN, adquiérela en este link:* https://buy.stripe.com/28o6rD18Q4qE8hO14a']).
    addAnswer('si quieres volver al menú, escribe la palabra "menú" 😊', {delay: 3000},
    null,
    []);

const flowPlantillasExcel = addKeyword(['2', 'excel','2️⃣']).addAnswer(
    ['Estas son las 2 plantillas de excel que te ofrecemos 🤓 📄',
    '1️⃣ Plantilla para realizar la lista de tus invitados, llevar un conteo y organización de mesas para tu *Boda o XV años* tiene un costo de *$70 MXN*',
    '2️⃣ Plantilla para planificar el presupuesto de tu *boda*, en el podrás organizar tus ingresos, gastos, proveedores y al final viene un gráfico que se actualizará automáticamente. Esta plantilla tiene un costo de *$160 MXN*',
    '3️⃣ Si requieres las dos plantillas, para tu boda (presupuesto y la de invitados) tiene un costo de *$240 MXN* 💍😉']).
    addAnswer('Escribe el número de la opción que te interesa comprar...', {delay: 3000},
    null,
    [flowPlantillaBoda1,flowPlantillaBoda2,flowPlantillaBoda3]);


const flowPlantillas = addKeyword(['1','1️⃣']).addAnswer(
    ['Actualmente manejamos 2 tipos de plantillas 😃',
    '1️⃣ ¿Tienes planes de casarte? 💍 tenemos las Plantillas perfectas para organizar tu boda *todo en uno* 🤩',
    '2️⃣ Excel de invitados, organización de mesas, para tu boda o XV años. Excel de presupuesto/proveedores 📊']
   
) .addAnswer('Escribe el número de la opción que deseas consultar... ', {delay: 3000},
null,
[flowPlantillasBodaTodoEnUno,flowPlantillasExcel]);

const flowInvitacionesWeb = addKeyword(['2','2️⃣']).addAnswer(
    ['Te realizamos tu *Invitacion web* de boda 💍 XV años 💃 Bautizo, cumpleaños y más 🥳',
    'Te incluye: Música, cuenta regresiva, link de confirmación (podrás tener en gráficas la confirmación de tus invitados)',
    'Mesa de regalos🎁 links de ubicación, y sugerencia de hospedaje 🏨 Dress Code, itinerario, pases digitales y galería de fotos 🖼️ diseño en móvil, ¡Tu invitación en página web es posible!', 
    'Con un costo de $1790 MXN te incluye todo lo mencionado. Si eres del extranjero la liga de pago se adecúa a tu moneda local ☺️']   
) .addAnswer(['Sigue este enlace para ver nuestro catálogo en WhatsApp: ','https://wa.me/c/5215549394897','Si quieres algún diseño personalizado diferente al del catálogo con gusto te apoyamos ✨'], {delay: 1000},
null,
[]).addAnswer('Te comparto el link de pago 😃 cuando termines de realizar el pago,automáticamente se te descargará un documento para que ingreses tus datos de la invitación, me lo compartes por aquí para comenzar a diseñar tu invitación ⚡️ https://buy.stripe.com/fZe03f6ta8GU69G149', {delay: 3000},
null,
[]).
addAnswer('si quieres volver al menú, escribe la palabra "menú" 😊');

const flowInvitacionesPdf = addKeyword(['3','3️⃣']).addAnswer(
    ['Te realizamos tu invitación digital para cualquier ocasión 😃 Bodas 💍, XV años, cumpleaños, bautizos y más 💖',
    'Tiene un costo de $500 MXN si no eres de México 🇲🇽 tengo liga de pago por PayPal el costo es 27 USD ',
    'Te incluye: Información personal de los novios o el de cumpleaños 🎁 lugar de ceremonia, recepción, link de confirmación a un formulario donde puedes consultar quién confirmó asistencia ✅ botón de dirección a Google maps y botón de mesa de regalos (si aplica) por último el código de vestimenta 👗👔 Puedes consultar aquí mi catálogo con algunos modelos disponibles 😉']   
) .addAnswer(['Sigue este enlace para ver nuestro catálogo en WhatsApp: ','https://wa.me/c/5215549394897','Si quieres algún diseño personalizado diferente al del catálogo con gusto te apoyamos ✨'], {delay: 1000},
null,
[]).addAnswer('Posterior al pago te solicito la información para tu invitación y se entrega el 3 días hábiles 🥰 ', {delay: 3000},
null,
[]).
addAnswer('si quieres volver al menú, escribe la palabra "menú" 😊');

const flowFaq = addKeyword(['4','4️⃣']).addAnswer('Aquí tienes las preguntas más frecuentes que han hecho nuestros clientes 🤓',{media:'https://res.cloudinary.com/uriiicm/image/upload/v1716269350/FAQ_bi2wmp.jpg'}, 
{delay: 3000},
[]).addAnswer('si quieres volver al menú, escribe la palabra "menú" 😊');

const flowPrincipal = addKeyword(['hola', 'buenas','buenos dias','buen dia','buena','info','informacion','menú'])
    .addAnswer('Hola, buen día 😊 ☀️')
    .addAnswer(
        [
            'Este es el menú, a continuación escribe el *número de la opción* que deseas consultar: ',
            '1️⃣ Información sobre *plantillas para Boda y XV años*',
            '2️⃣ Información sobre *Invitaciones Web*',
            '3️⃣ Información sobre *Invitaciones en PDF*',
            '4️⃣ Preguntas frecuentes'
        ],
        {capture:true},
        null,
        [flowPlantillas,flowInvitacionesPdf,flowInvitacionesWeb,flowFaq]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
