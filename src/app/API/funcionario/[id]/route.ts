//EXEMPLOS COM ID ESPECIFICADO 
/*
import { NextResponse } from 'next/server';

// GET: Buscar um único produto por ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  // Aqui você buscaria no seu banco de dados (Prisma, MongoDB, etc)
  return NextResponse.json({ message: `Buscando produto ${id}` });
}

// PUT: Atualizar um produto
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const body = await request.json();

  // Lógica para atualizar o item no banco...
  return NextResponse.json({ 
    message: `Produto ${id} atualizado com sucesso`,
    data: body 
  });
}

// DELETE: Remover um produto
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // Lógica para deletar o item no banco...
  return NextResponse.json({ message: `Produto ${id} deletado` }, { status: 200 });
}

/*