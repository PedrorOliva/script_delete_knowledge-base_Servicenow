var kbase = new GlideRecord('kb_knowledge_base');  // Inicializa um objeto GlideRecord para interagir com a tabela de base de conhecimento
kbase.addQuery('sys_id', 'coloque o sys_id da base aqui');   // Adiciona um critério de busca para encontrar a base de conhecimento pelo seu sys_id.
kbase.query();   // Executa a busca na tabela com o critério especificado.
// Itera sobre os resultados da busca. Para cada base de conhecimento encontrada:
while (kbase.next()) {  
    // Deleta a base de conhecimento atual.
    kbase.deleteRecord();  
}
