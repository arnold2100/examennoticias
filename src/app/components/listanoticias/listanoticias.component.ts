import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-listanoticias',
  templateUrl: './listanoticias.component.html',
  styleUrls: ['./listanoticias.component.css']
})
export class ListanoticiasComponent implements OnInit {

  objetonoticia: any[] = [];

  constructor(private noticiaServicio: NoticiaService) { }

  ngOnInit(): void {
    this.obtenernoticia();
  }
  obtenernoticia(){
    this.noticiaServicio.scapturarnoticia().subscribe(data => {
      this.objetonoticia =[];
      data.forEach((element: any) => {
        this.objetonoticia.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.objetonoticia);
    });
  }
  eliminarnoticia(id: string){
    this.noticiaServicio.seliminarnoticia(id).then(()=>
    {
      console.log('eliminado');
    }).catch(error => {
      console.log(error);
    });
  }

}
