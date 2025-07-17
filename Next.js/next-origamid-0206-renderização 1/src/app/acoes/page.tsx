export default async function AcoesPage() {
  // Podemos passar um parametro para o fetch para que ele não use o cache, que é o revalidate. O Revalidate é o tempo em segundos que o cache deve ser mantido. Por padrão ele coloca um valor grandão em segundos. Então quando estivermos em build, ele vai usar o cache por padrão, mas quando estivermos em desenvolvimento, ele não vai usar o cache. Com isso, podemos usar o revalidate para definir um tempo de cache menor. Nesse caso 5 segundos.
  // O build vai continuar usando o cache, vai continuar sendo rapido, mas vai acontecer uma atualização a cada 5 segundos, ou seja, se eu atualizar o conteúdo do site, ele vai atualizar a cada 5 segundos. Mas como que continua rapido? Porque de baixo dos panos ele faz a atualização do HTML, mas não mostrou ela atualizada quando entrei na pagina, quando fizermos outro refresh na pagina ele vai me mostrar o HTML atualizado e por de baixo do panos vai atualizar o html, e quando fizermos um refresh novo ele ira mostrar esse html atualizado. Então meio que são dois html(não que tenha isso, porque não tem), mas basicamente fica uma atualização no servidor, enquanto a que aparece na tela do usuario é uma versão anterior, mas que ao atualizar a pagina é mostrado o html atualizado.
  // E a pagina não fica lenta, porque o Next.js faz a atualização em segundo plano e serve o conteúdo em cache instantaneamente. Porque ele faz o fetch no servidor, sem impactar a performance do usuário e no carregamento da pagina. E ele sempre regenera o HTML em segundo plano, então quando o usuário fizer um novo request, ele já vai receber o HTML atualizado, pois ja foi feito um fetch la no servidor.
  // Problema: o problema é que se na api estiver uma info diferente a dias e o usuario fez um refresh na pagina antes dessa info nova, ele vai ver a informação antiga, porque o fetch é sempre feito no servidor e so em um outro refresh ele vai ver a informação que antes foi gerada no servidor. Será novo para o usuario, mas que no fim é antiga, e somente aí no servidor tera essa nova info, mas para o usuario so no proximo refresh para ver esse html novo
  // É interessante para alteração de foto de perfil, por exemplo, que não precisa ser em tempo real. O usuário não precisa ficar atualizando a pagina para ver a foto nova.
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      revalidate: 5, // Revalida a cada 5 segundos
      tags: ['acao-lua'], // Tags para cache, se necessário
    },
  })
  const acao = (await response.json()) as {
    simbolo: string
    atualizada: string
  }

  return (
    <main>
      <h1>{acao.simbolo}</h1>
      <h2>{acao.atualizada}</h2>
    </main>
  )
}
