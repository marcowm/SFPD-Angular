import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import {  Observable } from 'rxjs';
import { ArquivoModel } from 'app/models/ArquivoModel';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  url: string = environment.apiUrl;
  urlProducer: string = environment.apiProducer;

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<[ArquivoModel]> { return this.httpClient.get<[ArquivoModel]>(this.url + '/arquivo/obterArquivos'); };
  obterEspacoDisco(): Observable<[any]> { return this.httpClient.get<[any]>(this.url + '/arquivo/obterEspacoDisco'); };
  obterTotalArquivos(): Observable<[any]> { return this.httpClient.get<[any]>(this.url + '/arquivo/obterTotalArquivos'); };
  obterTotalDownloads(): Observable<[any]> { return this.httpClient.get<[any]>(this.url + '/arquivo/obterTotalDownloads'); };
  obterTotalRotinasDisparadas(): Observable<[any]> { return this.httpClient.get<[any]>(this.url + '/arquivo/obterTotalRotinasDisparadas'); };
  obterTotalArquivosAnual(): Observable<[any]> { return this.httpClient.get<[any]>(this.url + '/arquivo/obterTotalArquivosAnual'); };
  registrarExecucaoRotina(): Observable<[any]> { return this.httpClient.get<[any]>(this.url + '/arquivo/registrarExecucaoRotina'); };
  executarRotinaProducer(): Observable<[any]> { return this.httpClient.get<[any]>(this.urlProducer); };

}
