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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pGVlp6WWE4eFdpbkhKUHNYT0daclBleStqWGFxT3BzWU5WQ3o2TWJFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnc0THlsRGZuSHc5SlJMZ3VUTVBZRjF0TEFTMFdCZGowNjRwOG9TbWh3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT1JwSEo1RGNySTM4UkozV3UyQi9rMUppNENjVzFoMUtIcW9FQVpQdmtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlOW5TYi9xUzRVWnBWMjl3Tmh5UG00R1cyR2M0enNtUThSYkVwaEtvYUFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPY0lXeHpjY1Y0bStaOFpWbG4xWG9sWWc0MjhnYVQvMHg0L2w3TW1rMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJVWEg4S1JDb09JT3J3MGl4M0xGaFpLbCtheWt3QkRoY3NhT29LRXZ1V3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEo5alRROHlJbndzcjhFTzNaMytWMDR2ekhwV2VoTjFLMXc4a25tYSttdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQndrZFJkR0Mrc1hsZE9QVWtHZGtzVXo3WFhxSEp2d3I2MGlOSkN6cE56VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind2SEJOMEt3SmtDYlVsSS9hWDJHc01jUG9zQVBJaEp6eHJ0TW5jbGYxalM0MURKYU5kUVR3WFpSQ0tsbUoweFdMcUg3VnNWUkdxWCtqendWUEo5VEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJKOXovRW15N0o1TTdBQmMyWHlXT3pNL1VWZkg3R2hUeUVxTzJFb3JwbkhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJySnBHdjVvc1RkS0l0MTNOa3BMRWxnIiwicGhvbmVJZCI6IjNiYjI4YTE2LTE5ZmMtNDNmYy1hMjZhLTkzYTlmMDQ4M2YxNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4NlAycU5rc052QmRFTTM4WURtS1IrSnJNSEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzUxVXN6M1hWcmhHQ0NyNU5uVkRCVGhWeWtFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNLOE05NUFUIiwibWUiOnsiaWQiOiI5NDc2NDM4NjE2Njo1OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtI3KgC7htJjhtI/htIXJqsqP4bSAIiwibGlkIjoiMTE5NDEzNTQ2MTc2NjIzOjU4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWZYL2lRUTc0YVh3Z1lZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRTlIRXNMYXZJdFVrTUJIN2N2Q2tOdFJYMWdXenlMeWlUZHZSMityRzczWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoib2IwQWFFbDlDM0pNbGp2MmM3N05GdVhlV3ZPUENMWmxxVEk0c3lwbW9qZ2R5cHVhUC9NNUlmT0FkRGNWTlIrMlpqcVRRc3ppTWtwRUYrTDhsQlpEQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImJxKzdyM2lHbkZLMWFSOFp0dTRWZDBDakx2V1NCWTB6eklTUTVwQnpkUDNyV0dIMk5iLzQ4RnVoUWNKNFZQajV1K1orcisrY0N6aC9SWGtCYjBnRUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjQzODYxNjY6NThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlBSeExDMnJ5TFZKREFSKzNMd3BEYlVWOVlGczhpOG9rM2IwZHZxeHU5MiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NDAyNDkxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlZkIn0=",
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
