import { inject, Injectable } from '@angular/core';
import { TarefaModel } from '../models/tarefa.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

//Como gerar service: ng g s services\tarefa.service
// Service é responsável pela comunicação com a API de tarefas
export class TarefaService {
  //Cliente responsável por fazer a requisiçãopara o back-end (API)
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/tarefas`;

  listar(): Observable<TarefaModel[]> {
    const url = this.baseUrl;
    // fazer requisição para carregar a lista de tarefas
    return this.http.get<TarefaModel[]>(url);
  }

  cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {
    const url = this.baseUrl;

    return this.http.post<TarefaModel>(url, tarefa);
  }

  apagar(id: string): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    // Aqui é o void pois o status code da request é 204 No Content
    // (back-end não retorna dados quando é 204)
    return this.http.delete<void>(url);
  }

  obterPorId(id: string): Observable<TarefaModel>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<TarefaModel>(url);
  }

  editar(id: string, tarefa: TarefaModel): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<void>(url, tarefa);
  }
}
