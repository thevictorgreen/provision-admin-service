export const navigation = [
  {
    name: 'Dashboard',
    url: '/content/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Data Collections'
  },
  {
    name: 'Machines',
    url: '/content/machines',
    icon: 'fa fa-server',
    children: [
      {
        name: 'List',
        url: '/content/machines/machines-list',
        icon: 'fa fa-server'
      },
      {
        name: 'Search',
        url: '/content/machines/machines-search/search',
        icon: 'fa fa-server'
      },
      {
        name: 'Add All',
        url: '/content/machines/machines-add',
        icon: 'fa fa-server'
      },
      {
        name: 'Add Dell',
        url: '/content/machines/machines-add-dell',
        icon: 'fa fa-server'
      }
    ]
  },
  {
    name: 'Makes & Models',
    url: '/content/makes',
    icon: 'fa fa-file-code-o',
    children: [
      {
        name: 'List',
        url: '/content/makes/makes-list',
        icon: 'fa fa-file-code-o'
      },
      {
        name: 'Add',
        url: '/content/makes/makes-add',
        icon: 'fa fa-file-code-o'
      }
    ]
  },
  {
    name: 'Users',
    url: '/content/users',
    icon: 'fa fa-users',
    children: [
      {
        name: 'List',
        url: '/content/users/users-list',
        icon: 'fa fa-users'
      },
      {
        name: 'Detail',
        url: '/content/users/users-detail',
        icon: 'fa fa-users'
      },
      {
        name: 'Search',
        url: '/content/users/users-search',
        icon: 'fa fa-users'
      },
      {
        name: 'Add',
        url: '/content/users/users-add',
        icon: 'fa fa-users'
      }
    ]
  }
];
