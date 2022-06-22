import { FilmService } from 'src/services/film.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/models/film.model';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  listMovies: Film[] = [];

  constructor(private film: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
   this.film.getFilmes().subscribe(data => {
      console.log("aquiii")
      console.log(data)
      this.listMovies = data
    })

  }

}
