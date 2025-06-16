//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xKNmRWd245L2UvbTlmVG90SE94MkVTMFVYR0pJOU8wSVJ2cEt6Z1VGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWpienF6Y2RhYlNaZnNZZXJzL3drRnNkaWhnaXhBdTBFSTBHSVloZzdHbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UGpEYUpYQnRpZUYxOTZWdGVpbVJkeXdscnZYMzV3eitaTVQ4TFN1azNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWR1ZOeTlxVERhanAxQmxkRDlxQ3J1TytaRnZzVS9jYTZzODEzaEFvSFhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNZG5tNklweHZqK08wUUsrS01xTkFlUWd2Y3k5WHUyUnZoQjRiZ2tBSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRMSUhjTWJsQTBBcG1aTWl2MTgwREtsTXl0MTJ5L2UrbEgzYlNvT2Q1WEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0YwOEpDblpxZWdvWHV2S25vc3NxcVk0S0JlTEdTSW82cmM0WG1DQThVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmlvSjJBYzFLTTJEMXdIbHNzTHNwaXZySFFzUFFRVVBkUXpvTHVBTjF5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLNnZ0a09JbHZXV3k1QXFaU2x2VGk5NFRXS0FZL0c1R3M4ZlRubnQ4ZnNZQ1lDSUF2WUZWczM4N3N6ZU9HS1YraTBHMEdrNWRvYlA3V0Ztb21NZUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6IitLdTJ6RGhEODhYd0RCclBKbHp4OWVGOWJxZk94dVZpNEVFRENEM2dSWkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtWT0NidUNyUlBDQ21lNGw1QktGbmciLCJwaG9uZUlkIjoiOThkMDYwZjYtNzdkNi00NjcwLTk4YmYtNTQ4MTNhYzhjNzkzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJhbmZzUXdIbE52M3V2RHc0eU01azZFS0ZyYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUnRwU3FLUHhKVVllejdvRCt3dFkyam9vY1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUhTSjRaTFQiLCJtZSI6eyJpZCI6Ijk0NzY0Mzg2MTY2OjEzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE5NDEzNTQ2MTc2NjIzOjEzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnVOczVFREVKbUJ3TUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0pHbFd0eHcxUjZXNHlJOEJ2ZEl0bGRSUVhhOTRNQ2tpNk9KSWtaL2F3ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWWlwaWRySUpVRmt1dzVzNzRGWEtHRlZDNVh6aXhNZFZpeDJ2K3Mva2VFWVFxdGFqOWlNVFpwc203ZUczcDJyTDFTZHhKMlBFN2FXMEQvU0xVT1V2Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6InRJUkI1eXBKR0VDYTczUHp1aWRkQmZlUVFqekh1eUxoY0dGVm5OdURpTlJYTUh6bkVTNjRxcS9YYTI2WDFHRTR5VEZoNDFVZk1hTy9JT1crcTRZOEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjQzODYxNjY6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGlScFZyY2NOVWVsdU1pUEFiM1NMWlhVVUYydmVEQXBJdWppU0pHZjJzTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMDczNTExLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUEdCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
