import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../../models/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent {
  authors: Author[] = [];
  apiUrl = 'http://localhost:8000/api/author-modelviewset';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchAuthors();
  }

  fetchAuthors() {
    this.http.get<Author[]>(this.apiUrl).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.authors = data;
        },
        error: (error) => {
          console.error('Error fetching authors:', error);
        }
      }
    );
  }

  add() {
    this.router.navigate(['/http-client-add-update']);
  }

  update(id: number) {
    this.router.navigate(['/http-client-add-update', id]);
  }

  delete(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      {
        next: (data) => {
          console.log(data);
          alert("刪除成功");
          this.fetchAuthors();
        },
        error: (error) => {
          console.error('Error fetching authors:', error);
          alert("刪除失敗");
        }
      }
    );
  }
}
