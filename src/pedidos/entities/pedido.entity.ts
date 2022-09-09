import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PedidoDocument = Pedido & Document

@Schema()
export class Pedido {
    @Prop()
    cliente: number;
    @Prop()
    pedido: number; 
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido)