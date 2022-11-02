import { ZoomLink } from "./zoom-link"

export interface Schedule {
  id: string;
  title: string;
  description: string;
  datetime: number;
  link: ZoomLink;
}