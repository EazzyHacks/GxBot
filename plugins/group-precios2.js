
// Código Hecho Por Barboza
let handler = async (m, { conn }) => {
    // React con un emoji al mensaje
    await m.react('⭐');

    // Mensaje que se enviará
    const message = `> Bot Para Grupos Permanentes⭐
    3so = 1 Grupo 
    6so = 2 Grupos
    10so =  3 Grupos
    13so = 4 Grupos`;

    if (m.isGroup) {
        // URL de la imagen
        const imageUrl ='https://files.catbox.moe/z604jy.jpeg'; // Cambia esta URL por la de la imagen que deseas enviar

        // Envía la imagen con el mensaje
        await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { mimetype: 'image/jpeg' });
    }
}

handler.help = ['precios2'];
handler.tags = ['main'];
handler.group = true;
handler.command = ['precios2', 'p2'];

export default handler;
