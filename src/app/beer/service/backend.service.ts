import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  baseUrl: string;
  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = environment.API_URL;
  }

  async get(url: string): Promise<any> {
    return this.httpClient
      .get(this.baseUrl + url, { responseType: 'json' })
      .toPromise();
  }
}
