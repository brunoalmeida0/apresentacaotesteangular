import { Component, OnInit } from '@angular/core';
import { RemediosService } from './../services/remedios-service.service';
import { MatTableDataSource } from '@angular/material';
import { Remedio } from '../models/Remedio';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';


@Component({
  selector: 'app-pesquisar-remedios',
  templateUrl: './pesquisar-remedios.component.html',
  styleUrls: ['./pesquisar-remedios.component.css']
})
export class PesquisarRemediosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'fabricante', 'validade', 'quantidadeEstoque', 'tarjaPreta', 'preco', 'acoes'];
  dataSource: MatTableDataSource<Remedio>;
  buscarFormGroup: FormGroup;

  constructor(
    private remediosService: RemediosService,
    private _formBuilder: FormBuilder,
    public router: Router,
    public local: LocalStorageService,
  ) { 
  }

  ngOnInit() {
    this.buscarFormGroup = this._formBuilder.group({
      remedioFormControl: ['']
    });
    this.getRemedios();
  }

  getRemedios() {
    this.remediosService.buscaTodosOsRemedios()
      .subscribe(remedios => this.dataSource = new MatTableDataSource<Remedio>(remedios));
  }

  pesquisarRemedio() {
    let nomeRemedio = this.buscarFormGroup.get('remedioFormControl').value;
    this.dataSource.data = this.dataSource.data.filter(remedio => {
      return remedio.nome.toLowerCase().indexOf(nomeRemedio.toLowerCase()) > -1;
    })
  }

  limparPesquisa() {
    this.getRemedios();
    this.buscarFormGroup.get('remedioFormControl').setValue('');
  }

  removerRemedio(remedio: Remedio) {
    this.remediosService.removerRemedio(remedio)
      .subscribe(data => {
        console.log(data)
        this.getRemedios();
      }, err => console.error(err));
  }

  criarRemedio(){
    this.router.navigate(['salvarRemedios']);
  }

}
