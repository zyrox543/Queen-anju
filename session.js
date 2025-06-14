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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FHdUdoRXgxSGd1cHhBMTZpT1k5ZWZRQjZxRVUvY0xhNXdHcnhyZVcyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzBERVFXNFZXWFdYMFgzQ3ZhL0Z1aUNTRE1RdGthKzFZUlgzRlNZeGdGbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQTU3YWpQYStmK2x6L0c5MldROEY1c3ZpdnZYMnRPTlBUZjU3YmdsclZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIycS8yQlUyK01XazVpUlZkOU9PUEVHTG5lUmFNdEpVRDFJZ04wSE82b1ZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MRkJmWngvVmplQzhMUit1ank4UGd1V2QxWm16QkNjcm9FbXlOejUyMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldqZDcrNTJRamVmUm9FY0VQRjVpWlgycnFGS0ZabENiUjBhbVV0cm1lVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhCRk9Wd1NXTDdpNjdmZzF0c21wWExOT21xN0FpSUJMd1RKd2dnY3FrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamp1b1R5RWhyc24wYWZLNHo2VW43MytZeEhLYUlGT0dhalNXZkZ6Rm1SMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJvWkQveGZTd1gvQjExU050dU82aG1BaVZwMDJSeEM3MTJ4NzJ1cmVrM29kRC9NQmhYdkMwcmRGcGQrWXh1STdVejM0RVgwM1NlLzNaZ1dXdlJ3amdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiIrcUNsdjZtOFpIZHhIVS9qczFYUFo5bHRmLzBtbGZqUEErMGJ5emhSRlowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOdkRUQ2d3WVE5LV95RGp3Szg1R1l3IiwicGhvbmVJZCI6IjQ0YTFkOTBmLTBhZDktNGZlMS04YTNjLTRkZDEzYzY2MzIyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUK3R4UWxEdUJuc004TlAvRmcvU1E2dHlJbGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEEvL1dLUVN1SG9zNG1BTUkwdmR4U2ZNcFhZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjUzUUY2R0cxIiwibWUiOnsiaWQiOiI5NDcwMTM4ODQyMzoxOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNjExMjYwNjI1MDg5OjE4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2V4a2VvR0VLZTRzOElHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieDdjY0ZSK0hIK2VPcDRuSkFubXZxSW1kTjMzS2dYNkIzTWVLbkF3OGZ3az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1NEeDNWbk93ZjJQcXU4QTZFT2RTNUZaUG10Sm5NbEFOK3RmckRscTRpTjZYdVhBNUJFYjdIY1p1ak5zbmx5Y2JqazFjNXR6cUVoR21EaEdaTUp6QUE9PSIsImRldmljZVNpZ25hdHVyZSI6InMyVzI1QkNldkdFblBKUHFKclo3d0QwT0Z1TzlrWnJRTGdxWGo4Qy9lZSsxRkY4OUdiQWo2MThVeWxHR3hHQlhIV0Y2N0dUMS84Yys2cGxmeDBtcmh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzODg0MjM6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2UzSEJVZmh4L25qcWVKeVFKNXI2aUpuVGQ5eW9GK2dkekhpcHdNUEg4SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5ODY3NTcxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTElDIn0=",
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
