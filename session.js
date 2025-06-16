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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFOVlF0QlRiMm1meUFNS3BCbDk5K3hBclpmWlBtV1VJRHJNZlZQb3BHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXVWTUI3OTJZd0FyTG05RW1nUUl3ekFEdStwNi9kZkZxSkx0SEpvNUZubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T3FqUFEvT0QvUXg4QnRqT1hhNDdSNG1Na3c2eVRqSWw2UWVPQXhyUmxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKRE5qT3dSNlkxb3FxbHRwOXI2b2h3aW90dW1IcWcxNXF5dWxpaFZrVTE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHaHlzV1puU2c1R2NPZUpyMnA1R2FGd2FPSisreHh5QW1TTGxCTDlwV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM2WmUzWDVlcitHVWZMOGVCUWpJbjl2eXJKd3pBSS9xQTZhS3Fhd1VzUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xKaXhsak8zeTRyYUJtbldIYk5NamdZQ0JpZEZxNmFEL1MzZWtpOTZYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUS9SdHpVc0trV2FDSkl3Q0E3S25wbHJRMmJuMGg4RUc4bmNkUEJ5dnpBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpEZktvc1ZJN0RkcHNyTVcyZnpCOWp2U0o3UnZSejQyMWxxOVFBb1QxaS9zQlovdmF5TzZTS01CZDM4VFR6L0NQWkhGLzVWeVU1OVhTY3NFaWk2Z2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJUMVBZN01xRExxVkNDakFvWWYvZXRiUlhhdXB5MDNxdWdnQzY4UHJVb09BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHQU50YkF2WFJoS2VwdzF3SUVYdDNRIiwicGhvbmVJZCI6IjI4MmRmMjEzLTA5NzktNGYzMy1hOTAyLTUyZThmNTNiYTZlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1OVhqQjhnbHBqeUxkTzNTWXdnQWl4WlYrTkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3F0cGVWRFFkNmx6bThIc2dFUldHUFZDU1ZjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY5UExLOFIxIiwibWUiOnsiaWQiOiI5NDcwMTM4ODQyMzoxOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNjExMjYwNjI1MDg5OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2l4a2VvR0VLajZ2OElHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieDdjY0ZSK0hIK2VPcDRuSkFubXZxSW1kTjMzS2dYNkIzTWVLbkF3OGZ3az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN3RJbzJNdWNXamRlM0ZZWS9hVWtMcndTTkdXdVFyKzNNY3BrZ2U4dTE2NzN2Z2JocHBQVi9EQWVaa3ZoUWJpajJSRFp6UFpsc1VTaDBwYy9CNSs5Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjAxTS9xbXIyYjM3WUVHZU1rUkhHL3NzSU13blpEUG1nU2RURWU5MFlBYTZHT1hucEtLSkJicUdNQkRyOFpUM0lZSWk3QWREeTh2Y1NYMHpqWXp2MGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzODg0MjM6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2UzSEJVZmh4L25qcWVKeVFKNXI2aUpuVGQ5eW9GK2dkekhpcHdNUEg4SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMDcyNjMxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTElDIn0=",
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
