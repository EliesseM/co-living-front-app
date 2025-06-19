export type Root = Root2[]

export interface Root2 {
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
  images: Image[]
  services: Service[]
  equipment: Equipment[]
}

export interface Owner {
 readonly id: number
  email: string
}

export interface Image {
 readonly id: number
  imageUrl: string
}

export interface Service {
 readonly id: number
  title: string
  description: string
}

export interface Equipment {
 readonly id: number
  title: string
  description: string
}
