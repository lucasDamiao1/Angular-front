import { EditarComponent } from './body/filmes/editar/editar.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./body/cadastro/cadastro.component";
import { FilmesComponent } from "./body/filmes/filmes.component";


const routes: Routes = [
  { path: "login",component: LoginComponent},
  { path: "register",component: RegisterComponent},
  { path: "cadastros",component: CadastroComponent},
  { path: "filmes",component: FilmesComponent},
  { path: "editar/:id",component: EditarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
