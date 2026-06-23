import { Component, inject, signal } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ProjetoService } from '../../services/projetos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-cadastrar',
  imports: [FormsModule],
  templateUrl: './projeto-cadastrar.html',
  styleUrl: './projeto-cadastrar.scss',
})
export class ProjetoCadastrar {
  private readonly projetoService = inject(ProjetoService);
  private readonly router = inject(Router);
  
}
