import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-crearnoticias',
  templateUrl: './crearnoticias.component.html',
  styleUrls: ['./crearnoticias.component.css']
})
export class CrearnoticiasComponent implements OnInit {
  noticiacrear: FormGroup;
  presentado =false;
  id:string | null;
  titulo = 'AGREGAR NOTICIA'

  constructor(private fb: FormBuilder,
              private noticiaServicio: NoticiaService,
              private router: Router,
              private aRoute: ActivatedRoute) 
  {
    this.noticiacrear = this.fb.group(
      {
        autor: ['', Validators.required],
        titulo: ['', Validators.required],
        noticia: ['', Validators.required],
        categoria: ['', Validators.required],
      })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  agregareditarnoticia()
  {
    this.presentado=true;
    if(this.noticiacrear.invalid)
    {
      return;
    }
    if(this.id === null){
      this.agregarnoticia();
    }else{
      this.editarnoti(this.id);
    }
  }

  agregarnoticia()
  {
    const noticia: any ={
      autor:this.noticiacrear.value.autor,
      titulo:this.noticiacrear.value.titulo,
      noticia:this.noticiacrear.value.noticia,
      categoria:this.noticiacrear.value.categoria,
      fecha:this.noticiacrear.value.fecha,

      fechacreacion: new Date(),
      fechaactualizacion: new Date()
    }
    this.noticiaServicio.sagregarnoticia(noticia).then(() =>{
      console.log('registrado');
      this.router.navigate(['/noticias'])
    }).catch(error => {
      console.log(error);
    })
  }

  editarnoti(id: string)
  {
    const noticia: any ={
      autor:this.noticiacrear.value.autor,
      titulo:this.noticiacrear.value.titulo,
      noticia:this.noticiacrear.value.noticia,
      categoria:this.noticiacrear.value.categoria,
      fecha:this.noticiacrear.value.fecha,

      fechaactualizacion: new Date()
    }
    this.noticiaServicio.sactualizarnoticia(id, noticia).then(()=> {
      this.router.navigate(['/noticias']);
    })

  }

  editarrestaurant(){
    this.titulo='EDITAR NOTICIA';
    if(this.id !== null){
      this.noticiaServicio.seditarnoticia(this.id).subscribe(data =>{
        this.noticiacrear.setValue({
          autor: data.payload.data()['nombre'],
          titulo: data.payload.data()['titulo'],
          noticia: data.payload.data()['noticia'],
          categoria: data.payload.data()['categoria'],
          fecha: data.payload.data()['fecha']
        })
      })
    }
  }

}
