import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Admin } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Admin)
    private adminRepo:Repository<Admin>,
    private readonly jwtService: JwtService,
    ){}
  async login(data: CreateAuthDto) {
    const user = await this.adminRepo.findOne({ login: data.login });
    if (user) {
      if(data.password===user.password){
        return { token: this.jwtService.sign({ id: user.id }) };
      }else{
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: 'incorrect password',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async verifyUser(token) {
    const verified = await this.jwtService.sign(token);
    return verified;
  }

}
