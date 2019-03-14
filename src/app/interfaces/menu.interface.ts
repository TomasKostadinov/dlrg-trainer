export interface Menu {
  title: string;
  url: string;
  icon: string;
}

export interface MenuGroup {
  items: Menu[];
  title: string;
}
