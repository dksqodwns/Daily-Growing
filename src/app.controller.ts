import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestJoinDto } from './dto/RequestJoinDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/join')
  joinUser(@Body() body: RequestJoinDto) {
    return this.appService.joinUser(body);
  }
}
