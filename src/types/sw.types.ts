export interface IPeopleHTTPResponse {
  count: number
  next: string
  previous: string
  results: IPerson[]
}

export interface IPerson {
  id: number
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: number
  films: number[]
  species: number[]
  vehicles: any[]
  starships: any[]
  created: string
  edited: string
  url: string
}
