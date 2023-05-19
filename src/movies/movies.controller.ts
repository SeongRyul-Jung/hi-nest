import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies') //''<-endpoint
export class MoviesController {

  @Get()
  getAll() {
    return "This will return all movies";
  }

  @Get('search')
  serch(@Query("year") searchingYear: string) {
    return `We are serching for a movie made after: ${searchingYear}`
  }

  @Get("/:id")
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete("/:id")
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  Patch(@Param('id') movieId: string, @Body() updateData) {
    // return `This will patch a movie with the id: ${movieId}`;
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

}

