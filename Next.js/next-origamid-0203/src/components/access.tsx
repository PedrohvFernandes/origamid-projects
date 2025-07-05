// Um componente server componente pode ser async
// Todo esse código é executado no servidor, e não no navegador

import fs from 'fs/promises'

export async function Access() {
  // Cria um arquivo novo ou sobrescreve o existente e coloca o texto "Home page accessed" nele. O primeiro argumento é o nome do arquivo e o segundo é o conteúdo que será escrito. E o ultimo argumento é a codificação do arquivo(tipo de arquivo).
  await fs.appendFile(
    'acesso.txt',
    `Home page accessed\n ${Date.now()}\n`,
    'utf-8',
  )

  const data = await fs.readFile('acesso.txt', 'utf-8')

  return (
    <div>
      <h1>Home</h1>
      <div>{data}</div>
    </div>
  )
}
