import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './movies/app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], //express - router 역할
  providers: [],
})
export class AppModule { }
