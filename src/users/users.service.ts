import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { isNil, pipe, throwIf } from '@fxts/core';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<User> {
    return pipe(
      await this.usersRepository.findOne({
        where: { id },
      }),
      throwIf(
        isNil,
        () =>
          new HttpException('해당하는 유저가 없습니다.', HttpStatus.NOT_FOUND),
      ),
    );
  }
}
