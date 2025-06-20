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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdqMzZRTDE5UkFtdkFBZzZ4Y29OMzhWUmRmUDBhRVlHTytKQlRZaUpsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2tTb2Y2ZE1wcDhUZmt1WENVbkhkTzZNQVBJZFN3d05kWUROcFF3by9Xcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQUwrZHdodWRtSXdObkZuZUYyc0FzMWR6V0ZudGNjcnJoWmVWSzVqaWtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3MXRTcS9McGVmMFI3aEFrT3JMa0pDWTQvTnMxVFVSNFVZQStCL2Y2NnpRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOTGJuTnFKblJNRjFLNHVieUF5NGYyZEpibmZJMUozTjg0aVk4SVlYRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikdpd1hBYzNwRllPeHFQQXpkL0tqd292SGUvNmh4a2N1NU12R1lUd1RGUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNlemJWSWRUWEdabVhqU1JxOUE5V3pKekJiRG5xN29OeHBPUGVPdDZWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJkdGlsQW10RXp3emJoS1kvSStoWld5d0k3bGJpcEtGMkFFN1dLTHBRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhBSTlkUk1zVVhsd3dRc25IS29PYWQvSnQ5ZkJzTEIrdUZ1N3Q1a283ZEFzYklBVVpuVHFUd2VUdjAxTEVNaGRFcUJacWluUCsycHk4Tm8wVVZNWmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJDNFpUdW9yaXlmdmtJQ3N5RXgyNklIYXVTTVZEY3l1ZXpHWWRqQUxqWDJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0bzJBRmF6NFJkNmctZUJ1NUNsdDFnIiwicGhvbmVJZCI6ImUwMzg5MjRkLWQxZDUtNDA5Zi04MGYzLThhNGE5YjIzNTZhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0M25WT2pLVFUycURSNjViOUxSQTIrd0JLNkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnB3b2Z4cGtac281bnZYNDFWM20rbHN2VnRRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM3MlAyWTgxIiwibWUiOnsiaWQiOiI5NDc3Njg2NjUwNjozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBZG1pbiIsImxpZCI6IjEwNTYwNTMxMDIzODczODozM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056eTM2TUNFSXljMWNJR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpjWWUrQlZZS3U1Y25VSWk3RmJaa2NVL2xXc3o3MlNEcHFkanNrN2NYQUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNkbUJqTzcvRzZXL1IrMTNVenVEZEd2QWp0YnVyUko1eUtnTkVDeHl4YjJEZ0ZNYlU0ZzVnd3RKdGtFT0ZRMjhSOGRjOXRTTk5Kck9VdTg5UmN3SEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6c2pqWGVtK21BOEFsVG1Sck8vMGxVSkhkMGxYdmc0aDR1dzZyOUprNThkc2hsMzN5M3RzZ1pxWjhPUnBNYnVTajI3aWp2VjliLzNnVHppK1JuNXdpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc2ODY2NTA2OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMzR0h2Z1ZXQ3J1WEoxQ0l1eFcyWkhGUDVWck0rOWtnNmFuWTdKTzNGd0EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDQyMTAxOCwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
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
