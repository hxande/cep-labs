# Estratégia Utilizada
Tentei criar uma aplicação simples, de fácil entendimento e manutenção. Comecei com um arquivo central da aplicação (server.ts) onde contém o necessário para expor meus serviços, e um arquivo de rota onde são definidos meus caminhos para acessar o serviço em questão. Separei para ficar fácil de saber quando quero adicionar ou alterar uma nova rota.
Como o serviço principal é de consulta de CEP, criei uma rota para lidar com a busca. Para realizar a lógica da busca e validações criei uma ‘controller’ do CEP onde a lógica por traz do processamento está. Na ‘controller’ do CEP há uma função (show) que cuida unicamente da busca das informações do endereço que se deseja buscar pelo CEP, caso fosse necessários outros tratamentos ao que se diz respeito ao CEP, seriam criadas outras funções ali com suas respectivas responsabilidades. Foi criado uma função auxiliar também que substitui por 0 determinado valor de uma ‘string’, não quis deixar dentro da função de busca a lógica, para ficar fácil o reuso, desacoplar a solução para caso queira alterar no futuro e impactar menos outros arquivos.
Criei um arquivo de ‘model’ do CEP para ‘tirar’ o mesmo e ajudar no entendimento e saber que informações estariam presentes, na aplicação desenvolvida ele não necessário, mas quis ajudar o entendimento e talvez em outro cenário com informações mais complexas, recuperados de uma base de dados eu acredito que seria uma boa escolha.
Organizei meu projeto utilizando alguns conceitos de orientação a objeto e MVC.