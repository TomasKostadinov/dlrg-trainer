export interface Badge {
  title: string;
  tasks?: Task[];
  shortTitle?: string,
  category?: string,
  id?: number;
}

export interface Task {
  title: string;
  description?: string;
  _type: string;
}

export interface TimerTask extends Task {
  time: number; // time in seconds
}

export interface DistanceTask extends Task {
  distance: number;
}

export interface DistanceTimerTask extends TimerTask {
  distance: number; // distance in metres
}

export interface CounterTask extends Task {
  counts: number;
}

export interface CheckTask extends Task {
  check: boolean;
}

export interface TaskListTask extends Task {
  tasks: Task[];
}
