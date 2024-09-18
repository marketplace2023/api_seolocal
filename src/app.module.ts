import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/entities/client.entity';
import { GbpsModule } from './gbps/gbps.module';
import { Gbp } from './gbps/entities/gbp.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'seolocal',
      entities: [Client, Gbp], // Incluye tus entidades aquí
      synchronize: true,
    }),
    ClientsModule,
    GbpsModule,
  ],
})
export class AppModule {}
