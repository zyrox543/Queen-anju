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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVxdXRkUlhqZThZcGlyUXhjenB6aGhVNWpFL2RaM0VNNiszWU1ucm9HWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUt5TTF5OVhrVm5YRFB6WkdnbDF4a0tQUFFhQTFjYWpUbmMzMEE3K05Rdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSzZKbldFeWpTMWhoQmtoaXpwcUFGMzYzUDVaajJjckhodGppZERqQlc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWb1hEdU9odUh0VncwcWxEc0h1YmV3a3hSNnFYRHEwTlpvbTB0bDZZQ0MwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMNnlvNlN2OVFLRUN0OXM3TVk4eVpsSlowN1QyTStQQ2ttMlR1RTM5bHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9mNzVUdGZMVUhBN2VHY1kyc2xDUGtEbVZTcXBLMjRrQmNjcWFtRVh5aDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtaQVJsV016OEFKOTNKS1k2Q2RzRDNnM2JualJiamhTVmJiUkdVTlRrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9tVVNPYVRFcThFalF4dk1kNExlL2swVmxQbU5PTlBQRUpRSDV6eTBTTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo5eUxib0ZWaDZZdVk3eXpXNHBiUjVyaFNNVjRIdjFDYVZ6cHZiaEhXOUN3VDdXZ1BMRlYyMDhkMm9zbFc3T3hxUzFGdmIrcHpoVGFJUmpscjdjNmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJSVE1zZ2FkQXdVWkNFeXliSkZkN2c0YlRBeGtpRWl6SUpZZHVjVzgwZW1jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxMzg4NDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc2QTk4MTdDMTkzMEM3RDA2ODREMjUwMjMxNkNDRkEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAzOTQ3MTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxMzg4NDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFBRjBBMUQ3OTg0MzMxNUY2NjlGN0FBQzQ4NDhCMTFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAzOTQ3MjB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlprNUpYMXRPU09tdm1veWNDOEpkb3ciLCJwaG9uZUlkIjoiMGQyNDc2NmMtN2I2ZC00NzVjLTk5MWItYTNmMzFmOWMwODBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRRL3l3VmZxeXl6VGNMNGFodDE3UGRSQjZvcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVczJnZlVkbWdPTVlqYTdBUllHcmR3cXp3RTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUU0xQlRWV0MiLCJtZSI6eyJpZCI6Ijk0NzAxMzg4NDIzOjI0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTA2MTEyNjA2MjUwODk6MjRAbGlkIiwibmFtZSI6IvCdkbnwnZKQ8J2ShPCdkozwnZKaIPCdkbDwnZGw8J2RsPCfqbgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0syeGtlb0dFTkRPMDhJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ing3Y2NGUitISCtlT3A0bkpBbm12cUltZE4zM0tnWDZCM01lS25Bdzhmd2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii94NE9lTUNWcVFBanRRcC82MXRXbmNrZkJRNWl3TzN5R2UxRWZHS1ZHajNBUDVveE43aS9zMlh1OWV3YnU0S1pOZmRETnJFVWE3YVh2ZkYrWjBGVkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJveXcvVGJLQ0E0blJPS2s2UVlnNzdEYVNzcVJQMmd6WmZEZSt3eW5IUDl6NDNqRzVHcitHanFlNGoxTHpnWCtFdVhSQ3FVT2NHdlovWHQ0andtS2doUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxMzg4NDIzOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNlM0hCVWZoeC9uanFlSnlRSjVyNmlKblRkOXlvRitnZHpIaXB3TVBIOEoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDM5NDcxNywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdSOSJ9",
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
