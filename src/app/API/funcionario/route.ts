// EXEMPLOS ONDE NÃO PRECISO DO ID ESPECIFICADO
import { NextResponse} from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function GET(){
  const funcionarios = await prisma.funcionario.findMany();
  return NextResponse.json(funcionarios);
}

// POST: Criar um novo funcionário
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const novoFuncionario = await prisma.funcionario.create({
      data: {
        nome: body.nome,
        funcao: body.funcao,
        setor: body.setor,
      },
    });

    return NextResponse.json(novoFuncionario, { status: 201 });
  } catch (error) {
    console.error("Erro interno no POST:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
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
