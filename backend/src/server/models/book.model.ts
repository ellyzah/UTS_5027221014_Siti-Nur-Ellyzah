import { ObjectId } from "mongodb";

export class BookModelWithID {
  constructor(
    public id: ObjectId,
    public author: string,
    public title: string,
    public publisher: string,
    public yearPublication: number,
    public ISBN: number,
    public loanBooks: string,
    public description: string,
  ) {}
}

export class BookModel {
  constructor(
    public author: string,
    public title: string,
    public publisher: string,
    public yearPublication: number,
    public ISBN: number,
    public loanBooks: string,
    public description: string
  ) {}
}
