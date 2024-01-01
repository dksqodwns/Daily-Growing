import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestJoinDto } from './dto/RequestJoinDto';
import { pipe } from '@fxts/core';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async joinUser(body: RequestJoinDto) {
    if (!body) {
      return new HttpException(
        '입력값을 확인해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return pipe(await this.userRepository.save(body), async (user) => ({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        nick: user.nick,
      },
    }));
  }
}
