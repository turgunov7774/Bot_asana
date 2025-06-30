'''js
const arcode = require ('qrcode-
terminal');
const { Client } = require ('whatsapp-
web.js');
const client = new Client 0;
client.on('ar', qr => {
arcode.generate (ar, { small: true });
console.log ('QR-код
сгенерирован, отсканируй его в
WhatsApp Web');
});
client.on ('ready', 0) => {
console.log ('Бот готов!!);
3);
client.on ('message', async msg => {
const linkRegex = /(https?:WI^\s]
+)/gi;
if (linkRegex.test (msg.body)) {
const chat = await
msg.getChat();
if (chat.isGroup) {
try {
await msg.delete(true);
console.log ('Удалено
сообщение со ссылкой:', msg.body);
} catch (err) {
