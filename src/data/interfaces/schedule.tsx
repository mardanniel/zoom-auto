import { ZoomLink } from "./zoom-link"

export interface Schedule {
  id: string,
  title: string,
  description: string,
  datetime: Date
  link: ZoomLink
}