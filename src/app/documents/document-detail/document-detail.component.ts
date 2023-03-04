import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { WinRefService } from 'src/app/win-ref.service';
import {Document} from '../document-model'
import { DocumentService } from '../document.service';
@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent {
 documents!: Document;
 nativeWindow:any;

 constructor( private DocumentService: DocumentService,
  private windowRefService: WinRefService,
  private router: Router,
  private route: ActivatedRoute){
    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit(): void {
    this.nativeWindow = this.windowRefService.getNativeWindow();

    this.route.params.subscribe((params: Params) => {
      this.documents = this.DocumentService.getDocument(params['id']);
    });
  }

  onView(){
    if (this.documents.url){
      this.nativeWindow.open(this.documents.url);
    }
  }

  onDelete() {
    this.DocumentService.deleteDocument(this.documents);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}