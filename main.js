const {
	WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
    processTicksAndRejections,
    ECONNABORTED,
    apikey,
    WA_DEAFULT_EPHEMERAL,
    DataView,
    TypedArray,
    device,
    Browser
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const restrict = JSON.parse(fs.readFileSync('./src/restrict.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
//const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const { spawn, exec, execSync } = require("child_process")
const clc = require('chalk')

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (hexa = new WAConnection()) => {
    hexa.logger.level = 'warn'
    hexa.version = [2, 2119, 6] 
    console.log(banner.string)
    hexa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
    hexa.on('connecting', () => {
        start('2', 'Connecting...')
    })
    hexa.on('open', () => {
        success('2', 'Connected')
    })
    await hexa.connect({timeoutMs: 120*4000})
        fs.writeFileSync('./session.json', JSON.stringify(hexa.base64EncodedAuthInfo(), null, '\t'))

    hexa.on('chat-update', async (message) => {
        require('./index.js')(hexa, message)
    })

hexa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await hexa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await hexa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpeg'
				}
				teks = `*Welcome @${num.split('@')[0]}👋*`
				let buff = await getBuffer(ppimg)
				hexa.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await hexa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpeg'
				}
				teks = `*Goodbye @${num.split('@')[0]}👋*`
				let buff = await getBuffer(ppimg)
				hexa.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: Buffer.alloc(0), caption: teks, contextInfo: {"mentionedJid": [num]}})
		    } else if (anu.action == 'promote') {
				num = anu.participants[0]
				teks = `*PROMOTE DETECTED*

User: @${num.split('@')[0]}
Group:  ${mdata.subject}`
				hexa.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
		    } else if (anu.action == 'demote') {
				num = anu.participants[0]
				teks = `*DEMOTE DETECTED*

User: @${num.split('@')[0]}
Group:  ${mdata.subject}`
				hexa.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	hexa.on('group-update', async (anu) => {
		if (!restrict.includes(anu.jid)) return
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "hexabot", "caption": `Sky-Line (BOT)`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await hexa.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 *Group Opened* 」\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    hexa.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `「 *Group Closed* 」\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    hexa.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 *Group Description Change* 」\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    hexa.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    hexa.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    hexa.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})
	}
///
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
