import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Remedio } from '../models/Remedio';
import { BancoDeDadosRemedio } from './bancoDeDadosRemedio';

@Injectable({
  providedIn: 'root'
})
export class RemediosService {

  constructor() { }

  error: string = "Erro na solicitacao";

  buscaTodosOsRemedios(): Observable<Remedio[]> {
    return of(BancoDeDadosRemedio.REMEDIOS);
  }

  buscaRemedioPorId(id: number): Observable<Remedio> {
    let remedioOpt: Remedio[] = BancoDeDadosRemedio.REMEDIOS.filter(remedio => remedio.id === id);
    if(remedioOpt[0] !== null){
      return of(remedioOpt[0]);
    } else {
      throw Observable.throw(this.error);
    }    
  }

  salvarRemedio(remedio: Remedio): Observable<Remedio> {
    BancoDeDadosRemedio.REMEDIOS.push(remedio);
    return of(remedio);
  }

  editarRemedio(remedio: Remedio): Observable<Remedio> {
    for (let index = 0; index < BancoDeDadosRemedio.REMEDIOS.length; index++) {
      if(BancoDeDadosRemedio.REMEDIOS[index].id === remedio.id){
        BancoDeDadosRemedio.REMEDIOS[index] = remedio;
        return of(remedio);
      }      
    }
    throw Observable.throw(this.error);
  }

  removerRemedio(remedio: Remedio): Observable<String> {
    if(BancoDeDadosRemedio.REMEDIOS.indexOf(remedio) !== -1){
      let index = BancoDeDadosRemedio.REMEDIOS.indexOf(remedio);
      BancoDeDadosRemedio.REMEDIOS.splice(index, 1);
      return of("Remédio removido com sucesso");
    } else {
      return of("O Remédio selecionado não existe");
    }
    
  }  

}
