import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ArquivosService } from 'app/services/arquivos.service';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  constructor(private ArquivosService: ArquivosService) { }

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  public espacoDisco: any;
  public totalArquivos: any;
  public totalDownloads : any;
  public totalRotinasDisparadas : any;
  public totalArquivosAnual : any;
  public success: boolean = false;
  public msgErro: boolean = false;

    ngOnInit() {

      this.obterTotalArquivosAnual();
      this.obterEspacoDisco();
      this.obterTotalArquivos();
      this.obterTotalDownloads();
      this.obterTotalRotinasDisparadas();

      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      setTimeout(() => {

      this.chartHours = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
          datasets: [{
              borderColor: "#6bd098",
              backgroundColor: "#6bd098",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: this.totalArquivosAnual[0]
            },
            {
              borderColor: "#f17e5d",
              backgroundColor: "#f17e5d",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: this.totalArquivosAnual[1]
            },
            {
              borderColor: "#fcc468",
              backgroundColor: "#fcc468",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: this.totalArquivosAnual[2]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });

      }, 1000);

    }

    obterEspacoDisco() {
      this.ArquivosService.obterEspacoDisco().subscribe((result) => {

        this.espacoDisco = result;
        console.log('freeSpace:', result);
      },
        (error) => {
          // Adicionar Msg de erro.
          this.msgErro = true;
        });
    }

    obterTotalArquivos() {
      this.ArquivosService.obterTotalArquivos().subscribe((result) => {

        this.totalArquivos = result;
      },
        (error) => {
          // Adicionar Msg de erro.
          this.msgErro = true;
        });
    }

    obterTotalDownloads() {
      this.ArquivosService.obterTotalDownloads().subscribe((result) => {

        this.totalDownloads = result;
      },
        (error) => {
          // Adicionar Msg de erro.
          this.msgErro = true;
        });
    }

    obterTotalRotinasDisparadas() {
      this.ArquivosService.obterTotalRotinasDisparadas().subscribe((result) => {

        this.totalRotinasDisparadas = result;
      },
        (error) => {
          // Adicionar Msg de erro.
          this.msgErro = true;
        });
    }

    obterTotalArquivosAnual() {
      this.ArquivosService.obterTotalArquivosAnual().subscribe((result) => {

        this.totalArquivosAnual = result;
        console.log(result);
      },
        (error) => {
          // Adicionar Msg de erro.
          this.msgErro = true;
        });
    }
}
