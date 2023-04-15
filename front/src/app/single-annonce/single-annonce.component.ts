import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../models/annonce';
import { Commentaire } from '../models/commentaire';
import { AnnonceService } from '../services/annonce.service';
import { CommentaireService } from '../services/commentaire.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent {
  annonces: Annonce= {} as Annonce;
  showCommentInput: boolean = false;
  // commentaires: Commentaire = {} as Commentaire;
  commentaires: Commentaire[] = [];

  commentaire: Commentaire = {
    _id : '',
    annonceId: '',
    utilisateurId: '',
    texte: '',
    pseudo: '',
  };
  currentUser: any;

  constructor(
    private annonceService: AnnonceService,
    private commentaireService: CommentaireService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id') ??'';
    console.log(id);
    this.http.get<Annonce[]>(`http://localhost:3001/post/${id}`)
      .subscribe(annonce => annonce = annonce);
      this.annonceService.getAnnonce(id).subscribe((annonce: Annonce) => {
        this.annonces = annonce;
    });

    this.http.get<Commentaire[]>(`http://localhost:3001/commentaire?annonceId=${id}`)
    .subscribe(commentaires => this.commentaires = commentaires);
  }

  deleteAnnonce(id: string) {
    this.annonceService.deleteAnnonce(id)
      .subscribe(() => {
        // Recharge la page
        location.reload()
      });
  }
  deleteCommentaire(id: string) {
    this.commentaireService.deleteCommentaire(id)
    .subscribe(() => {
      // Recharge la page
      location.reload()
    });
  }

  toggleCommentInput() {
    this.showCommentInput = !this.showCommentInput;
  }

  onSubmit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const idAnnonce = this.route.snapshot.paramMap.get('id');
      if (!idAnnonce) {
        console.error("ID d'annonce manquant");
        return;
      }
      this.commentaire.utilisateurId = this.currentUser.user._id;
      this.commentaire.pseudo = this.currentUser.user.pseudo;
      this.commentaire.annonceId = idAnnonce;
      this.commentaireService.addCommentaire(this.commentaire).subscribe(() => {
        // Rediriger vers la page /annonces
        // this.router.navigateByUrl(`/une_annonce/${idAnnonce}`);
        window.location.href = `/une_annonce/${idAnnonce}`;
      });
      this.commentaire.texte='';
  }



}
