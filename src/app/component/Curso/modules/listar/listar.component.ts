import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../../entity/curso';
import { CursoService } from '../../service/curso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  curso :Curso[] ;

  constructor(private cursoService : CursoService , private router : Router) { }

  ngOnInit(): void {
    this.listar();
  };
  listar():void{
    this.cursoService.getCursos().subscribe(

      (data) =>{
        this.curso= data['CURSOR_C'];

      }
    )
  }
  delCurso(num : number ) : void{
    this.cursoService.deleteCurso(num).subscribe(
      response=>{
        swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:'Me Equivoque',
          confirmButtonText: 'yes of course!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            swal.fire('Eliminado!','El registro ha sido eliminado.','success')
          }
        })
      }
    )  
      
  }
}
