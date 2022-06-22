import { Film } from 'src/models/film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/services/film.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  film : Film = new Film()
  constructor(private catalogo : FilmService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.catalogo.buscarProdutoPorId(Number(str)).subscribe((data) =>{
      this.film = data
      console.log(this.film)
    })

  }

  saveFilm(){
    this.catalogo.atualizarFilm(this.film).subscribe(() => {
      this.router.navigate(['/listfilmes']);
    });
  }
  removeFilms(id: number){
    console.log(id)
    this.catalogo.deletarFilms(id).subscribe(() => {
      this.router.navigate(['/listfilmes']);
    });
  }
}
