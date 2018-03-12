machine = {
  _id: '',

  serial_number:'',

  hostname:'',

  mac_addr:'',

  make_model: {
    make:'',
    model:''
  },

  property_custodian:'',

  cd_number:'',

  property_owner:'',

  branch:'',

  division:'',

  point_of_contact:'',

  project:'',

  machine_use:'',

  initial_software: [
    "spacewalk",
    "puppet-agent",
    "sensu",
    "ipa-client"
  ],

  property_custodian_tasks:  {
    property_custodian:false,
    cd_number:false,
    property_owner:false,
    branch:false,
    division:false
  },

  property_owner_tasks: {
    point_of_contact:false
  },

  point_of_contact_tasks: {
    project:false,
    use: false,
    initial_software_selected: false
  },

  it_tasks: {
    unboxed: false,
    added_to_inventory: false,
    has_available_pdu: false,
    has_initial_config: false,
    has_available_rack: false,
    moved_to_datacenter: false,
    initial_software_installed:false
  },

  network_tasks: {
    configured_port:false
  },

  maintenance_tasks: {
    has_available_power:false
  },

  provisioning_status:'PHASE-1',

  tags:[],

  provisioning_log:[]

}
