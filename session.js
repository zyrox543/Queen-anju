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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lZNVdlS0diWVROUk5oZGpMaFk0dkwxMTBsQjFsbG9qa0pBVXMwaGkzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFNobmU1d0s3WGhVTW1oS1pYSFdmbEFQOFpULzdKblRMTUpLMGJiYUNITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTG5MeXNrZ0pZbzR0SnZDcDRCQ2NYUGhFQWxtNnduM3FmSVhNcndFOFdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFdjNPd2pldDJ0YkhxZDFZbXkrb3U4dHloQ3NrNDBtb0FDYkpzSVZWZzFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDZlhIMjNmdkRkMk43cWxtNGgzYjNmMEQzcXlpNjEwRGszY1pYT0NUMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ2UXhpZ05XeHg2bWlzVFJDM1gveDBZVEVRSTZwU3ZzcHpQZGpyM2d0MUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZPS0hHRkxheFRpcFdmZVptUk94SGUxa2JQaXEyTTRPMlV2cG1jNFIybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlJTUXkxT1NnV3Z6c1MwYk9KbTRIZ2RjdGU5aVFMaWpkeklzaWp2YXlSbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlocXlJbEFycjBXN2s5NWF4RENBZFk1ZEc1Qjg5anJ4UjZhd1hoTTdmc0hYOXpsd3UxQVFvWkIrcnVRMzF4ZjlwcVM0RSs0TmRGMWpvekpCby9jeWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJBbjRpcVRjdmNJdkIrdDc0bTdkd3NDSUp1ZkJqR0NOR2JVUTFTWUlZMTlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIajZvQjVXYVJ1bXRfMFU4V0lMYTdBIiwicGhvbmVJZCI6Ijk2N2Y1OTJiLTAxYzctNDhkNy05ODZkLTJkMmRlOWYyN2FkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQmtFd1JYZFVmbEs5MkUzRmVyUG1vbHhYeDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXp0bjdLd29xTU5YemtqbDR6emFmL3Fod2dFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjcxMjdFVjNHIiwibWUiOnsiaWQiOiI5NDc1NzY2MjYzNDoxMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3NTU1NzAzMTkyNzg5ODoxMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PTnM1RURFTUhiME1JR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KR2xXdHh3MVI2VzR5SThCdmRJdGxkUlFYYTk0TUNraTZPSklrWi9hdzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFCemdPSWMybE9saEdMNXBXZ1FQamp6K3lOSC9jZnpwcDdiNDU4Ni9CZWFIUTAwR1RWZWhnc0t0Q2Z3a0ltQ1BvQ3BLcEZKUjNldkl5bUxaTnZNYkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1NXUzZkppejZiZFplOWRUV2c0cXBnb3FKNEhFS0Q4TEl2dmV4YkJ3M1NwTm9Qbjd3TGcweEVoR3hLelJVWEg3ZlFVWFZJZjlMSVBscmhzbXZGUEJpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU3NjYyNjM0OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRpUnBWcmNjTlVlbHVNaVBBYjNTTFpYVVVGMnZlREFwSXVqaVNKR2Yyc08ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDM0NzIxNCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFabSJ9",
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
