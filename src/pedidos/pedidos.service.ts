import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido, PedidoDocument } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(@InjectModel(Pedido.name) private readonly pedidoModel: Model<PedidoDocument>){
  }

  create(createPedidoDto: CreatePedidoDto) {
    const pedido = new this.pedidoModel(createPedidoDto)
    return pedido.save();
  }

  findAll() {
    return this.pedidoModel.find();
  }

 }
