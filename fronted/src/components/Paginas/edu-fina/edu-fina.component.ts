import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Course} from './edu-fina.model';
import { environment } from '../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edu-fina',
  imports: [NgFor, MatCardModule, MatListModule, MatIconModule, NgIf, MatSidenavModule, RouterLink
  ],
  templateUrl: './edu-fina.component.html',
  styleUrl: './edu-fina.component.css'
})
export class EduFinaComponent implements OnInit {

  courses: Course[] = [];
  baseUrl = environment.apiUrl;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ success: boolean; data: Course[] }>(`${this.baseUrl}/eduFin/courses`)
      .subscribe(
        (response) => {
          this.courses = response.data || [];
        },
        (error) => {
          console.error('Error fetching contenido:', error);
          this.courses = [];
        }
      );
  }

  isVideo(url: any): boolean {
    url = url.toString();
    console.log(url.includes('Video tutorial'));
    return url.includes('Video tutorial');
  }


  convertString(url: any): SafeResourceUrl {
    url = url.toString();
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      url = `https://www.youtube.com/embed/${videoId}`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
