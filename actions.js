module.exports = {

	/**
	* Get the available actions.
	*
	* @returns {Object[]} the available actions
	* @access public
	* @since 1.2.0
	*/

	getActions() {
		let actions = {};

		this.CHOICES_INPUT_CHANNEL = [];
		for (let i = 0; i < 64; i++) {
			this.CHOICES_INPUT_CHANNEL.push({ label: `CH ${i + 1}`, id: i });
		}
		
		this.CHOICES_SCENES = [];
		for (let i = 0; i < 250; i++) {
			this.CHOICES_SCENES.push({ label: `SCENE ${i + 1}`, id: i });
		}

		this.CHOICES_DCA = [];
		for (let i = 0; i < 16; i++) {
			this.CHOICES_DCA.push({ label: `DCA ${i + 1}`, id: i });
		}
	
		this.CHOICES_MUTE = [];
		for (let i = 0; i < 8; i++) {
			this.CHOICES_MUTE.push({ label: `MUTE ${i + 1}`, id: i });
		}
		
		this.CHOICES_PHANTOM = (name, qty, ofs) => {
			this.CHOICES = [];
			for (let i = 1; i <= qty; i++) {
				this.CHOICES.push({ label: `${name} ${i}`, id: i + ofs });
		}
			return [{
				type:    'dropdown',
				label:   name,
				id:      'socket',
				default: 1 + ofs,
				choices: this.CHOICES
			},{
				type:    'checkbox',
				label:   'Phantom',
				id:      'phantom',
				value:   0x7F,
				default: true,
				
		}]
		}

		this.muteoptions = (name, qty, ofs) => {
			this.CHOICES = [];
			for (let i = 1; i <= qty; i++) {
				this.CHOICES.push({ label: `${name} ${i}`, id: i + ofs });
			}
			return [{
				type:    'dropdown',
				label:   name,
				id:      'strip',
				default: 1 + ofs,
				choices: this.CHOICES
			},{
				type:    'checkbox',
				label:   'Mute',
				id:      'mute',
				default: true
			}]
		}
		
		this.setfaderlevel = (name, qty, ofs) => {
			this.CHOICES = [];
			for (let i = 1; i <= qty; i++) {
				this.CHOICES.push({ label: `${name} ${i}`, id: i + ofs });	
				}
			
			return [{
				type:    'dropdown',
				label:   name,
				id:      'strip',
				default: 1 + ofs,
				choices: this.CHOICES,
				minChoicesForSearch: 9
			},{
				type:    'dropdown',
				label:   'Level',
				id:      'level',
				default: '0',
				choices: [
    				{ id: '0', label: '-INF dBu' },
					{ id: '1', label: '-53.5 dBu' },
					{ id: '2', label: '-53 dBu' },
					{ id: '3', label: '-52.5 dBu' },
					{ id: '4', label: '-52 dBu' },
					{ id: '5', label: '-51.5 dBu' },
					{ id: '6', label: '-51 dBu' },
					{ id: '7', label: '-50.5 dBu' },
					{ id: '8', label: '-50 dBu' },
					{ id: '9', label: '-49.5 dBu' },
					{ id: '10', label: '-49 dBu' },
					{ id: '11', label: '-48.5 dBu' },
					{ id: '12', label: '-48 dBu' },
					{ id: '13', label: '-47.4 dBu' },
					{ id: '14', label: '-46.9 dBu' },
					{ id: '15', label: '-46.4 dBu' },
					{ id: '16', label: '-45.9 dBu' },
					{ id: '17', label: '-45 dBu' },
					{ id: '18', label: '-44.5 dBu' },
					{ id: '19', label: '-44 dBu' },
					{ id: '20', label: '-43.5 dBu' },
					{ id: '21', label: '-43 dBu' },
					{ id: '22', label: '-42.5 dBu' },
					{ id: '23', label: '-42 dBu' },
					{ id: '24', label: '-41.5 dBu' },
					{ id: '25', label: '-41 dBu' },
					{ id: '26', label: '-40.5 dBu' },
					{ id: '27', label: '-40 dBu' },
					{ id: '28', label: '-39.5 dBu' },
					{ id: '29', label: '-39 dBu' },
					{ id: '30', label: '-38.5 dBu' },
					{ id: '31', label: '-38 dBu' },
					{ id: '32', label: '-37.5 dBu' },
					{ id: '33', label: '-37 dBu' },
					{ id: '34', label: '-36.5 dBu' },
					{ id: '35', label: '-36 dBu' },
					{ id: '36', label: '-35.5 dBu' },
					{ id: '37', label: '-35 dBu' },
					{ id: '38', label: '-34.5 dBu' },
					{ id: '39', label: '-34 dBu' },
					{ id: '40', label: '-33.5 dBu' },
					{ id: '41', label: '-33 dBu' },
					{ id: '42', label: '-32.5 dBu' },
					{ id: '43', label: '-32 dBu' },
					{ id: '44', label: '-31.5 dBu' },
					{ id: '45', label: '-31 dBu' },
					{ id: '46', label: '-30.5 dBu' },
					{ id: '47', label: '-30 dBu' },
					{ id: '48', label: '-29.5 dBu' },
					{ id: '49', label: '-29 dBu' },
					{ id: '50', label: '-28.5 dBu' },
					{ id: '51', label: '-28 dBu' },
					{ id: '52', label: '-27.5 dBu' },
					{ id: '53', label: '-27 dBu' },
					{ id: '54', label: '-26.5 dBu' },
					{ id: '55', label: '-26 dBu' },
					{ id: '56', label: '-25.5 dBu' },
					{ id: '57', label: '-25 dBu' },
					{ id: '58', label: '-24.5 dBu' },
					{ id: '59', label: '-24 dBu' },
					{ id: '60', label: '-23.5 dBu' },
					{ id: '61', label: '-23 dBu' },
					{ id: '62', label: '-22.5 dBu' },
					{ id: '63', label: '-22 dBu' },
					{ id: '64', label: '-21.5 dBu' },
					{ id: '65', label: '-21 dBu' },
					{ id: '66', label: '-20.5 dBu' },
					{ id: '67', label: '-20 dBu' },
					{ id: '68', label: '-19.5 dBu' },
					{ id: '69', label: '-19 dBu' },
					{ id: '70', label: '-18.5 dBu' },
					{ id: '71', label: '-18 dBu' },
					{ id: '72', label: '-17.5 dBu' },
					{ id: '73', label: '-17 dBu' },
					{ id: '74', label: '-16.5 dBu' },
					{ id: '75', label: '-16 dBu' },
					{ id: '76', label: '-15.5 dBu' },
					{ id: '77', label: '-15 dBu' },
					{ id: '78', label: '-14.5 dBu' },
					{ id: '79', label: '-14 dBu' },
					{ id: '80', label: '-13.5 dBu' },
					{ id: '81', label: '-13 dBu' },
					{ id: '82', label: '-12.5 dBu' },
					{ id: '83', label: '-12 dBu' },
					{ id: '84', label: '-11.5 dBu' },
					{ id: '85', label: '-11 dBu' },
					{ id: '86', label: '-10.5 dBu' },
					{ id: '87', label: '-10 dBu' },
					{ id: '88', label: '-9.5 dBu' },
					{ id: '89', label: '-9 dBu' },
					{ id: '90', label: '-8.5 dBu' },
					{ id: '91', label: '-8 dBu' },
					{ id: '92', label: '-7.5 dBu' },
					{ id: '93', label: '-7 dBu' },
					{ id: '94', label: '-6.5 dBu' },
					{ id: '95', label: '-6 dBu' },
					{ id: '96', label: '-5.5 dBu' },
					{ id: '97', label: '-5 dBu' },
					{ id: '98', label: '-4.5 dBu' },
					{ id: '99', label: '-4 dBu' },
					{ id: '100', label: '-3.5 dBu' },
					{ id: '101', label: '-3 dBu' },
					{ id: '102', label: '-2.5 dBu' },
					{ id: '103', label: '-2 dBu' },
					{ id: '104', label: '-1.5 dBu' },
					{ id: '105', label: '-1 dBu' },
					{ id: '106', label: '-0.5 dBu' },
					{ id: '107', label: '0 dBu' },
					{ id: '108', label: '+0.5 dBu' },
					{ id: '109', label: '+1 dBu' },
					{ id: '110', label: '+1.5 dBu' },
					{ id: '111', label: '+2 dBu' },
					{ id: '112', label: '+2.5 dBu' },
					{ id: '113', label: '+3 dBu' },
					{ id: '114', label: '+3.5 dBu' },
					{ id: '115', label: '+4 dBu' },
					{ id: '116', label: '+4.5 dBu' },
					{ id: '117', label: '+5 dBu' },
					{ id: '118', label: '+5.5 dBu' },
					{ id: '119', label: '+6 dBu' },
					{ id: '120', label: '+6.5 dBu' },
					{ id: '121', label: '+7 dBu' },
					{ id: '122', label: '+7.5 dBu' },
					{ id: '123', label: '+8 dBu' },
					{ id: '124', label: '+8.5 dBu' },
					{ id: '125', label: '+9 dBu' },
					{ id: '126', label: '+9.5 dBu' },
					{ id: '127', label: '+10 dBu' }
  ],
				minChoicesForSearch: 0
			}]
		};
		
		actions['mute_input'] = {
			label: 'Mute Input',
			options: this.muteoptions('Input Channel', 64, 0x1F)
		};

		actions['mute_mix'] = {
			label: 'Mute Mix',
			options: this.muteoptions('Mix', 32, 0x5F)
		};
		
		actions['mute_fx_send'] = {
			label: 'Mute FX Send',
			options: this.muteoptions('FX Send', 8, -1)
		};

		actions['mute_fx_return'] = {
			label: 'Mute FX Return',
			options: this.muteoptions('FX Return', 8, 0x07)
		};

		actions['mute_dca'] = {
			label: 'Mute DCA',
			options: this.muteoptions('DCA', 16, 0x0F)
		};			
		
		actions['preamp_phantom'] = {
			label: 'Toggle 48v for MixRack Socket',
			options:  this.CHOICES_PHANTOM('Mixrack Socket', 64, -1)
		};

		actions['set_input_fader'] = {
			label: 'Set Input Fader to Level',
			options: this.setfaderlevel('Channel', 64, 0x1F)
		};

		actions['set_mix_fader'] = {
			label: 'Set Mix Fader to Level',
			options: this.setfaderlevel('Mix', 32, 0x5F)
		};

		actions['set_FXS_fader'] = {
			label: 'Set FX Send Fader to Level',
			options: this.setfaderlevel('FX Send', 8, -1)
		};

		actions['set_FXR_fader'] = {
			label: 'Set FX Return Fader to Level',
			options: this.setfaderlevel('FX Return', 8, 0x07)
		};

		actions['set_DCA_fader'] = {
			label: 'Set DCA Fader to Level',
			options: this.setfaderlevel('DCA', 16, 0x0F)
		};
		
		actions['scene_recall'] = {
			label: 'Scene recall',
			options: [{
				type:    'dropdown',
				label:   'Scene Number',
				id:      'sceneNumber',
				default: '0',
				choices: this.CHOICES_SCENES
			}]
		};

		return actions;
	
	}
}
