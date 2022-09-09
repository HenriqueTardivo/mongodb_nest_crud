import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidosController } from './pedidos/pedidos.controller';
import { PedidosModule } from './pedidos/pedidos.module';
import { PedidosService } from './pedidos/pedidos.service';

@Module({
  imports: [PedidosModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4')],
  controllers: [],
  providers: [],
})
export class AppModule {}
