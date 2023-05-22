import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies') //''<-endpoint
export class MoviesController {

  constructor(private readonly MoviesService: MoviesService) { }


  @Get()
  getAll(): Movie[] {
    // return "This will return all movies";
    return this.MoviesService.getAll();
  }

  @Get("/:id")
  getOne(@Param('id') movieId: string): Movie {
    // return `This will return one movie with the id: ${movieId}`;
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.MoviesService.create(movieData);
    // console.log(movieData);
    // return movieData;
  }

  @Delete("/:id")
  remove(@Param('id') movieId: string) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  Patch(@Param('id') movieId: string, @Body() updateData) {
    // return `This will patch a movie with the id: ${movieId}`;
    return this.MoviesService.update(movieId, updateData);
  }

}

// 영상 2.1까지 완료