import { Entity } from "../../core/entities/entity"

interface UserProps {
  name: string
  createdAt: Date
  updatedAt?: Date
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name
  }
}