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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0QwdUxENUtFUGtDQTNjNklTL3BaeVpNM3phMWphQzRIOW5mM3F2M1IwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTNRMWVkYUxHSENVVDNWZFNja0grU2pwSTZSdzdUVENodkF6TkdEVzFVUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTmRWanJxWWthemVaU2N4eFI1YTFScjAxbkdpc29Ea1Rsa2RrN21odjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUkFtRVliUWxHNjZXdVB4T2JjTEx0T0pKYUFNUU1KOGFiWmU5TG96bnc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtITHhFSFErWGE5WEZIOUI1SlZuaDZEUkdLTHFtMVF2Q1I1NXdmMVNMMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNMWlEZUI4L1E4Q1E0MHVVUExTd0J6MzJmWmE0eWFGM1lSY0ZkT1hUd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxCSWtKeXJmZFo5NUZZc0hnMzViZGNuU21jTTRialJLUVB5aUJUVHRtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2hYWm9mT2VGNE91aXpKTUZuMHNZSlVzdDE0OFRqM0NzS2ViYXVkbFVtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5jMXMwdW9ZZFE3T21MRktpVHd3S0RsVngyUS9zTUpuMjVUYTlVQ3pVWDlFak5BL2NDQWdkWmNib0wzOE1MMkxsclhyYUVZcWFoTmVtYUxNaFI3Z2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJHdEc0YVdmUmJ1R1E1ZTZudWJkMFFEbTdoRHZWaitDQnl4RDE2cnovbnRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5dmdRQ2hrUVNTZURmREJGc3FxeFp3IiwicGhvbmVJZCI6IjAzYTAwYWFiLTZmMWItNDUwNi1iMmI3LWEyZjE2MDZlOWMxMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEa3hTWXllN0NLaWJJQktKY1hCZ3dJQlphZ0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXI4SWw5VFU5K29PNHBVSTl3bjZyQlJiUzIwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRQNEZHWldaIiwibWUiOnsiaWQiOiI5NDcwMTM4ODQyMzoyM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNjExMjYwNjI1MDg5OjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3l4a2VvR0VNV2J6OElHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieDdjY0ZSK0hIK2VPcDRuSkFubXZxSW1kTjMzS2dYNkIzTWVLbkF3OGZ3az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUJpVmppdkEvcUhtWmM1VEpxMlFNVk5jbDREdUxLN01JZGd4V0tkbkFpeWtuY3dNRkJlR3duWUh4NHhyWHBGRlFLNXdMcEo2UklUZHo4RTFUTTcvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImVacVRDMG9paVNDRGg4ZmZGZTRRS2hiMitwMTZXeXdOVGN3dDEwRUlqVlVlaC9iQjRLUkpOVTFZdE52TXQrKzU4YmhoTzgxYmovUnpHbDZ6SjMvWWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzODg0MjM6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2UzSEJVZmh4L25qcWVKeVFKNXI2aUpuVGQ5eW9GK2dkekhpcHdNUEg4SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzIyNjQyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXNGIn0=",
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
