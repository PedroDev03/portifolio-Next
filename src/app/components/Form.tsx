"use client";

import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/API/funcionario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/Funcionarios");
        router.refresh();
      } else {
        console.error("Erro ao criar funcionário");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[350px] bg-[#5c161e] mt-11 p-6 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit}>
          <Fieldset.Root size="lg">
            <Stack color="white" mb="4">
              <Fieldset.Legend color="white">Cadastro novo funcionário</Fieldset.Legend>
              <Fieldset.HelperText color="gray.300">
                Preencha as informações para cadastro do novo funcionário.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label color="white">Nome</Field.Label>
                <Input name="nome" bg="white" color="black" required />
              </Field.Root>

              <Field.Root>
                <Field.Label color="white">Função</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field name="funcao" bg="#5c161e" color="white" className="border-white/20">
                    <For each={["Analista", "Desenvolvedor", "Gerente"]}>
                      {(item2) => <option key={item2} value={item2} className="bg-[#5c161e]">{item2}</option>}
                    </For>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator color="white" />
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root>
                <Field.Label color="white">Setor</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field name="setor" bg="#5c161e" color="white" className="border-white/20">
                    <For each={["Financeiro", "TI", "Recursos Humanos"]}>
                      {(item) => <option key={item} value={item} className="bg-[#5c161e]">{item}</option>}
                    </For>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator color="white" />
                </NativeSelect.Root>
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" mt="4" bg="white" color="#5c161e" _hover={{ bg: "gray.200" }} width="full">
              Enviar
            </Button>
          </Fieldset.Root>
        </form>
      </div>
    </div>
  );
}