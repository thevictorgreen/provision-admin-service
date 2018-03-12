export class Machine {
  _id:string;

  serial_number:string;

  hostname:string;

  mac_addr:string;

  make_model: {
    make:string;
    model:string;
  };

  property_custodian:string;

  cd_number:string;

  property_owner: string;

  branch: string;

  division: string;

  point_of_contact: string;

  project: string;

  machine_use: string;

  initial_software:string[] = [
    "spacewalk",
    "puppet-agent",
    "sensu",
    "ipa-client"
  ];

  property_custodian_tasks:  {
    property_custodian:boolean;
    cd_number:boolean;
    property_owner:boolean;
    branch:boolean;
    division:boolean;
  };

  property_owner_tasks: {
    point_of_contact:boolean;
  };

  point_of_contact_tasks: {
    project:boolean;
    use: boolean;
    initial_software_selected: boolean;
  };

  it_tasks: {
    unboxed: boolean;
    added_to_inventory: boolean;
    has_available_pdu: boolean;
    has_initial_config:boolean;
    has_available_rack:boolean;
    moved_to_datacenter:boolean;
    initial_software_installed:boolean;
  }

  network_tasks: {
    configured_port:boolean;
  }

  maintenance_tasks: {
    has_available_power: boolean;
  }

  provisioning_status: string;

  tags:string [] = [];

  provisioning_log:string [] = [];

}
