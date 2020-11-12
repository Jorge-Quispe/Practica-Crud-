import { Injectable } from '@angular/core';
import {Observable, Subscription , of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpRequest , HttpEvent } from '@angular/common/http';
import { Curso } from '../entity/curso';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private urlcurso: string = 'http://localhost:8085/curso';
  constructor(private http :HttpClient){}
  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.urlcurso + '/lista');
  } 
  getCurso(id : number ) : Observable<Object>{
    return this.http.get(`${this.urlcurso}/${id}`);
  }
  addCurso(curso : Curso ) : Observable<number>{
    return this.http.post<number>(this.urlcurso+"/add" , curso , {headers : this.httpHeaders});
  }
  deleteCurso(id : number) : Observable<number>{
    return this.http.delete<number>(this.urlcurso+"/delete/"+id,{headers:this.httpHeaders});
  }
  updateCurso(curso : Curso):Observable<number>{
    return this.http.put<number>(`${this.urlcurso}/update/${curso.id_curso}`, curso,{headers:this.httpHeaders});
  }
}
