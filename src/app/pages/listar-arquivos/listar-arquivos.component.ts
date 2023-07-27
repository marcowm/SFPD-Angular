import { Component, OnInit } from '@angular/core';
import { ArquivoModel } from 'app/models/arquivoLinhaModel';
import { ArquivosService } from 'app/services/arquivos.service';
import { environment } from 'environments/environment';
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { SearchFilterPipe } from 'app/filter/SearchFilterPipe.pipe';


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'listar-arquivos.component.html',
    providers: [ArquivosService, SearchFilterPipe]
})

export class ListarArquivosComponent implements OnInit{


  constructor(private ArquivosService: ArquivosService, SearchFilterPipe : SearchFilterPipe) { }

  public tableData1: TableData;
  public tableData2: TableData;

  success: boolean = false;
  msgErro: boolean = false;
  urlDownload: string = environment.apiUrl + '/arquivo/downloadArquivo/';
  listaArquivos: any[] = [];
  listaArquivosFilter : any[] = [];

  termo!: string;

    ngOnInit() {
        this.listarArquivos();
    }

    listarArquivos() {
      this.ArquivosService.listarTodos().subscribe((result) => {

        this.listaArquivos = result;
        this.listaArquivosFilter = result;
      },
        (error) => {
          // Adicionar Msg de erro.
          this.msgErro = true;
        });
    }

    download(id: any) {
      window.open(this.urlDownload + id);
    }

    filtrar(value: string) {
      if(!value) {
         this.listaArquivosFilter = this.listaArquivos;
      } else {
        this.listaArquivosFilter = this.listaArquivos.filter(x =>
           x.arquivoPath.trim().toLowerCase().includes(value.trim().toLowerCase())
        );
      }
   }

    onClose(): void {
      this.success = false;
    }
    onCloseError(): void {
      this.msgErro = false;
    }
}
