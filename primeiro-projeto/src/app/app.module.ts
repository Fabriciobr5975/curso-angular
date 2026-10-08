import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuFormModule } from './meu-form/meu-form.module';
import { MeuPrimeiroComponent } from "./meu-primeiro/meu-primeiro.component";
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { PipesModule } from './pipes/pipes.module';
import { RotasModule } from './rotas/rotas.module';
import { CriarCursoModule } from './servicos/criar-curso/criar-curso.module';
import { CursosServiceModule } from './servicos/cursos/cursos.module';
import { ServicosModule } from './servicos/servicos.module';
import { SettingsService } from './settings.service';
import { SharedModule } from './shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import "@angular/common/locales/global/pt";
// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    CicloComponent,
  ],
  imports: [
    BrowserModule,
    RotasModule,
    CursosModule,
    FormsModule,
    MeuFormModule,
    CriarCursoModule,
    ServicosModule,
    CursosServiceModule,
    SharedModule,
    PipesModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    // routing,
    AppRoutingModule
  ],
  providers: [SettingsService, {
    provide: LOCALE_ID,
    deps: [SettingsService],
    useFactory: (settingsService: SettingsService) => settingsService.getLocale()
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
