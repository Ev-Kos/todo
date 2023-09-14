export type TTask = {
  id: string;
  text: string;
  editing: boolean;
  completed: boolean;
}

export type TTasks = {
  tasks: TTask[];
}

