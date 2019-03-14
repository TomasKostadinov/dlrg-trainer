import {Badge, CheckTask, CounterTask, DistanceTask, DistanceTimerTask, TaskListTask, TimerTask} from '../interfaces/badge.interface';

export const badges: Badge[] = [
  {
    id: 1000,
    title: 'Jugendschwimmabzeichen Bronze',
    shortTitle: 'Bronze',
    category: 'Jugendschwimmabzeichen',
    tasks: [
      {
        title: '',
        tasks: [
          {
            title: 'Sprung vom Beckenrand',
            check: false,
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: '200m Schwimmen in höchstens 15 Minuten',
            time: 15 * 60,
            distance: 1200,
            _type: 'DistanceTimerTask',
          } as DistanceTimerTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
      {
        title: 'Einmal ca. 2m Tieftauchen von der Wasseroberfläche mit Heraufholen eines Gegenstandes',
        _type: 'CheckTask',
      } as CheckTask,
      {
        title: '2 Sprünge aus 1m Höhe oder Startsprung',
        _type: 'CounterTask',
        counts: 2,
      } as CounterTask,
      {
        title: '200m',
        _type: 'DistanceTask',
        distance: 1200,
      } as DistanceTask,
      {
        title: 'Sprung aus 1m Höhe oder Startsprung',
        _type: 'TimerTask',
        time: 20,
      } as TimerTask,
      {
        title: 'Kenntnis der Baderegeln',
        _type: 'CheckTask',
      } as CheckTask,
    ],
  }, {
    id: 4000,
    title: 'Juniorretter',
    shortTitle: 'Juniorretter',
    category: '',
    tasks: [
      {
        title: '100 m Schwimmen ohne Unterbrechung, davon',
        tasks: [
          {
            title: '25 m Kraulschwimmen',
            distance: 25,
            _type: 'DistanceTask',
          } as DistanceTask,
          {
            title: '25 m Rückenkraulschwimmen',
            distance: 25,
            _type: 'DistanceTask',
          } as DistanceTask,
          {
            title: '25 m Brustschwimmen',
            distance: 25,
            _type: 'DistanceTask',
          } as DistanceTask,
          {
            title: '25 m Rückenschwimmen mit Grätschschwung',
            distance: 25,
            _type: 'DistanceTask',
          } as DistanceTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
      {
        title: '25 m Schleppen eines Partners mit Achselgriff',
        _type: 'CheckTask',
      } as CheckTask,
      {
        title: 'Kombinierte Übung in leichter Kleidung zur Selbstrettung, die ohne Pause in angegebener Reihenfolge zu erfüllen ist',
        tasks: [
          {
            title: 'Fußwärts ins Wasser springen, danach Schwebelage einnehmen',
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: '4 Minuten Schweben an der Wasseroberfläche in Rückenlage mit Paddelbewegungen',
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: '6 Minuten langsames Schwimmen, jedoch mindestens viermal die Körperlage' +
              ' wechseln (Bauch-, Rücken-, Seitlage); die Kleidungsstücke im tiefen Wasser ausziehen',
            _type: 'TimerTask',
          } as TimerTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
      {
        title: 'Kombinierte Übung zur Fremdrettung, die ohne Pause in angegebener Reihenfolge zu erfüllen ist',
        tasks: [
          {
            title: '15 m zu einem Partner in Bauchlage anschwimmen, nach halber Strecke auf ca. 2 m Tiefe ' +
              'abtauchen und zwei kleine Tauchringe heraufholen; diese anschließend fallen lassen und das Anschwimmen fortsetzen',
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: 'Rückweg: 15 m Schleppen eines Partners mit Achselgriff',
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: 'sichern des Geretteten durch festhalten am Ufer/ Beckenrand',
            _type: 'CheckTask',
          } as CheckTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
      {
        title: 'Kenntnisse über',
        tasks: [
          {
            title: 'Maßnahmen der Selbstrettung',
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: 'Grundverhalten für die Fremdrettung',
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: 'elementare "Erste-Hilfe"',
            _type: 'CheckTask',
          } as CheckTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
    ],
  }, {
    id: 3000,
    title: 'Rettungsschwimmabzeichen Bronze',
    shortTitle: 'Bronze',
    category: 'Rettungsschwimmabzeichen',
    tasks: [
      {
        title: '200 m Schwimmen in höchstens 10 Minuten',
        tasks: [
          {
            title: 'Maximale Zeit: 10 min',
            time: 10 * 60,
            _type: 'TimerTask',
          } as TimerTask,
          {
            title: 'davon 100 m in Bauchlage',
            distance: 100,
            _type: 'DistanceTask',
          } as DistanceTask,
          {
            title: 'davon 100 m in Rückenlage mit Grätschschwung ohne Armtätigkeit',
            distance: 100,
            _type: 'DistanceTask',
          } as DistanceTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
      {
        title: '100m Kleiderschwimmen, anschließend im Wasser entkleiden',
        tasks: [
          {
            title: 'Maximale Zeit: 10 min',
            time: 4 * 60,
            _type: 'TimerTask',
          } as TimerTask,
          {
            title: '100 m Kleiderschwimmen',
            distance: 100,
            _type: 'DistanceTask',
          } as DistanceTask,
          {
            title: 'Im Wasser entkleidet',
            _type: 'CheckTask',
          } as CheckTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
      {
        title: '3 verschiedene Sprünge aus etwa 1 m Höhe (z.B. Kopfsprung, Paketsprung, Startsprung)',
        _type: 'CounterTask',
        counts: 3,
      } as CounterTask,
      {
        title: '15 m Streckentauchen',
        _type: 'DistanceTask',
        distance: 1200,
      } as DistanceTask,
      {
        title: 'Zweimal Tieftauchen von der Wasseroberfläche, einmal kopfwärts und einmal fußwärts, ' +
          'innerhalb von 3 Minuten mit zweimaligem Heraufholen eines 5-kg-Tauchringes oder ' +
          'eines gleichartigen Gegenstandes (Wassertiefe zwischen 2 und 3 m)',
        _type: 'CounterTask',
        counts: 2,
      } as CounterTask,
      {
        title: '50 m Transportschwimmen: Schieben oder Ziehen',
        _type: 'DistanceTask',
        distance: 50,
      } as DistanceTask,
      {
        title: 'Fertigkeiten zur Vermeidung von Umklammerungen sowie zur' +
          ' Befreiung aus Halsumklammerung von hinten und Halswürgegriff von hinten\n',
        _type: 'CheckTask',
      } as CheckTask,
      {
        title: '50 m Schleppen mit Kopf- oder Achselschleppgriff und dem Standard-Fesselschleppgriff',
        _type: 'DistanceTask',
        distance: 50,
      } as DistanceTask,
      {
        title: 'Kombinierte Übung, die ohne Pause in der angegebenen Reihenfolge zu erfüllen ist',
        tasks: [
          {
            title: '20 m Anschwimmen in Bauchlage, hierbei etwa auf halber Strecke Abtauchen in 2-3 m Tiefe ' +
              'und Heraufholen eines 5-kg-Tauchrings oder eines gleichartigen Gegenstandes,' +
              ' diesen anschließend fallen lassen und das Anschwimmen fortsetzen,',
            _type: 'CheckTask',
          } as CheckTask,
          {
            title: '20 m Schleppen eines Partners',
            _type: 'CheckTask',
          } as CheckTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
      {
        title: 'Demonstration des Anlandbringens',
        _type: 'CheckTask',
      } as CheckTask,
      {
        title: 'Vorführung von Herz-Lungen-Wiederbelebung (HLW)',
        _type: 'CheckTask',
      } as CheckTask,
      {
        title: 'Theoretische Prüfung',
        tasks: [
          {
            title: 'Wiederbelebungsmethoden, Vermeidung von Umklammerungen, Erste Hilfe,' +
              'Die DLRG: Organisation, Aufgaben unter besonderer Berücksichtigung des Wasserrettungsdienstes',
            _type: 'CheckTask',
          } as CheckTask,
        ],
        _type: 'TaskListTask',
      } as TaskListTask,
    ],
  },
];
