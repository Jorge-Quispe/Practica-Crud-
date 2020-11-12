import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Curso } from '../../Curso/entity/curso';
import { CursoService } from '../../Curso/service/curso.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
cursos : Curso[];
  constructor() { }
  
  ngOnInit(): void {
  }
  
  prueba() :void{
    swal.fire('Any fool can use a computer')
      }
}
