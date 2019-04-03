import {MenuGroup} from '../interfaces/menu.interface';

export const appPages: MenuGroup[] = [
  {
    title: 'App',
    items: [
      {
        title: 'Startseite',
        url: '/home',
        icon: 'home',
      },
      {
        title: 'Meine Gruppen',
        url: '/teams',
        icon: 'contacts',
      },
      {
        title: 'Anwesenheitsliste',
        url: '/attendance',
        icon: 'calendar',
      },
      {
        title: 'Prüfungsabnahme',
        url: '/badges',
        icon: 'stopwatch',
      },
      {
        title: 'Tools',
        url: '/home',
        icon: 'hammer',
      },
    ],
  }, {
    title: 'Mein Profil',
    items: [
      {
        title: 'Mein Profil',
        url: '/profile',
        icon: 'person',
      },
      {
        title: 'Abmelden',
        url: '/login/logout',
        icon: 'log-out',
      }],
  }, {
    title: 'Info',
    items: [
      {
        title: 'Impressum',
        url: '/badges',
        icon: 'list',
      },
      {
        title: 'Über diese App',
        url: '/badges',
        icon: 'information-circle-outline',
      },
      {
        title: 'Einstellungen',
        url: '/badges',
        icon: 'cog',
      }],
  },
];
