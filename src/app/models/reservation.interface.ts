import { Announcement } from "./announcement.interface"
import User from "./user.interface"


export interface Reservation {
 readonly id: number
  startDate: string
  endDate: string
  status: string
  totalAmount: string
  client: User
  announcement: Announcement
}