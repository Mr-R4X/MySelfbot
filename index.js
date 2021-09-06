/*
YAHAHAH MAU NYOLONG KES 
KALO MAU EDIT DI ./SETTING.JSON
USAHA JGN NGEMIS... usaha ngemis :v
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
//const process = require('child_process')
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { skyteks } = require('./langteks')
const { validmove, setGame } = require("./lib/tictactoe")
const { jadibot, stopjadibot, listjadibot, getcode } = require('./lib/jadibot.js')
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { addVote, delVote } = require('./lib/vote')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const commandsDB = JSON.parse(fs.readFileSync('./lib/commands.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const restrict = JSON.parse(fs.readFileSync('./src/restrict.json'))
const settings = JSON.parse(fs.readFileSync('./setting.json'))
//add sendiri bro:v
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('./lib/ezgif')

/*set_sticker_command*/
cmd_menu = 'Ec3J9FstnN9iqcBRXSyxR+3sYJSvVZ5YWIRzzgf/9xs='
cmd_status = 'ldFv8R8iywIf0o33PqW72WuKZs1JAeQ7YlFbAd6vinY='
cmd_gclose = 'gfOc61AZqc1wtb+Q3Ft1KIguVVRqyspYy43vm5oJtOo='
cmd_gopen = 'BRqax/UmyQSNzlPvOROIwbwsTzoQt2nQ4aHJjMZXrFg='
cmd_sticker = 'e7pQUGZvVeZc/9ISvvcXnMnMhkGmPS2k6wJ9iaLrj+s='
cmd_toimg = 'G6FpaOQZkZhqStS9/76C1IJshQId2whmFjXd6pydVW4='
cmd_self = '63/nzxsNqe+5cSirRv8iCQ93ovdbB+VNNx9yCyGdwi4='
cmd_public = 'T39P96QoC1bOqp97mu0rWJ3pbS5m/+F53kc3jhPIH+w='
/*set_sticker_command*/

banChats = true
offline = false
targetpc = settings.targetpc
owner = settings.owner
fake = settings.fake
thumb = settings.thumb
fakethumb = settings.fthumb
numbernye = '0'
waktu = '-'
alasan = '-'
const X = "❌"
const O = "⭕️"

//add Sendiri bro

namabot = settings.exif //exif stiker
namebot = 'Sky Line (Bot)'
//=================================================//
module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|!#$%^&.?/\\©^z+@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|!#$%^&.?/\\©^z+,;]/gi) : '-'          	
        	body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const argss = body.split(/ +/g)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const ownerNumber = [`${owner}@s.whatsapp.net`]
		
		//let sender = isGroup ? mek.participant : mek.key.remoteJid
		let sender = mek.key.fromMe ? hexa.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isRestrict = isGroup ? restrict.includes(from) : false
        const isVote = isGroup ? voting.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const stickcmd = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('base64') : ""
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        /*const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
*/
     const nameReq = isGroup ? mek.participant : mek.key.remoteJid
		const pushname = mek.key.fromMe ? hexa.user.name : hexa.contacts[nameReq].vname || hexa.contacts[nameReq].notify || '-'

        //MESS
		mess = {
			wait: 'Tumnggu Sebemntar, Permintaan Kamu Semdang Di Promses',
			success: 'Berhasil!',
			tostick: 'Gagal terjadi saat mengkonversi gambar ke stiker',
			toimg: 'Gagal terjadi saat mengkonversi stiker ke gambar',
			tovid: 'Gagal terjadi saat mengkonversi stiker ke video',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup bruh',
				admin: 'Khusus atasan grup bruh',
				Badmin: 'Lawak, gw dh jadi admin?',
			}
		}
// Ini Batas Bruhhhhhh =======Area=Coly===========
try {
				ppimg = await hexa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ppsender = await getBuffer(ppimg)
					//fake reply
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${namebot}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': (ppsender)} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': (ppsender) }, 'title': `${namebot}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${namebot}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namebot},;;;\nFN:${namebot},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': (ppsender)}}}
                     
			//jam
			const timew = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			const datee = new Date().toLocaleDateString()
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Good Night 🌚"; break;
                case 1: waktoo = "Good Night 🌚"; break;
                case 2: waktoo = "Good Night 🌚"; break;
                case 3: waktoo = "Good Night 🌚"; break;
                case 4: waktoo = "Good Morning 🌄"; break;
                case 5: waktoo = "Good Morning 🌄"; break;
                case 6: waktoo = "Good Morning 🌄"; break;
                case 7: waktoo = "Good Morning 🌄"; break;
                case 8: waktoo = "Good Morning 🌄"; break;
                case 9: waktoo = "Good Morning 🌄"; break;
                case 10: waktoo = "Good Morning 🌄"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Good Afternoon ☀️"; break;
                case 13: waktoo = "Good Afternoon ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Good Evening 🌆"; break;
                case 16: waktoo = "Good Evening 🌆"; break;
                case 17: waktoo = "Good Evening 🌆"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Good Night 🌃"; break;
                case 21: waktoo = "Good Night 🌃"; break;
                case 22: waktoo = "Good Night 🌃"; break;
                case 23: waktoo = "Good Night 🌃"; break;
            }
            var hahh = "" + waktoo;      
			

		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

       /* const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek})
        }*/
        
        const reply = (teks) => {
				hexa.sendMessage(from, teks, text, {sendEphemeral: true, thumbnail: (ppsender), quoted: mek})
			}

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/doge.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
const sendStickerUrl = async(to, url) => {
			console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js').createExif(`${namabot}`, '')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./lib/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					hexa.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
		
		/*
		function addMetadata(packname, author) {	
				if (!packname) packname = 'Ig: _benny_hidayat_'; if (!author) author = `${namabot}`;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}*/
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
                        //AUTO RESPONDER
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      hexa.sendMessage(from, commandsDB[i].balasan, text, {quoted: mek})
      }
      }
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./image/${thumb}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./image/${thumb}`)}}}})
          }
        }
            }
          }
        }
      }
    }
        /*--------------------[ Tictactoe Game Function ]--------------------*/


const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "y" ||
               budy.toLowerCase() == "yes" ||
               budy.toLowerCase() == "ya"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 Tictactoe Game 🎳*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}

Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
                    hexa.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    hexa.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "tidak"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    hexa.sendMessage(
                         from,
                         `Sayangnya tantangan @${boardnow.X} ditolak ❌😕`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    hexa.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }


     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮 Tictactoe Game 🎳*

Game berakhir seri 😐
`;

                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮 Tictactoe Game 🎳*

Game telah dimenangkan oleh @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
               hexa.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮 Tictactoe Game 🎳*

❌ : @${moving.X}
⭕ : @${moving.O}

Giliran : @${moving.turn == "X" ? moving.X : moving.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
               hexa.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }
             /*---------------------[ VOTING ]--------------------*/
             
             
if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '0@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '0@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
//*_-_-_-_-_-_-STICKCMD_-_-_-_-_-_*//	
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//
if (!isGroup && !isCmd) console.log(color(time, 'green'), color('[ PRIVATE ]', 'magenta'), color(budy, 'aqua'), 'from', color(sender.split('@')[0], 'magenta'))
if (isGroup && !isCmd) console.log(color([time], 'green'), color('[  GROUP  ]', 'aqua'), color(budy, 'white'), 'from', color(sender.split('@')[0], 'red'), 'in', color(groupName, 'white'))
if (!isGroup && isCmd) console.log(color([time], 'green'), color('[ COMMAND ]', 'aqua'), color(budy, 'white'), 'from', color(sender.split('@')[0], 'red'))
if (isGroup && isCmd) console.log(color([time], 'green'), color('[ COMMAND ]', 'aqua'), color(budy, 'white'), 'from', color(sender.split('@')[0], 'red'), 'in', color(groupName, 'white'))
/*if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
*/
if (!mek.key.fromMe && banChats === true) return

//*---------------------[ LIST CMD ]---------------------*//
                    //listMessage
                    if (responseButton === 'MENU') {
					fakegroup(skyteks.help(prefix,pushname))
					} else if (responseButton === 'Up Menu') {
					fakegroup(skyteks.upmenu(prefix))
					} else if (responseButton === 'Tag Menu') {
					fakegroup(skyteks.tag(prefix))
					} else if (responseButton === 'Fun Menu') {
					fakegroup(skyteks.fun(prefix))
					} else if (responseButton === 'Other Menu') {
					fakegroup('lom ada, isi sendiri')
					} else if (responseButton === 'Maker Menu') {
					fakegroup(skyteks.maker(prefix))
					} else if (responseButton === 'Convert Menu') {
					fakegroup(skyteks.convert(prefix))
					} else if (responseButton === 'Download Menu') {
					fakegroup(skyteks.download(prefix))
					} else if (responseButton === 'Storage Menu') {
					fakegroup('lom ada, isi sendiri')
					} else if (responseButton === 'Owner Menu') {
					fakegroup(skyteks.owner(prefix))
					} else if (responseButton === 'STATUS') {
					fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
					} else if (responseButton === 'group close') {
					if (!isGroupAdmins) return reply('Khusus atasan grup bruh')
					if (!isBotGroupAdmins) return reply('Lawak, gw udh jadi admin?')
				    hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    reply(`Succes Change to: *Admin only*`)
                    } else if (responseButton === 'group open') {
                    if (!isGroupAdmins) return reply('Khusus atasan grup bruh')
					if (!isBotGroupAdmins) return reply('Lawak, gw udh jadi admin?')
				    hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    reply(`Succes Change to: *All members*`)
                    } else if (responseButton === 'welcome on') {
                    if (!isGroupAdmins) return reply('Khusus atasan grup bruh')
					if (!isBotGroupAdmins) return reply('Lawak, gw udh jadi admin?')
					if (isWelkom) return reply('Udah aktif dari tadi')
				    welkom.push(from)
				    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('Sukses mengaktifkan fitur welcome')
                    } else if (responseButton === 'welcome off') {
                    if (!isGroupAdmins) return reply('Khusus atasan grup bruh')
					if (!isBotGroupAdmins) return reply('Lawak, gw udh jadi admin?')
					let off = welkom.indexOf(from)
				    welkom.splice(off, 1)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('Sukses menonaktifkan fitur welcome')
                    } else if (responseButton === 'restrict on') {
                    if (!isGroupAdmins) return reply('Khusus atasan grup bruh')
					if (!isBotGroupAdmins) return reply('Lawak, gw udh jadi admin?')
					if (isRestrict) return reply('Udah aktif dari tadi')
				    restrict.push(from)
				    fs.writeFileSync('./src/restrict.json', JSON.stringify(restrict))
					reply('Sukses mengaktifkan fitur restrict')
                    } else if (responseButton === 'restrict off') {
                    if (!isGroupAdmins) return reply('Khusus atasan grup bruh')
					if (!isBotGroupAdmins) return reply('Lawak, gw udh jadi admin?')
					let opp = restrict.indexOf(from)
				    restrict.splice(opp, 1)
					fs.writeFileSync('./src/restrict.json', JSON.stringify(restrict))
					reply('Sukses menonaktifkan fitur restrict')
                    }
					
//===========[ BUTTON CMD ]===========//
//buttonMessage
//let R = fs.readFileSync('./src/1.jpeg')
//let Y = fs.readFileSync('./src/2.jpeg')
//let N = fs.readFileSync('./src/3.jpeg')

if(selectedButton == 'sky1'){
            const rows = [
 {title: 'Up Menu', description: "\n\n*Hello it's Up Menu*", rowId:"0"},
 {title: 'Tag Menu', description: "\n\n*Hello it's Tag Menu*", rowId:"0"},
 {title: 'Fun Menu', description: "\n\n*Hello it's Fun Menu*", rowId:"0"},
 {title: 'Other Menu', description: "\n\n*Hello it's Other Menu*", rowId:"0"},
 {title: 'Maker Menu', description: "\n\n*Hello it's Maker Menu*", rowId:"0"},
 {title: 'Convert Menu', description: "\n\n*Hello it's Convert Menu*", rowId:"0"},
 {title: 'Download Menu', description: "\n\n*Hello it's Download Menu*", rowId:"0"},
 {title: 'Storage Menu', description: "\n\n*Hello it's Storage Menu*", rowId:"0"},
 {title: 'Owner Menu', description: "\n\n*Hello it's Owner Menu*", rowId:"0"},
]

const sections = [{title: "Hello it's ListMenu", rows: rows}]

const list = {
 buttonText: 'SELECT!',
 title: `Hallo om @${sender.split('@')[0]}`,
 description: "pasti males ngetik kan, nah tinggal teken list yg ada dibawah",
 footerText: "huuuu, males ngetik",
 sections: sections,
 listType: 1
}

hexa.sendMessage(from, list, MessageType.listMessage, {contextInfo: {mentionedJid: [sender]}, quoted: mek})
} else if(selectedButton == 'sky2'){
return fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
} else if(selectedButton == 'sky3'){
return fakestatus(`GC 1: https://chat.whatsapp.com/CgzjytokmxyF3tOfRs0x1d\nGC 2: https://chat.whatsapp.com/Bhf0qyktZoUBQvsnlPN2la`)
}


switch (stickcmd) {
	case `${cmd_menu}`:
	fakestatus(skyteks.help(prefix,pushname))
	break
    case `${cmd_public}`:
    if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
	if (banChats === false) return
	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
    banChats = false
    reply('Succes change to: Public Mode')
    break
    case `${cmd_self}`:
    if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
	if (banChats === true) return
	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
    banChats = true
    reply('Succes change to: Self Mode')
    break
    case `${cmd_status}`:
    reply(`*STATUS*\nStatus: ${offline ? 'OFFLINE' : 'ONLINE'}\nMode: ${banChats ? 'SELF' : 'PUBLIC'}`)
    break    
    case `${cmd_gclose}`:
    hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
    reply('Succes change to: Only admin')
    break
    case `${cmd_gopen}`:
    hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
    reply('Succes change to: All members')
    break
}


switch (command) {
case 'menu':
case 'help':
const saya = `${owner}@s.whatsapp.net`
var menu = `*JEM-BOT*

Haii ${pushname} 👋
*Owner* : @${saya.split('@')[0]}
*Prefix* : Multi
*Tanggal* : ${tampilTanggal}
*Waktu* : ${wib} WIB

*SET STICKCMD*
${prefix}hash
${prefix}setcmd_menu
${prefix}setcmd_status
${prefix}setcmd_public
${prefix}setcmd_self
${prefix}setcmd_gopen
${prefix}setcmd_gclose
${prefix}setcmd_toimg
${prefix}setcmd_sticker

*GROUP*
${prefix}promote
${prefix}demote
${prefix}add
${prefix}kick
${prefix}linkgc
${prefix}setname
${prefix}setdecs
${prefix}revoke
${prefix}sg

*STICKER*
${prefix}sticker
${prefix}wm
${prefix}swm <author|packname>
${prefix}take <author|packname>
${prefix}fdeface
${prefix}emoji

*CONVERT*
${prefix}toimg
${prefix}togif
${prefix}tovideo
${prefix}tovideo2
${prefix}tovideo3
${prefix}tomp3
${prefix}tomp4
${prefix}slow
${prefix}fast
${prefix}reverse
${prefix}tourl

*UP STORY*
${prefix}upswteks
${prefix}upswimage
${prefix}upswvideo

*FUN*
${prefix}fitnah
${prefix}kontak
${prefix}tebakgambar
${prefix}tictactoe
${prefix}delttc

*TAG*
${prefix}hidetag
${prefix}kontag
${prefix}sticktag
${prefix}totag

*IMAGE*
${prefix}pinterest
${prefix}image
${prefix}hentai
${prefix}waifu
${prefix}anime

*MEDIA*
${prefix}brainly <query
${prefix}ytsearch <query>
${prefix}igstalk <query>
${prefix}play <query>
${prefix}video <query>
${prefix}ytmp3 <link>
${prefix}ytmp4 <link>
${prefix}ig <link>
${prefix}twitter <link>
${prefix}tiktok <link>
${prefix}tiktokaudio <link>
${prefix}fb <link>

*BUG*
${prefix}buggc
${prefix}troli

*SESSION*
${prefix}jadibot
${prefix}stopjadibot
${prefix}listbot

*VOTING*
${prefix}vote
${prefix}dellvote
${prefix}delvsesi
`
hexa.sendMessage(from, menu, text, {contextInfo: {mentionedJid: [saya]}, quoted: mek})
break
case 'menus':
const tek = `Hai kak *@${sender.split('@')[0]}*\nmau nyari apa, tinggal pilih salah satu yaa ^_^`
let content = fs.readFileSync(`./image/${thumb}`)
const media = await hexa.prepareMessage(from, content, MessageType.image, {thumbnail: Buffer.alloc(0)})

const buttons = [
  {buttonId: 'sky1', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'sky2', buttonText: {displayText: 'STATUS'}, type: 1},
  {buttonId: 'sky3', buttonText: {displayText: 'GROUP'}, type: 1}
]

const btn = {
    contentText: tek,
    footerText: `button tidak terlihat?\nketik saja ${prefix}menu`,
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage
}

hexa.sendMessage(from, btn, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [sender]}, quoted: mek})
//fakethumb(btn, MessageType.buttonsMessage)
break
case 'blocc':
const teko = `Hai kak *@${sender.split('@')[0]}*\n mau nyari apa tod ^_^`
const medita = await hexa.prepareMessage(from, {degreesLatitude: 1, degreesLongitude: 1, address: "map button"}, MessageType.location)

const ibuttons = [
  {buttonId: 'sky1', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'sky2', buttonText: {displayText: 'STATUS'}, type: 1},
  {buttonId: 'sky3', buttonText: {displayText: 'GROUP'}, type: 1}
]

const bton = {
    contentText: teko,
    footerText: `button tidak terlihat?\n ketik saja ${prefix}menu`,
    buttons: ibuttons,
    headerType: 6,
    locationMessage: medita.message.locationMessage
}

hexa.sendMessage(from, bton, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [sender]}, quoted: mek})
break
case 'bdocc':
const teke = `Hai @${sender.split('@')[0]}\n mau nyari apa tod ^_^`
const medioa = await hexa.prepareMessage(from, {degreesLatitude: 1, degreesLongitude: 1, address: "map button"}, MessageType.location)

const obuttons = [
  {buttonId: 'sky1', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'sky2', buttonText: {displayText: 'STATUS'}, type: 1},
  {buttonId: 'sky3', buttonText: {displayText: 'GROUP'}, type: 1}
]

const btin = {
    contentText: teke,
    footerText: `buttons not visible? just type ${prefix}menu`,
    buttons: obuttons,
    headerType: 6,
    locationMessage: medioa.message.locationMessage
}

hexa.sendMessage(from, btin, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [sender]}, quoted: mek})
break
//*_-_-_-_-_-_-_-_-_-GROUP SETTING-_-_-_-_-_-_-_-_*//
case 'group':
case 'sg':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
const rows = [
 {title: 'group close', description: "\n\n*choose this if you want to close the group*", rowId:"0"},
 {title: 'group open', description: "\n\n*choose this if you want to open the group*", rowId:"0"},
 {title: 'welcome on', description: "\n\n*choose this if you want to enable welcome/leave detect*", rowId:"0"},
 {title: 'welcome off', description: "\n\n*choose this if you want to disable welcome/leave detect*", rowId:"0"},
 {title: 'restrict on', description: "\n\n*choose this if you want to enable restrict detect*", rowId:"0"},
 {title: 'restrict off', description: "\n\n*choose this if you want to disable restrict detect*", rowId:"0"},
]

const sections = [{title: "Hello it's ListSetting", rows: rows}]

const listt = {
 buttonText: 'SELECT!',
 title: `Group Setting Change`,
 description: "hai admin",
 footerText: "This list is for setting the group",
 sections: sections,
 listType: 1
}

hexa.sendMessage(from, listt, MessageType.listMessage)
break
case 'add':
					if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return reply('Khusus grup bruh')
					if (args.length < 1) return reply('Yang mau di add siapa tod?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara!!')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						hexa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'kick':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
hexa.groupRemove(from, mems_ids)
} else {
hexa.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
hexa.groupRemove(from, [entah])
}
break
case 'demote':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members')
mentionede = mek.message.extendedTextMessage.contextInfo.participant
hexa.groupDemoteAdmin(from, [mentionede])
teks = `*Succes Demote*\n\nTarget: @${mentionede.split('@')[0]}`
hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
case 'promote':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members')
mentionede = mek.message.extendedTextMessage.contextInfo.participant
hexa.groupMakeAdmin(from, [mentionede])
teks = `*Succes Promote*\n\nTarget: @${mentionede.split('@')[0]}`
hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
link= await hexa.groupInviteCode(from)
hhh = `*Link:*\nhttps://chat.whatsapp.com/${link}\n`
hexa.sendMessage(from, hhh, text, { quoted: mek })
break
case 'setname':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
hexa.groupUpdateSubject(from, `${q}`)
hexa.sendMessage(from, `Succes Change Group Name: *${q}"`, text, {quoted: mek})
break
case 'setdesc':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
hexa.groupUpdateDescription(from, `${q}`)
break
case 'revoke':
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply('Khusus grup bruh')
hexa.revokeInvite(from)
reply('_Succes_')
break
case 'groupinfo':
case 'gcinfo':
case 'ginfo':                
                if (!isGroup) return reply('Khusus grup bruh')
                ingfo = `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*Welcome* : ${welkom ? 'Aktif' : 'Tidak Aktif'}\n*Restrict* : ${restrict ? 'Aktif' : 'Tidak aktif'}\n*Description* :\n${groupDesc}`
		        reply(ingfo)
                break
case 'hash':
                if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await hexa.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                fakegroup(hash)
            break
case 'setcmd_menu':
			        if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileSha256 sticker')
				   cmd_menu = q
					fakestatus(`Succes Mengganti StickCmd MENU : *${q}*`)
					break
case 'setcmd_public':
			        if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileSha256 sticker')
					cmd_public = q
					fakestatus(`Succes Mengganti StickCmd PUBLIC : *${q}*`)
					break
case 'setcmd_self':
			        if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileSha256 sticker')
					cmd_self = q
					fakestatus(`Succes Mengganti StickCmd SELF : *${q}*`)
					break
case 'setcmd_status':
			        
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileSha256 sticker')
					cmd_status = q
					fakestatus(`Succes Mengganti StickCmd STATUS : *${q}*`)
					break
case 'setcmd_gclose':
			        if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileSha256 sticker')
					cmd_gclose = q
					fakestatus(`Succes Mengganti StickCmd GCLOSE : *${q}*`)
					break
case 'setcmd_gopen':
			        if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileSha256 sticker')
					cmd_gopen = q
					fakestatus(`Succes Mengganti StickCmd GOPEN : *${q}*`)
					break
/*case 'restart':
		   setTimeout( () => {
		   return process.send('reset')
		   }, 2000) // 2000 = 2sec
		   setTimeout( () => {
	       reply('*_[ + ] RESTART SUCCES_*')
		   }, 0) 
		   break
*/
case 'restart':
if(!isOwner) return
reply(`_Restarting_`)
exec(`node main`)
setTimeout( () => {
					hexa.sendMessage(from, '_.._', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_...._', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_......_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					console.log(`Succes Restarting Bot`)
                    reply('_Succses Restarting Wait in 1 Minute_') // ur cods
					},4000) // 1000 = 1s, 
					break
case 'buggc':
			        if (!isOwner) return
					await hexa.toggleDisappearingMessages(from, 0)
					break
case 'troli':
if (!isOwner) return
hexa.sendMessage(mek.key.remoteJid, 'Hai Bang', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 999999999, // Bug
    status: 1,
    surface: 1,
    message: 'Samlekom!',
    orderTitle: 'mhwemhe', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
    case 'on':
            if (!isOwner) return 
            offline = false
            fakestatus(' ``ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS BOT*\nStatus: ${offline ? 'OFFLINE' : 'ONLINE'}\nMode: ${banChats ? 'SELF' : 'PUBLIC'}`)
            break
    case 'off':
            if (!isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if (!mek.key.fromMe && !isOwner) return
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            medaa =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,medaa,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmediaq = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    mediaq = await hexa.downloadAndSaveMediaMessage(encmediaq)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(mediaq, hexa, mek, from)
			break
    case 'wm':
if (!isQuotedSticker) return reply('Stiker aja om')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medica = await hexa.downloadAndSaveMediaMessage(encmedia)
//if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
reply(mess.wait)
satu = `${namabot}`
dua = ''
require('./lib/exif.js').createExif(satu, dua)
require('./lib/exif.js').modStick(medica, hexa, mek, from)
break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedias = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             medias = await hexa.downloadAndSaveMediaMessage(encmedias)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(medias)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(medias)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(medias)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmediat = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const mediat = await hexa.downloadAndSaveMediaMessage(encmediat)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(mediat)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(mediat)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(mediat)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
          	if (banChats === false) return
          	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	reply(`Succes Change To: *Public Mode*`)
          	break
	case 'self':
          	if (!mek.key.fromMe && !isOwner) return reply('Khusus owner bruh')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	reply(`Succes Change To: *Self Mode*`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe && !isOwner) return fakestatus('Khusus owner bruh')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_, {thumbnail: Buffer.alloc(0)}`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions, {thumbnail: Buffer.alloc(0)})
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video YouTube yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_, {thumbnail: Buffer.alloc(0)}`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions, {thumbnail: Buffer.alloc(0)})
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
case 'stiker':
case 'sticker':
case 'stikergif':
case 'stickergif':
case 'gifstiker':
case 'gifsctiker':
case 'sgif':
case 's':
reply (mess.wait)
if ((isMedia || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
require('./lib/exif').createExif(`${namabot}`, '')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.tostick)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./lib/data.exif ${ran} -o ${ran}`, async (error) => {
hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 30 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(mess.wait)
require('./lib/exif.js').createExif(`${namabot}`, '')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./lib/data.exif ${ran} -o ${ran}`, async (error) => {
hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await hexa.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
require('./lib/exif.js').createExif(`${namabot}`, '')
reply(mess.wait)
keyrmbg = '5LXrQ1MAYDnE1iib6B6NaHMv'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.tostick)
exec(`webpmux -set exif ./lib/data.exif ${ranw} -o ${ranw}`, async (error) => {
hexa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
})
})
})
} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await hexa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.on('start', function (cmd) {
console.log('Started :', cmd)
})
.on('error', function (err) {
fs.unlinkSync(media)
console.log('Error :', err)
})
.on('end', function () {
console.log('Finish')
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${namabot}`, '')} ${ran} -o ${ran}`, async (error) => {
hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if (txt.length > 7) {
reply(mess.wait)
anu = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${body.slice(9)}`)
randKey = anu.result[0]
okelas = randKey.stickers
diare = okelas[Math.floor(Math.random() * (okelas.length))]
sendStickerUrl(from, diare)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'togif':
if (!isQuotedSticker) return reply('Reply stiker nya')
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await hexa.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)
reply(mess.wait)
console.log(memek)
anu = await getBuffer(memek.result)
hexa.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: mek})
break
case 'tovid':
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stiker nya')
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedie = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medie= await hexa.downloadAndSaveMediaMessage(encmedie)
memek = await webp2gifFile(medie)
reply(mess.wait)
console.log(memek)
sendMediaURL(from, memek.result, 'Neh..')
break
case 'tovid2':
case 'tovideo2':
if (!isQuotedSticker) return reply('Reply stiker nya')
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await hexa.downloadAndSaveMediaMessage(encmedia)
const uploady = await uploadimg(media, Date.now() + '.webp')
console.log(uploady)
memek = await webp2mp4Url(uploady.result.image)
reply(mess.wait)
console.log(memek)
sendMediaURL(from, memek.result, 'Neh..')
break
case 'tovid3':
case 'tovideo3':
if (!isQuotedSticker) return reply('Reply stiker nya')
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await hexa.downloadAndSaveMediaMessage(encmedia)
const upload = await uploadimg(media, Date.now() + '.webp')
console.log(upload)
reply(mess.wait)
const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
console.log(rume.data)
sendMediaURL(from, rume.data.result, 'Nih')
break

case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			mediap = await hexa.downloadAndSaveMediaMessage(encmediap)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${mediap} ${ran}`, (err) => {
			fs.unlinkSync(mediap)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer, `NIH`, {thumbnail: Buffer.alloc(0)})
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '• Title: ' + video.title + '\n'
            ytresult += '• Link: ' + video.url + '\n'
            ytresult += '• Durasi: ' + video.timestamp + '\n'
            ytresult += '• Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '# *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	        if (!isOwner) return
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	        if (!isOwner) return
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if (!isOwner) return
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./image/${thumb}`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
//*_-_-_-_-_-_-_RESPONDER-_-_-_-_-_-_-*//
case 'addrespon':{
          if (!isOwner) return
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':{
          if (!isOwner) return
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(12), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(12), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(12)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `*#Key*: ${commandsDB[i].pesan}\nrespon: ${commandsDB[i].balasan}\n\n`
          }
          reply(txt)
          }
        break
     case 'addcmd': 
			case 'setcmd':{
                  if (!mek.key.fromMe && !isOwner) return reply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  addCmd(kodenya, q)
                  reply("_Success_")
                  } else {
                  reply('tag stickenya')
                  }
                  }
            break
            case 'delcmd':{
                  if (!isOwner) return
                  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  reply("_Success_")
                  }
            break
    case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    case 'smeme':
                    top = arg.split('|')[0]
                    bottom = arg.split('|')[1]
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
                    ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
                    owgi = await  hexa.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
                    sendStickerFromUrl(from, `${anu1}`)
                    } else {
                    reply('Gunakan foto/stiker!')
                    }
                    break
    case 'ttp':
    if (!q) return reply('Teksnya?!')
    //anu = `https://hardianto-chan.herokuapp.com/api/maker/ttp?text=${q}&apikey=hardianto`
    anu = `https://xteam.xyz/ttp?file&text=${q}`
    sendStickerFromUrl(from, `${anu}`)
    break
/*    case 'attp':
    if (!q) return reply('Teksnya?!')
    aq = `https://xteam.xyz/attp?file&text=${q}`
    sendStickerFromUrl(from, `${aq}`)
    break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
*/
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},MessageType.image,{thumbnail: Buffer.alloc(0), quoted:mek})
            });
            break
     case 'pinterest':
             if (!q) return reply('Masukan teks!')
             reply(mess.wait)
             aon = await getBuffer(`https://fdz-app.herokuapp.com/api/pinterest?q=${q}`)
             hexa.sendMessage(from, aon, image, {thumbnail: Buffer.alloc(0), caption: 'Nih', quoted: mek})
             break
     case 'ssweb':  
                   if (!q) return reply('Masukan teks!')
                   reply(mess.wait)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${q}`)
                   hexa.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0), caption: 'Nih', quoted: mek})
                   break
      case 'hentai': 
					reply(mess.wait)
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
                    hexa.sendMessage(from, buffer, image, {thumbnail: Buffer.alloc(0), caption: 'Nih', quoted: mek})
					break
       case 'waifu':
	                reply(mess.wait)
					anou = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
					buffer = await getBuffer(anou.url)
                    hexa.sendMessage(from, buffer, image, {thumbnail: Buffer.alloc(0), caption: 'Nih', quoted: mek})
					break
/* 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
 */
    case 'tiktok':
    if (!q) return reply('Linknya?')
    reply(mess.wait)
    inu = `https://dapuhy-api.herokuapp.com/api/socialmedia/tiktoknowm?url=${q}&apikey=wKwMYrQHKlW4xZo`
    sendMediaURL(from, {url:`${inu}`}, video, {mimetype:'video/mp4', quoted: mek, caption: 'Nih'})
    break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		hexa.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉─────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「_BRAINLY_」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
   /* case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('link tod')
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    hexa.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            hexa.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Nih'})
	    }
            }
	    })
	    break
   */
    case 'igvideo':
    if (!q) return reply('Linknya?')
    reply(mess.wait)
    ini = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/igdownload?url=${q}&apikey=wKwMYrQHKlW4xZo`)
    bupper = await getBuffer(ini.result.download_url)
    hexa.sendMessage(from, bupper, video, {caption: 'Nih', quoted: mek})
    break
    case 'igimage':
    if (!q) return reply('Linknya?')
    reply(mess.wait)
    itu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/igdownload?url=${q}&apikey=wKwMYrQHKlW4xZo`)
    baper = await getBuffer(itu.result.download_url)
    hexa.sendMessage(from, baper, image, {thumbnail: Buffer.alloc(0), caption: 'Nih', quoted: mek})
    break
    case 'igtez':
    if (!q) return reply('Linknya?')
    reply(mess.wait)
    ii = await fetchJson(`https://docs-jojo.herokuapp.com/api/instagram-post?url=${q}`)
    bper = await getBuffer(ii.media_result.url)
    hexa.sendMessage(from, bper, image, {caption: 'Nih', quoted: mek})
    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${q}`).then(Y => {
            console.log(`${q}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            reply(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tep = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tep}\n\n*Link* : ${ten}`)
            })
            break    
	case 'term':
	        if (!isOwner) return
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            if (!mek.key.fromMe && !isOwner) return
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            if (!mek.key.fromMe && !isOwner) return
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
case 'tebakgambar':
                 ///
					//anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/kuis/tebakgambar?apikey=zahirgans`, {method: 'get'})
					anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar2?apikey=154acc0aff60f57c43dc667e`, {method: 'get'})
					buffer = await getBuffer(anu.result.image)
					const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '?')
					const jaw = mek.anu.result.answer.contextInfo.mentionedJid[0]
					if (jaw) {
						 !jaw;
                         reply(`BENAR!`);
                    } else {
                         reply(`SALAH!`);
                    }
                    ///
					setTimeout( () => {
					hexa.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
                    }, 60000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
                    }, 40000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_30 Detik lagi…_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_60 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, buffer, image, { caption: `_Jelaskan Apa Maksud Gambar Ini_ petunjuk= ${petunjuk}`, quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tictactoe':
case 'ttt':
                    if (!isGroup) return reply('Khusus grup bruh')
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮 Tictactoe Game 🎳*

     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}

     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}

     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     `;
                         hexa.sendMessage(from, chatMove, MessageType.text, {
                              quoted: mek,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*🎮 Memulai game tictactoe 🎳*

     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} menantang anda untuk menjadi lawan game

     [ ${argss[1]} ] Ketik Y/N untuk menerima atau menolak permainan 
     `;
                    hexa.sendMessage(from, strChat, MessageType.text, {

                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });

                    break
case 'delttc':
case 'delttt':
                 //if (!isGroup) return reply('Khusus grup bruh')
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Berhasil menghapus sesi di grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik .tictactoe`);
                    }

                    break
case 'oxo':                    
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break
case 'jadibot':
    if (!isOwner) return
    jadibot(reply,hexa,from)
    break
    case 'stopjadibot':
    stopjadibot(reply)
    break
    case 'getcode':
    getcode(reply,prefix,hexa)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*mekice* : ${i.phone.mekice_manufacturer}
*Model* : ${i.phone.mekice_model}\n\n`
    }
    reply(text)
    break
    case 'dellvote':
            if(!mek.key.remoteJid) return
            if(!isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'delvsesi':
            if(!mek.key.remoteJid) return
            voting.splice(from, 1)
            fs.writeFileSync('./lib/voting.json', JSON.stringify(voting))
            reply('succes')
            break
    case 'voting':
    case 'vote':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
case 'setmypic':
            pepe = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            mediae = await hexa.downloadAndSaveMediaMessage(pepe)
            base64 = await imageToBase64(JSON.stringify(mediae).replace(/\"/gi, ''))
            await hexa.updateProfilePicture(base64)
                reply('Berhasil ^^')
            break
default:
if (budy.startsWith('>')){
try {
	if (!isOwner) return reply('Khusus owner bruh')
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
}
if (budy.startsWith('=>')){
try {
	if (!isOwner) return reply('Khusus owner bruh')
let evaled = await eval(budy.slice(3))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
//dp.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
} catch (err) {
m = String(err)
await reply(m)
}
}
if (budy.startsWith('$')){
	if (!isOwner) return reply('Khusus owner bruh')
//if (!isOwner && !isModn && !mek.key.fromMe) return reply(mess.ownerb)
const cmd = body.slice(1)
exec(cmd, (err, stdout) => {
if(err) return reply(`root@Self:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (isGroup && budy != undefined) {
	} else {
	console.log(color('[Sky • Line]', 'aqua'), 'SELF-RyuuZeyy', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
