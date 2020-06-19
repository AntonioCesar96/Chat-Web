import { ListaAmigos } from '../../_common/models/lista-amigos.model';
import { Resultado } from 'src/app/_common/models/resultado.model';
import { UltimaConversa } from '../../_common/models/ultima-conversa.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ConversaSubjectsService {
  private abrirConversaSelecionadaSubject = new Subject<UltimaConversa>();
  private abrirConversaSelecionadaMensagemSubject = new Subject<UltimaConversa>();
  private abrirContatoSelecionadoSubject = new Subject<ListaAmigos>();
  private abrirContatoSelecionadoMensagemSubject = new Subject<UltimaConversa>();

  private abrirPrimeiraConversaSubject = new Subject<UltimaConversa>();
  private abrirPrimeiraConversaMensagemSubject = new Subject<UltimaConversa>();

  private pesquisaConversasSubject = new Subject<any>();
  private pesquisaContatosSubject = new Subject<any>();
  private esconderResultadosSubject = new Subject<boolean>();
  private atualizarResultadosSubject = new Subject<boolean>();
  private atualizarContatosParaFechadosSubject = new Subject<any>();

  constructor() { }

  receberConversaSelecionada(): Observable<UltimaConversa> {
    return this.abrirConversaSelecionadaSubject.asObservable();
  }

  abrirConversaSelecionada(conversa: UltimaConversa) {
    this.abrirConversaSelecionadaSubject.next(conversa);
  }

  receberConversaSelecionadaMensagem(): Observable<UltimaConversa> {
    return this.abrirConversaSelecionadaMensagemSubject.asObservable();
  }

  abrirConversaSelecionadaMensagem(conversa: UltimaConversa) {
    this.abrirConversaSelecionadaMensagemSubject.next(conversa);
  }

  receberContatoSelecionado(): Observable<ListaAmigos> {
    return this.abrirContatoSelecionadoSubject.asObservable();
  }

  abrirContatoSelecionado(contatoAmigo: ListaAmigos) {
    this.abrirContatoSelecionadoSubject.next(contatoAmigo);
  }

  receberContatoSelecionadoMensagem(): Observable<UltimaConversa> {
    return this.abrirContatoSelecionadoMensagemSubject.asObservable();
  }

  abrirContatoSelecionadoMensagem(conversa: UltimaConversa) {
    this.abrirContatoSelecionadoMensagemSubject.next(conversa);
  }

  receberPrimeiraConversa(): Observable<UltimaConversa> {
    return this.abrirPrimeiraConversaSubject.asObservable();
  }

  abrirPrimeiraConversa(conversa: UltimaConversa) {
    this.abrirPrimeiraConversaSubject.next(conversa);
  }

  receberPrimeiraConversaMensagem(): Observable<UltimaConversa> {
    return this.abrirPrimeiraConversaMensagemSubject.asObservable();
  }

  abrirPrimeiraConversaMensagem(conversa: UltimaConversa) {
    this.abrirPrimeiraConversaMensagemSubject.next(conversa);
  }




  receberPesquisaConversas(): Observable<any> {
    return this.pesquisaConversasSubject.asObservable();
  }

  pesquisarConversas(conversa: any) {
    this.pesquisaConversasSubject.next(conversa);
  }

  receberPesquisaContatos(): Observable<any> {
    return this.pesquisaContatosSubject.asObservable();
  }

  pesquisarContatos(conversa: any) {
    this.pesquisaContatosSubject.next(conversa);
  }

  receberEsconderResultados(): Observable<boolean> {
    return this.esconderResultadosSubject.asObservable();
  }

  esconderResultados(res) {
    this.esconderResultadosSubject.next(res);
  }

  receberAtualizarResultados(): Observable<any> {
    return this.atualizarResultadosSubject.asObservable();
  }

  atualizarResultados() {
    this.atualizarResultadosSubject.next();
  }

  receberAtualizarContatosParaFechados(): Observable<any> {
    return this.atualizarContatosParaFechadosSubject.asObservable();
  }

  atualizarContatosParaFechados() {
    this.atualizarContatosParaFechadosSubject.next();
  }
}
