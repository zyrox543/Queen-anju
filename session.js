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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJ5WEU4TkpJWk5KMXFXQWIzNllPRnlPWTZmZm9aTGJUYjA4RWkwcHdHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0Q1K0FLSE01Ukg2SmJMQmlHWFZMWmcwZUxZZEYxdm5VNGMvNm9KVmlIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQmRKZk1vRDdNd0d3RDE5S1dhVXRsUHN2bVh3QkRYV0M3YkNNWHVhakcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWS0lZREdneVg1disvS21IdnlOLzRxbnhVUm5xeXJIZFNZRUhDTTc4L0JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDUVRkTGhaNUk4NmF0WnVJdk5OcDR0SGluY0tlWXJVNWZUUzR3MWRQRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVLL040Q1QrU0xwYURVOWRnTndhQTU5N2lmSU9RNDJnS0V5WmhjZ1lSMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JpZXRWMExNMGhMSDIyL1ZGdGNLelF6TzNiYWdUOXVmRDVGRWh1eHJXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGxva0tiaEZJL2psNW5UNkZqVFNabmlXQlNlTDdCQWxhbmpXWnQ5dGhpWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFuZEJQZ2tZa0RRdWNmZ1MvRW93Sy84UTFGdnQrNmxvTEFjRVlrU29XZVVFaUxYd0pkanVlb1hwVHkwbG95RlZFeEI1K0MzVVpWVmI1YlA3SDd0R0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJjMkppcXpJM2N4bER5aXF0REhzQ0hqU0Y5UGNSUU5BRGRGbWk2MmVtMjRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOaTdmS3BuQlMyTzR1WGZ6dWtDODhnIiwicGhvbmVJZCI6IjE5YmQ5NjhmLWM5ODktNGRhOC05ODdkLWJlNWI4OGQ0MTRlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpK0hoczhVVWY5K0tPSHR5TnFsc1JwRkNpT2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDVISnQ0UDBYTDFsakdMcE94Z3hZQUd0dWZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJYNEcxNUtHIiwibWUiOnsiaWQiOiI5NDc0MTcxNDA2MDo0M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc1ODIzOTA2MzIwNTMyOjQzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHk4N3U4RkVOKzVyTUlHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXB6amVzMmpJTTc1K0ptU1JsMWorYzR0dHR4VmxvVkRKYjQxYVBULzZWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQXFmTVJGYUtQYUhEUXFNd2lYNXhyZ2U2SEhDTjBNaGM3amRiTTl1ZmRCVk1VUTZWWUFSQk9iSGdySzFvT1BCeWJ1UUl6N1JKRWN0T3NrdmJtbVBvQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ikc4QWdMY2luOCtlOVR1L2FJbjU3S3pKcXFlMU5pTkR2YXgvbDZGSXF2NmpXVnZxbkJqTDdEdUVpR0VWSTl6blFLVm9XMnNZejU0WFRSdGpPa0ZjWUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDE3MTQwNjA6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVktjNDNyTm95RE8rZmlaa2taZFkvbk9MYmJjVlphRlF5VytOV2owLytsVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NzUzMDY5LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0rLyJ9",
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
