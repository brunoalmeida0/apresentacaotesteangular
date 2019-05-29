import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
import { Remedio } from '../models/Remedio';
import { RemediosService } from '../services/remedios-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-remedios',
  templateUrl: './salvar-remedios.component.html',
  styleUrls: ['./salvar-remedios.component.css']
})
export class SalvarRemediosComponent implements OnInit {

  salvarFormGroup: FormGroup;
  tarjaPreta: boolean;
  

  constructor(
    private _formBuilder: FormBuilder,
    private remediosService: RemediosService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.salvarFormGroup = this._formBuilder.group({
      nome: ['', RequiredValidator],
      fabricante: ['', RequiredValidator],
      validade: ['', RequiredValidator],
      quantidadeEstoque: ['', RequiredValidator],
      tarjaPreta: [''],
      preco: ['', RequiredValidator]
    });
  }

  salvarRemedio(){
    let remedio = new Remedio();
    if(this.salvarFormGroup.get('validade').value < new Date()){
      console.log("Não é possível salvar uma remédio já vencido.")
      return
    }
    if(this.salvarFormGroup.get('quantidadeEstoque').value == 0){
      console.log("Não é possível salvar uma remédio sem estoque.")
      return
    }
    remedio.nome = this.salvarFormGroup.get('nome').value;
    remedio.fabricante = this.salvarFormGroup.get('fabricante').value;
    remedio.validade = this.salvarFormGroup.get('validade').value;
    remedio.quantidadeEstoque = this.salvarFormGroup.get('quantidadeEstoque').value;
    remedio.preco = this.salvarFormGroup.get('preco').value;
    remedio.tarjaPreta = this.salvarFormGroup.get('tarjaPreta').value;;
    if(remedio.tarjaPreta){
      remedio.preco = parseFloat(remedio.preco.toString()) + parseFloat('100.0');
    }    
    console.log(remedio)
    this.remediosService.salvarRemedio(remedio);
  }

  voltar(){
    this.router.navigate(['pesquisarRemedios']);
  }

}
