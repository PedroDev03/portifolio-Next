import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
} from "@chakra-ui/react"

export default function Form() {
  return (

    <div className="flex justify-center items-center ">
      
      {/* 2. Largura fixa em 350px e fundo vermelho #5c161e */}
      <div className="w-[350px] bg-[#5c161e] p-6 rounded-lg shadow-xl">
        <Fieldset.Root size="lg" invalid={false}>
          <Stack color="white" mb="4">
            <Fieldset.Legend color="white">Cadastro novo funcionário</Fieldset.Legend>
            <Fieldset.HelperText color="gray.300">
              Preecha as informações para cadastro do novo funcionário.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label color="white">Nome</Field.Label>
              {/* Input com fundo levemente escurecido para contraste */}
              <Input name="name" bg="white" color="black" />
            </Field.Root>

            <Field.Root>
              <Field.Label color="white">Função</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field 
                  name="funcao" 
                  bg="#5c161e" // Fundo do seletor
                  color="white" 
                  className="border-white/20"
                >
                  <For each={["Analista", "Desenvolvedor", "Gerente"]}>
                    {(item2) => (
                      <option key={item2} value={item2} className="bg-[#5c161e]">
                        {item2}
                      </option>
                    )}
                  </For>
                </NativeSelect.Field>
                <NativeSelect.Indicator color="white" />
              </NativeSelect.Root>
            </Field.Root>

            <Field.Root>
              <Field.Label color="white">Setor</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field 
                  name="country" 
                  bg="#5c161e" // Fundo do seletor
                  color="white"
                  className="border-white/20"
                >
                  <For each={["Financeiro", "TI", "Recursos Humanos"]}>
                    {(item) => (
                      <option key={item} value={item} className="bg-[#5c161e]">
                        {item}
                      </option>
                    )}
                  </For>
                </NativeSelect.Field>
                <NativeSelect.Indicator color="white" />
              </NativeSelect.Root>
            </Field.Root>
          </Fieldset.Content>

          <Button 
            type="submit" 
            mt="4" 
            bg="white" 
            color="#5c161e" 
            _hover={{ bg: "gray.200" }}
            width="full"
          >
            Enviar
          </Button>
        </Fieldset.Root>
      </div>
    </div>
  )
}