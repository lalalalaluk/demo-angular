import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../../../models/author.model';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-http-client-add-update',
  templateUrl: './http-client-add-update.component.html',
  styleUrls: ['./http-client-add-update.component.scss']
})
export class HttpClientAddUpdateComponent {

  userId!: number;
  apiUrl = 'http://localhost:8000/api/author-modelviewset';
  author!: Author;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id ? +id : -1;

    if (this.userId > 0) {
      this.fields.push({ "key": "id" });
      this.http.get<Author>(this.apiUrl + '/' + this.userId).subscribe(
        {
          next: (data) => {
            this.author = data;
            this.form.patchValue(this.author);
            console.log(data);
          },
          error: (error) => {
            console.error('Error fetching authors:', error);
          }
        }
      );
    }
  }

  form = new FormGroup({});
  model: Author = {
    first_name: '',
    last_name: '',
    date_of_birth: "",
    date_of_death: ""
  };

  fields: FormlyFieldConfig[] = [
    {
      "key": "first_name",
      "type": "input",
      "templateOptions": {
        "label": "First Name",
        "required": true
      }
    },
    {
      "key": "last_name",
      "type": "input",
      "templateOptions": {
        "label": "Last Name",
        "required": true
      }
    },
    {
      "key": "date_of_birth",
      "type": "input",
      "templateOptions": {
        "label": "Date of Birth",
        "type": "date"
      }
    },
    {
      "key": "date_of_death",
      "type": "input",
      "templateOptions": {
        "label": "Date of Death",
        "type": "date"
      }
    }
  ];

  onSubmit(model: Author) {
    console.log(model);
    if (this.userId > 0) {
      this.http.patch<Author[]>(this.apiUrl + '/' + this.userId, model).subscribe(
        {
          next: (data) => {
            console.log(data);
            alert('更新成功');
          },
          error: (error) => {
            console.error('Error fetching authors:', error);
            alert('更新失敗');
          }
        }
      );
    } else {
      this.http.post<Author[]>(this.apiUrl, model).subscribe(
        {
          next: (data) => {
            console.log(data);
            alert('新增成功');
          },
          error: (error) => {
            console.error('Error fetching authors:', error);
            alert('新增失敗');
          }
        }
      );
    }
  }

}
