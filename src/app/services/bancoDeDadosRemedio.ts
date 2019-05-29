import { Remedio } from './../models/Remedio';

export class BancoDeDadosRemedio {
    static REMEDIOS: Remedio[] = [
        { id: 1, nome: 'Tylenol', fabricante: 'aché', validade: new Date(2019, 10, 2), quantidadeEstoque: 20, tarjaPreta: false, preco: 10.50 },
        { id: 2, nome: 'Aspirina', fabricante: 'bayer', validade: new Date(2019, 1, 20), quantidadeEstoque: 30, tarjaPreta: false, preco: 18.75 },
        { id: 3, nome: 'Naldecon', fabricante: 'bayer', validade: new Date(2019, 2, 23), quantidadeEstoque: 50, tarjaPreta: false, preco: 14.00 },
        { id: 4, nome: 'Novacort', fabricante: 'aché', validade: new Date(2019, 4, 12), quantidadeEstoque: 10, tarjaPreta: false, preco: 8.50 },
        { id: 5, nome: 'Eno', fabricante: 'bayer', validade: new Date(2019, 11, 20), quantidadeEstoque: 5, tarjaPreta: false, preco: 5.50 },
        { id: 6, nome: 'Hipoglós', fabricante: 'aché', validade: new Date(2019, 11, 12), quantidadeEstoque: 100, tarjaPreta: false, preco: 10.00 },
        { id: 7, nome: 'Bromelin', fabricante: 'bayer', validade: new Date(2019, 8, 12), quantidadeEstoque: 36, tarjaPreta: false, preco: 30.00 },
        { id: 8, nome: 'Estomazil', fabricante: 'aché', validade: new Date(2019, 9, 10), quantidadeEstoque: 41, tarjaPreta: false, preco: 7.50 },
        { id: 9, nome: 'Rivotril', fabricante: 'bayer', validade: new Date(2019, 2, 6), quantidadeEstoque: 60, tarjaPreta: true, preco: 150.00 },
        { id: 10, nome: 'Ritalina', fabricante: 'aché', validade: new Date(2019, 1, 5), quantidadeEstoque: 50, tarjaPreta: true, preco: 99.99 }
    ];
}



