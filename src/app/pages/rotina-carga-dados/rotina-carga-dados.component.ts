import { Component, OnInit } from '@angular/core';
import { ArquivoModel } from 'app/models/arquivoLinhaModel';
import { ArquivosService } from 'app/services/arquivos.service';
import { ToastrService } from "ngx-toastr";
import { environment } from 'environments/environment';

@Component({
  selector: 'app-icons',
  templateUrl: './rotina-carga-dados.component.html',
  styleUrls: ['./rotina-carga-dados.component.css'],
  providers: [ArquivosService]
})
export class RotinaCargaComponent implements OnInit {

  constructor(private ArquivosService: ArquivosService, private toastr: ToastrService) { }

  success: boolean = false;
  msgErro: boolean = false;
  urlDownload: string = environment.apiUrl + '/arquivo/downloadArquivo/';
  resultRotina: any;

  ngOnInit() { }

  executarRotina() {

    this.ArquivosService.executarRotinaProducer().subscribe((result) => {

      // registra execucao
      this.registrarExecucaoRotina();

      this.resultRotina = result;
      console.log('result:', result);
      this.showNotification('bottom','right', 1, result);
    },
      (error) => {
        // Adicionar Msg de erro.
        this.msgErro = true;
      });
  }

  registrarExecucaoRotina() {
    this.ArquivosService.registrarExecucaoRotina().subscribe((result) => {

      console.log(result);
    },
      (error) => {
        // Adicionar Msg de erro.
        this.msgErro = true;
      });
  }

  showNotification(from, align, tipo, result) {

    switch (tipo) {
      case 1:
        this.toastr.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Processamento rotina:' +
        '<p>Status: <b>' + result.status + '</b></p>' +
        '<p>Data: <b>' + result.data + '</b></p>' +
        '</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 2:
        this.toastr.success(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 3:
        this.toastr.warning(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 4:
        this.toastr.error(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 5:
        this.toastr.show(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      default:
        break;
    }
  }

}
