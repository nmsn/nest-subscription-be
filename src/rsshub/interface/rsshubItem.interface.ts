export interface RsshubItem {
  title: string;
  link: string;
  pubDate: string;
  type: string;
}

export interface RsshubResponseItem {
  lastBuildDate: string;
  updated: string;
  ttl: string;
  atomlink: string;
  title: string;
  link: string;
  description: string;
  item: [];
}

export interface RsshubSubItem {
  title: string;
  description: string;
  pubDate: Date;
  author: string;
  link: string;
  guid: string;
}

export interface RsshubFormatItem {
  updated: Date;
  atomlink: string;
  title: string;
  description: string;
  pubDate: Date;
  author: string;
  link: string;
  guid: string;
  saved: Date,
  urlParams: string[],
}
