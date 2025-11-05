/* 
Considere o desenvolvimento de um sistema destinado à criação de documentos variados, como currículos e relatórios. O objetivo é utilizar o padrão de projeto Factory Method, permitindo a criação de páginas específicas para cada documento, sem que o código dependa diretamente de classes concretas das páginas. Esse design garantirá que novos tipos de documentos e suas respectivas páginas possam ser integrados ao sistema sem a necessidade de modificar as classes existentes.
O sistema deve permitir:
1. Definir uma estrutura básica para um documento que inclua uma lista de páginas.
2. Criar subclasses de documentos que adicionem páginas específicas à lista.
3. Implementar diferentes tipos de páginas com detalhes específicos para cada tipo
de documento.
4. Demonstrar a funcionalidade do sistema criando instâncias de diferentes tipos de
documentos e exibindo as páginas que cada documento contém.
 
Por exemplo, ao instanciar um currículo, o sistema deve criar automaticamente páginas de Habilidades, Educação e Experiência. Já para um relatório, o sistema deve incluir páginas como Introdução, Resultados, Conclusão, Resumo e Bibliografia. Ao executar o programa, ele deve exibir no console as páginas associadas a cada documento, conforme o exemplo a seguir:
 
Curriculo -------
Página de Habilidades
Página de Educação
Página de Experiência
Relatorio -------
Página de Introdução
Página de Resultados
Página de Conclusão
Página de Resumo
Página de Bibliografia
 
Desenvolva a solução utilizando o padrão Factory Method, assegurando que cada documento concreto gere suas páginas específicas de maneira independente. Em seguida, implemente uma classe Principal para demonstrar como o sistema cria diferentes documentos e exibe suas respectivas páginas. Além disso, forneça o diagrama de sequência para ilustrar o fluxo de criação das páginas através do Factory Method, destacando a interação entre as
classes.
*/