import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../entity/curso';
import { CursoService } from '../../service/curso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
cursoModel : Curso = new Curso();
  constructor(private cursoService : CursoService, private router : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

  }
  public create():void{
    this.cursoService.addCurso(this.cursoModel).subscribe(
      response=>{this.router.navigate(['/listar'])
      swal.fire('Nuevo Curso', `Curso ${this.cursoModel.nombre} creado con exito`,"success")      
    console.log(response);  
    }
    )
  }
 
}
