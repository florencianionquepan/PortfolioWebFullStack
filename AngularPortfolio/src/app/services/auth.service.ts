import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl=environment.apiBaseUrl;
  authURL=`${this.apiServerUrl}/auth/`;

  constructor(private HttpClient: HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.HttpClient.post<any>(this.authURL+'nuevo', nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.HttpClient.post<JwtDto>(this.authURL+'login', loginUsuario);
  }
  
}
