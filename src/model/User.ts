import { Person } from "./Person";

export class User {
  public person: Person;
  public id: string;
  public username: string;
  public password: string;
  public email: string;
  public phone: string;
  public isAdmin: boolean;
  public isApproved: boolean;
  public isLocked: boolean;
  public status: string;
  public createdAt: Date;
  public updatedAt: Date;
}
