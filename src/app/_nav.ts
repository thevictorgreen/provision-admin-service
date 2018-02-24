export const navigation = [
  {
    name: 'Dashboard',
    url: '/content/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'UI elements'
  },
  {
    name: 'Components',
    url: '/content/components',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Buttons',
        url: '/content/components/buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Social Buttons',
        url: '/content/components/social-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Cards',
        url: '/content/components/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/content/components/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Modals',
        url: '/content/components/modals',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/content/components/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/content/components/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/content/components/tabs',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Icons',
    url: '/content/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Font Awesome',
        url: '/content/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/content/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/content/forms',
    icon: 'icon-note',
    children: [
      {
        name: 'Basic Forms',
        url: '/content/forms/basic-forms',
        icon: 'icon-note'
      },
      {
        name: 'Advanced Forms',
        url: '/content/forms/advanced-forms',
        icon: 'icon-note'
      },
    ]
  }
];
