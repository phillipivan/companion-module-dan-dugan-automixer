const {
	duganModels,
	paramSep,
	cmdSep,
	errSyntax1,
	errSyntax2,
	errRange,
	sampleRate,
	adatMirror,
	clockSources,
} = require('./consts.js')

module.exports = {
	async processBuffer(buffer) {
		this.log('debug', 'processBuffer: ' + buffer)
		let strRep = buffer.toString()
		let cmd = await this.regexCmd(strRep)
		switch (cmd) {
			case '*GP,':
				//get channelparams
				break
			case '*GM,':
				//get matrix params
				break
			case '*GS,':
				//channel status
				break
			case '*GSA,':
				//automix gains
				break
			case '*GSC,':
				//signal clip
				break
			case '*GSP,':
				//signal presence
				break
			case '*GSI,':
				//input peaks
				break
			case '*GSO,':
				//output peaks
				break
			case '*GSM,':
				//music reference peaks
				break
			case '*GSN,':
				//nom gain limits
				break
			case '*GSX,':
				//matrix output meters
				break
			default:
				await this.processCmds(strRep)
		}
	},

	async processCmds(cmd) {
		let line = cmd.toString()
		let str = line.split('\r\n')
		let cmds = str[0].split(cmdSep)
		cmds.forEach((element) => {
			this.processParams(element)
		})
		return true
	},

	async processParams(cmd) {
		let str = cmd.toString()
		let params = str.split(paramSep)
		if (params[1] == errSyntax1 || params[1] == errSyntax2 || params[1] == errRange) {
			this.log('warn', 'bad response: ' + cmd)
			return false
		}
		switch (params[0]) {
			case '*CM':
				//channel mode
				break
			case '*CP':
				//channel preset
				break
			case '*BP':
				//channel bypass
				break
			case '*CO':
				//channel override
				break
			case '*CW':
				//channel weight
				break
			case '*MR':
				//music mode
				break
			case '*NE':
				//NOM mode
				break
			case '*GA':
				//group assign
				break
			case '*CN':
				//channel name
				break
			case '*SM':
				//group mute
				break
			case '*SP':
				//group preset
				break
			case '*SO':
				//group override
				break
			case '*LH':
				//last hold
				break
			case '*AD': //same as ME
			case '*ME':
				//automix depth
				break
			case '*NL':
				//nom gain limit
				break
			case '*MT':
				//music system threshold
				break
			case '*MC':
				//music system threshold input
				break
			case '*MXM':
				//matrix bus mute
				break
			case '*MXP':
				//matrix bus polarity
				break
			case '*MXV':
				//matrix bus gain
				break
			case '*MXO':
				//matrix bus ouput
				break
			case '*OM':
				//matrix crosspoint
				break
			case '*SNC':
				//scene count
				if (params.length == 2) {
					this.setVariableValues({
						sceneCount: Number(params[1]),
					})
					this.addCmdtoQueue('SNL,1,' + Number(params[1]))
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*SNA':
				//active scene
				if (params.length == 4) {
					this.setVariableValues({
						sceneActive: params[1].toString(),
						sceneActiveIndex: Number(params[2]),
						sceneActiveChanged: Number(params[3]),
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*SNR':
				//recall scene
				if (params.length == 2) {
					let err = params[1].search('Error: scene')
					if (err == -1) {
						this.log('info', 'Scene Recalled: ' + params[1])
						this.addCmdtoQueue('SNA')
					} else {
						this.log('warn', str)
					}
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*SNS':
			case '*SNN':
				//save scene
				//save new scene
				if (params.length == 2) {
					let err = params[1].search('Error: scene')
					if (err == -1) {
						this.log('info', 'New scene saved: ' + params[1])
						this.addCmdtoQueue('SNC')
						this.addCmdtoQueue('SNA')
					} else {
						this.log('warn', str)
					}
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*SNE':
				//rename scene
				if (params.length == 3) {
					this.log('info', 'Scene: ' + params[1] + '. Renamed to: ' + params[2])
					this.addCmdtoQueue('SNC')
					this.addCmdtoQueue('SNA')
				} else {
					this.log('warn', 'Error response: ' + str)
				}
				break
			case '*SND':
				//delete scene
				if (params.length == 2) {
					let err = params[1].search('Error: scene')
					if (err == -1) {
						this.log('info', 'Scene Deleted: ' + params[1])
						this.addCmdtoQueue('SNC')
						this.addCmdtoQueue('SNA')
					} else {
						this.log('warn', params[1])
					}
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*FP':
				//channel defaults
				this.log('info', 'Channels reset to defaults. ' + str)
				this.addCmdtoQueue('SNA')
				break
			case '*RM':
				//matrix defauls
				this.log('info', 'Matrix reset to defaults. ' + str)
				break
			case '*SU':
				//subscribe unsolicited
				this.log('info', 'Subscribe unsolicited level changed. Level: ' + params[1])
				break
			case '*LG':
				//link group
				if (params.length == 2) {
					this.setVariableValues({
						linkGroup: Number(params[1]),
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*CS':
				//clock sourse
				if (params.length == 2) {
					if (params[1] > 0) {
						this.setVariableValues({
							clockSource: clockSources[params[1]],
						})
					} else if (params[1] == 0 && this.config.model == 11) {
						this.setVariableValues({
							clockSource: 'Madi',
						})
					} else if (params[1] == 0 && this.config.model == 12) {
						this.setVariableValues({
							clockSource: 'Dante',
						})
					} else {
						this.setVariableValues({
							clockSource: 'Unknown',
						})
					}
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*AM':
				//adat mirror
				if (params.length == 2) {
					this.setVariableValues({
						adatMirror: adatMirror[params[1]],
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*CFN':
				//automix channels
				if (params.length == 2) {
					this.setVariableValues({
						channelCount: Number(params[1]),
					})
					if (Number(params[1]) != this.config.channels) {
						this.log(
							'warn',
							'Mismatch between configured channels: ' +
								this.config.channels +
								' and connected device: ' +
								Number(params[1]) +
								'. Changing configuration.'
						)
						this.config.channels = Number(params[1])
						this.initVariables()
						this.updateActions() // export actions
						//this.updateFeedbacks() // export feedbacks
						this.updateVariableDefinitions() // export variable definitions
						//this.setVariableValues(variableDefaults)
					}
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*CFS':
				//input channel offset
				if (params.length == 2) {
					this.setVariableValues({
						inputOffset: Number(params[1]),
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*BM':
				//blink mode
				if (params.length == 2) {
					let blink = params[1] == '1' ? 'On' : 'Off'
					this.setVariableValues({
						blinkMode: blink,
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*DH':
				//dhcp
				if (params.length == 2) {
					let dhcp = params[1] == '1' ? 'On' : 'Off'
					this.setVariableValues({
						master: dhcp,
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*SC':
				//system config
				if (params.length == 13) {
					//expected length
					let dhcp = params[11] == '1' ? 'On' : 'Off'
					this.setVariableValues({
						deviceType: duganModels[params[1]],
						hostName: params[2],
						serialNumber: params[3],
						firmwareVersion: params[4],
						fpgaVersion: params[5],
						hardwareRevsion: params[6],
						macAddress: params[7],
						ipAddress: params[8],
						netMask: params[9],
						gateway: params[10],
						dhcp: dhcp,
						channelCount: Number(params[12]),
					})
					//checks for expected model and channel count
					if (params[1] != this.config.model) {
						this.log(
							'warn',
							'Mismatch between configured model: ' +
								duganModels[this.config.model] +
								' and connected device: ' +
								duganModels[params[1]]
						)
					}
					if (Number(params[12]) != this.config.channels) {
						this.log(
							'warn',
							'Mismatch between configured channels: ' +
								this.config.channels +
								' and connected device: ' +
								Number(params[12]) +
								'. Changing configuration.'
						)
						this.config.channels = Number(params[12])
						this.initVariables()
						this.updateActions() // export actions
						//this.updateFeedbacks() // export feedbacks
						this.updateVariableDefinitions() // export variable definitions
						//this.setVariableValues(variableDefaults)
					}
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*VE':
				//firmware versions
				if (params.length == 5) {
					this.setVariableValues({
						firmwareVersion: params[1],
						firmwareSecVersion: params[2],
						fpgaVersion: params[3],
						hardwareRevsion: params[4],
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*CC':
				//client connections
				if (params.length == 3) {
					let udp = params[1].split(':')
					let tcp = params[2].split(':')
					this.setVariableValues({
						clientUDP: Number(udp[1]),
						clientTCP: Number(tcp[1]),
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*HW':
				//resource useage
				if (params.length == 9) {
					let heatBeat = params[1].split(':')
					let lwip = params[2].split(':')
					let dsp = params[3].split(':')
					let tcpip = params[4].split(':')
					let macrx = params[5].split(':')
					let mactx = params[6].split(':')
					let rtos = params[7].split(':')
					let malloc = params[8].split(':')
					this.setVariableValues({
						heartBeat: Number(heatBeat[1]),
						lwip: Number(lwip[1]),
						dsp: Number(dsp[1]),
						tcpip: Number(tcpip[1]),
						macRX: Number(macrx[1]),
						macTX: Number(mactx[1]),
						rtosHeapFree: Number(rtos[1]),
						mallocHeadFree: Number(malloc[1]),
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*HR':
				//switch headroom
				this.setVariableValues({
					switchHeadroom: params[1],
				})
				break
			case '*SF':
				//sample rate
				if (params.length == 2) {
					if (params[1] == '0' || params[1] == '1') {
						this.setVariableValues({
							sampleRate: sampleRate[params[1]],
						})
					} else {
						this.setVariableValues({
							sampleRate: params[1],
						})
					}
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*MM':
				//master mode
				if (params.length == 2) {
					this.setVariableValues({
						master: params[1],
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*NA':
				//system name
				if (params.length == 2) {
					this.setVariableValues({
						hostName: params[1],
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*IP':
				//ip
				if (params.length == 5) {
					this.setVariableValues({
						ipAddress: params[2] + '.' + params[3] + '.' + params[4] + '.' + params[5],
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*NM':
				//netmask
				if (params.length == 5) {
					this.setVariableValues({
						netMask: params[2] + '.' + params[3] + '.' + params[4] + '.' + params[5],
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*GW':
				//gateway
				if (params.length == 5) {
					this.setVariableValues({
						gateway: params[2] + '.' + params[3] + '.' + params[4] + '.' + params[5],
					})
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			case '*CNS':
				//channel name list
				break
			case '*SNL':
				//scene name list
				if (params.length > 4) {
					this.sceneList = []
					for (let i = 4; i < params.length; i++) {
						this.sceneList.push({ id: params[i], label: params[i].toString() })
					}
					this.updateActions()
				} else if (params.length == 4) {
					this.log('warn', 'No custom scenes saved. ' + str)
					this.sceneList = []
					this.updateActions()
				} else {
					this.log('warn', 'Unexpected response: ' + str)
				}
				break
			default:
				if (cmd != 'Welcome to Dugan Model N Server.') {
					this.log('warn', 'Unexpected response from unit: ' + cmd)
				} else {
					this.log('info', cmd)
				}
		}
	},
}
