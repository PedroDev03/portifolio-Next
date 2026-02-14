// EXEMPLOS ONDE NÃO PRECISO DO ID ESPECIFICADO
/*
import { NextResponse } from 'next/server';

// Simulação de um banco de dados na memória
let products = [
  { id: 1, name: 'Teclado Mecânico', price: 250 },
  { id: 2, name: 'Mouse Gamer', price: 150 },
];

// GET: Listar todos os produtos
export async function GET() {
  return NextResponse.json(products);
}

// POST: Criar um novo produto
export async function POST(request: Request) {
  const body = await request.json();
  
  const newProduct = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
  };

  products.push(newProduct);
  
  return NextResponse.json(newProduct, { status: 201 });
}
*/