import { ZoomLink } from "./zoom-link"

export interface Schedule {
  title: string;
  description: string;
  datetime: number;
  link: ZoomLink;
}

/**
 * To be added:
 * - Alarm
 */