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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09uWGRMZk12NHkyeXJXY1BSVEdiWDJBNUJLeXJmY0pmWWVGTXp3M2oxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzg5OWZrWmZlWVlXMzQzYjU2dGgzNEpJdHN1aXVReUh2R2JEd01uRk5tcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRUVCS2lZWEZ0cVd1Ynd5ZkJCSUxBMUhIbmNCcjI1WUw4TndDQ2dRTTFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVVERJSk1VVTBlamI1bnE3clFjYmxQVTNFRm1yaVo0SFlMbW1zZ2lKWGdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCSHM1dnlsTEEvNUc0ajlCSTBUdFVqZWpPQnZFb1ZRcDJZUkdLQ0FEMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc3bDBUWXBmZFpjL1c5aDBaOXhJSWZESVhhdmlKdThyVytxbEh2b25IZ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9KUTZIVWpWcDVETzgwOTB1VktOS0RSemtYSGsrNlBoZlo0d2x6V3FXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9Ic3U4Q0tXUFZpVGJiR1YyQ1FUSW1IY2hpVHRDeEMxek1iTm5JWVFTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpBc0xoSDhFekRzL3k1SnVjNFNkdkJDNFpJOXNKZi9qL0oxK3cxNXBuYUNOdGlHb08zOFQ1NnFVZmRtbUdPR2VFemlpRE9ZeTI0akFIK3pLT1RzTGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJIVnRrV0c3Ukp1VUZxeFE4M3dZQTUxU05PWndLNTJQeDlzaitoNXk3VUF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1VHdLVUhxMVNFYWVYdnQ0UGdTTjVBIiwicGhvbmVJZCI6IjE4YWJkMjFkLWM3YjktNGQ2Ni05Y2U1LTdkYzc3MjQxNDg5NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSEppM25SeThXNFV6NlJPZGVKYUsxTUJ6dGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEpqR1JPR1lmUG96TTFIYW9FL3o5Rko1TjNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVYWExGWTFDIiwibWUiOnsiaWQiOiI5NDcwMTM4ODQyMzoxN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNjExMjYwNjI1MDg5OjE3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2F4a2VvR0VKYUlwc0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieDdjY0ZSK0hIK2VPcDRuSkFubXZxSW1kTjMzS2dYNkIzTWVLbkF3OGZ3az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDUyZEdoZ1g0Mzh2d21naU1mMHlmMG1EdWdHY1ZQbmpLNU5OczNlaFNaSVlkWmx3dnpmd2pyZEsySUJ6T0V2Ky83ZGVZNTBGOW80U1Q5NGZQRkRKRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImNTd3FQdkhvTk9pRFozRWVTMVkrcWxTUE1xNGZMMnZQU0pCZFp3OXpYSXFrakJUWEQ3UnA0OXpTa2pBeDlaN1daM2FOelNKaDd4V1VacUk3OXdBQmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzODg0MjM6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2UzSEJVZmh4L25qcWVKeVFKNXI2aUpuVGQ5eW9GK2dkekhpcHdNUEg4SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NjQ4NDE4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTElDIn0=",
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
