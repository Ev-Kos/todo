export type TTask = {
  id: string;
  text: string;
  editing: boolean;
}

export type TTasks = {
  tasks: TTask[];
}