import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*\n\n
*Whatsapp channel:*\nhttps://whatsapp.com/channel/0029VbCjex0InlqQbJYLHt0K\n
*instagram:*\https://www.instagram.com/abdassamad739?igsh=MWhydGN0MHd4aDl3ZA==


*facebook page:*\nhttps://www.facebook.com/dimadima.raja.50746
*script bot :*https://github.com/abdessamad4-bit
`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
