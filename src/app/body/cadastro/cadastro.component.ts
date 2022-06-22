import { Film } from 'src/models/film.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/services/film.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  catalogo : Film = new Film();
  listMovies: Film[] = [];
  constructor(private film: FilmService, private router: Router) { }

  ngOnInit(): void {
    console.log("Olaaa")
  }
  ngOnChanges(): void {
    this.getMovies()
}

  incluir(){
    console.log(this.catalogo)
    this.film.incluirCatalogo(this.catalogo).subscribe((data) => {
      console.log("deuuu boa")
      this.getMovies()
    })
    this.catalogo.title = ""
    this.catalogo.url = ""
    this.catalogo.genero = ""
    this.catalogo.description = ""
  }

  getMovies(){
    this.film.getFilmes().subscribe(data => {
       console.log("aquiii")
       console.log(data)
       this.listMovies = data
     })

   }

}
