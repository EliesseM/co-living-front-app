import { Equipment } from "./equipment.interface"
import { Image } from "./image.interface"
import { Service } from "./service.interface"
import User from "./user.interface"


export interface  Announcement {
 readonly id: number
  title: string
  description: string
  address: string
  city: string
  zipcode: string
  lattitude: string
  longitude: string
  maxClient: number
  dailyPrice: number
  imageCover: string
  owner?: User
  images: Image[]
  services: Service[]
  equipments: Equipment[]
}
