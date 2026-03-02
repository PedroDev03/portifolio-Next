// EXEMPLOS ONDE NÃO PRECISO DO ID ESPECIFICADO
import { NextResponse} from 'next/server';
import prisma from '@/lib/prisma';
import ListaFuncionarios from '@/app/Funcionarios/page';
import { revalidatePath } from 'next/cache';
import { PrismaClientRustPanicError } from '@prisma/client/runtime/client';

export async function GET(){
  const funcionarios = await prisma.funcionario.findMany();
  return NextResponse.json(funcionarios);
}


// POST: Criar um novo funcionário

export async function criarFuncionario(formData: FormData) {
  const nome = formData.get('nome') as string
  const email = formData.get('email') as string
  const funcao = formData.get('funcao') as string


  await prisma.funcionario.create({
    data: { nome, email, funcao }
  })

  revalidatePath('/funcionarios') // Atualiza a lista automaticamente
}

//UPDATE
export async function UPDATE(id: number, nome: string) {
  await prisma.funcionario.update({
    where: { id },
    data: { nome }
  })
  revalidatePath('/funcionarios')
}
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

 POST: Criar um novo produto
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
