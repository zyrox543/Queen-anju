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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBRNm14VUVtYnVsaDlVZTl4RVlTK3d5ZE9kNkFkaEowRTRrWVI3UUpHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUERwemRaaTd4Sllqb2tzQm50MDl5VEw5U0RURzdnVTBnUWFPbDhUSWlFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ0UwRXFMVVhSOEZxcEdLdWNiMm9HSC9WODZuRUsySm9aaVhnS0FLSTJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcTZManhwRkROV3l4QmFvTUdXSENjdm5UWjdhdGtMK2k3RndzZkdGTlM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEYjVnVmxpdFhBb3hPaDFKY1VCUjJ1Mkh1cU9NTG5vQzZmTG5kMjBkMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZMaEhpRW8yUGRIVm4wSkFNMFZKcDh6QnE2ODNQR1R0R2U5cExzTGFmUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBlUGQxVU9mUlhUd3dGNWlScHFZYWhOeG1TdVlYNldQbGg5a1dJZlowQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdSV3hVVjdtbnNlYjBCQy9nQnphVURjOGxpQkpxaC9aTmVsY2VkRnlXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVYK1YxMkVHTk1PdkNRMkpja1VJVS90SVd1WTVaZitKVHpETTFFWjJaaVJxK0lQbVhSR2FSNnA5blpoNXd3SmRRbytIZDNLUmFBT2ZoeFc5dktWbWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJTK0xVNlArakZLM3JtMHcycXVjN0lRN0RQQ0NkVmE1dGMzQlRVbktsSEhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0UXZUQTJ2cVMwV1lyd0J5dmtpZDN3IiwicGhvbmVJZCI6ImNiNDkwNGFmLTZmN2UtNDIzYy04ZDVmLTBmMTQzNTUxYTQzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3azNMeUJrVHdid1dnK2xrSmhlNFpOcHN2Qmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjljRVpjVldQQ3c5d1oxSUpVUUZXZHNxdkJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxQU1ZIQjlYIiwibWUiOnsiaWQiOiI5NDc0MDcwNzE1Nzo5NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2NDk1NzMxMjI3ODYzMTo5NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05LTnM1RURFT1RLbjhJR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KR2xXdHh3MVI2VzR5SThCdmRJdGxkUlFYYTk0TUNraTZPSklrWi9hdzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImQxaUNYcEdQVjBSRmdOYUxneHQ0MUpEZCt4cm00S3lsWElWNGQwK2t5c21Yb3hRMUhuampoT3NBSmZER2QrajNjYjFRbnVaZEtFZm9XZW0yYW9KakN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGaGgzSGNRSkovcTJ2dEh3QmpPaDJ1Z3JEVmFtaEFHRnZZMFZGSHJXK2p0L1VCSll1VXdiekdvaDZjWWFDRHRQNjgvNm5GMW5VdzkxeHNLRnk5Q3lpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQwNzA3MTU3Ojk1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRpUnBWcmNjTlVlbHVNaVBBYjNTTFpYVVVGMnZlREFwSXVqaVNKR2Yyc08ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTU0MjI1NywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURRRyJ9",
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
