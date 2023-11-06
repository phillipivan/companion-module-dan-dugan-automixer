const { Regex } = require('@companion-module/base')
module.exports = function (self) {
	self.setActionDefinitions({
		channel_mode: {
			name: 'Channel - Mode',
			description: 'Set the mode of a channel',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 1,
					choices: self.channelNames,
				},
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Mode',
					default: 1,
					choices: [
						{ id: 0, label: 'Manual' },
						{ id: 1, label: 'Auto' },
						{ id: 2, label: 'Mute' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'CM'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.mode + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_preset: {
			name: 'Channel - Preset',
			description: 'Set the preset of a channel',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 1,
					choices: self.channelNames,
				},
				{
					id: 'preset',
					type: 'dropdown',
					label: 'Preset',
					default: 1,
					choices: [
						{ id: 0, label: 'Manual' },
						{ id: 1, label: 'Auto' },
						{ id: 2, label: 'Mute' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'CP'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.preset + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_bypass: {
			name: 'Channel - Bypass',
			description: 'Switch a channel bypass on/off',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 0,
					choices: self.channelNames,
				},
				{
					id: 'bypass',
					type: 'dropdown',
					label: 'Bypass',
					default: 1,
					choices: [
						{ id: 0, label: 'On' },
						{ id: 1, label: 'Bypass' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'BP'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.bypass + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_override: {
			name: 'Channel - Override',
			description: 'Switch a channel override on/off',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 1,
					choices: self.channelNames,
				},
				{
					id: 'override',
					type: 'dropdown',
					label: 'Over ride',
					default: 0,
					choices: [
						{ id: 0, label: 'Normal' },
						{ id: 1, label: 'Override' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'CO'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.override + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_weight: {
			name: 'Channel - Weight',
			description: 'Set the automix weight of a channel',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 1,
					choices: self.channelNames,
				},
				{
					id: 'weight',
					type: 'number',
					label: 'Weight',
					default: 0,
					min: -100,
					max: +15,
					range: true,
					step: 0.1,
					required: true,
					regex: Regex.NUMBER,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: async ({ options }) => {
				let cmd = 'CW'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.weight + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_music_mode: {
			name: 'Channel - Music Mode',
			description: 'Switch a channel music mode on/off',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 0,
					choices: self.channelNames,
				},
				{
					id: 'music',
					type: 'dropdown',
					label: 'Music Mode',
					default: 1,
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'MR'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.music + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_NOM_mode: {
			name: 'Channel - NOM Mode',
			description: 'Switch a channel NOM mode on/off',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 0,
					choices: self.channelNames,
				},
				{
					id: 'nom',
					type: 'dropdown',
					label: 'NOM Mode',
					default: 1,
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'NE'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.nom + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_group_assign: {
			name: 'Channel - Group Assign',
			description: 'Set the group of a channel',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 1,
					choices: self.channelNames,
				},
				{
					id: 'group',
					type: 'dropdown',
					label: 'Group Assignment',
					default: 1,
					choices: self.groupNames,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the current name',
				},
			],
			callback: ({ options }) => {
				let cmd = 'GA'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.channel + ',' + options.group + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		channel_name: {
			name: 'Channel - Name',
			description: 'Name a Channel',
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Channel',
					default: 1,
					choices: self.channelNames,
				},
				{
					id: 'name',
					type: 'textinput',
					label: 'Channel Name',
					default: 'Channel 1',
					required: true,
					Regex: Regex.SOMETHING,
					useVariables: true,
					tooltip: 'Max Length: 15 char',
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the current name',
				},
			],
			callback: async ({ options }) => {
				let cmd = 'CN'
				if (options.query) {
					cmd += ',' + options.channel + '\r\n'
				} else {
					let chanName = await self.parseVariablesInString(options.name)
					chanName = chanName.slice(0, 15)
					if (chanName.includes(',') || chanName.includes(';') || chanName.includes('*')) {
						self.log('warn', 'Invalid channel name, special character: ' + chanName)
					} else {
						cmd += ',' + options.channel + ',' + chanName + '\r\n'
						self.sendCommand(cmd)
					}
				}
			},
		},
		group_mute: {
			name: 'Group - Mute',
			description: 'Set the mute state of the groups',
			options: [
				{
					id: 'groupA',
					type: 'checkbox',
					label: 'Group A Mute',
					default: false,
				},
				{
					id: 'groupB',
					type: 'checkbox',
					label: 'Group B Mute',
					default: false,
				},
				{
					id: 'groupC',
					type: 'checkbox',
					label: 'Group C Mute',
					default: false,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group mute state',
				},
			],
			callback: ({ options }) => {
				let cmd = 'SM'
				if (options.query) {
					cmd += '\r\n'
				} else {
					let groupMute = 0
					if (options.groupA) groupMute += 1
					if (options.groupB) groupMute += 2
					if (options.groupC) groupMute += 4
					cmd += ',' + groupMute + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		group_preset: {
			name: 'Group - Preset',
			description: 'Set the preset state of the groups',
			options: [
				{
					id: 'groupA',
					type: 'checkbox',
					label: 'Group A Preset',
					default: false,
				},
				{
					id: 'groupB',
					type: 'checkbox',
					label: 'Group B Preset',
					default: false,
				},
				{
					id: 'groupC',
					type: 'checkbox',
					label: 'Group C Preset',
					default: false,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group preset state',
				},
			],
			callback: ({ options }) => {
				let cmd = 'SP'
				if (options.query) {
					cmd += '\r\n'
				} else {
					let groupPreset = 0
					if (options.groupA) groupPreset += 1
					if (options.groupB) groupPreset += 2
					if (options.groupC) groupPreset += 4
					cmd += ',' + groupPreset + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		group_override: {
			name: 'Group - Over ride',
			description: 'Set the Over ride state of the groups',
			options: [
				{
					id: 'groupA',
					type: 'checkbox',
					label: 'Group A Over ride',
					default: false,
				},
				{
					id: 'groupB',
					type: 'checkbox',
					label: 'Group B Over ride',
					default: false,
				},
				{
					id: 'groupC',
					type: 'checkbox',
					label: 'Group C Over ride',
					default: false,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group over ride state',
				},
			],
			callback: ({ options }) => {
				let cmd = 'SO'
				if (options.query) {
					cmd += '\r\n'
				} else {
					let groupOverride = 0
					if (options.groupA) groupOverride += 1
					if (options.groupB) groupOverride += 2
					if (options.groupC) groupOverride += 4
					cmd += ',' + groupOverride + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		group_lasthold: {
			name: 'Group - Last Hold',
			description: 'Set the Last Hold state of the groups',
			options: [
				{
					id: 'groupA',
					type: 'checkbox',
					label: 'Group A Last Hold',
					default: false,
				},
				{
					id: 'groupB',
					type: 'checkbox',
					label: 'Group B Last Hold',
					default: false,
				},
				{
					id: 'groupC',
					type: 'checkbox',
					label: 'Group C Last Hold',
					default: false,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group last hold state',
				},
			],
			callback: ({ options }) => {
				let cmd = 'LH'
				if (options.query) {
					cmd += '\r\n'
				} else {
					let groupLasthold = 0
					if (options.groupA) groupLasthold += 1
					if (options.groupB) groupLasthold += 2
					if (options.groupC) groupLasthold += 4
					cmd += ',' + groupLasthold + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		group_automixdepth: {
			name: 'Group - Automix Depth',
			description: 'Set the automix depth of a group',
			options: [
				{
					id: 'group',
					type: 'dropdown',
					label: 'Group',
					default: '1',
					choices: self.groupNames,
				},
				{
					id: 'weight',
					type: 'number',
					label: 'Weight',
					default: -15,
					min: -100,
					max: 0,
					required: true,
					range: true,
					step: 0.1,
					regex: Regex.NUMBER,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group automix depth',
				},
			],
			callback: ({ options }) => {
				let cmd = 'ME' //AD commands also works
				if (options.query) {
					cmd += ',' + options.group + '\r\n'
				} else {
					cmd += ',' + options.group + ',' + options.weight + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		group_NOMgainlimit: {
			name: 'Group - NOM Gain Limit',
			description: 'Set the NOM gain limit of a group',
			options: [
				{
					id: 'group',
					type: 'dropdown',
					label: 'Group',
					default: '1',
					choices: self.groupNames,
				},
				{
					id: 'nomgain',
					type: 'number',
					label: 'NOM Gain Limit',
					default: 1,
					min: 1,
					max: 10,
					required: true,
					range: true,
					step: 0.1,
					regex: Regex.NUMBER,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group NOM gain limit',
				},
			],
			callback: ({ options }) => {
				let cmd = 'NL'
				if (options.query) {
					cmd += ',' + options.group + '\r\n'
				} else {
					cmd += ',' + options.group + ',' + options.nomgain + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		group_musicthreshold: {
			name: 'Group - Music System Threshold',
			description: 'Set the Music System Threshold of a group',
			options: [
				{
					id: 'group',
					type: 'dropdown',
					label: 'Group',
					default: '1',
					choices: self.groupNames,
				},
				{
					id: 'threshold',
					type: 'number',
					label: 'Music System Threshold',
					default: -10,
					min: -150,
					max: 20,
					required: true,
					range: true,
					step: 0.1,
					regex: Regex.NUMBER,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group musicc system threshold',
				},
			],
			callback: ({ options }) => {
				let cmd = 'MT'
				if (options.query) {
					cmd += ',' + options.group + '\r\n'
				} else {
					cmd += ',' + options.group + ',' + options.threshold + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		group_musicinput: {
			name: 'Group - Music System Threshold Input',
			description: 'Set the music system Threshold input of a group',
			options: [
				{
					id: 'group',
					type: 'dropdown',
					label: 'Group',
					default: 1,
					choices: self.groupNames,
				},
				{
					id: 'input',
					type: 'dropdown',
					label: 'Music System Threshold Input',
					default: 1,
					choices: self.musicInputs,
					tooltip: 'Select source for music threshold',
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the group music system threshold input',
				},
			],
			callback: ({ options }) => {
				let cmd = 'MC'
				if (options.query) {
					cmd += ',' + options.group + '\r\n'
				} else {
					cmd += ',' + options.group + ',' + options.input + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		matrix_mute: {
			name: 'Matrix - Bus Mute',
			description: 'Mute a Matrix Bus',
			options: [
				{
					id: 'matrix',
					type: 'dropdown',
					label: 'Matrix',
					default: 1,
					choices: self.matrixNames,
				},
				{
					id: 'mute',
					type: 'dropdown',
					label: 'Mute',
					default: '1',
					choices: [
						{ id: 0, label: 'On' },
						{ id: 1, label: 'Mute' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'MXM'
				if (options.query) {
					cmd += ',' + options.matrix + '\r\n'
				} else {
					cmd += ',' + options.matrix + ',' + options.mute + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		matrix_polarity: {
			name: 'Matrix - Bus Polarity',
			description: 'Change polarity of a Matrix Bus',
			options: [
				{
					id: 'matrix',
					type: 'dropdown',
					label: 'Matrix',
					default: 1,
					choices: self.matrixNames,
				},
				{
					id: 'polarity',
					type: 'dropdown',
					label: 'Polarity',
					default: '1',
					choices: [
						{ id: 0, label: 'Normal' },
						{ id: 1, label: 'Reversed' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'MXP'
				if (options.query) {
					cmd += ',' + options.matrix + '\r\n'
				} else {
					cmd += ',' + options.matrix + ',' + options.polarity + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		matrix_gain: {
			name: 'Matrix - Gain',
			description: 'Set the gain of a Matrix Bus',
			options: [
				{
					id: 'matrix',
					type: 'dropdown',
					label: 'Matrix',
					default: 1,
					choices: self.matrixNames,
				},
				{
					id: 'gain',
					type: 'number',
					label: 'Gain',
					default: -0,
					min: -25,
					max: 15,
					required: true,
					range: true,
					step: 0.5,
					regex: Regex.NUMBER,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the current matrix output gain',
				},
			],
			callback: ({ options }) => {
				let cmd = 'MXV'
				if (options.query) {
					cmd += ',' + options.matrix + '\r\n'
				} else {
					cmd += ',' + options.matrix + ',' + options.gain + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		matrix_output: {
			name: 'Matrix - Output',
			description: 'Set the output channel of a Matrix Bus',
			options: [
				{
					id: 'matrix',
					type: 'dropdown',
					label: 'Matrix',
					default: 1,
					choices: self.matrixNames,
				},
				{
					id: 'output',
					type: 'dropdown',
					label: 'Output',
					default: 0,
					choices: self.matrixDestinations,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the matrix output channel',
				},
			],
			callback: ({ options }) => {
				let cmd = 'MXO'
				if (options.query) {
					cmd += ',' + options.matrix + '\r\n'
				} else {
					cmd += ',' + options.matrix + ',' + options.output + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		matrix_crosspoint: {
			name: 'Matrix - Crosspoint',
			description: 'Set the a crosspoint in the matrix',
			options: [
				{
					id: 'matrix',
					type: 'dropdown',
					label: 'Matrix',
					default: 1,
					choices: self.matrixNames,
				},
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Input Channel',
					default: 1,
					choices: self.matrixSources,
				},
				{
					id: 'gain',
					type: 'number',
					label: 'Crosspoint Gain',
					default: -96,
					min: -96,
					max: 20,
					required: true,
					range: true,
					step: 0.1,
					regex: Regex.NUMBER,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the matrix crosspoint gain',
				},
			],
			callback: ({ options }) => {
				let cmd = 'OM'
				if (options.query) {
					cmd += ',' + options.matrix + ',' + options.channel + '\r\n'
				} else {
					cmd += ',' + options.matrix + ',' + options.channel + ',' + options.gain + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		sc_count: {
			name: 'Scene - Count',
			description: 'Query number of saved scenes',
			options: [
				{
					id: 'info',
					type: 'static-text',
					label: '',
					value: 'Returns number of scenes saved in unit',
				},
			],
			callback: () => {
				let cmd = 'SNC'
				self.sendCommand(cmd + '\r\n')
			},
		},
		sc_active: {
			name: 'Scene - Active',
			description: 'Query the active scene',
			options: [
				{
					id: 'info',
					type: 'static-text',
					label: '',
					value: 'Returns name of active scene',
				},
			],
			callback: () => {
				let cmd = 'SNA'
				self.sendCommand(cmd + '\r\n')
			},
		},
		sc_recall: {
			name: 'Scene - Recall',
			description: 'Recall a saved scene',
			options: [
				{
					id: 'name',
					type: 'textinput',
					label: 'Scene Name',
					default: 'Scene 1',
					required: true,
					Regex: Regex.SOMETHING,
					tooltip: 'Max Length: 15 char',
					useVariables: true,
				},
			],
			callback: async ({ options }) => {
				let cmd = 'SNR'
				let sceneName = await self.parseVariablesInString(options.name)
				sceneName = sceneName.slice(0, 15)
				if (sceneName.includes(',') || sceneName.includes(';') || sceneName.includes('*')) {
					self.log('warn', 'Invalid scene name: ' + sceneName)
				} else {
					cmd += ',' + sceneName + '\r\n'
					self.sendCommand(cmd)
				}
			},
		},
		sc_save: {
			name: 'Scene - Save',
			description: 'Save a scene',
			options: [
				{
					id: 'name',
					type: 'textinput',
					label: 'Scene Name',
					default: 'Scene 1',
					required: true,
					Regex: Regex.SOMETHING,
					tooltip: 'Max Length: 15 char',
					useVariables: true,
				},
			],
			callback: async ({ options }) => {
				let cmd = 'SNS'
				let sceneName = await self.parseVariablesInString(options.name)
				sceneName = sceneName.slice(0, 15)
				if (sceneName.includes(',') || sceneName.includes(';') || sceneName.includes('*')) {
					self.log('warn', 'Invalid scene name, remove comma or semicolon: ' + sceneName)
				} else {
					cmd += ',' + sceneName + '\r\n'
					self.sendCommand(cmd)
				}
			},
		},
		sc_newsave: {
			name: 'Scene - Save New',
			description: 'Save a new scene',
			options: [
				{
					id: 'name',
					type: 'textinput',
					label: 'Scene Name',
					default: 'New Scene',
					required: true,
					Regex: Regex.SOMETHING,
					useVariables: true,
					tooltip: 'Max Length: 15 char',
				},
			],
			callback: async ({ options }) => {
				let cmd = 'SNN'
				let sceneName = await self.parseVariablesInString(options.name)
				sceneName = sceneName.slice(0, 15)
				if (sceneName.includes(',') || sceneName.includes(';') || sceneName.includes('*')) {
					self.log('warn', 'Invalid scene name, remove comma or semicolon: ' + sceneName)
				} else {
					cmd += ',' + sceneName + '\r\n'
					self.sendCommand(cmd)
				}
			},
		},
		sc_rename: {
			name: 'Scene - Rename',
			description: 'Rename an existing scene',
			options: [
				{
					id: 'currentname',
					type: 'textinput',
					label: 'Current Name',
					default: 'Scene 1',
					required: true,
					Regex: Regex.SOMETHING,
					useVariables: true,
					tooltip: 'Max Length: 15 char',
				},
				{
					id: 'newname',
					type: 'textinput',
					label: 'New Name',
					default: 'New Scene Name',
					required: true,
					Regex: Regex.SOMETHING,
					useVariables: true,
					tooltip: 'Max Length: 15 char',
				},
			],
			callback: async ({ options }) => {
				let cmd = 'SNE'
				let sceneNameCurrent = self.parseVariablesInString(options.currentname)
				let sceneNameNew = await self.parseVariablesInString(options.newname)
				sceneNameCurrent = await sceneNameCurrent.slice(0, 15)
				sceneNameNew = sceneNameNew.slice(0, 15)
				if (
					sceneNameCurrent.includes(',') ||
					sceneNameNew.includes(',') ||
					sceneNameCurrent.includes(';') ||
					sceneNameNew.includes(';') ||
					sceneNameNew.includes('*') ||
					sceneNameCurrent.includes('*')
				) {
					self.log(
						'warn',
						'Invalid scene name, remove comma or semicolon. Current Scene Name: ' +
							sceneNameCurrent +
							'. New Scene Name: ' +
							sceneNameNew
					)
				} else {
					cmd += ',' + sceneNameCurrent + ',' + sceneNameNew + '\r\n'
					self.sendCommand(cmd)
				}
			},
		},
		sc_delete: {
			name: 'Scene - Delete',
			description: 'Delete an existing scene',
			options: [
				{
					id: 'name',
					type: 'textinput',
					label: 'Scene Name',
					default: 'Delete ME',
					required: true,
					Regex: Regex.SOMETHING,
					useVariables: true,
					tooltip: 'Max Length: 15 char. "," ";" Forbidden.',
				},
			],
			callback: async ({ options }) => {
				let cmd = 'SND'
				let sceneDelete = await self.parseVariablesInString(options.name)
				if (sceneDelete.includes(',') || sceneDelete.includes(';') || sceneDelete.includes('*')) {
					self.log('warn', 'Invalid scene name: ' + sceneDelete)
				} else {
					cmd += ',' + options.name + '\r\n'
					self.sendCommand(cmd)
				}
			},
		},
		recall_default: {
			name: 'Recall Defaults',
			description: 'Recall default channel or matrix settings',
			options: [
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Channel or Matrix',
					default: 'FP',
					choices: [
						{ id: 'FP', label: 'Channel Defaults' },
						{ id: 'RM', label: 'Matrix Defaults' },
					],
				},
			],
			callback: ({ options }) => {
				self.sendCommand(options.mode + '\r\n')
			},
		},
		system_subscribe: {
			name: 'System - Subscribe Unsolicited',
			description: 'Subscribe to unsolicited paramter changes',
			options: [
				{
					id: 'subscribe',
					type: 'dropdown',
					label: 'Subscribe',
					default: 1,
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On' },
						{ id: 2, label: 'On with metering' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'SU'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.subscribe + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		system_linkgroup: {
			name: 'System - Link Group',
			description: 'Set the link group',
			options: [
				{
					id: 'linkgroup',
					type: 'number',
					label: 'Link Group Address',
					default: 1,
					min: 0,
					max: 254,
					required: true,
					range: true,
					step: 1,
					regex: Regex.NUMBER,
					tooltip: 'Link group parameters are multicast to 237.1.4.<addr>',
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll current link group',
				},
			],
			callback: ({ options }) => {
				let cmd = 'LG'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.linkgroup + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		system_clocksource: {
			name: 'System - Clock Source',
			description: 'Set the clock source',
			options: [
				{
					id: 'clock',
					type: 'dropdown',
					label: 'Clock Source',
					default: '0',
					choices: self.clockSources,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll the current name',
				},
			],
			callback: ({ options }) => {
				let cmd = 'CS'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.clock + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		system_ADATmirror: {
			name: 'System - ADAT Mirror',
			description: 'Set the number of input channels echoed to ADAT outputs when in Dante mode',
			options: [
				{
					id: 'mirror',
					type: 'dropdown',
					label: 'ADAT mirror',
					default: 1,
					choices: [
						{ id: 1, label: '8 Channels' },
						{ id: 2, label: '16 Channels' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'AM'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.mirror + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		system_automixchannels: {
			name: 'System - Automix Channels',
			description: 'Set the number of dugan automix channels',
			options: [
				{
					id: 'channels',
					type: 'number',
					label: 'Automix Channels',
					default: self.config.channels,
					min: self.MinChannelCount,
					max: self.MaxChannelCount,
					required: true,
					range: true,
					step: 1,
					regex: Regex.NUMBER,
					tooltip: 'Automix Channel Count',
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll current configured automix channels',
				},
			],
			callback: ({ options }) => {
				let cmd = 'CFN'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.channels + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		system_channeloffset: {
			name: 'System - Automix Channel Offset',
			description: 'Set the input channel offset',
			options: [
				{
					id: 'offset',
					type: 'dropdown',
					label: 'Input Offset',
					choices: self.offsetChannelList,
					tooltip: 'Input channel mapped to Automix Channel 1',
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll current configured channel offset',
				},
			],
			callback: ({ options }) => {
				let cmd = 'CFS'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.offset + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		system_blinkmode: {
			name: 'System - Blink Mode',
			description: 'Set the blink mode',
			options: [
				{
					id: 'blink',
					type: 'dropdown',
					label: 'Blink Mode',
					default: 1,
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'BM'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.blink + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		system_DHCP: {
			name: 'System - Network DHCP',
			description: 'Set DHCP',
			options: [
				{
					id: 'dhcp',
					type: 'dropdown',
					label: 'DHCP\r\nRequires reboot to take effect',
					default: 1,
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On' },
					],
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
				},
			],
			callback: ({ options }) => {
				let cmd = 'DH'
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd += ',' + options.dhcp + '\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		query_system: {
			name: 'Query - System',
			description: 'Query system state and write to logs',
			options: [
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Mode',
					default: 'SC',
					choices: [
						{ id: 'SC', label: 'System Configuration' },
						{ id: 'VE', label: 'Firmware Versions' },
						{ id: 'CC', label: 'Client Connections' },
						{ id: 'HW', label: 'Resource Useage' },
						{ id: 'HR', label: 'Switch Headroom' },
						{ id: 'SF', label: 'Sample Rate' },
						{ id: 'MM', label: 'Master' },
					],
				},
			],
			callback: ({ options }) => {
				self.sendCommand(options.mode + '\r\n')
			},
		},
		system_name: {
			name: 'System - Name',
			description: 'Set unit name',
			options: [
				{
					id: 'name',
					type: 'textinput',
					label: 'Unit Name',
					default: 'Dugan Model N',
					required: true,
					Regex: Regex.SOMETHING,
					useVariables: true,
					tooltip: 'Max Length: 15 char',
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll current configured unit name',
				},
			],
			callback: async ({ options }) => {
				let cmd = 'NA'
				if (options.query) {
					cmd += '\r\n'
				} else {
					let unitName = await self.parseVariablesInString(options.name)
					unitName = unitName.slice(0, 15)
					if (unitName.includes(',') || unitName.includes(';') || unitName.includes(';')) {
						self.log('warn', 'Invalid unit name, remove comma or semicolon : ' + unitName)
					} else {
						cmd += ',' + unitName + '\r\n'
						self.sendCommand(cmd)
					}
				}
				self.sendCommand(cmd)
			},
		},
		system_network: {
			name: 'System - Network',
			description: 'Set unit IP, Netmask or Gateway. Note: Requires reboot to take effect',
			options: [
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Mode',
					default: 'IP',
					choices: [
						{ id: 'IP', label: 'IP Address' },
						{ id: 'NM', label: 'Subnet Mask' },
						{ id: 'GW', label: 'Gateway' },
					],
				},
				{
					id: 'byte1',
					type: 'number',
					label: 'Byte 1',
					default: 192,
					min: 1,
					max: 255,
					required: true,
					range: true,
					step: 1,
					regex: Regex.NUMBER,
				},
				{
					id: 'byte2',
					type: 'number',
					label: 'Byte 2',
					default: 168,
					min: 0,
					max: 255,
					required: true,
					range: true,
					step: 1,
					regex: Regex.NUMBER,
				},
				{
					id: 'byte3',
					type: 'number',
					label: 'Byte 3',
					default: 1,
					min: 0,
					max: 255,
					required: true,
					range: true,
					step: 1,
					regex: Regex.NUMBER,
				},
				{
					id: 'byte4',
					type: 'number',
					label: 'Byte 4',
					default: 1,
					min: 0,
					max: 255,
					required: true,
					range: true,
					step: 1,
					regex: Regex.NUMBER,
				},
				{
					id: 'query',
					type: 'checkbox',
					label: 'Query',
					default: false,
					tooltip: 'Query will poll current configured address',
				},
			],
			callback: ({ options }) => {
				let cmd = options.mode
				if (options.query) {
					cmd += '\r\n'
				} else {
					cmd +=
						',' +
						Math.floor(options.byte1) +
						',' +
						Math.floor(options.byte2) +
						',' +
						Math.floor(options.byte3) +
						',' +
						Math.floor(options.byte4) +
						'\r\n'
				}
				self.sendCommand(cmd)
			},
		},
		query_meters: {
			name: 'Metering',
			description: 'Get metering data',
			options: [
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Meter Type',
					default: 'GS',
					choices: [
						{ id: 'GS', label: 'Channel Status' },
						{ id: 'GSA', label: 'Automix Gains' },
						{ id: 'GSC', label: 'Signal Clip' },
						{ id: 'GSS', label: 'Signal Presence' },
						{ id: 'GSI', label: 'Input Peaks' },
						{ id: 'GSO', label: 'Output Peaks' },
						{ id: 'GSM', label: 'Music Reference Peaks' },
						{ id: 'GSN', label: 'NOM Gain Limits' },
						{ id: 'GSX', label: 'Matrix Output Meters' },
					],
				},
			],
			callback: ({ options }) => {
				self.sendCommand(options.mode + '\r\n')
			},
		},
		query_bulk_config: {
			name: 'Query - Bulk Config',
			description: 'Get all channel parameters or matrix cross points',
			options: [
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Channels or Matrix',
					default: 'GP',
					choices: [
						{ id: 'GP', label: 'Channels Parameters' },
						{ id: 'GM', label: 'Matrix Crosspoints' },
					],
				},
			],
			callback: ({ options }) => {
				self.sendCommand(options.mode + '\r\n')
			},
		},
		query_namelist: {
			name: 'Query - Name List',
			description: 'Query a list of channel or scene names',
			options: [
				{
					id: 'mode',
					type: 'dropdown',
					label: 'Channel or Scenes',
					default: 'CNS',
					choices: [
						{ id: 'CNS', label: 'Channels' },
						{ id: 'SNL', label: 'Scenes' },
					],
				},
				{
					id: 'first',
					type: 'number',
					label: 'First name to recall',
					default: 1,
					min: 1,
					max: self.config.channels,
					step: 1,
					range: true,
				},
				{
					id: 'count',
					type: 'number',
					label: 'Number of names to recall',
					default: self.config.channels,
					min: 1,
					max: self.MaxChannelCount,
					step: 1,
					range: true,
				},
			],
			callback: ({ options }) => {
				let first = Math.floor(options.first)
				let count = Math.floor(options.count)
				self.sendCommand(options.mode + ',' + first + ',' + count + '\r\n')
			},
		},
	})
}
