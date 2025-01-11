export interface PersonInter{
  id:string,
  name:string,
  age:number,
}

// export type Persons = PersonInter[]
export type Persons = Array<PersonInter>
