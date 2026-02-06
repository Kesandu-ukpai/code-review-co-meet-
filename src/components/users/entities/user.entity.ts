import { Entity, Index, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity('users')
@Index(['githubId'], { unique: true })
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'githubId', type: 'bigint', unique: true})
    githubId: string

    @Column({})
    username: string;

    @Column({})
    email: string

    @Column({})
    avatarUrl: string;

    @Column({})
    createdAt: Date;

    @Column({})
    updatedAt: Date
}
