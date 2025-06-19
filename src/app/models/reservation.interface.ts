export type Root = Root2[]

export interface Root2 {
 readonly id: number
  startDate: string
  endDate: string
  status: string
  totalAmount: string
  client: Client
  announcement: Announcement
}

export interface Client {
 readonly id: number
  email: string
  name: string
  firstName: string
  billingAddress: string
  birthDate: string
}

export interface Announcement {
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
  owner: Owner
}

export interface Owner {
 readonly id: number
  email: string
  name: string
  firstName: string
  billingAddress: string
  birthDate: string
}