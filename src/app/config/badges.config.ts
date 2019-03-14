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
        counts: 2
      } as CounterTask,
      {
        title: '200m',
        _type: 'DistanceTask',
        distance: 1200
      } as DistanceTask,
      {
        title: 'Sprung aus 1m Höhe oder Startsprung',
        _type: 'TimerTask',
        time: 20
      } as TimerTask,
      {
        title: 'Kenntnis der Baderegeln',
        _type: 'CheckTask',
      } as CheckTask,
    ],
  },
];
