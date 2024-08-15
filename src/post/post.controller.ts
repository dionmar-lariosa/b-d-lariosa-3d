import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAll() {
    try {
      return await this.postService.getAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
